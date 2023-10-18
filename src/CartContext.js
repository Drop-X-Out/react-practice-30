// CartContext.js
import React, { createContext, useReducer, useContext } from 'react';

// Initial state for the cart
const initialState = {
  items: [],
};

// Create a context for the cart
const CartContext = createContext();

// Define the cart reducer
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return { items: [...state.items, action.payload] };

      case 'REMOVE_FROM_CART': 
      return {items:state.items.filter(item => item.id !== action.payload)};


      case 'UPDATE_CART_ITEM':
        const updatedItems = state.items.map(item => 
            item.id=== action.payload.id ? action.payload:item);

      return {items:updatedItems}

      default:
        return state
  }

  
};

// Create a CartProvider component to wrap your app with
export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>{children}</CartContext.Provider>
  );
}

// Create a custom hook to access the cart context
export function useCart() {
  return useContext(CartContext);
}
