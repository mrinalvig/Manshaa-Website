import React from "react";
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
        jewelryDrop: false
    };
    this.dropMen = this.dropMen.bind(this);
    this.liftMen = this.liftMen.bind(this);
    this.dropWomen = this.dropWomen.bind(this);
    this.liftWomen = this.liftWomen.bind(this);
    this.dropJewelry = this.dropJewelry.bind(this);
    this.liftJewelry = this.liftJewelry.bind(this);
  }

  componentDidMount() {
    // this.setState({
    //   mensPage: false
    // })
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

  render() {
      if(this.state.menDrop === false && this.state.womenDrop === false && this.state.jewelryDrop === false) {
          return (
            <div id='NavBar'>
                <Link to="/">
                  <button id='logo' name='logo' onClick={(e) => this.props.change(e)}></button>
                </Link>
                <button type='button' id='men' onMouseEnter={this.dropMen} onMouseLeave={this.liftMen}>MEN</button>
                <button type='button' id='women' onMouseEnter={this.dropWomen} onMouseLeave={this.liftWomen}>WOMEN</button>
                <button type='button' id='jewelry' onMouseEnter={this.dropJewelry} onMouseLeave={this.liftJewelry}>JEWELRY</button>
                <div id='searchLogo'></div>
                <input type='text' id='search'></input>
                <Link to='/logIn'>
                  <button type='button' name='logIn' id='profileLogo' />
                </Link>
                <Link to='/shoppingCart'>
                  <button type='button' id='shoppingLogo' />
                </Link>
            </div>
          );
      }

      if(this.state.menDrop === true) {
        return (
            <div id='NavBar'>
                <button id='logo' name='logo' />
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
                <button type='button' id='women'>WOMEN</button>
                <button type='button' id='jewelry'>JEWELRY</button>
                <div id='searchLogo'></div>
                <input type='text' id='search'></input>
                <button type='button' id='profileLogo'></button>
                <button type='button' id='shoppingLogo'></button>
            </div>
          );
      }

      if(this.state.womenDrop === true) {
        return (
          <div id='NavBar'>
              <button id='logo' name='logo' />
              <button type='button' id='men' onMouseEnter={this.dropMen} onMouseLeave={this.liftMen}>MEN</button>
              <button type='button' id='women' onMouseEnter={this.dropWomen} onMouseLeave={this.liftWomen}>
                  WOMEN
                  <div id='womenSelectionBox'>
                        <Link to="/bridal">
                          <button type='button' name='bridal' id='womenSelection' >BRIDAL</button>
                        </Link>
                        <button type='button' id='womenSelection'>SEMI FORMALS</button>
                        <button type='button' id='womenSelection'>FORMALS</button>
                        <button type='button' id='womenSelection'>BRIDESMAIDS</button>
                        <button type='button' id='womenSelection'>TUNICS</button>
                  </div>
              </button>
              <button type='button' id='jewelry'>JEWELRY</button>
              <div id='searchLogo'></div>
                <input type='text' id='search'></input>
              <button type='button' id='profileLogo'></button>
              <button type='button' id='shoppingLogo'></button>
          </div>
        );
    }

    if(this.state.jewelryDrop === true) {
        return (
          <div id='NavBar'>
              <button id='logo' name='logo' />
              <button type='button' id='men' onMouseEnter={this.dropMen} onMouseLeave={this.liftMen}>MEN</button>
              <button type='button' id='women' onMouseEnter={this.dropWomen} onMouseLeave={this.liftWomen}>WOMEN</button>
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
                <input type='text' id='search'></input>
              <button type='button' id='profileLogo'></button>
              <button type='button' id='shoppingLogo'></button>
          </div>
        );
    }
  }
}

export default NavBar;