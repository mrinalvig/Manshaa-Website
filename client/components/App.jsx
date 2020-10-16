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
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      link: "",
      storedUsers: {},
      loggedIn: false,
      username: ""
    };
    this.currentUser = this.currentUser.bind(this);
    this.setLink = this.setLink.bind(this);
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

  render() {
      return (
        <Router>
          <Switch>
            <Route path="/logIn" component={() => <LogIn users={this.state.storedUsers} current={this.currentUser} name={this.state.username}/>} />
            <Route path="/product" component={() => <CurrentProduct link={this.state.link}/>} />
            <Route path="/kurtas" component={() => <Kurtas />} />
            <Route path="/shoes" component={() => <Shoes />} />
            <Route path="/sherwani" component={() => <Sherwani />} />
            <Route path="/bridal" component={() => <Bridal change={(e) => this.setLink(e)}/>} />
            <Route path="/men" component={() => <MensPage />} />
            <Route exact path="/" component={() => <Banner />} />
          </Switch>
        </Router>
      );
  }
}

export default App;