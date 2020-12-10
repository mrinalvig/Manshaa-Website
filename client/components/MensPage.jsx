import React from "react";
import axios from 'axios';
import NavBar from './NavBar.jsx';
import FooterTwo from './FooterTwo.jsx';

class MensPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        men: [],
        images: [],
        images2: [],
        images3: [],
        pageOne: true,
        pageTwo: false,
        pageThree: false
    };
    this.changePage = this.changePage.bind(this);
  }

  componentDidMount() {
    var imgs = ['https://rb.gy/8sjn6x', 'https://rb.gy/p2vbmd', 'https://rb.gy/g8agtw', 'https://rb.gy/qmz5hs', 'https://rb.gy/fqpsuq', 'https://rb.gy/6iknsm', 'https://rb.gy/l28w3q', 'https://rb.gy/vzcdgp', 'https://rb.gy/e9hsvb', 'https://rb.gy/adrven', 'https://rb.gy/8sjn6x', 'https://rb.gy/p2vbmd', 'https://rb.gy/g8agtw', 'https://rb.gy/qmz5hs', 'https://rb.gy/fqpsuq', 'https://rb.gy/6iknsm', 'https://rb.gy/l28w3q', 'https://rb.gy/vzcdgp', 'https://rb.gy/e9hsvb', 'https://rb.gy/adrven', 'https://rb.gy/8sjn6x', 'https://rb.gy/p2vbmd', 'https://rb.gy/g8agtw', 'https://rb.gy/qmz5hs', 'https://rb.gy/fqpsuq', 'https://rb.gy/6iknsm', 'https://rb.gy/l28w3q', 'https://rb.gy/vzcdgp', 'https://rb.gy/e9hsvb', 'https://rb.gy/adrven'];

    var imgs2 = ['https://rb.gy/l28w3q', 'https://rb.gy/vzcdgp', 'https://rb.gy/e9hsvb', 'https://rb.gy/adrven', 'https://rb.gy/8sjn6x', 'https://rb.gy/p2vbmd', 'https://rb.gy/g8agtw', 'https://rb.gy/qmz5hs', 'https://rb.gy/fqpsuq', 'https://rb.gy/6iknsm', 'https://rb.gy/l28w3q', 'https://rb.gy/vzcdgp', 'https://rb.gy/e9hsvb', 'https://rb.gy/adrven', 'https://rb.gy/8sjn6x', 'https://rb.gy/p2vbmd', 'https://rb.gy/g8agtw', 'https://rb.gy/qmz5hs', 'https://rb.gy/fqpsuq', 'https://rb.gy/6iknsm', 'https://rb.gy/l28w3q', 'https://rb.gy/vzcdgp', 'https://rb.gy/e9hsvb', 'https://rb.gy/adrven', 'https://rb.gy/8sjn6x', 'https://rb.gy/p2vbmd', 'https://rb.gy/g8agtw', 'https://rb.gy/qmz5hs', 'https://rb.gy/fqpsuq', 'https://rb.gy/6iknsm'];

    var imgs3 = ['https://rb.gy/p2vbmd', 'https://rb.gy/g8agtw', 'https://rb.gy/qmz5hs', 'https://rb.gy/fqpsuq', 'https://rb.gy/6iknsm', 'https://rb.gy/l28w3q', 'https://rb.gy/vzcdgp', 'https://rb.gy/e9hsvb', 'https://rb.gy/adrven', 'https://rb.gy/8sjn6x', 'https://rb.gy/p2vbmd', 'https://rb.gy/g8agtw', 'https://rb.gy/qmz5hs', 'https://rb.gy/fqpsuq', 'https://rb.gy/6iknsm', 'https://rb.gy/l28w3q', 'https://rb.gy/vzcdgp', 'https://rb.gy/e9hsvb', 'https://rb.gy/adrven', 'https://rb.gy/8sjn6x', 'https://rb.gy/p2vbmd', 'https://rb.gy/g8agtw', 'https://rb.gy/qmz5hs', 'https://rb.gy/fqpsuq', 'https://rb.gy/6iknsm', 'https://rb.gy/l28w3q', 'https://rb.gy/vzcdgp', 'https://rb.gy/e9hsvb', 'https://rb.gy/adrven', 'https://rb.gy/8sjn6x'];

    axios.get('/men')
    .then(result => {
        this.setState({
            men: result.data,
            images: imgs,
            images2: imgs2,
            images3: imgs3
        })
    })
  }

  changePage(e) {
    if(e.target.id === 'page1') {
        this.setState ({
            pageOne: true,
            pageTwo: false,
            pageThree: false
        })
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }

    if(e.target.id === 'page2') {
        this.setState ({
            pageOne: false,
            pageTwo: true,
            pageThree: false
        })
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }

    if(e.target.id === 'page3') {
        this.setState ({
            pageOne: false,
            pageTwo: false,
            pageThree: true
        })
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }
  }

  render() {
      if(this.state.pageOne === true) {
          return (
              <div id='mensTransition'>
                  <NavBar name={this.props.name} change={this.props.change} />
                  <div id='mensPage'>
                      {this.state.images.map((image, index) => (
                          <div id='productContainer'>
                              <img id='productImage' src={image}></img>
                          </div>
                      ))}
                  </div>
                  <button id='page1' onClick={(e) => this.changePage(e)}>1</button>
                  <button id='page2' onClick={(e) => this.changePage(e)}>2</button>
                  <button id='page3' onClick={(e) => this.changePage(e)}>3</button>
                  <FooterTwo />
              </div>
          );
      }

      if(this.state.pageTwo === true) {
        return (
            <div>
                <NavBar name={this.props.name} change={this.props.change} />
                <div id='mensPage'>
                    {this.state.images2.map((image, index) => (
                        <div id='productContainer'>
                            <img id='productImage' src={image}></img>
                        </div>
                    ))}
                </div>
                <button id='page1' onClick={(e) => this.changePage(e)}>1</button>
                <button id='page2' onClick={(e) => this.changePage(e)}>2</button>
                <button id='page3' onClick={(e) => this.changePage(e)}>3</button>
                <FooterTwo />
            </div>
        );
      }

      if(this.state.pageThree === true) {
        return (
            <div>
                <NavBar name={this.props.name} change={this.props.change} />
                <div id='mensPage'>
                    {this.state.images3.map((image, index) => (
                        <div id='productContainer'>
                            <img id='productImage' src={image}></img>
                        </div>
                    ))}
                </div>
                <button id='page1' onClick={(e) => this.changePage(e)}>1</button>
                <button id='page2' onClick={(e) => this.changePage(e)}>2</button>
                <button id='page3' onClick={(e) => this.changePage(e)}>3</button>
                <FooterTwo />
            </div>
        );
      }
  }
}

export default MensPage;