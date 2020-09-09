import React from "react";

class CurentProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: false,
      color: false
    };
    this.expandSize = this.expandSize.bind(this);
    this.closeSize = this.closeSize.bind(this);
    this.expandColor = this.expandColor.bind(this);
    this.closeColor = this.closeColor.bind(this);
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

  render() {
    if(this.state.size === false && this.state.color === false) {
      return(
          <div id='currentProduct'>
              <img id='currentImage' src={this.props.link}></img>
              <h2 id='productTitle'>Product Title</h2>
              <img id='underline' src="https://i.ibb.co/ZTY5TmN/underline.png"></img>
              <h3 id='description'>The bride wears a wedding sari or a lehenga according to the region. Red is considered to be the most auspicious color among Hindus. While the saree is preferred as the bridal dress in South India, West, East India, most brides of other parts of India prefer Lehenga, Gagra Choli and Odni as bridal dresses.</h3>
              <img id='underline2' src="https://i.ibb.co/ZTY5TmN/underline.png"></img>
              <div id='sizeContainer' name='closed' onClick={this.expandSize}>
                <h3>size</h3>
              </div>
              <div id='colorContainer' name='closed' onClick={this.expandColor}>
                <h3>color</h3>
              </div>
              {/* <img id='sizeChart' src="https://i.ibb.co/nC0JMLd/measurement.png"></img> */}
          </div>
      );
    }

    if(this.state.size === true && this.state.color === false) {
      return(
          <div id='currentProduct'>
              <img id='currentImage' src={this.props.link}></img>
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
                <h3>color</h3>
              </div>
          </div>
      );
    }

    if(this.state.color === true && this.state.size === false) {
      return(
          <div id='currentProduct'>
              <img id='currentImage' src={this.props.link}></img>
              <h2 id='productTitle'>Product Title</h2>
              <img id='underline' src="https://i.ibb.co/ZTY5TmN/underline.png"></img>
              <h3 id='description'>The bride wears a wedding sari or a lehenga according to the region. Red is considered to be the most auspicious color among Hindus. While the saree is preferred as the bridal dress in South India, West, East India, most brides of other parts of India prefer Lehenga, Gagra Choli and Odni as bridal dresses.</h3>
              <img id='underline2' src="https://i.ibb.co/ZTY5TmN/underline.png"></img>
              <div id='sizeContainer' name='closed' onClick={this.expandSize}>
                <h3>size</h3>
              </div>
              <div id='colorContainer2' name='closed' onClick={this.expandSize}>
                <button id='exit2' name='open' onClick={this.closeColor}></button>
              </div>
          </div>
      );
    }
  }
}

export default CurentProduct;



