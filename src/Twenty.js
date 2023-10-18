import React, { useState } from 'react'
import { useCart } from './CartContext'

export default function Twenty() {

    const {cart,dispatch} = useCart();
    const [newItem,setNewItem] = useState({name:''})

    const addToCart = (item) => {
        dispatch({type:'ADD_TO_CART',payload:item})
    }

    const removeFromCart = (itemId) => {
        dispatch({type:'REMOVE_FROM_CART',payload:itemId})
    }
    const updateCartItem = (item) => {
        dispatch({type:'UPDATE_CART_ITEM',payload:item})
    }
    
    const handleInputChange = (e) => {
        const {name,value} = e.target;
        setNewItem({
            ...newItem,
            [name]: value,
        })
    }
    
    const addItemToCart=()=> {
        addToCart({...newItem,id:Date.now(),quantity:1});
        setNewItem({name:''})
    }
  return (
    <div>
      <h2>Sopping Cart</h2>
      <ul>
        {cart.items.map((item) => (
            <li key={item.id}>
                {item.name} - Quantity: {item.quantity}
                <button onClick={()=> removeFromCart(item.id)}>Remove</button>
        <button onClick={()=> updateCartItem({...item,quantity:item.quantity+1})} >+1</button>
       
        </li>
         ))}
        </ul>
      <div>
        <h3>Add Item</h3>
      </div>
      <input type='text' placeholder='item name' name='name' value={newItem.name} onChange={handleInputChange}/>
      <button onClick={addItemToCart}>Add to Cart</button>
    </div>
  )
}
