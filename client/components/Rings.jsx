import React from "react";
import axios from 'axios';
import CurrentProduct from './CurrentProduct.jsx';
import NavBar from './NavBar.jsx';
import FooterTwo from './FooterTwo.jsx';
import { Link } from 'react-router-dom';

class Rings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        images: [],
        bridal: [],
        titles: [],
        descriptions: [],
        prices: []
    };
    this.changePage = this.changePage.bind(this);
  }

  componentDidMount() {
    let imgs = [];
    let title = [];
    let description = [];
    let price = [];

    axios.get('/rings')
    .then( result => {
      this.setState ({
        bridal: result.data
      })
    })
    .then(result => {
      for(var i = 0; i < this.state.bridal.length; i++) {
        imgs.push(this.state.bridal[i].images);
        title.push(this.state.bridal[i].title);
        description.push(this.state.bridal[i].description);
        price.push(this.state.bridal[i].price);

      }
      this.setState ({
        images: imgs,
        titles: title,
        descriptions: description,
        prices: price
      })
    })

  }

  changePage(e) {
    let array = [];

    array.push(this.state.titles[e.target.name]);
    array.push(this.state.descriptions[e.target.name]);
    array.push(this.state.prices[e.target.name]);

    this.props.content(array);
    this.props.change(e);
  }

  render() {
    return (
        <div>
          <NavBar name={this.props.name} />
            <div id='mensPage'>
              {this.state.images.map((image, index) => (
                  <div id='productContainer'>
                    <Link to='/product'>
                      <img id='productImage' name={index} src={image} onClick={(e) => this.changePage(e)} />
                    </Link>
                  </div>
              ))}
            </div>
          <FooterTwo />
        </div>
    );
  }
}

export default Rings;



