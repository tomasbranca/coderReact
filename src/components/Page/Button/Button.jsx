import { classes } from "./Button.module.css";

const Button = ({ children }) => {
  return <button className={classes.buttonToPage}>{children}</button>;
};

export default Button;
