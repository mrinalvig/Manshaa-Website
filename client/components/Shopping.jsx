import React from "react";
import axios from "axios";
import NavBar from './NavBar.jsx';
import FooterThree from './FooterThree.jsx';
import FooterTwo from './FooterTwo.jsx';
import { Link } from 'react-router-dom';

class Shopping extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        userInfo: [],
        cart: [],
        measurementBox: false,
        measurements: [],
        currentIndex: 0,
        totalValue: 0,
        tax: 0,
        totalPrice: 0,
        username: ""
    };
    this.changeMeasure = this.changeMeasure.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  componentDidMount() {
    var array = [];
    var price = 0;
    axios.get('/loggedUser')
    .then(result => {
        this.setState ({
            userInfo: result.data,
            cart: JSON.parse(result.data[0].cart),
            username: result.data[0].username
        })
    })
    .then(() => {
      this.state.cart.map((image, index) => {
        array.push(image);
        price += image[1][2];
      })
      this.setState({
        measurements: array,
        totalValue: price,
        tax: ((price * 9.5) * .01).toFixed(2),
      }, () => {
        this.setState({
          totalPrice: ((price + (price * 9.5) * .01)).toFixed(2)
        })
      })
    })
  }

  changeMeasure(e) {
    if(e.target.id === "measureDescription") {
      this.setState({
        measurementBox: true,
        currentIndex: e.target.name
      })
    }
    else {
      this.setState({
        measurementBox: false
      })
    }
  }

  removeItem(e) {
    let array1 = this.state.cart;
    let array2 = [];

    for(var i = 0; i < array1.length; i++) {
      if(i != e.target.name){
        array2.push(array1[i]);
      }
    }

    array2 = JSON.stringify(array2);

    axios.put('/cart', {cart: array2, username: this.state.username})
    .then(() => {
      window.alert("You have successfully removed this item from your Cart!");
      this.componentDidMount();
    });
  }

  render() {
    if(this.state.userInfo.length === 0) {
        return (
        <div>
            <NavBar />
            <div id='shoppingLog'>
                <div id='shoppingMessage'>
                    <h2 id='shoppingLine'>You must log in to view your shopping cart</h2>
                </div>
            </div>
            <FooterThree />
        </div>
        );
    }

    else {
      if(this.state.measurementBox === false) {
        return (
          <div>
              <NavBar />
              <div id='shoppingContainer'>
                  <h2 id='shoppingHeader'>Shopping Cart</h2>
                  {this.state.cart.map((image, index) => (
                  <div id='shoppingCartContainer'>
                      <img id='shoppingImage' src={image[0]} />
                      <h2 id='shoppingTitle'>{image[1][0]}</h2>
                      <h2 id='shoppingPrice'>$ {image[1][2]}.00</h2>
                      <h2 id='shoppingColor'>Color: {image[3]} <div id='colorSquare' style={{backgroundColor: image[3]}} /></h2>
                      <button id='shoppingRemove' name={index} onClick={e => this.removeItem(e)} >✖</button>
                      <h2 id='shoppingMeasure'>Measurements: <button onClick={this.changeMeasure} id='measureDescription' name={index} value="button"></button> </h2>
                  </div>
                  ))}
                  <div id='measureDescription3' value='button' />
                  <div id='couponBox'>
                    <h2 id='discountCode'>ADD A DISCOUNT CODE</h2>
                    <input id='discountInput' />
                    <button id='discountButton'>ADD</button>
                    <h2 id='orderValue'>Order Value <h2 id='valueNumber'>${this.state.totalValue}.00</h2></h2>
                    <h2 id='orderTax'> Tax <h2 id='taxNumber'>${this.state.tax}</h2></h2>
                    <h2 id='bar'>_________________________________________________</h2>
                    <h2 id='orderTotal'> Total <h2 id='totalNumber'>${this.state.totalPrice}</h2></h2>
                    <Link to='/checkout'>
                      <button id='checkoutProceed'>CONTINUE TO CHECKOUT</button>
                    </Link>
                  </div>
              </div>
              <FooterTwo />
          </div>
        );
      }
      else {
        return (
          <div>
              <NavBar />
              <div id='shoppingContainer'>
                  <h2 id='shoppingHeader'>Shopping Cart</h2>
                  {this.state.cart.map((image, index) => (
                  <div id='shoppingCartContainer'>
                      <img id='shoppingImage' src={image[0]} />
                      <h2 id='shoppingTitle'>{image[1][0]}</h2>
                      <h2 id='shoppingPrice'>$ {image[1][2]}.00</h2>
                      <h2 id='shoppingColor'>Color: {image[3]} <div id='colorSquare' style={{backgroundColor: image[3]}} /></h2>
                      <button id='shoppingRemove' value="button" onClick={e => this.removeItem(e)} >✖</button>
                      <h2 id='shoppingMeasure'>Measurements: <button onClick={e => this.changeMeasure(e)} id='measureDescription' name={index} value="button"></button> </h2>
                  </div>
                  ))}
                  <div onClick={this.changeMeasure} id='measureDescription2' value="button">
                    <button onClick={this.changeMeasure} id='measureRemove' value="button">✖</button>
                    <div id='showMeasurements'>
                      <h2 id='shoulderTag'>Shoulder: {this.state.measurements[this.state.currentIndex][2][0]} in.</h2>
                      <h2 id='armholeTag'>Armhole: {this.state.measurements[this.state.currentIndex][2][1]} in.</h2>
                      <h2 id='upperBustTag'>Upper Bust Round: {this.state.measurements[this.state.currentIndex][2][2]} in.</h2>
                      <h2 id='acrossTag'>Across Front: {this.state.measurements[this.state.currentIndex][2][3]} in.</h2>
                      <h2 id='bustTag'>Bust Round: {this.state.measurements[this.state.currentIndex][2][4]} in.</h2>
                      <h2 id='underBustTag'>Under Bust Round: {this.state.measurements[this.state.currentIndex][2][5]} in.</h2>
                      <h2 id='waistTag'>Waist Round: {this.state.measurements[this.state.currentIndex][2][6]}in.</h2>
                      <h2 id='lowWaistTag'>Low Waist Round: {this.state.measurements[this.state.currentIndex][2][7]} in.</h2>
                      <h2 id='hipTag'>Hip Round: {this.state.measurements[this.state.currentIndex][2][8]} in.</h2>
                      <h2 id='thighTag'>Thigh Round: {this.state.measurements[this.state.currentIndex][2][9]} in.</h2>
                      <h2 id='midThighTag'>Mid Thigh Round: {this.state.measurements[this.state.currentIndex][2][10]} in.</h2>
                      <h2 id='kneeTag'>Knee Round: {this.state.measurements[this.state.currentIndex][2][11]} in.</h2>
                      <h2 id='calfTag'>Calf Round: {this.state.measurements[this.state.currentIndex][2][12]} in.</h2>
                      <h2 id='ankleTag'>Ankle Round: {this.state.measurements[this.state.currentIndex][2][13]} in.</h2>
                    </div>
                  </div>
                  <div id='couponBox'>
                    <h2 id='discountCode'>ADD A DISCOUNT CODE</h2>
                    <input id='discountInput' />
                    <button id='discountButton'>ADD</button>
                    <h2 id='orderValue'>Order Value <h2 id='valueNumber'>${this.state.totalValue}.00</h2></h2>
                    <h2 id='orderTax'> Tax <h2 id='taxNumber'>${this.state.tax}</h2></h2>
                    <h2 id='bar'>_________________________________________________</h2>
                    <h2 id='orderTotal'> Total <h2 id='totalNumber'>${this.state.totalPrice}</h2></h2>
                    <Link to='/checkout'>
                      <button id='checkoutProceed'>CONTINUE TO CHECKOUT</button>
                    </Link>
                  </div>
              </div>
              <FooterTwo />
          </div>
        );
      }
    }
  }
}

export default Shopping;