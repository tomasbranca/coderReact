import classes from "./ItemListContainer.module.css";
import ItemList from "./ItemList/ItemList";
import Page404 from "../Page404/Page404";
import LoadingPage from "../LoadingPage/LoadingPage";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../../services/firebase/firebaseConfig";
import { getDocs, collection, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState([]);
  const [categoryExists, setCategoryExists] = useState(true);
  const { category } = useParams();

  useEffect(() => {
    setLoading(true);
    const productsCollection = category
      ? query(collection(db, "products"), where("category", "==", category))
      : collection(db, "products");
    getDocs(productsCollection)
      .then((querySnapshot) => {
        const productsAdapted = querySnapshot.docs.map((doc) => {
          const fields = doc.data();
          return { id: doc.id, ...fields };
        });
        setProducts(productsAdapted);
        if (category && productsAdapted.length === 0) {
          setCategoryExists(false);
        } else {
          setCategoryExists(true);
        }
      })
      .catch((error) => {
        console.log("Hubo un error: ", error);
        setCategoryExists(false);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [category]);

  if (!categoryExists) {
    return <Page404 />;
  }
  if (loading) {
    return <LoadingPage />;
  }

  return (
    <div className={classes.container}>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
