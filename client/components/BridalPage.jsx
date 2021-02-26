import React from "react";
import axios from 'axios';
import CurrentProduct from './CurrentProduct.jsx';
import NavBar from './NavBar.jsx';
import FooterTwo from './FooterTwo.jsx';
import { Link } from 'react-router-dom';

class BridalPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        images: [],
        bridal: [],
        bridal1: [],
        bridal2: [],
        titles: [],
        descriptions: [],
        prices: [],
        page1: 'true',
    };
    this.changePage = this.changePage.bind(this);
    this.changeSelection = this.changeSelection.bind(this);
    this.changeSelection2 = this.changeSelection2.bind(this);
  }

  componentDidMount() {
    let imgs = [];
    let title = [];
    let description = [];
    let price = [];

    axios.get('/bridal')
    .then( result => {
      this.setState ({
        bridal: result.data
      })
    })
    .then(result => {
      let bridalHalf = [];
      let bridalHalf2 = [];

      for(let i = 0; i < this.state.bridal.length; i++) {
        if(i > 29) {
          bridalHalf2.push(this.state.bridal[i].images);
        } else {
          bridalHalf.push(this.state.bridal[i].images);
        }
        // console.log(bridalHalf2);
      }
      for(let i = 0; i < this.state.bridal.length; i++) {
        imgs.push(this.state.bridal[i].images);
        title.push(this.state.bridal[i].title);
        description.push(this.state.bridal[i].description);
        price.push(this.state.bridal[i].price);

      }
      this.setState ({
        images: imgs,
        titles: title,
        descriptions: description,
        prices: price,
        bridal1: bridalHalf,
        bridal2: bridalHalf2
      })
    })

  }

  changePage(e) {
    let array = [];

    array.push(this.state.titles[e.target.name]);
    array.push(this.state.descriptions[e.target.name]);
    array.push(this.state.prices[e.target.name]);

    this.props.content(array);
    this.props.change(e);
  }

  changeSelection() {
    this.setState({
      page1: 'true'
    })
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  changeSelection2() {
    this.setState({
      page1: 'false'
    })
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  render() {
    if(this.state.page1 === 'true') {
      return (
          <div>
            <NavBar name={this.props.name} />
              <div id='mensPage'>
                {this.state.bridal1.map((image, index) => (
                    <div id='productContainer'>
                      <Link to='/product'>
                        <img id='productImage' name={index} src={image} onClick={(e) => this.changePage(e)} />
                      </Link>
                    </div>
                ))}
              </div>
              <button id='page1' onClick={this.changeSelection}>1</button>
              <button id='page2' onClick={this.changeSelection2}>2</button>
              {/* <button id='page3' onClick={(e) => this.changePage(e)}>3</button> */}
            <FooterTwo />
          </div>
      );
    }

    if(this.state.page1 === 'false') {
      return (
          <div>
            <NavBar name={this.props.name} />
              <div id='mensPage'>
                {this.state.bridal2.map((image, index) => (
                    <div id='productContainer'>
                      <Link to='/product'>
                        <img id='productImage' name={index} src={image} onClick={(e) => this.changePage(e)} />
                      </Link>
                    </div>
                ))}
              </div>
              <button id='page1' onClick={this.changeSelection}>1</button>
              <button id='page2' onClick={this.changeSelection2}>2</button>
              {/* <button id='page3' onClick={(e) => this.changePage(e)}>3</button> */}
            <FooterTwo />
          </div>
      );
    }

    // if(this.state.page3 === true) {
    //   return (
    //       <div>
    //         <NavBar name={this.props.name} />
    //           <div id='mensPage'>
    //             {this.state.bridal1.map((image, index) => (
    //                 <div id='productContainer'>
    //                   <Link to='/product'>
    //                     <img id='productImage' name={index} src={image} onClick={(e) => this.changePage(e)} />
    //                   </Link>
    //                 </div>
    //             ))}
    //           </div>
    //           <button id='page1' onClick={(e) => this.changePage(e)}>1</button>
    //           <button id='page2' onClick={(e) => this.changePage(e)}>2</button>
    //           <button id='page3' onClick={(e) => this.changePage(e)}>3</button>
    //         <FooterTwo />
    //       </div>
    //   );
    // }
  }
}

export default BridalPage;



