import { classes } from "./NavBar.module.css";
import { CartWidget } from "./CartWidget/CartWidget";
const NavBar = () => {
  return (
    <nav>
      <section className={classes.left}>
        <img src="/logo.png" alt="Logo de la página" />
        <div>
          <h1 className={classes.title}>Barg Shoes</h1>
        </div>
      </section>
      <section className={classes.right}>
        <CartWidget />
        <div className={classes.user}>
          <img
            src="https://img.icons8.com/ios-glyphs/30/000000/person-male.png"
            alt="person-male"
          />
          <p>Ingresar Usuario</p>
        </div>
      </section>
    </nav>
  );
};

export default NavBar;
