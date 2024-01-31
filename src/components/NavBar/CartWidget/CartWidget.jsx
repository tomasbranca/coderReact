import { classes } from "./CartWidget.module.css";
import { CartContext } from "../../../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);
  return (
    <Link
      to="/cart"
      className="cartWidget"
      style={{ display: totalQuantity > 0 ? "block" : "none" }}
    >
      <div className={classes.cart}>
        <div className={classes.cartImage}>
          <img
            src="https://img.icons8.com/glyph-neue/64/shopping-cart.png"
            alt="shopping-cart"
          />
        </div>
        <p>Productos: {totalQuantity}</p>
      </div>
    </Link>
  );
};

export default CartWidget;
