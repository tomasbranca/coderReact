import classes from "./CartWidget.module.css";

const CartWidget = () => {
  return (
    <div className={classes.cart}>
      <div className={classes.cartImage}>
        <img
          src="https://img.icons8.com/glyph-neue/64/shopping-cart.png"
          alt="shopping-cart"
        />
      </div>
      <p>Productos: 0</p>
    </div>
  );
};
export default CartWidget;
