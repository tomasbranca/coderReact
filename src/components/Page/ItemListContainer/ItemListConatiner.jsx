import { useEffect, useState } from "react";
import { getProducts, getProductByCategory } from "../../../asyncMock";
import ItemList from "./ItemList/ItemList";
import classes from "./ItemListContainer.module.css";
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { category } = useParams()

  useEffect(() => {
    const asyncFunction = category ? getProductByCategory : getProducts

    asyncFunction(category)
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [category]);

  return (
    <div className={classes.container}>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
