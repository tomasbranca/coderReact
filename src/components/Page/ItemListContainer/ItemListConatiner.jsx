import { useEffect, useState } from "react";
import { getProducts } from "../../../asyncMock";
import ItemList from "./ItemList/ItemList";
import classes from "./ItemListContainer.module.css";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className={classes.container}>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
