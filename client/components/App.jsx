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
import MathaPatti from './MathaPatti.jsx';
import LogIn from './LogIn.jsx';
import Shopping from './Shopping.jsx';
import Jhumar from './Jhumar.jsx';
import SemiFormals from './SemiFormals.jsx';
import Formals from './Formals.jsx';
import Tunics from './Tunics.jsx';
import Chokers from './Chokers.jsx';
import Bangles from './Bangles.jsx';
import Necklace from './Necklace.jsx';
import Earings from './Earings.jsx';
import Rings from './Rings.jsx';
import Anklet from './Anklet.jsx';
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
      productInfo: [],
      currentUser: ""
    };
    this.currentUser = this.currentUser.bind(this);
    this.setLink = this.setLink.bind(this);
    this.productContent = this.productContent.bind(this);
    this.returnName = this.returnName.bind(this);
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

  returnName(){
    return (this.state.username);
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
            <Route path="/jhumar" component={() => <Jhumar name={this.state.username} />} />
            <Route path="/mathaPatti" component={() => <MathaPatti name={this.state.username} />} />
            <Route path="/rings" component={() => <Rings name={this.state.username} />} />
            <Route path="/bangles" component={() => <Bangles name={this.state.username} />} />
            <Route path="/anklet" component={() => <Anklet name={this.state.username} />} />
            <Route path="/earings" component={() => <Earings name={this.state.username} />} />
            <Route path="/necklace" component={() => <Necklace name={this.state.username} change={(e) => this.setLink(e)} content={this.productContent}/>} />
            <Route path="/chokers" component={() => <Chokers name={this.state.username} />} />
            <Route path="/tunics" component={() => <Tunics name={this.state.username} />} />
            <Route path="/bridesMaids" component={() => <BridesMaids name={this.state.username} />} />
            <Route path="/lehangas" component={() => <Formals name={this.state.username} />} />
            <Route path="/suits" component={() => <SemiFormals name={this.state.username} />} />
            <Route path="/checkout" component={() => <Checkout name={this.state.username} />} />
            <Route path="/shoppingCart" component={() => <Shopping name={this.state.username} />} />
            <Route path="/logIn" component={() => <LogIn users={this.state.storedUsers} currentUser={this.state.currentUser} current={this.currentUser} name={this.state.username}/>} />
            <Route path="/product" component={() => <CurrentProduct name={this.state.username} product={this.state.productInfo} link={this.state.link}/>} />
            <Route path="/kurtas" component={() => <Kurtas name={this.state.username} />} />
            <Route path="/shoes" component={() => <Shoes name={this.state.username} />} />
            <Route path="/sherwani" component={() => <Sherwani name={this.state.username} />} />
            <Route path="/bridal" component={() => <Bridal name={this.state.username} change={(e) => this.setLink(e)} content={this.productContent}/>} />
            <Route path="/men" component={() => <MensPage name={this.state.username} />} />
            <Route exact path="/" component={() => <Banner name={this.state.username}/>} />
          </Switch>
        </Router>
      );
  }
}

export default App;