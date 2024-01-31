import { ItemDetail } from "./ItemDetail/ItemDetail";
import { Page404 } from "../Page404/Page404";
import { LoadingPage } from "../LoadingPage/LoadingPage";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../../services/firebase/firebaseConfig";
import { getDoc, doc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [loading, setLoading] = useState([]);
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    const productDocument = doc(db, "products", id);
    getDoc(productDocument)
      .then((queryDocumentSnapchot) => {
        const fields = queryDocumentSnapchot.data();
        const productAdapted = { id: queryDocumentSnapchot.id, ...fields };
        setProduct(productAdapted);
      })
      .catch((error) => {
        console.log("Hubo un error: ", error);
      })
      .finally(setLoading(false));
  }, [id]);
  if (loading) {
    return <LoadingPage />;
  }
  if (!product) {
    return <Page404 />;
  }
  return <ItemDetail {...product} />;
};

export default ItemDetailContainer;
