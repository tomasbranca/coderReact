import { useState } from "react";
import classes from "./CheckoutForm.module.css";

const CheckoutForm = ({ onConfirm }) => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    city: "",
    zip: "",
    selectedCard: "",
    cardName: "",
    cardNumber: "",
    expDate: "",
    cvv: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const handleCardSelect = (cardType) => {
    setFormValues({
      ...formValues,
      selectedCard: cardType,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = {
      name: formValues.name,
      email: formValues.email,
      phoneNumber: formValues.phoneNumber,
      address: formValues.address,
      city: formValues.city,
      zip: formValues.zip,
      selectedCard: formValues.selectedCard,
      cardName: formValues.cardName,
      cardNumber: formValues.cardNumber,
      expDate: formValues.expDate,
      cvv: formValues.cvv,
    };
    onConfirm(userData);
  };

  return (
    <div className={classes.checkout}>
      <form onSubmit={handleSubmit}>
        <div className={classes.row}>
          <div className={classes.colPersonal}>
            <h3>Datos Personales</h3>
            <label htmlFor="name">Nombre completo</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="John M. Doe"
              value={formValues.name}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="ejemplo@gmail.com"
              value={formValues.email}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="phone">Número de teléfono</label>
            <input
              type="text"
              id="phone"
              name="phoneNumber"
              placeholder="1123456789"
              value={formValues.phoneNumber}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="address">Dirección</label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Ejemplo 5487"
              value={formValues.address}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="city">Provincia</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formValues.city}
              onChange={handleInputChange}
            />
            <label htmlFor="zip">Código postal</label>
            <input
              type="text"
              id="zip"
              name="zip"
              value={formValues.zip}
              onChange={handleInputChange}
            />
          </div>
          <div className={classes.colPay}>
            <h3>Método de pago</h3>
            <label htmlFor="cards">Elige tarjeta</label>
            <div className={classes.cardsContainer}>
              <button
                className={classes.cardButton}
                onClick={() => handleCardSelect("visa")}
              >
                <img
                  src="https://static.vecteezy.com/system/resources/previews/020/975/572/original/visa-logo-visa-icon-transparent-free-png.png"
                  alt=""
                />
              </button>
              <button
                className={classes.cardButton}
                onClick={() => handleCardSelect("mastercard")}
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/1200px-MasterCard_Logo.svg.png"
                  alt=""
                />
              </button>
              <button
                className={classes.cardButton}
                onClick={() => handleCardSelect("amex")}
              >
                <img
                  src="https://1000marcas.net/wp-content/uploads/2020/03/logo-American-Express.png"
                  alt=""
                />
              </button>
              <button
                className={classes.cardButton}
                onClick={() => handleCardSelect("discover")}
              >
                <img
                  src="https://stanfordproofreading.com/wp-content/uploads/2021/02/atm-card-credit-card-debit-card-discover-icon-discover-card-png-512_512.png"
                  alt=""
                />
              </button>
            </div>
            <label htmlFor="cname">Nombre en tarjeta</label>
            <input
              type="text"
              id="cname"
              name="cardName"
              placeholder="John More Doe"
              value={formValues.cardName}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="ccnumber">Número de tarjeta de crédito</label>
            <input
              type="text"
              id="ccnumber"
              name="cardNumber"
              placeholder="1111-2222-3333-4444"
              value={formValues.cardNumber}
              onChange={handleInputChange}
              required
            />
            <div className={classes.rowCC}>
              <div className={classes.colExp}>
                <label htmlFor="exp">Fecha de expiración</label>
                <input
                  type="month"
                  id="exp"
                  name="expDate"
                  placeholder="MM/YYYY"
                  value={formValues.expDate}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className={classes.colCVV}>
                <label htmlFor="cvv">CVV</label>
                <input
                  type="number"
                  id="cvv"
                  name="cvv"
                  placeholder="352"
                  value={formValues.cvv}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
          </div>
        </div>
        <div className={classes.pay}>
          <button type="submit">Pagar</button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
