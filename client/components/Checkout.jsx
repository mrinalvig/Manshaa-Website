import React from "react";
import axios from "axios";
import NavBar from './NavBar.jsx';
import FooterThree from './FooterThree.jsx';
//toast.configure();

class Checkout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: [],
            cart: [],
            username: "",
            totalValue: 0,
            tax: 0,
            totalPrice: 0,
            shippingVal: 0,
            myInfo: false,
            shipping: false,
            payment: false,
            email: "",
            FirstnameEntry: "",
            LastnameEntry: "",
            line1Entry: "",
            line2Entry: "",
            cityEntry: "",
            stateEntry: "",
            zipEntry: "",
            cardNumber: "",
            expireEntry: "",
            cvvEntry: ""
        };
        this.changeBox = this.changeBox.bind(this);
        this.myInfoContent = this.myInfoContent.bind(this);
        this.shippingContent = this.shippingContent.bind(this);
        this.paymentContent = this.paymentContent.bind(this);
        this.confirmPurchase = this.confirmPurchase.bind(this);
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
                price += image[1][2];
            })
            this.setState({
                totalValue: price,
                tax: ((price * 9.5) * .01).toFixed(2),
            }, () => {
                this.setState({
                totalPrice: ((price + (price * 9.5) * .01)).toFixed(2)
                })
            })
        })
    }

    changeBox(e){
        if(e.target.id === 'myInfoCollapse'){
            this.setState({
                myInfo: true,
                shipping: false,
                payment: false
            })
        }

        if(e.target.id === 'shippingCollapse') {
            this.setState({
                myInfo: false,
                shipping: true,
                payment: false
            })
        }

        if(e.target.id === 'paymentCollapse') {
            this.setState({
                myInfo: false,
                shipping: false,
                payment: true
            })
        }

        if(e.target.name === 'minus') {
            this.setState({
                myInfo: false,
                shipping: false,
                payment: false
            })
        }
    }

    myInfoContent(e){
        this.setState({
            email: e.target.value
        })
    }

    shippingContent(e) {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    paymentContent(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    confirmPurchase(){
        let shipping = [];
        let payment = [];

        shipping.push(this.state.FirstnameEntry);
        shipping.push(this.state.LastnameEntry);
        shipping.push(this.state.line1Entry);
        shipping.push(this.state.line2Entry);
        shipping.push(this.state.cityEntry);
        shipping.push(this.state.stateEntry);
        shipping.push(this.state.zipEntry);
        payment.push(this.state.FirstnameEntry);
        payment.push(this.state.LastnameEntry);
        payment.push(this.state.cardNumber);
        payment.push(this.state.expireEntry);
        payment.push(this.state.cvvEntry);

        if(this.state.email != "") {
            if(shipping[0] != "" && shipping[1] != "" && shipping[2] != "" && shipping[4] != "" && shipping[5] != "" && shipping[6] != ""){
                if(payment[0] != "" && payment[1] != "" && payment[2] != "" && payment[3] != "" && payment[4] != "" ){
                    window.alert("Purchase Confirmed");
                } else{
                    window.alert("It seems that not all entries have been made");
                }
            } else {
                window.alert("It seems that not all entries have been made");
            }
        } else{
            window.alert("It seems that not all entries have been made");
        }
    }

    render() {
        if(this.state.myInfo === false && this.state.shipping === false && this.state.payment === false) {
            return (
                <div>
                    <NavBar name={this.props.name} />
                    <div id='checkoutPage'>
                        <div id='myInfoBox'>
                            <h2 id='myInfo'>MY INFORMATION</h2>
                            <button id='myInfoCollapse' onClick={e => this.changeBox(e)}>+</button>
                        </div>
                        <div id='shippingBox' >
                            <h2 id='shippingInfo'>SHIPPING</h2>
                            <button id='shippingCollapse' onClick={e => this.changeBox(e)}>+</button>
                        </div>
                        <div id='paymentBox' >
                            <h2 id='paymentInfo'>PAYMENT</h2>
                            <button id='paymentCollapse' onClick={e => this.changeBox(e)}>+</button>
                        </div>
                        <div id='purchaseBox'>
                            <h2 id='discountCode'>YOUR ORDER</h2>
                            <h2 id='orderValue'>Order Value <h2 id='valueNumber'>${this.state.totalValue}.00</h2></h2>
                            <h2 id='orderTax'> Tax <h2 id='taxNumber'>${this.state.tax}</h2></h2>
                            <h2 id='bar'>_________________________________________________</h2>
                            <h2 id='orderTotal'> Total <h2 id='totalNumber'>${this.state.totalPrice}</h2></h2>
                            <button id='checkoutProceed' onClick={this.confirmPurchase}>CONFIRM PURCHASE</button>
                        </div>
                    </div>
                    <FooterThree />

                </div>
            );
        }
        if(this.state.myInfo === true) {
            return (
                <div>
                    <NavBar name={this.props.name} />
                    <div id='checkoutPage'>
                        <div id='myInfoBox2'>
                            <h2 id='myInfo'>MY INFORMATION</h2>
                            <button id='myInfoCollapse' name='minus' onClick={e => this.changeBox(e)}>-</button>
                            <h2 id='enterEmail'>Email*</h2>
                            <input id='emailEntry' onChange={e => this.myInfoContent(e)} value={this.state.email} ></input>
                        </div>
                        <div id='shippingBox' >
                            <h2 id='shippingInfo'>SHIPPING</h2>
                            <button id='shippingCollapse' name='minus' onClick={e => this.changeBox(e)}>+</button>
                        </div>
                        <div id='paymentBox' >
                            <h2 id='paymentInfo'>PAYMENT</h2>
                            <button id='paymentCollapse' name='minus' onClick={e => this.changeBox(e)}>+</button>
                        </div>
                        <div id='purchaseBox'>
                            <h2 id='discountCode'>YOUR ORDER</h2>
                            <h2 id='orderValue'>Order Value <h2 id='valueNumber'>${this.state.totalValue}.00</h2></h2>
                            <h2 id='orderTax'> Tax <h2 id='taxNumber'>${this.state.tax}</h2></h2>
                            <h2 id='bar'>_________________________________________________</h2>
                            <h2 id='orderTotal'> Total <h2 id='totalNumber'>${this.state.totalPrice}</h2></h2>
                            <button id='checkoutProceed' onClick={this.confirmPurchase}>CONFIRM PURCHASE</button>
                        </div>
                    </div>
                    <FooterThree />

                </div>
            );
        }

        if(this.state.shipping === true) {
            return (
                <div>
                    <NavBar name={this.props.name} />
                    <div id='checkoutPage'>
                        <div id='myInfoBox'>
                            <h2 id='myInfo'>MY INFORMATION</h2>
                            <button id='myInfoCollapse' onClick={e => this.changeBox(e)}>+</button>
                        </div>
                        <div id='shippingBox2' >
                            <h2 id='shippingInfo'>SHIPPING</h2>
                            <button id='shippingCollapse' name='minus' onClick={e => this.changeBox(e)}>-</button>
                            <h2 id='shippingFirstname'>First name*</h2>
                            <h2 id='shippingLastname'>Last name*</h2>
                            <input id='FirstnameEntry' onChange={e => this.shippingContent(e)} value={this.state.FirstnameEntry}></input>
                            <input id='LastnameEntry' onChange={e => this.shippingContent(e)} value={this.state.LastnameEntry}></input>
                            <h2 id='addressLine1'>Address line 1*</h2>
                            <input id='line1Entry' onChange={e => this.shippingContent(e)} value={this.state.line1Entry}></input>
                            <h2 id='addressLine2'>Address line 2</h2>
                            <input id='line2Entry' onChange={e => this.shippingContent(e)} value={this.state.line2Entry}></input>
                            <h2 id='shippingCity'>City*</h2>
                            <input id='cityEntry' onChange={e => this.shippingContent(e)} value={this.state.cityEntry}></input>
                            <h2 id='shippingState'>State*</h2>
                            <input id='stateEntry' onChange={e => this.shippingContent(e)} value={this.state.stateEntry}></input>
                            <h2 id='shippingZip'>Zip code*</h2>
                            <input id='zipEntry' onChange={e => this.shippingContent(e)} value={this.state.zipEntry}></input>
                        </div>
                        <div id='paymentBox' >
                            <h2 id='paymentInfo'>PAYMENT</h2>
                            <button id='paymentCollapse' onClick={e => this.changeBox(e)}>+</button>
                        </div>
                        <div id='purchaseBox'>
                            <h2 id='discountCode'>YOUR ORDER</h2>
                            <h2 id='orderValue'>Order Value <h2 id='valueNumber'>${this.state.totalValue}.00</h2></h2>
                            <h2 id='orderTax'> Tax <h2 id='taxNumber'>${this.state.tax}</h2></h2>
                            <h2 id='bar'>_________________________________________________</h2>
                            <h2 id='orderTotal'> Total <h2 id='totalNumber'>${this.state.totalPrice}</h2></h2>
                            <button id='checkoutProceed' onClick={this.confirmPurchase}>CONFIRM PURCHASE</button>
                        </div>
                    </div>
                    <FooterThree />

                </div>
            );
        }

        if(this.state.payment === true) {
            return (
                <div>
                    <NavBar name={this.props.name}/>
                    <div id='checkoutPage'>
                        <div id='myInfoBox'>
                            <h2 id='myInfo'>MY INFORMATION</h2>
                            <button id='myInfoCollapse' onClick={e => this.changeBox(e)}>+</button>
                        </div>
                        <div id='shippingBox' >
                            <h2 id='shippingInfo'>SHIPPING</h2>
                            <button id='shippingCollapse' onClick={e => this.changeBox(e)}>+</button>
                        </div>
                        <div id='paymentBox2' >
                            <h2 id='paymentInfo'>PAYMENT</h2>
                            <button id='paymentCollapse' name='minus'onClick={e => this.changeBox(e)}>-</button>
                            <h2 id='shippingFirstname'>First name*</h2>
                            <h2 id='shippingLastname'>Last name*</h2>
                            <input id='FirstnameEntry' value={this.state.FirstnameEntry}></input>
                            <input id='LastnameEntry' value={this.state.LastnameEntry}></input>
                            <h2 id='addressLine1'>Card number*</h2>
                            <input id='line1Entry' name='cardNumber' value={this.state.cardNumber} onChange={e => this.paymentContent(e)}></input>
                            <h2 id='addressLine2'>Expiration date*</h2>
                            <h2 id='shoppingCvv'>CVV*</h2>
                            <input id='expireEntry' value={this.state.expireEntry} name='expireEntry' onChange={e => this.paymentContent(e)}></input>
                            <input id='cvvEntry' value={this.state.cvvEntry} name='cvvEntry' onChange={e => this.paymentContent(e)}></input>
                            <img id='paymentImage' src="https://i.ibb.co/WD2vkzB/payment.png"></img>
                        </div>
                        <div id='purchaseBox'>
                            <h2 id='discountCode'>YOUR ORDER</h2>
                            <h2 id='orderValue'>Order Value <h2 id='valueNumber'>${this.state.totalValue}.00</h2></h2>
                            <h2 id='orderTax'> Tax <h2 id='taxNumber'>${this.state.tax}</h2></h2>
                            <h2 id='bar'>_________________________________________________</h2>
                            <h2 id='orderTotal'> Total <h2 id='totalNumber'>${this.state.totalPrice}</h2></h2>
                            <button id='checkoutProceed' onClick={this.confirmPurchase}>CONFIRM PURCHASE</button>
                        </div>
                    </div>
                    <FooterThree />

                </div>
            );
        }
    }
}

export default Checkout;