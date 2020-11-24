import React from "react";
import axios from "axios";
import NavBar from './NavBar.jsx';
import FooterThree from './FooterThree.jsx';

class Checkout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: [],
            cart: [],
            username: "",
            totalValue: 0,
            tax: 0,
            totalPrice: 0
        };
      }

    componentDidMount() {
        var array = [];
        var price = 0;
        axios.get('/loggedUser')
        .then(result => {
            this.setState ({
                userInfo: result.data,
                cart: JSON.parse(result.data[0].cart),
                username: result.data[0].username
            })
        })
        .then(() => {
            this.state.cart.map((image, index) => {
                array.push(image);
                price += image[1][2];
            })
            this.setState({
                measurements: array,
                totalValue: price,
                tax: ((price * 9.5) * .01).toFixed(2),
            }, () => {
                this.setState({
                totalPrice: ((price + (price * 9.5) * .01)).toFixed(2)
                })
            })
        })
    }

    render() {
        return (
            <div>
                <NavBar />
                <div id='checkoutPage'>

                </div>
                <FooterThree />

            </div>
        );
    }
}

export default Checkout;