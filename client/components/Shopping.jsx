import React from "react";
import axios from "axios";
import NavBar from './NavBar.jsx';
import FooterThree from './FooterThree.jsx';
import FooterTwo from './FooterTwo.jsx';

class Shopping extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        userInfo: [],
        cart: [],
        measurementBox: false,
        measurements: [],
        currentIndex: 0
    };
    this.changeMeasure = this.changeMeasure.bind(this);
  }

  componentDidMount() {
    var array = [];
    axios.get('/loggedUser')
    .then(result => {
        this.setState ({
            userInfo: result.data,
            cart: JSON.parse(result.data[0].cart)
        })
    })
    .then(() => {
      this.state.cart.map((image, index) => {
        array.push(image);
      })
      this.setState({
        measurements: array
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
                      <button id='shoppingRemove' value="button">✖</button>
                      <h2 id='shoppingMeasure'>Measurements: <button onClick={this.changeMeasure} id='measureDescription' name={index} value="button"></button> </h2>
                  </div>
                  ))}
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
                      <button id='shoppingRemove' value="button">✖</button>
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
              </div>
              <FooterTwo />
          </div>
        );
      }
    }
  }
}

export default Shopping;