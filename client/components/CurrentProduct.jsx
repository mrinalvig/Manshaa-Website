import React from "react";
import { SwatchesPicker } from 'react-color';
import Magnifier from "react-magnifier";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class CurentProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: false,
      color: false,
      price: Math.floor((Math.random() * 100) + 20),
      selectedColor: 'Default',
      props: {width: 390, height: 515, offset: {horizontal: 70}, zoomWidth: 390, img: this.props.link}
    };
    this.expandSize = this.expandSize.bind(this);
    this.closeSize = this.closeSize.bind(this);
    this.expandColor = this.expandColor.bind(this);
    this.closeColor = this.closeColor.bind(this);
    this.colorSelect = this.colorSelect.bind(this);
    this.defaultColor = this.defaultColor.bind(this);
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

  render() {
    if(this.state.size === false && this.state.color === false) {
      return(
          <div id='currentProduct'>
              <div id='currentImage'>
                <Magnifier src={this.props.link} width={'100%'} height={'100%'}/>
              </div>
              <h2 id='productTitle'>Product Title</h2>
              <img id='underline' src="https://i.ibb.co/ZTY5TmN/underline.png"></img>
              <h3 id='description'>The bride wears a wedding sari or a lehenga according to the region. Red is considered to be the most auspicious color among Hindus. While the saree is preferred as the bridal dress in South India, West, East India, most brides of other parts of India prefer Lehenga, Gagra Choli and Odni as bridal dresses.</h3>
              <img id='underline2' src="https://i.ibb.co/ZTY5TmN/underline.png"></img>
              <div id='sizeContainer' name='closed' onClick={this.expandSize}>
                <h3>select size</h3>
              </div>
              <div id='colorContainer' name='closed' onClick={this.expandColor}>
                <h3>select color</h3>
              </div>
              <button id='cartButton'>Add to Cart - ${this.state.price}</button>
              {/* <img id='sizeChart' src="https://i.ibb.co/nC0JMLd/measurement.png"></img> */}
          </div>
      );
    }

    if(this.state.size === true && this.state.color === false) {
      return(
          <div id='currentProduct'>
              <div id='currentImage'>
                <Magnifier src={this.props.link} width={'100%'} height={'100%'}/>
              </div>
              <h2 id='productTitle'>Product Title</h2>
              <img id='underline' src="https://i.ibb.co/ZTY5TmN/underline.png"></img>
              <h3 id='description'>The bride wears a wedding sari or a lehenga according to the region. Red is considered to be the most auspicious color among Hindus. While the saree is preferred as the bridal dress in South India, West, East India, most brides of other parts of India prefer Lehenga, Gagra Choli and Odni as bridal dresses.</h3>
              <img id='underline2' src="https://i.ibb.co/ZTY5TmN/underline.png"></img>
              <div id='sizeContainer2'>
                <img id='sizeChart' src="https://i.ibb.co/nC0JMLd/measurement.png"></img>
                <button id='exit' name='open' onClick={this.closeSize}></button>
                <input id='armInput' type="text"></input>
              </div>
              <div id='colorContainer' name='closed' onClick={this.expandcolor}>
                <h3>select color</h3>
              </div>
              <button id='cartButton2'>Add to Cart - ${this.state.price}</button>
          </div>
      );
    }

    if(this.state.color === true && this.state.size === false) {
      return(
          <div id='currentProduct'>
              <div id='currentImage'>
                <Magnifier src={this.props.link} width={'100%'} height={'100%'}/>
              </div>
              <h2 id='productTitle'>Product Title</h2>
              <img id='underline' src="https://i.ibb.co/ZTY5TmN/underline.png"></img>
              <h3 id='description'>The bride wears a wedding sari or a lehenga according to the region. Red is considered to be the most auspicious color among Hindus. While the saree is preferred as the bridal dress in South India, West, East India, most brides of other parts of India prefer Lehenga, Gagra Choli and Odni as bridal dresses.</h3>
              <img id='underline2' src="https://i.ibb.co/ZTY5TmN/underline.png"></img>
              <div id='sizeContainer' name='closed'>
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
              <button id='cartButton2'>Add to Cart - ${this.state.price}</button>
          </div>
      );
    }
  }
}

export default CurentProduct;



