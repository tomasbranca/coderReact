import { useContext, createContext, useState } from "react";

export const CartContext = createContext({
  cart: [],
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    const existingItem = cart.find(
      (prod) => prod.id === item.id && prod.size === item.size
    );

    if (!existingItem) {
      setCart((prev) => [...prev, { ...item, quantity }]);
    } else {
      const cartUpdated = cart.map((prod) => {
        if (prod.id === item.id && prod.size === item.size) {
          return {
            ...prod,
            quantity: quantity,
          };
        } else {
          return prod;
        }
      });
      setCart(cartUpdated);
    }
  };

  const removeItem = (itemId, size) => {
    const cartUpdated = cart.filter((prod) => {
      if (prod.id === itemId && prod.size !== size) {
        return true;
      }
      return prod.id !== itemId || prod.size !== size;
    });
    setCart(cartUpdated);
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (itemId) => {
    return cart.some((prod) => prod.id === itemId);
  };

  const getTotalQuantity = () => {
    let accu = 0;

    cart.forEach((prod) => {
      accu += prod.quantity;
    });
    return accu;
  };

  const getTotalAmount = () => {
    let total = 0;

    cart.forEach((prod) => {
      total += prod.quantity * prod.price;
    });
    return total;
  };

  const totalQuantity = getTotalQuantity();
  const totalAmount = getTotalAmount();

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clearCart,
        totalQuantity,
        totalAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};

export function formatNumber(number) {
  const formattedNumber = new Intl.NumberFormat().format(number);
  return formattedNumber;
}
