import React from "react";
import axios from "axios";
import NavBar from './NavBar.jsx';
import Banner from './Banner.jsx';
import MensPage from './MensPage.jsx';
import Footer from './Footer.jsx';
import FooterTwo from './FooterTwo.jsx';
import FooterThree from './FooterThree.jsx';
import Sherwani from './Sherwani.jsx';
import Shoes from './Shoes.jsx';
import Kurtas from './Kurtas.jsx';
import Bridal from './BridalPage.jsx';
import CurrentProduct from './CurrentProduct.jsx';
import LogIn from './LogIn.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mensPage: false,
      sherwaniPage: false,
      shoesPage: false,
      kurtasPage: false,
      bridalPage: false,
      currentPage: false,
      logIn: false,
      link: "",
      storedUsers: {},
      loggedIn: false
    };
    this.changePage = this.changePage.bind(this);
    this.currentUser = this.currentUser.bind(this);
  }

  componentDidMount() {
    axios.get('/userId')
    .then( result => {
        this.setState ({
            storedUsers: result.data
        })
        // console.log(this.state.storedUsers);
    })
  }

  changePage(e) {
    if(e.target.name === 'men') {
      this.setState ({
        mensPage: true,
        sherwaniPage: false,
        shoesPage: false,
        kurtasPage: false,
        bridalPage: false,
        currentPage: false,
        logIn: false
      })
    }

    if(e.target.name === 'sherwani') {
      this.setState({
        sherwaniPage: true,
        mensPage: false,
        shoesPage: false,
        kurtasPage: false,
        bridalPage: false,
        currentPage: false,
        logIn: false
      })
    }

    if(e.target.name === 'logo') {
      this.setState({
        sherwaniPage: false,
        mensPage: false,
        shoesPage: false,
        kurtasPage: false,
        bridalPage: false,
        currentPage: false,
        logIn: false
      })
    }

    if(e.target.name === 'shoes') {
      this.setState({
        sherwaniPage: false,
        mensPage: false,
        shoesPage: true,
        kurtasPage: false,
        bridalPage: false,
        currentPage: false,
        logIn: false
      })
    }

    if(e.target.name === 'kurtas') {
      this.setState({
        sherwaniPage: false,
        mensPage: false,
        shoesPage: false,
        kurtasPage: true,
        bridalPage: false,
        currentPage: false,
        logIn: false
      })
    }

    if(e.target.name === 'bridal') {
      this.setState ({
        mensPage: false,
        sherwaniPage: false,
        shoesPage: false,
        kurtasPage: false,
        bridalPage: true,
        currentPage: false,
        logIn: false
      })
    }

    if(e.target.name === 'currentPage') {
      this.setState ({
        mensPage: false,
        sherwaniPage: false,
        shoesPage: false,
        kurtasPage: false,
        bridalPage: false,
        currentPage: true,
        link: e.target.src,
        logIn: false
      })
    }

    if(e.target.name === 'logIn') {
      this.setState ({
        mensPage: false,
        sherwaniPage: false,
        shoesPage: false,
        kurtasPage: false,
        bridalPage: false,
        currentPage: false,
        logIn: true
      })
    }
  }

  currentUser(id) {
    console.log(id);
  }

  render() {
    if(this.state.mensPage === false && this.state.sherwaniPage === false && this.state.shoesPage === false && this.state.kurtasPage === false && this.state.bridalPage === false && this.state.currentPage === false && this.state.logIn === false) {
      return (
        <div id="window">
          <NavBar change={this.changePage}/>
          <Banner />
          <Footer />
        </div>
      );
    }

    if(this.state.mensPage === true) {
      return (
        <div id="window">
          <NavBar change={this.changePage}/>
          <MensPage />
          <FooterTwo />
        </div>
      );
    }

    if(this.state.sherwaniPage === true) {
      return(
        <div id="window">
          <NavBar change={this.changePage}/>
          <Sherwani />
          <FooterTwo />
        </div>
      );
    }

    if(this.state.shoesPage === true) {
      return(
        <div id="window">
          <NavBar change={this.changePage}/>
          <Shoes />
          <FooterTwo />
        </div>
      );
    }

    if(this.state.kurtasPage === true) {
      return(
        <div id="window">
          <NavBar change={this.changePage}/>
          <Kurtas />
          <FooterTwo />
        </div>
      );
    }

    if(this.state.bridalPage === true) {
      return(
        <div id="window">
          <NavBar change={this.changePage}/>
          <Bridal change={this.changePage}/>
          <FooterTwo />
        </div>
      );
    }

    if(this.state.currentPage === true) {
      return(
        <div id="window">
          <NavBar change={this.changePage}/>
          <CurrentProduct link={this.state.link}/>
          <Footer />
        </div>
      );
    }

    if(this.state.logIn === true) {
      return(
        <div id="window">
          <NavBar change={this.changePage}/>
          <LogIn users={this.state.storedUsers} current={this.currentUser}/>
          <FooterThree />
        </div>
      );
    }
  }
}

export default App;