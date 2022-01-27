import React from "react";
import Cart from "./Cart";
import "./index.css";
import Navbar from "./Navbar";
import firebase from "firebase";
import "firebase/firestore";

class App extends React.Component {
  constructor(){
    super(); //constructor of parent class
    this.state={
        products:[],
        loading:true
    }
    // this.increaseQuantity=this.increaseQuantity.bind(this); //to bind so that prop is not lost
    this.db = firebase.firestore();
  }
  
  componentDidMount(){
   
    // this.db.collection('products').get().then((snapshot)=>{
    //   // console.log(snapshot);
    //   snapshot.docs.map((doc)=>{
    //     console.log(doc.data());
    //   })

    //   const products=snapshot.docs.map((doc)=>{
    //     const data=doc.data();
    //     data['id']=doc.id;
    //     return data;
    //   })

    //   this.setState({
    //     products,
    //     loading:false
    //   })
    // })
    this.db
    .collection('products')
    // .where('price','>=',9)
    // .where('title','==','Mouse')
    // .orderBy('price','desc')
    .onSnapshot((snapshot)=>{
        // console.log(snapshot);
        // snapshot.docs.map((doc)=>{
        //   console.log(doc.data());
        // })
  
        const products=snapshot.docs.map((doc)=>{
          const data=doc.data();
          data['id']=doc.id;
          return data;
        })
  
        this.setState({
          products,
          loading:false
        })
      })
  }

  handleIncreaseQuantity=(product)=>{
    console.log('Inc quantity',product);
    const {products} = this.state;
    const index=products.indexOf(product);
    // products[index].qty+=1;
    // this.setState({
    //     products:products
    // });
       const docRef= this.db.collection('products').doc(products[index].id);
       docRef
        .update({
          qty:products[index].qty+1
        })
        .then(()=>{
          console.log('documented updated successfully')
        })
        .catch((error)=>{
          console.log('Error: ',error);
        })
  }
  handleDecreaseQuantity=(product)=>{
    console.log('Dec quantity',product);
    const {products} = this.state;
    const index=products.indexOf(product);
    if(products[index].qty>0)
    {
      const docRef= this.db.collection('products').doc(products[index].id);
       docRef
        .update({
          qty:products[index].qty-1
        })
        .then(()=>{
          console.log('documented updated successfully')
        })
        .catch((error)=>{
          console.log('Error: ',error);
        })  
    }
  }
  handleDeleteProduct=(id)=>{
    const {products}=this.state;

    const docRef= this.db.collection('products').doc(id);
    docRef
      .delete()
      .then(()=>{
        console.log('documented deleted successfully')
      })
      .catch((error)=>{
        console.log('Error: ',error);
      })
    // const items=products.filter((item)=>item.id!==id) //[{}] array with all ids except 1;
    // this.setState({
    //     products:items
    // })
  }
  getCartCount=()=>{
    const {products}=this.state;
    let count=0;
    products.forEach((product)=>{
      count+=product.qty;
    })
    return count;
  }
  getCartTotal=()=>{
    const {products}=this.state;
    let cartTotal=0;
    products.forEach((product)=>{
      cartTotal+=(product.price)*product.qty;
    })
    return cartTotal;
  }
  addProduct=()=>{
    this.db
      .collection('products')
      .add({
        img:'',
        price:90,
        qty:3,
        title:'washing machine'
      })
      .then((docRef)=>{
        console.log('product has been added',docRef)
      })
      .catch((error)=>{
        console.log('Error: ',error);
      })
  }
  render()
  {
    const {products , loading}=this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()}/>
        {/* <button onClick={this.addProduct} style={{padding:20, fontSize:20}}>Add a product</button> */}
        <Cart
        products={products}
        onIncreaseQuantity={this.handleIncreaseQuantity}
        onDecreaseQuantity={this.handleDecreaseQuantity}
        onDeleteQuantity={this.handleDeleteProduct}
        />
        <div style={{fontSize:20,padding:10}}>Total:{this.getCartTotal()}</div>
        {loading && <h1>Loading Products...</h1>}
      </div>
    );
  }
}

export default App;
