import './orderNowModule.css'
import Noodles from '../../assets/images/background_noodle.png'
import React from "react";
import ReactDOM from "react-dom/client";

const OrderButton = () => {
  const onOrderButtonPress = () =>
  { const root = ReactDOM.createRoot(document.getElementById('panel'))
      root.render(<OrderPage />);
      document.getElementById("orderButton").style.opacity = "1";
  }

  return (
    <button
      id="orderButton"
      onClick={ () => onOrderButtonPress()}
    >
      Order Now
    </button>
  );
}

export default OrderButton;




const OrderPage =() =>{

  const onButtonClick = (e) =>  {  
    const btn = document.getElementById(e.target.id);
    const notSelected = ".75";
    const selected = "1";
    btn.style.opacity = notSelected ? selected : notSelected;

    if (e.target.id === "pickup") {
      document.getElementById("delivery").style.opacity = notSelected;
      document.getElementById('labelText').innerHTML = "Pickup at location"
      document.getElementById('inputText').placeholder = "Enter City, State, or Zip"


    } else {
      document.getElementById("pickup").style.opacity = notSelected;
      document.getElementById('labelText').innerHTML = "Deliver to address"
      document.getElementById('inputText').placeholder = "Please type your address"
    }
  };

  const closePanel = () =>{
    document.getElementById('orderModal').remove();
    // ReactDOM.unmount(document.getElementById('orderModal'));
    document.getElementById("orderButton").style.opacity = ".8";
  };

  
    return (
      <div class="orderModal" id = "orderModal">
        <img alt="this is a pic" src = {Noodles} class="leftPanel panel"/>
        <div class="rightPanel panel">
          <button class = "xbutton" onClick={closePanel}>x</button>
          <div class="buttonSection">
            <div>
              <button
                id="pickup"
                class = "pickup"
                onClick={e => onButtonClick(e)}
              >
                Pickup
              </button>

              <button
                id="delivery"
                class="delivery"
                onClick={e => onButtonClick(e)}
              >
                Delivery
              </button>

            </div>


            <div class="location">
              <label for="locationInfo" id = "labelText">Pickup at a location near you: </label>
              <br/>
              <input
                class="locationInfo"
                type="text"
                placeholder="Enter City, State, or Zip"
                id = "inputText"
              />
            </div>

            <div class="useMyLocation">Use My Location</div>
          </div>
        </div>
      </div>
    );
}
