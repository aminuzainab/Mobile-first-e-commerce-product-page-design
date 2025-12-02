import { createContext, useContext, useReducer, useState } from "react";

const CartContext = createContext();

const initialState = {
  items: [],
};

function cartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    const existingItem = state.items.find(
      item => item.id === action.payload.id
    );
    
    if (existingItem) {
      const updatedItems = state.items.map(item =>
        item.id === action.payload.id
          ? {
              ...item,
              quantity: item.quantity + action.payload.quantity,
              totalPrice:
                (item.quantity + action.payload.quantity) * item.price,
            }
          : item
      );

      return { items: updatedItems };
    }

    // New item → add to cart
    return {
      items: [
        ...state.items,
        {
          ...action.payload,
          totalPrice: action.payload.quantity * action.payload.price,
        },
      ],
    };
  }

  if (action.type === "REMOVE_ITEM") {
    return {
      items: state.items.filter(item => item.id !== action.payload),
    };
  }

  return state;
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);
  const toggleCart = () => setIsCartOpen(prev => !prev);

  const addItem = item => dispatch({ type: "ADD_ITEM", payload: item });
  const removeItem = id => dispatch({ type: "REMOVE_ITEM", payload: id });

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        addItem,
        removeItem,
        isCartOpen,
        openCart,
        closeCart,
        toggleCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
                