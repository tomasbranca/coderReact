import { classes } from "./CartContainer.module.css";
import { CartItem } from "./CartItem/CartItem";
import { CartContext, formatNumber } from "../../../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const CartContainer = () => {
  const { cart, clearCart, totalQuantity, totalAmmount } =
    useContext(CartContext);

  if (totalQuantity === 0) {
    return (
      <div className={classes.cartEmpty}>
        <img
          src="https://seeklogo.com/images/J/jordan-king-logo-4379CBD46B-seeklogo.com.png"
          alt=""
        />
        <h1>No hay productos en el carrito</h1>
        <Link to="/" className={classes.option}>
          <button>Productos</button>
        </Link>
      </div>
    );
  }
  return (
    <div className={classes.cartContainer}>
      {cart.map((prod) => (
        <CartItem key={prod.id} {...prod} />
      ))}
      <div className={classes.cartPurchase}>
        <h3>Total: ${formatNumber(totalAmmount)}</h3>
        <div className={classes.cartButtons}>
          <button onClick={() => clearCart()} className={classes.buttonClear}>
            Limpiar Carrito
          </button>
          <Link to="/checkout" className={classes.buttonCheckout}>
            <button>Checkout</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartContainer;
