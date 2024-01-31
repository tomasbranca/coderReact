import { classes } from "./CartItem.module.css";
import { CartContext, formatNumber } from "../../../../context/CartContext";
import { useContext } from "react";

const CartItem = (item) => {
  const { removeItem } = useContext(CartContext);
  return (
    <div className={classes.itemCard}>
      <div className={classes.photo}>
        <img src={item.img} alt="" />
      </div>
      <div className={classes.description}>
        <h1 className={classes.name}>
          {item.product.brand} {item.product.name}
        </h1>
        <h2 className={classes.model}>{item.product.model}</h2>
        <div className={classes.subdescription}>
          <p>Talle: {item.size}</p>
          <p>Precio: ${formatNumber(item.price)}</p>
          <p>Cantidad: {item.quantity}</p>
          <p className={classes.remove} onClick={() => removeItem(item.id)}>
            Eliminar
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
