import classes from "./Page.module.css";
import Button from "./Button/Button";


const Page = ({ children }) => {
  return (
    <div className={classes.page}>
      <div className={classes.buttons}>
        <Button>Todos</Button>
        <Button>Sneakers</Button>
        <Button>Running</Button>
        <Button>Basketball</Button>
        <Button>Futbol</Button>
      </div>
      {children}
    </div>
  );
};

export default Page;
