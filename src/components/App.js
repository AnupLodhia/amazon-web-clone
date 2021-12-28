import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { useEffect } from "react";
import { auth } from "../firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";
import Footer from "./Footer";

const promise = loadStripe(process.env.REACT_APP_STRIPE_CLIENT_ACCESS_TOKEN);

function App() {
  const [{ basket }, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when component loads
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      console.log("The User is >> ", authUser);

      if (authUser) {
        //The user is logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            {/* Login Page */}
            <Login />
          </Route>
          <Route path="/orders">
            <Header />
            <Orders />
            <Footer />
          </Route>
          <Route path="/checkout">
            {/* Header */}
            <Header />
            {/* checkout */}
            <Checkout />
            <Footer />
          </Route>
          <Route path="/payment">
            {/* Header */}
            <Header />
            <Elements stripe={promise}>
              {/* payment */}
              <Payment />
            </Elements>
            <Footer />
          </Route>
          <Route path="/">
            {/* Header */}
            <Header />
            {/* Home */}
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
