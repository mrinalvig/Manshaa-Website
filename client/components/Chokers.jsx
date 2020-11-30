import React from "react";
import NavBar from './NavBar.jsx';
import FooterTwo from './FooterTwo.jsx';

class Chokers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return(
        <div>
            <NavBar />
            <FooterTwo />
        </div>
    );
  }
}

export default Chokers;