import React from 'react';
import CartItem from './CartItem';

const Cart =(props)=>{
    
        // const arr=[1,2,3,4,5,2]
        //parent can pass data to child as props
    const {products}=props;
    return(
        <div className="cart">
            {/* {arr.map((item)=>{
                return item+5;
            })} */}
            {products.map((product)=>{
                return <CartItem 
                product={product} 
                key={product.id}
                onIncreaseQuantity={props.onIncreaseQuantity}
                onDecreaseQuantity={props.onDecreaseQuantity}
                onDeleteQuantity={props.onDeleteQuantity}
                // func={()=>console.log('props')}
                // isloggedin={false}
                // jsx={<h1>Test</h1>}
                // comp={<CartItem/>}
                /> 
            })}
        </div>
    )

}


export default Cart;