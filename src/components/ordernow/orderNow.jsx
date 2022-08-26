import styles from "./ordernow.module.css";
import React, { useState } from "react";
import OrderPage from "./OrderPage.jsx";

const OrderButton = () => {
  const [showing, setShowing] = useState(false);

  return (
    <>
      <button
        className={styles.orderButton}
        onClick={() => {
          setShowing(!showing);
        }}
      >
        Order Now
      </button>

      <div>{showing ? <OrderPage /> : null}</div>
    </>
  );
};

export default OrderButton;
