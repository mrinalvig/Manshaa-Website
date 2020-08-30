import React, {useState} from "react";

class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        slideDeck: ['','','','',''],
        images: ['https://rb.gy/oixi4f', 'https://rb.gy/eef1ol', 'https://rb.gy/oixi4f', 'https://rb.gy/eef1ol', 'https://rb.gy/oixi4f'],
        reviews: ['https://i.ibb.co/4S0Stp5/review1.png', 'https://i.ibb.co/G97pWvr/review2.png', 'https://i.ibb.co/LpygKPs/review3.png', 'https://i.ibb.co/jZ1VY43/review4.png', 'https://i.ibb.co/n8yDzp7/review5.png'],
        x: 0,
        x2: 0
    };
    this.goLeft = this.goLeft.bind(this);
    this.goRight = this.goRight.bind(this);
    this.styling = this.styling.bind(this);
  }

  componentDidMount() {
      setInterval (() => {
        this.goRight();2
      }, 3000);
  }

  goLeft() {
      if(this.state.x < 0) {
          this.setState ({
              x: this.state.x + 100
          })
      }

      if(this.state.x2 < 0) {
          this.setState ({
              x2: this.state.x2 +100
          })
      }
  }

  goRight() {
      if(this.state.x >= -400) {
          this.setState ({
              x: this.state.x - 100
          })
      }

      if(this.state.x < -400) {
        this.setState ({
            x: 0
        })
      }

      if(this.state.x2 >= -400) {
        this.setState ({
            x2: this.state.x2 - 100
        })
      }

      if(this.state.x2 < -400) {
        this.setState ({
            x2: 0
        })
      }
  }

  styling () {
    {
        transform: translateX(this.state.x)
    }
  }

  render() {
    return (
        <div>
            <div id='banner'>
                {
                    this.state.slideDeck.map((item, index) => (
                        <div key={index} id="slide"  style={{backgroundImage: `url(${this.state.images[index]})`, transform: `translateX(${this.state.x}%)`,}}>
                            {item}
                        </div>
                    ))
                }
                <button type='button' id='leftButton' onClick={this.goLeft}></button>
                <button type='button' id='rightButton' onClick={this.goRight}></button>
            </div>
            {/* <h2 id='styles'>Check Out Our Styles</h2> */}
            <div id='types'>
                <div id='leftBox' />
                <div id='middleBox' />
                <div id='rightBox' />
            </div>
            <div id='yourOwn'>
                <h2 id='traditional'>Traditional</h2>
                <h2 id='fusion'>Fusion</h2>
                <h2 id='western'>Western</h2>
            </div>
            {/* <h2 id='reviewTitle'>Reviews</h2> */}
            <div id='reviews'>
                {
                    this.state.slideDeck.map((item, index) => (
                        <div key={index} id="slide2"  style={{backgroundImage: `url("${this.state.reviews[index]}")`, transform: `translateX(${this.state.x2}%)`,}}>
                            {item}
                        </div>
                    ))
                }
                <button type='button' id='leftButton2' onClick={this.goLeft}></button>
                <button type='button' id='rightButton2' onClick={this.goRight}></button>
            </div>
        </div>
    );
  }
}

export default Banner;