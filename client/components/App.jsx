import React from "react";
import NavBar from './NavBar.jsx';
import Banner from './Banner.jsx';
import MensPage from './MensPage.jsx';
import Footer from './Footer.jsx';
import FooterTwo from './FooterTwo.jsx';
import Sherwani from './Sherwani.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mensPage: false,
      sherwaniPage: false
    };
    this.changePage = this.changePage.bind(this);
  }

  changePage(e) {
    if(e.target.name === 'men') {
      this.setState ({
        mensPage: true,
        sherwaniPage: false
      })
    }

    if(e.target.name === 'sherwani') {
      this.setState({
        sherwaniPage: true,
        mensPage: false
      })
    }

    if(e.target.name === 'logo') {
      this.setState({
        sherwaniPage: false,
        mensPage: false
      })
    }
  }

  render() {
    if(this.state.mensPage === false && this.state.sherwaniPage === false) {
      return (
        <div id="window">
          <NavBar change={this.changePage}/>
          <Banner />
          <Footer />
        </div>
      );
    }

    if(this.state.mensPage === true && this.state.sherwaniPage === false) {
      return (
        <div id="window">
          <NavBar change={this.changePage}/>
          <MensPage />
          <FooterTwo />
        </div>
      );
    }

    if(this.state.sherwaniPage === true && this.state.mensPage === false) {
      return(
        <div id="window">
          <NavBar change={this.changePage}/>
          <Sherwani />
          <FooterTwo />
        </div>
      );
    }
  }
}

export default App;