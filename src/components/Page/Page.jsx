import { classes } from "./Page.module.css";
import { Button } from "./Button/Button";
import { Link } from "react-router-dom";

const Page = ({ children }) => {
  return (
    <div className={classes.page}>
      <div className={classes.buttons}>
        <Button>
          <Link to="/">Todos</Link>
        </Button>
        <Button>
          <Link to="/category/sneakers">Sneakers</Link>
        </Button>
        <Button>
          <Link to="/category/running">Running</Link>
        </Button>
        <Button>
          <Link to="/category/basketball">Basketball</Link>
        </Button>
        <Button>
          <Link to="/category/futbol">Futbol</Link>
        </Button>
      </div>
      {children}
    </div>
  );
};

export default Page;
