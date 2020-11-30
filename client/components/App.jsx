import React from "react";
import axios from "axios";
import NavBar from './NavBar.jsx';
import Banner from './Banner.jsx';
import MensPage from './MensPage.jsx';
import Footer from './Footer.jsx';
import FooterTwo from './FooterTwo.jsx';
import FooterThree from './FooterThree.jsx';
import Checkout from './Checkout.jsx';
import Sherwani from './Sherwani.jsx';
import Shoes from './Shoes.jsx';
import Kurtas from './Kurtas.jsx';
import Bridal from './BridalPage.jsx';
import CurrentProduct from './CurrentProduct.jsx';
import LogIn from './LogIn.jsx';
import Shopping from './Shopping.jsx';
import SemiFormals from './SemiFormals.jsx';
import Formals from './Formals.jsx';
import Tunics from './Tunics.jsx';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from 'react-router-dom';
import BridesMaids from "./BridesMaids.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      link: "",
      storedUsers: {},
      loggedIn: false,
      username: "",
      productInfo: []
    };
    this.currentUser = this.currentUser.bind(this);
    this.setLink = this.setLink.bind(this);
    this.productContent = this.productContent.bind(this);
  }

  componentDidMount() {
    axios.get('/userId')
    .then( result => {
        this.setState ({
            storedUsers: result.data
        })
        // console.log(this.state.storedUsers);
    })
    axios.put('/logOut');
  }

  currentUser(name) {
    this.setState({
      username: name
    })
  }

  setLink(e) {
    this.setState({
      link: e.target.src
    })
  }

  productContent(array) {
    this.setState({
      productInfo: array
    })
  }

  render() {
      return (
        <Router>
          <Switch>
            <Route path="/tunics" component={() => <Tunics />} />
            <Route path="/bridesMaids" component={() => <BridesMaids />} />
            <Route path="/formals" component={() => <Formals />} />
            <Route path="/semiFormals" component={() => <SemiFormals />} />
            <Route path="/checkout" component={() => <Checkout />} />
            <Route path="/shoppingCart" component={() => <Shopping />} />
            <Route path="/logIn" component={() => <LogIn users={this.state.storedUsers} current={this.currentUser} name={this.state.username}/>} />
            <Route path="/product" component={() => <CurrentProduct product={this.state.productInfo} link={this.state.link}/>} />
            <Route path="/kurtas" component={() => <Kurtas />} />
            <Route path="/shoes" component={() => <Shoes />} />
            <Route path="/sherwani" component={() => <Sherwani />} />
            <Route path="/bridal" component={() => <Bridal change={(e) => this.setLink(e)} content={this.productContent}/>} />
            <Route path="/men" component={() => <MensPage />} />
            <Route exact path="/" component={() => <Banner />} />
          </Switch>
        </Router>
      );
  }
}

export default App;