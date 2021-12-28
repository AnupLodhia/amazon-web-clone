import {
  doc,
  onSnapshot,
  orderBy,
  query,
  collection,
  where,
} from "@firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import Order from "./Order";
import "./Orders.css";
import { useStateValue } from "./StateProvider";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [{ user }] = useStateValue();

  useEffect(() => {
    if (user) {
      const unsubscribe = onSnapshot(
        collection(db, `users/${user?.uid}/orders`),
        (snapshot) => {
          snapshot.docs.forEach((doc) => {
            const order = { ...doc.data(), id: doc.id };
            setOrders((prevOrder) => [...prevOrder, order]);
            console.log(order);
          });
        }
      );

      return () => {
        unsubscribe();
      };
    } else {
      setOrders([]);
    }
  }, [user]);

  console.log(orders);
  return (
    <div className="orders">
      <h1>Your Orders</h1>
      {orders ? (
        <div className="orders__order">
          {orders.map((order) => (
            <Order order={order} />
          ))}
        </div>
      ) : (
        <h1>You Have No Orders</h1>
      )}
    </div>
  );
}

export default Orders;
