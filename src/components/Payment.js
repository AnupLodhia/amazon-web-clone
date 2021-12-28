import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import CurrencyFormat from "react-currency-format";
import { Link, useHistory } from "react-router-dom";
import "../components/Payment.css";
import CheckoutProduct from "./CheckoutProduct";
import { getBasketTotal } from "./reducer";
import { useStateValue } from "./StateProvider";
import axios from "../components/Axios";
import { db } from "../firebase";
import { doc, setDoc } from "@firebase/firestore";

function Payment() {
  const [{ user, basket }, dispatch] = useStateValue();

  const stripe = useStripe();
  const elements = useElements();
  const basketItems = basket.length === 0;

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [clientSecret, setClientSecret] = useState(false);

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const history = useHistory();

  useEffect(() => {
    // generate the special stripe secret which allows to charge a customer
    const getClientSecret = async () => {
      const response = await axios({
        method: `post`,
        url: `/payment/create?total=${getBasketTotal(basket) * 100}`,
      });
      if (response.status === 200) {
        setClientSecret(response.data.clientSecret);
      }
    };
    getClientSecret();
  }, [basket]);

  //console.log("The secret is >>>>", clientSecret);
  const handleSubmit = async (e) => {
    // Stripe functionality
    e.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        // paymentIntent=payment confirmation

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        setDoc(doc(db, `users/${user?.uid}/orders`, paymentIntent.id), {
          basket: basket,
          amount: paymentIntent.amount / 100,
          created: paymentIntent.created,
        });

        dispatch({
          type: "EMPTY_BASKET",
        });

        history.replace("/orders");
      });
  };

  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  console.log(clientSecret);
  return [
    <div className="payment">
      <div className="payment__container">
        <h1>Checkout {<Link to="/checkout">{basket?.length} items</Link>}</h1>
        {/* Payment section -- delivery address */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>Tagore Nagar-3</p>
            <p>Kalawad Road,Rajkot</p>
          </div>
        </div>
        {/* Payment section -- Review Items */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {/* Products */}
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        {/* Payment section -- Payment method */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            {/* Strip functionality  */}
            {/* uncomment if functions deployed on firebase */}

            {/* <form onSubmit={handleSubmit}> */}
            <form>
              <CardElement onChange={handleChange} />
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <h3>Order Total: {value}</h3>
                    </>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"₹"}
                />
                <button
                  disabled={processing || disabled || succeeded || basketItems}
                >
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {/* Errors */}
              {error && <div style={{ color: "red " }}>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>,
  ];
}

export default Payment;
