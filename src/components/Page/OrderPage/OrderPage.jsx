import classes from "./OrderPage.module.css";
import { Link } from "react-router-dom";

const OrderPage = ({ order }) => {
  return (
    <div className={classes.orderPage}>
      <img
        src="https://res.cloudinary.com/teepublic/image/private/s--bD46ev_w--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_000000,e_outline:48/co_000000,e_outline:inner_fill:48/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_auto,h_630,q_auto:good:420,w_630/v1550156146/production/designs/4201947_0.jpg"
        alt=""
      />
      <h1>Su compra ha sido exitosa!</h1>
      <h4>ID de la compra: {order}</h4>
      <Link to="/" className={classes.option}>
        <button>Volver a productos</button>
      </Link>
    </div>
  );
};

export default OrderPage;
