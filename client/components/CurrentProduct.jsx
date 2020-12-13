import React from "react";
import axios from "axios";
import { SwatchesPicker } from 'react-color';
import Magnifier from "react-magnifier";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './NavBar.jsx';
import FooterThree from "./FooterThree.jsx";
import FooterTwo from "./FooterTwo.jsx";
import Picker from 'react-mobile-picker';


class CurentProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: false,
      color: false,
      price: Math.floor((Math.random() * 100) + 20),
      selectedColor: 'Default',
      props: {width: 390, height: 515, offset: {horizontal: 70}, zoomWidth: 390, img: this.props.link},
      userInfo: [],
      shoulder: "",
      armHole: "",
      upperBust: "",
      across: "",
      bust: "",
      underBust: "",
      waist: "",
      lowWaist: "",
      hip: "",
      thigh: "",
      midThigh: "",
      knee: "",
      calf: "",
      ankle: "",
      measurements: [],
      statement: "Please enter your measurements!"
    };
    this.expandSize = this.expandSize.bind(this);
    this.closeSize = this.closeSize.bind(this);
    this.expandColor = this.expandColor.bind(this);
    this.closeColor = this.closeColor.bind(this);
    this.colorSelect = this.colorSelect.bind(this);
    this.defaultColor = this.defaultColor.bind(this);
    this.purchaseAlert = this.purchaseAlert.bind(this);
    this.changeShoulder = this.changeShoulder.bind(this);
    this.changeArmhole = this.changeArmhole.bind(this);
    this.changeUpperBust = this.changeUpperBust.bind(this);
    this.changeAcross = this.changeAcross.bind(this);
    this.changeBust = this.changeBust.bind(this);
    this.changeUnderBust = this.changeUnderBust.bind(this);
    this.changeWaist = this.changeWaist.bind(this);
    this.changeLowWaist = this.changeLowWaist.bind(this);
    this.changeHip = this.changeHip.bind(this);
    this.changeThigh = this.changeThigh.bind(this);
    this.changeMidThigh = this.changeMidThigh.bind(this);
    this.changeKnee = this.changeKnee.bind(this);
    this.changeCalf = this.changeCalf.bind(this);
    this.changeAnkle = this.changeAnkle.bind(this);
    this.savingSize = this.savingSize.bind(this);
  }

  componentDidMount() {
    axios.post('/loggedIn', {username: this.props.name})
    .then(result => {
      console.log(result.data);
        this.setState ({
            userInfo: result.data
        })
    })
  }

  expandColor() {
    this.setState({
      color: true,
      size: false
    })
  }

  expandSize() {
    this.setState({
      size: true,
      color: false
    })
  }

  closeSize() {
    this.setState({
      size: false,
      color: false
    })
  }

  closeColor() {
    this.setState({
      size: false,
      color: false
    })
  }

  colorSelect(color) {
    this.setState({
      selectedColor: color.hex
    },() => console.log(this.state.selectedColor))
  }

  defaultColor() {
    this.setState({
      selectedColor: 'Default'
    })
  }

  purchaseAlert() {
    if(this.state.userInfo.length === 0) {
      window.alert("You must log in to add products to your shopping cart");
    }
    if(this.state.measurements.length === 0) {
      window.alert("You must fill in measurements before adding product to cart");
    }
    else {
      let array = [this.props.link, this.props.product, this.state.measurements, this.state.selectedColor];
      let previous = this.state.userInfo[0].cart;
      if(previous != "") {
        previous = JSON.parse(previous);
      }

      if(previous.length === 0) {
        var container = [];
        container.push(array);
        container = JSON.stringify(container);

        axios.put('/cart', { cart:container, username:this.state.userInfo[0].username })
        .then(() => {
          window.alert("You have successfully added this item to your cart");
          // axios.get('/loggedUser')
          // .then(result => {
          //   console.log(JSON.parse(result.data[0].cart));
          // })
        })
      }
      if(previous.length === 4 && previous[0].length != 4) {
        var container = [];
        container.push(previous);
        container.push(array);
        container = JSON.stringify(container);

        axios.put('/cart', { cart:container, username:this.state.userInfo[0].username })
        .then(() => {
          window.alert("You have successfully added this item to your cart");
        })
      }
      else {
        previous.push(array);
        previous = JSON.stringify(previous);

        axios.put('/cart', { cart:previous, username:this.state.userInfo[0].username })
        .then(() => {
          window.alert("You have successfully added this item to your cart");
        })
      }

    }
  }

  changeShoulder(e) {
    this.setState({
      shoulder: e.target.value
    })
  }

  changeArmhole(e) {
    this.setState({
      armHole: e.target.value
    })
  }

  changeUpperBust(e) {
    this.setState({
      upperBust: e.target.value
    })
  }

  changeAcross(e) {
    this.setState({
      across: e.target.value
    })
  }

  changeBust(e) {
    this.setState({
      bust: e.target.value
    })
  }

  changeUnderBust(e) {
    this.setState({
      underBust: e.target.value
    })
  }

  changeWaist(e) {
    this.setState({
      waist: e.target.value
    })
  }

  changeLowWaist(e) {
    this.setState({
      lowWaist: e.target.value
    })
  }

  changeHip(e) {
    this.setState({
      hip: e.target.value
    })
  }

  changeThigh(e) {
    this.setState({
      thigh: e.target.value
    })
  }

  changeMidThigh(e) {
    this.setState({
      midThigh: e.target.value
    })
  }

  changeKnee(e) {
    this.setState({
      knee: e.target.value
    })
  }

  changeCalf(e){
    this.setState({
      calf: e.target.value
    })
  }

  changeAnkle(e) {
    this.setState({
      ankle: e.target.value
    })
  }

  savingSize() {
    let array = [];

    if(isNaN(this.state.shoulder) === false && this.state.shoulder != "") {
      array.push(this.state.shoulder);

      if(isNaN(this.state.armHole) === false && this.state.armHole != "") {
        array.push(this.state.armHole);

        if(isNaN(this.state.upperBust) === false && this.state.upperBust != "") {
          array.push(this.state.upperBust);

          if(isNaN(this.state.across) === false && this.state.across != "") {
            array.push(this.state.across);

            if(isNaN(this.state.bust) === false && this.state.bust != "") {
              array.push(this.state.bust);

              if(isNaN(this.state.underBust) === false && this.state.underBust != "") {
                array.push(this.state.underBust);

                if(isNaN(this.state.waist) === false && this.state.waist != "") {
                  array.push(this.state.waist);

                  if(isNaN(this.state.lowWaist) === false && this.state.lowWaist != "") {
                    array.push(this.state.lowWaist);

                    if(isNaN(this.state.hip) === false && this.state.hip != "") {
                      array.push(this.state.hip);

                      if(isNaN(this.state.thigh) === false && this.state.thigh != "") {
                        array.push(this.state.thigh);

                        if(isNaN(this.state.midThigh) === false && this.state.midThigh != "") {
                          array.push(this.state.midThigh);

                          if(isNaN(this.state.knee) === false && this.state.knee != "") {
                            array.push(this.state.knee);

                            if(isNaN(this.state.calf) === false && this.state.calf != "") {
                              array.push(this.state.calf);

                              if(isNaN(this.state.ankle) === false && this.state.ankle != "") {
                                array.push(this.state.ankle);
                                this.setState({
                                  measurements: array,
                                  size: false,
                                  color: false
                                })

                                window.alert("Your measurements have been saved!");
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

    else{
      window.alert("Not all measurements have been filled");
    }


  }

  render() {
    if(this.state.size === false && this.state.color === false) {
      return(
        <div>
          <NavBar name={this.props.name}/>
          <div id='currentProduct'>
              <div id='currentImage'>
                <Magnifier src={this.props.link} width={'100%'} height={'100%'}/>
              </div>
              <h2 id='productTitle'>{this.props.product[0]}</h2>
              <img id='underline' src="https://i.ibb.co/ZTY5TmN/underline.png"></img>
              <h3 id='description'>{this.props.product[1]}</h3>
              <img id='underline2' src="https://i.ibb.co/ZTY5TmN/underline.png"></img>
              <div id='sizeContainer' name='closed' onClick={this.expandSize}>
                <h3>select size</h3>
              </div>
              <div id='colorContainer' name='closed' onClick={this.expandColor}>
                <h3>select color</h3>
              </div>
              <button id='cartButton' onClick={this.purchaseAlert}>Add to Cart - ${this.props.product[2]}</button>
              {/* <img id='sizeChart' src="https://i.ibb.co/nC0JMLd/measurement.png"></img> */}
          </div>
          <FooterThree />
        </div>
      );
    }

    if(this.state.size === true && this.state.color === false) {
      return(
        <div>
          <NavBar name={this.props.name}/>
          <div id='currentProduct'>
              <div id='currentImage'>
                <Magnifier src={this.props.link} width={'100%'} height={'100%'}/>
              </div>
              <h2 id='productTitle'>{this.props.product[0]}</h2>
              <img id='underline' src="https://i.ibb.co/ZTY5TmN/underline.png"></img>
              <h3 id='description'>{this.props.product[1]}</h3>
              <img id='underline2' src="https://i.ibb.co/ZTY5TmN/underline.png"></img>
              <div id='sizeContainer2'>
                <img id='sizeChart' src="https://rb.gy/pvf9n2"></img>
                <button id='exit' name='open' onClick={this.closeSize}></button>
              </div>
              <div id='measurementBox'>
                <h2 id='measurementMessage'>{this.state.statement}</h2>
                <h2 id='shoulderTag' onChange={(e) => this.changeShoulder(e)}>Shoulder: <input value={this.state.shoulder} id='shoulderInput' /> in.</h2>
                <h2 id='armholeTag' onChange={(e) => this.changeArmhole(e)}>Armhole: <input value={this.state.armHole} id='shoulderInput' /> in.</h2>
                <h2 id='upperBustTag' onChange={(e) => this.changeUpperBust(e)}>Upper Bust Round: <input value={this.state.upperBust} id='shoulderInput' /> in.</h2>
                <h2 id='acrossTag' onChange={(e) => this.changeAcross(e)}>Across Front: <input value={this.state.across} id='shoulderInput' /> in.</h2>
                <h2 id='bustTag' onChange={(e) => this.changeBust(e)}>Bust Round: <input value={this.state.bust} id='shoulderInput' /> in.</h2>
                <h2 id='underBustTag' onChange={(e) => this.changeUnderBust(e)}>Under Bust Round: <input value={this.state.underBust} id='shoulderInput' /> in.</h2>
                <h2 id='waistTag' onChange={(e) => this.changeWaist(e)}>Waist Round: <input value={this.state.waist} id='shoulderInput' /> in.</h2>
                <h2 id='lowWaistTag' onChange={(e) => this.changeLowWaist(e)}>Low Waist Round: <input value={this.state.lowWaist} id='shoulderInput' /> in.</h2>
                <h2 id='hipTag' onChange={(e) => this.changeHip(e)}>Hip Round: <input value={this.state.hip} id='shoulderInput' /> in.</h2>
                <h2 id='thighTag' onChange={(e) => this.changeThigh(e)}>Thigh Round: <input value={this.state.thigh} id='shoulderInput' /> in.</h2>
                <h2 id='midThighTag' onChange={(e) => this.changeMidThigh(e)}>Mid Thigh Round: <input value={this.state.midThigh} id='shoulderInput' /> in.</h2>
                <h2 id='kneeTag' onChange={(e) => this.changeKnee(e)}>Knee Round: <input value={this.state.knee} id='shoulderInput' /> in.</h2>
                <h2 id='calfTag' onChange={(e) => this.changeCalf(e)}>Calf Round: <input value={this.state.calf} id='shoulderInput' /> in.</h2>
                <h2 id='ankleTag' onChange={(e) => this.changeAnkle(e)}>Ankle Round: <input value={this.state.ankle} id='shoulderInput' /> in.</h2>
                <button id='logMeasure' onClick={this.savingSize}>Save Measurements</button>
              </div>
              <div id='colorContainer' name='closed' onClick={this.expandcolor}>
                <h3>select color</h3>
              </div>
              <button id='cartButton2' onClick={this.purchaseAlert}>Add to Cart - ${this.props.product[2]}</button>
          </div>
          <FooterThree />
        </div>
      );
    }

    if(this.state.color === true && this.state.size === false) {
      return(
        <div>
          <NavBar name={this.props.name}/>
          <div id='currentProduct'>
              <div id='currentImage'>
                <Magnifier src={this.props.link} width={'100%'} height={'100%'}/>
              </div>
              <h2 id='productTitle'>{this.props.product[0]}</h2>
              <img id='underline' src="https://i.ibb.co/ZTY5TmN/underline.png"></img>
              <h3 id='description'>{this.props.product[1]}</h3>
              <img id='underline2' src="https://i.ibb.co/ZTY5TmN/underline.png"></img>
              <div id='sizeContainer' name='closed' onClick={this.closeColor, this.expandSize}>
                <h3>select size</h3>
              </div>
              <div id='colorContainer2' name='closed'>
                <button id='exit2' name='open' onClick={this.closeColor}></button>
                <div id='colorSelector'>
                  <SwatchesPicker
                    color={this.state.selectedColor}
                    onChange={this.colorSelect}
                  />
                </div>
                <div id='selectedColor'>
                  <h3 style={{color: this.state.selectedColor}}>Selected Color: {this.state.selectedColor}</h3>
                </div>
                <button id='default' onClick={this.defaultColor}>Default Color</button>
              </div>
              <button id='cartButton2' onClick={this.purchaseAlert}>Add to Cart - ${this.props.product[2]}</button>
          </div>
          <FooterThree />
        </div>
      );
    }
  }
}

export default CurentProduct;



