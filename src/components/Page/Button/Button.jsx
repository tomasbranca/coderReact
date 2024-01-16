import classes from "./Button.module.css"

const Button = ({ children }) => {
    return (
        <button className={classes.buttonPage} >{children}</button>
    )
}

export default Button