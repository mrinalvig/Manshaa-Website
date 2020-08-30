import React from "react";
import MensPage from './MensPage.jsx';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        menDrop: false,
        womenDrop: false,
        jewelryDrop: false,
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
                <div id='logo'></div>
                <button type='button' id='men' onMouseEnter={this.dropMen} onMouseLeave={this.liftMen}>MEN</button>
                <button type='button' id='women' onMouseEnter={this.dropWomen} onMouseLeave={this.liftWomen}>WOMEN</button>
                <button type='button' id='jewelry' onMouseEnter={this.dropJewelry} onMouseLeave={this.liftJewelry}>JEWELRY</button>
                <div id='searchLogo'></div>
                <input type='text' id='search'></input>
                <button type='button' id='profileLogo'></button>
                <button type='button' id='shoppingLogo'></button>
            </div>
          );
      }

      if(this.state.menDrop === true) {
        return (
            <div id='NavBar'>
                <div id='logo'>
                </div>
                <button type='button' name ='men' id='men' onMouseEnter={this.dropMen} onMouseLeave={this.liftMen} onClick={(e) => this.props.change(e)}>
                    MEN
                    <div id='menSelectionBox'>
                        <button type='button' name='sherwani' id='menSelection' onClick={(e) => this.props.change(e)}>SHERWANI</button>
                        <button type='button' id='menSelection'>SHOES</button>
                        <button type='button' id='menSelection'>KURTAS</button>
                    </div>
                </button>
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
              <div id='logo'>
              </div>
              <button type='button' id='men' onMouseEnter={this.dropMen} onMouseLeave={this.liftMen}>MEN</button>
              <button type='button' id='women' onMouseEnter={this.dropWomen} onMouseLeave={this.liftWomen}>
                  WOMEN
                  <div id='womenSelectionBox'>
                        <button type='button' id='womenSelection'>BRIDAL</button>
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
              <div id='logo'>
              </div>
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

    if(this.state.mensPage === true) {
      return(
        // <BrowserRouter>
        //   <Route path="/men" component={MensPage}/>
        // </BrowserRouter>
        <div>Hello</div>
      );
    }
  }
}

export default NavBar;