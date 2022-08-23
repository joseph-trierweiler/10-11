import './orderNow.css'
import Noodles from '../../assets/images/background_noodle.png'
import React from "react";
import ReactDOM from "react-dom";

export class OrderPage extends React.Component {
  constructor(props) {
    super(props);
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick(idName) {
    const btn = document.getElementById(idName);
    const notSelected = ".75";
    const selected = "1";
    btn.style.opacity = notSelected ? selected : notSelected;

    if (idName === "pickup") {
      document.getElementById("delivery").style.opacity = notSelected;
    } else {
      document.getElementById("pickup").style.opacity = notSelected;
    }
  }

  closePanel(){
    ReactDOM.unmountComponentAtNode(document.getElementById('panel'))
    document.getElementById("orderButton").style.opacity = ".8"
  }
  render() {

    return (
      <div class="orderModal">
        <img alt="this is a pic" src = {Noodles} id="leftPanel"/>
        <div id="rightPanel">
          <button id = "xbutton" onClick={() => this.closePanel()}>x</button>
          <div id="buttonSection">
            <div>
              <button
                id="pickup"
                onClick={() => this.onButtonClick("pickup")}
              >
                Pickup
              </button>

              <button
                id="delivery"
                onClick={() => this.onButtonClick("delivery")}
              >
                Delivery
              </button>

            </div>


            <div id="location">
              <label for="locationInfo">Pickup at a location near you: </label>
              <br/>
              <input
                id="locationInfo"
                type="text"
                placeholder="Enter City, State, or Zip"
              />
            </div>

            <div id="useMyLocation">Use My Location</div>
          </div>
        </div>
      </div>
    );
  }
}

export class OrderButton extends React.Component {
  constructor(props) {
    super(props);
    this.onOrderButtonPress = this.onOrderButtonPress.bind(this);
  }

  onOrderButtonPress() {
    ReactDOM.render(<OrderPage id = "orderPage" />, document.getElementById("panel"));
    document.getElementById("orderButton").style.opacity = "1";
  }

  render() {
    const buttonStyle = {
       opacity: ".8"
    };

    return (
      <button
        id="orderButton"
        style = {buttonStyle}
        onClick={this.onOrderButtonPress}
      >
        Order Now
      </button>
    );
  }
}

ReactDOM.render(<OrderButton />, document.getElementById("root"));
