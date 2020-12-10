import React from "react";
import NavBar from './NavBar.jsx';
import FooterTwo from './FooterTwo.jsx';

class Kurtas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return(
        <div>
            <NavBar name={this.props.name}/>
            <FooterTwo />
        </div>
    );
  }
}

export default Kurtas;