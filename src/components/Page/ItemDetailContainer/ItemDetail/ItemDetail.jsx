import classes from "./ItemDetail.module.css";
import ItemCount from "./ItemCount/ItemCount";
import { CartContext, formatNumber } from "../../../../context/CartContext";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";

const ItemDetail = ({
  id,
  brand,
  name,
  model,
  price,
  category,
  img,
  sizeStock,
}) => {
  const [quantityAdded, setQuantityAdded] = useState(0);
  const { addItem } = useContext(CartContext);

  const handleOnAdd = (quantity, selectedSize) => {
    setQuantityAdded(quantity);

    if (sizeStock && sizeStock[selectedSize] !== undefined) {
      const stockForSelectedSize = sizeStock[selectedSize];
      const item = {
        id,
        product: { brand, name, model },
        size: selectedSize,
        price,
        img,
        stock: stockForSelectedSize,
      };
      addItem(item, quantity);
    } else {
      console.error(`El stock para el talle ${selectedSize} no está definido.`);
    }
  };
  return (
    <div className={classes.itemDetail}>
      <div className={classes.itemCard}>
        <div className={classes.category}>
          <h3>{category}</h3>
        </div>
        <div className={classes.cardBody}>
          <div className={classes.half}>
            <div className={classes.featuredText}>
              <h1>
                {brand} {name}
              </h1>
              <p className={classes.model}>{model}</p>
              <p className={classes.price}>${formatNumber(price)}</p>
            </div>
            <div className={classes.img}>
              <img src={img} />
              <div className={classes.id}>
                <p>ID del producto:</p>
                <h3>{id}</h3>
              </div>
            </div>
          </div>
          <div className={classes.half}>
            <div className={classes.description}>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
                laboriosam rerum quidem dolorum, ipsam modi natus sapiente
                placeat libero nam iusto earum eos quod voluptatibus unde velit.
                Vel, iure illum.
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
                laboriosam rerum quidem dolorum, ipsam modi natus sapiente
                placeat libero nam iusto earum eos quod voluptatibus unde velit.
                Vel, iure illum.
              </p>
              <div className={classes.count}>
                {quantityAdded > 0 ? (
                  <Link to="/cart" className="finishPurch">
                    <button>Terminar compra!</button>
                  </Link>
                ) : (
                  <ItemCount {...sizeStock} onAdd={handleOnAdd} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
