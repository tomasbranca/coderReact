import { classes } from "./Item.module.css";
import { Link } from "react-router-dom";
import { formatNumber } from "../../../../../context/CartContext";

const Item = ({ id, brand, name, model, price, img }) => {
  return (
    <div className={classes.productCard}>
      <section className={classes.productCardImage}>
        <img src={img} alt={model} />
      </section>
      <section className={classes.productCardText}>
        <div className={classes.top}>
          <h2>
            {brand} {name}
          </h2>
          <h4>{model}</h4>
        </div>
        <div className={classes.bottom}>
          <button className={classes.details}>
            <Link to={`/id/${id}`}>Detalles</Link>
          </button>
          <span className={classes.price}>$ {formatNumber(price)}</span>
        </div>
      </section>
    </div>
  );
};

export default Item;
