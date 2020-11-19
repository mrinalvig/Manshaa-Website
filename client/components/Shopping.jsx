import React from "react";
import axios from "axios";
import NavBar from './NavBar.jsx';
import FooterThree from './FooterThree.jsx';

class Shopping extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        userInfo: []
    };
  }

  componentDidMount() {
    axios.get('/loggedUser')
    .then(result => {
        this.setState ({
            userInfo: result.data
        })
        console.log(result.data);
    })
  }

  render() {
    if(this.state.userInfo.length === 0) {
        return (
        <div>
            <NavBar />
            <div id='shoppingLog'>
                <div id='shoppingMessage'>
                    <h2 id='shoppingLine'>You must log in to view your shopping cart</h2>
                </div>
            </div>
            <FooterThree />
        </div>
        );
    }

    else {
        return (
          <div>
              <NavBar />
              <div id='shoppingContainer'>
                  <h2 id='shoppingTitle'>Shopping Cart</h2>
              </div>
              <FooterThree />
          </div>
        );
    }
  }
}

export default Shopping;