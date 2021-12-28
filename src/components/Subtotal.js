import React from "react";
import "../components/Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useHistory } from "react-router-dom";

function Subtotal() {
  const [{ basket }] = useStateValue();
  const history = useHistory();
  const basketItems = basket.length;

  const checkout = (e) => {
    e.preventDefault();
    if (!basketItems) {
      alert("There are no Items!!!");
      return;
    }
    history.push("/payment");
  };

  return (
    <div className="subtotal">
      <h2>The Subtotal will go here</h2>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal({basket.length} items):
              <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order containes a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
      <button onClick={checkout}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
