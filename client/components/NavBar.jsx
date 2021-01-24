import React from "react";
import axios from 'axios';
import App from './App.jsx';
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
        shoppingBadge2: "shoppingBadge2",
        username: "parker"
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
      axios.post('/loggedIn', {username: this.props.name})
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

  }

  render() {
    return (
      <div id='NavBar'>
          <Link to="/">
            <button id='logo' name='logo' onClick={(e) => this.props.change(e)}></button>
          </Link>
            <div id='categoryBox'>
              <div id='menSelectionBox'>
                <Link to="/men">
                  <button type='button' name ='men' id='men'> MEN </button>
                </Link>
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
              <div id='womenSelectionBox'>
                <button type='button' id='women' onMouseEnter={this.dropWomen} onMouseLeave={this.liftWomen}> WOMEN </button>
                <Link to="/bridal">
                  <button type='button' name='bridal' id='womenSelection' >BRIDAL</button>
                </Link>
                <Link to="/suits">
                  <button type='button' id='womenSelection'>SUITS</button>
                </Link>
                <Link to="/lehenga">
                  <button type='button' id='womenSelection'>LEHANGAS</button>
                </Link>
                  <button type='button' id='womenSelection'>SHARARAS</button>
                <Link to="/bridesMaids">
                  <button type='button' id='womenSelection'>BRIDESMAIDS</button>
                </Link>
                <Link to="/tunics">
                  <button type='button' id='womenSelection'>TUNICS</button>
                </Link>
              </div>
              <div id='jewelrySelectionBox'>
                <button type='button' id='jewelry' onMouseEnter={this.dropJewelry} onMouseLeave={this.liftJewelry}>JEWELRY </button>
                <Link to="/chokers">
                  <button type='button' id='jewelrySelection'>CHOKERS</button>
                </Link>
                <Link to="/necklace">
                  <button type='button' id='jewelrySelection'>NECKLACE</button>
                </Link>
                <Link to="/earings">
                  <button type='button' id='jewelrySelection'>EARINGS</button>
                </Link>
                <Link to="/anklet">
                  <button type='button' id='jewelrySelection'>ANKLET</button>
                </Link>
                <Link to="/bangles">
                  <button type='button' id='jewelrySelection'>BANGLES</button>
                </Link>
                <Link to="/rings">
                  <button type='button' id='jewelrySelection'>RINGS</button>
                </Link>
                <Link to="/mathaPatti">
                  <button type='button' id='jewelrySelection'>MATHA PATTI & MANGTIKKA</button>
                </Link>
                <Link to="/jhumar">
                  <button type='button' id='jewelrySelection'>JHUMAR</button>
                </Link>
                  <button type='button' id='jewelrySelection'>HAND SETS</button>
              </div>
            </div>
          {/* <div id='searchContainer'>
            <div id='searchLogo' />
            <input type='text' id='search' onChange={(e) => this.findSearch(e)} />
          </div> */}
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