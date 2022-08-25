import styles from './ordernow.module.css'
import Noodles from '../../assets/images/background_noodle.png'
import React, {useState} from "react";
import ReactDOM from "react-dom/client";

const OrderButton = () => {
  const[ showing, setShowing] = useState(false);
  const[isActive, setActive] = useState(.8);
  
  const onOrderButtonPress = () =>
  { 
    const root = ReactDOM.createRoot(document.getElementById('panel'))
    const menu = showing ? <OrderPage /> : null
    root.render(menu)
    //   document.getElementById("orderButton").style.opacity = "1";
  }

  return (
    <button
      id="orderButton"
      className = {styles.orderButton}
      onClick={ () => {setShowing(!showing); onOrderButtonPress()}}
    >
      Order Now
    </button>
  );
}

export default OrderButton;




const OrderPage = () =>{
  const [label, setLabel] = useState("Pickup at a location near you")
  const [input, setInput] = useState("Enter City, State, or Zip")
  const isShowing = true;


  const closePanel = () =>{
    document.getElementById('orderModal').remove();
  };

  
    return (
      <div className={styles.orderModal} id = "orderModal">
        <img alt="this is a pic" src = {Noodles} className={styles.panel}/>
        <div className = {styles.panel}>
          {/* <button className = {styles.xbutton} onClick={closePanel}>x</button> */}
          <div className= {styles.buttonSection}>
            <div>
              <button
                id="pickup"
                className = {styles.pickup}
                onClick={() => {setLabel("Pickup at a location near you:"); setInput("Enter City, State, or Zip")}}
              >
                Pickup
              </button>

              <button
                id="delivery"
                className= {styles.delivery}
                onClick={() => {setLabel("Please type your address:"); setInput("Enter Your Address")}}
              >
                Delivery
              </button>

            </div>


            <div className={styles.location}>
              <label for="locationInfo" id = "labelText">{label}</label>
              <br/>
              <input
                className={styles.locationInfo}
                type="text"
                placeholder= {input}
                id = "inputText"
              />
            </div>

            <div className={styles.useMyLocation}>Use My Location</div>
          </div>
        </div>
      </div>
    );
}
