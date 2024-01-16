import classes from "./Item.module.css";
import ItemDetailCountainer from "./ItemDetailContainer/ItemDetailContainer";
import ItemCount from "./ItemCount/ItemCount"

const Item = ({id, brand, name, model, category, price, img }) => {
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
          <ItemDetailCountainer {...{ id, brand, name, model, category, price, img }} />
          <ItemCount
            initial={0}
            stock={10}
            onAdd={(quantity) => {
              console.log('Cantidad agregada: ', quantity)
            }}
          />
          <span className={classes.price}>${price}</span>
        </div>
      </section>
    </div>
  );
};

export default Item;
