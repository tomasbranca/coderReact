import classes from "./Page.module.css";
import Button from "./Button/Button";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

const Page = ({ children }) => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const categoriesCollection = query(collection(db, "categories"), orderBy('position'));
    getDocs(categoriesCollection).then((querySnapshot) => {
      const categoriesAdapted = querySnapshot.docs.map((doc) => {
        const fields = doc.data();
        return { id: doc.id, ...fields };
      });
      setCategories(categoriesAdapted);
    });
  }, []);
  return (
    <div className={classes.page}>
      <div className={classes.buttons}>
        <Button>
          <Link to="/">Todos</Link>
        </Button>
          {categories.map(cat => (
            <Button>
              <Link key={cat.id} to={`category/${cat.slug}`} >{cat.name}</Link>
            </Button>
          ))
        }
      </div>
      {children}
    </div>
  );
};

export default Page;
