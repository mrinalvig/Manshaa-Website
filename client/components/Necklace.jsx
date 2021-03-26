import React from "react";
import NavBar from './NavBar.jsx';
import FooterTwo from './FooterTwo.jsx';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Necklace extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        men: [],
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

    axios.get('/necklace')
    .then(result => {
        this.setState({
            men: result.data
            // images: imgs,
            // images2: imgs2,
            // images3: imgs3
        },() => {
            let array = [];
            let array2 = [];
            let array3 = [];
            let array4 = [];
            let ammount = result.data.length;

            for(var i = 0; i < ammount; i++) {
                array.push(result.data[i].title);
                array2.push(result.data[i].description);
                array3.push(result.data[i].price);
                array4.push(result.data[i].category);
            }

            this.setState({
                titles: array,
                descriptions: array2,
                prices: array3,
                category: array4
            })
        })
    })

  }

  changePage(e) {
    let array = [];

    array.push(this.state.titles[e.target.name]);
    array.push(this.state.descriptions[e.target.name]);
    array.push(this.state.prices[e.target.name]);
    array.push(this.state.category[e.target.name]);

    this.props.content(array);
    this.props.change(e);
  }

  render() {
    return (
        <div>
          <NavBar name={this.props.name} />
            <div id='menPage'>
              {this.state.men.map((image, index) => (
                  <div id='productContainer'>
                    <Link to='/product'>
                      <img id='productImage' name={index} src={image.images} onClick={(e) => this.changePage(e)} />
                    </Link>
                  </div>
              ))}
            </div>
          <FooterTwo />
        </div>
    );
  }
}

export default Necklace;