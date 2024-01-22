import { useState, useEffect } from "react";
import { getProductById } from "../../../asyncMock";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getProductById(id).then((response) => {
      setProduct(response);
    });
  }, [id]);

  if (!product) {
    return <h1>El producto no existe</h1>;
  }

    return (
      <ItemDetail {...product}/>
  )
};

export default ItemDetailContainer;
