import classes from "./Checkout.module.css";
import CheckoutForm from "./CheckoutForm/CheckoutForm";
import OrderPage from "../OrderPage/OrderPage";
import LoadingPage from "../LoadingPage/LoadingPage";
import { useState } from "react";
import { useCart } from "../../../context/CartContext";
import {
  collection,
  getDocs,
  where,
  query,
  documentId,
  writeBatch,
  addDoc,
  Timestamp,
} from "firebase/firestore";
import { db } from "../../../services/firebase/firebaseConfig";

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const { cart, totalAmount, clearCart } = useCart();

  const createOrder = async ({
    name,
    email,
    phoneNumber,
    address,
    city,
    zip,
    selectedCard,
    cardName,
    cardNumber,
    expDate,
    cvv,
  }) => {
    setLoading(true);
    try {
      const objOrder = {
        buyer: {
          name,
          email,
          phoneNumber,
          address,
          city,
          zip,
          selectedCard,
          cardName,
          cardNumber,
          expDate,
          cvv,
        },
        items: cart,
        totalAmount,
        date: Timestamp.fromDate(new Date()),
      };

      const batch = writeBatch(db);
      const outOfStock = [];
      const ids = cart.map((prod) => prod.id);

      const productsCollection = query(
        collection(db, "products"),
        where(documentId(), "in", ids)
      );

      const querySnapshot = await getDocs(productsCollection);
      const { docs } = querySnapshot;

      docs.forEach((doc) => {
        const fields = doc.data();
        const productId = doc.id;
        const productInCart = cart.find((item) => item.id === productId);

        if (productInCart) {
          const { size, stock, quantity } = productInCart;

          if (stock >= quantity) {
            batch.update(doc.ref, { stock: stock - quantity });
          } else {
            outOfStock.push({ id: productId, size: size, ...fields });
          }
        }
      });

      if (outOfStock.length === 0) {
        batch.commit();
        const orderCollection = collection(db, "orders");
        const { id } = await addDoc(orderCollection, objOrder);
        setOrderId(id);
        clearCart();
      } else {
        console.error("No hay stock disponible en ciertos productos");
      }
    } catch (error) {
      console.error("Hubo un error al cargar la orden");
    } finally {
      setLoading(false);
    }
  };
  if (loading) {
    return <LoadingPage />;
  }
  if (orderId) {
    return <OrderPage order={orderId} />;
  }

  return (
    <div className={classes.checkoutPage}>
      <h1>Checkout</h1>
      <CheckoutForm onConfirm={createOrder} />
    </div>
  );
};

export default Checkout;
