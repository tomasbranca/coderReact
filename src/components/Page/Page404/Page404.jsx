import classes from "./Page404.module.css";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div className={classes.page404}>
      <img
        src="https://www.pngall.com/wp-content/uploads/2016/06/Kanye-West-PNG-Pic.png"
        alt=""
      />
      <h1>404 Not Found</h1>
      <Link to="/" className={classes.option}>
        <button>Productos</button>
      </Link>
    </div>
  );
};

export default Page404;
