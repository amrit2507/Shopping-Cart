import React from 'react';

const CartItem=(props)=>{
    
        // const {price,title,qty,img}=this.state;
    const {price,title,qty,img}=props.product;
    const {product,onDecreaseQuantity,onIncreaseQuantity,onDeleteQuantity}=props;
    return (
        <div className="cart-item">
            {/* {this.props.jsx} */}
            <div className="left-block">
                <img style={styles.image} src={img}/>
            </div>
            <div className="right-block">
                <div style={{fontSize:25}}>{title}</div>
                <div style={{color:'grey'}}>{price}</div>
                <div style={{color: 'grey'}}>{qty}</div>
                <div className="cart-item-actions">
                    {/* Buttons */}
                    <img 
                    alt="increase" 
                    className="action-icons" 
                    src="https://cdn-icons-png.flaticon.com/128/748/748113.png"
                    onClick={()=>onIncreaseQuantity(product)}
                    />
                    <img 
                    alt="decrease" 
                    className="action-icons" 
                    src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
                    onClick={()=>onDecreaseQuantity(product)}/>
                    <img 
                    alt="delete" 
                    className="action-icons" 
                    src="https://cdn-icons.flaticon.com/png/128/484/premium/484611.png?token=exp=1642676835~hmac=41ef40fb52a5272e43273e476d957fc0"
                    onClick={()=>onDeleteQuantity(product.id)}
                    />
                </div>
            </div>
        </div>
    );
}
const styles={
    image:{
        height:110,
        width:110,
        borderRadius:4,
        background:'#ccc'
    }
}


export default CartItem;