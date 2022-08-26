import styles from "./ordernow.module.css";
import Noodles from "../../assets/images/background_noodle.png";
import React, { useState } from "react";

const OrderPage = () => {
  const [label, setLabel] = useState("Pickup at a location near you");
  const [input, setInput] = useState("Enter City, State, or Zip");

  return (
    <div className={styles.orderModal}>
      <img alt="this is a pic" src={Noodles} className={styles.panel} />
      <div className={styles.panel}>
        <div className={styles.buttonSection}>
          <div>
            <button
              className={styles.pickup}
              onClick={() => {
                setLabel("Pickup at a location near you:");
                setInput("Enter City, State, or Zip");
              }}
            >
              Pickup
            </button>

            <button
              className={styles.delivery}
              onClick={() => {
                setLabel("Please type your address:");
                setInput("Enter Your Address");
              }}
            >
              Delivery
            </button>
          </div>

          <div className={styles.location}>
            <label for="locationInfo">{label}</label>
            <br />
            <input
              className={styles.locationInfo}
              type="text"
              placeholder={input}
              id="inputText"
            />
            <br />
            <button
              className={styles.useMyLocation}
              onClick={() => setInput("401 9th Ave, New York, NY 10001")}
            >
              {" "}
              📍 Use My Location
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
