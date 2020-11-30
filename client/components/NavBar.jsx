import React from "react";
import axios from 'axios';
import MensPage from './MensPage.jsx';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logIn from './LogIn.jsx';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        menDrop: false,
        womenDrop: false,
        jewelryDrop: false,
        cart: [],
        shoppingBadge: "shoppingBadge",
        shoppingBadge2: "shoppingBadge2"
    };
    this.dropMen = this.dropMen.bind(this);
    this.liftMen = this.liftMen.bind(this);
    this.dropWomen = this.dropWomen.bind(this);
    this.liftWomen = this.liftWomen.bind(this);
    this.dropJewelry = this.dropJewelry.bind(this);
    this.liftJewelry = this.liftJewelry.bind(this);
    this.cartNumber = this.cartNumber.bind(this);
    this.checkBadge = this.checkBadge.bind(this);
    this.findSearch = this.findSearch.bind(this);
  }

  componentDidMount() {
    // setInterval(() => {
      axios.get('/loggedUser')
      .then(result => {
          this.setState ({
              cart: JSON.parse(result.data[0].cart),
          })
      })
    // }, 500);
  }

  dropMen() {
    this.setState ({
        menDrop: true
    })
  }
  liftMen() {
    this.setState ({
        menDrop: false
    })
  }
  dropWomen() {
    this.setState ({
        womenDrop: true
    })
  }
  liftWomen() {
    this.setState ({
        womenDrop: false
    })
  }
  dropJewelry() {
    this.setState ({
        jewelryDrop: true
    })
  }
  liftJewelry() {
    this.setState ({
        jewelryDrop: false
    })
  }

  cartNumber() {
    if(this.state.cart.length === 0) {
      return ("");
    }
    else{
      return (this.state.cart.length);
    }
  }

  checkBadge(){
    if(this.state.cart.length === 0) {
      return (this.state.shoppingBadge2);
    } else {
      return (this.state.shoppingBadge);
    }
  }

  findSearch(e) {
    console.log(e.target.value);
  }

  render() {
    return (
      <div id='NavBar'>
          <Link to="/">
            <button id='logo' name='logo' onClick={(e) => this.props.change(e)}></button>
          </Link>
          <Link to="/men">
            <button type='button' name ='men' id='men' onMouseEnter={this.dropMen} onMouseLeave={this.liftMen} >
              MEN
              <div id='menSelectionBox'>
                <Link to='/sherwani'>
                  <button type='button' name='sherwani' id='menSelection' >SHERWANI</button>
                </Link>
                <Link to='/shoes'>
                  <button type='button' name='shoes' id='menSelection' >SHOES</button>
                </Link>
                <Link to='/kurtas'>
                  <button type='button' name='kurtas' id='menSelection' >KURTAS</button>
                </Link>
              </div>
            </button>
          </Link>
          <button type='button' id='women' onMouseEnter={this.dropWomen} onMouseLeave={this.liftWomen}>
            WOMEN
            <div id='womenSelectionBox'>
              <Link to="/bridal">
                <button type='button' name='bridal' id='womenSelection' >BRIDAL</button>
              </Link>
              <Link to="/semiFormals">
                <button type='button' id='womenSelection'>SEMI FORMALS</button>
              </Link>
              <Link to="/formals">
                <button type='button' id='womenSelection'>FORMALS</button>
              </Link>
              <Link to="/bridesMaids">
                <button type='button' id='womenSelection'>BRIDESMAIDS</button>
              </Link>
              <Link to="/tunics">
                <button type='button' id='womenSelection'>TUNICS</button>
              </Link>
            </div>
          </button>
          <button type='button' id='jewelry' onMouseEnter={this.dropJewelry} onMouseLeave={this.liftJewelry}>
              JEWELRY
              <div id='jewelrySelectionBox'>
                <button type='button' id='jewelrySelection'>CHOKERS</button>
                <button type='button' id='jewelrySelection'>NECKLACE</button>
                <button type='button' id='jewelrySelection'>EARINGS</button>
                <button type='button' id='jewelrySelection'>ANKLET</button>
                <button type='button' id='jewelrySelection'>BANGLES</button>
                <button type='button' id='jewelrySelection'>RINGS</button>
                <button type='button' id='jewelrySelection'>MATHA PATTI & MANGTIKKA</button>
                <button type='button' id='jewelrySelection'>JHUMAR</button>
              </div>
          </button>
          <div id='searchLogo'></div>
          <input type='text' id='search' onChange={(e) => this.findSearch(e)}></input>
          <Link to='/logIn'>
            <button type='button' name='logIn' id='profileLogo' />
          </Link>
          <Link to='/shoppingCart'>
            <div id={this.checkBadge()}>{this.cartNumber()}</div>
            <button type='button' id='shoppingLogo' />
          </Link>
      </div>
    );
  }
}

export default NavBar;