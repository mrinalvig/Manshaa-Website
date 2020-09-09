import React from "react";
import axios from 'axios';
import CurrentProduct from './CurrentProduct.jsx';

class BridalPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        images: []
    };
    this.changePage = this.changePage.bind(this);
  }

  componentDidMount() {
    var imgs = ['https://i.ibb.co/T0HGrtd/1.jpg', 'https://i.ibb.co/hCLJ51c/2.jpg', 'https://i.ibb.co/3pBd2NJ/3.jpg', 'https://i.ibb.co/MhJHFM0/4.jpg', 'https://i.ibb.co/NVcDDRN/5.jpg', 'https://i.ibb.co/FXff6Hy/6.jpg', 'https://i.ibb.co/FXff6Hy/6.jpg', 'https://i.ibb.co/ngFqS2p/8.jpg', 'https://i.ibb.co/jLBTtjs/9.jpg', 'https://i.ibb.co/mT0Z9wD/10.jpg', 'https://i.ibb.co/s5rbGRW/11.jpg', 'https://i.ibb.co/TPgCJhy/12.png', 'https://i.ibb.co/pxwc5nd/13.jpg', 'https://i.ibb.co/VMVGPgM/14.jpg', 'https://i.ibb.co/MSyPybz/15.jpg', 'https://i.ibb.co/gz4nkPT/16.jpg', 'https://i.ibb.co/ZVc2YBF/17.jpg', 'https://i.ibb.co/3dQhFn9/18.jpg', 'https://i.ibb.co/tzrmGCG/20.jpg', 'https://i.ibb.co/KmwRV7h/21.jpg', 'https://i.ibb.co/S5mBbpm/22.jpg', 'https://i.ibb.co/BzBCCMW/23.jpg', 'https://i.ibb.co/BGvg7rP/24.jpg', 'https://i.ibb.co/LPjy44h/25.jpg', 'https://i.ibb.co/VNLBJdB/26.jpg', 'https://i.ibb.co/cXXV7gY/27.jpg', 'https://i.ibb.co/nwt0HVP/28.jpg', 'https://i.ibb.co/GV2rTMp/29.jpg', 'https://rb.gy/e9hsvb', 'https://rb.gy/adrven'];

    this.setState ({
        images: imgs
    })
  }

  changePage(e) {
    this.props.change(e);
  }

  render() {
    return (
        <div>
            <div id='mensPage'>
                {this.state.images.map((image, index) => (
                    <div id='productContainer'>
                        <img id='productImage' name='currentPage' src={image} onClick={(e) => this.changePage(e)}></img>
                    </div>
                ))}
            </div>
        </div>
    );
  }
}

export default BridalPage;



