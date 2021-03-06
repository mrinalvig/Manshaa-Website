import React from "react";
import axios from "axios";
import NavBar from './NavBar.jsx';
import FooterThree from './FooterThree.jsx';

class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        images: [],
        signUp: false,
        signedInUser: "",
        username: "",
        password: "",
        hiddenPassword: "",
        rePassword: "",
        signUpError: "",
        storedUsers: {},
        signedIn: false
    };
    this.signUp = this.signUp.bind(this);
    this.enterUsername = this.enterUsername.bind(this);
    this.enterPassword = this.enterPassword.bind(this);
    this.enterRePassword = this.enterRePassword.bind(this);
    this.signUpClick = this.signUpClick.bind(this);
    this.logInClick = this.logInClick.bind(this);
    this.logOutClick2 = this.logOutClick2.bind(this);
    this.logOutClick = this.logOutClick.bind(this);
    this.changeState = this.changeState.bind(this);
  }

  componentDidMount() {
    axios.get('/logged')
    .then( result => {
        this.setState ({
            signedInUser: this.props.name
        })
    })
  }

  signUp(e) {
    this.setState({
        username: "",
        password: "",
        rePassword: ""
    })
    if(e.target.name === 'signUp') {
        this.setState({
            signUp: true
        })
    }
    if(e.target.name === 'logIn') {
        this.setState({
            signUp: false
        })
    }
  }

  enterUsername(e) {
    this.setState({
        username: e.target.value
    })
  }

  enterPassword(e) {
    this.setState({
        password: e.target.value
    })
  }

  enterRePassword(e) {
    this.setState({
        rePassword: e.target.value
    })
  }

  signUpClick(){
    if(this.state.password != this.state.rePassword) {
        this.setState({
            signUpError: " *Error! Your passwords don't match. Try again!"
        })
    }
    else if(this.state.password === this.state.rePassword) {
        this.setState({
            signUpError: ""
        })
    }

    if(this.state.username === "" || this.state.password === "" || this.state.rePassword === "") {
        this.setState({
            signUpError: "*Error! You have not entered all parameters!"
        })
    }
    else if(this.state.username != "" && this.state.password != "" && this.state.rePassword != "" && this.state.password === this.state.rePassword) {
        this.setState({
            signUpError: "",
            signedIn: true,
            signUp: false,
            signedInUser: this.state.username
        })
        axios.post('/userId', {
            username: this.state.username,
            password: this.state.password,
            logged: "yes"
        })
        this.props.current(this.state.username);
    }
  }

  logInClick(){
    if(this.state.username === "" || this.state.password === "") {
        this.setState({
            signUpError: "*Error! You have not entered all parameters!"
        })
    } else {
        this.setState({
            signUpError: ""
        })
    }

    for(var i = 0; i < this.props.users.length; i++) {
        if(this.props.users[i].username === this.state.username && this.props.users[i].password === this.state.password) {
            this.setState({
                signUpError: "",
                signedIn: true,
                signUp: false
            });
            axios.put('/userId', {
                username: this.state.username,
                logged: "yes"
            })
            .then(() => {
                this.props.current(this.state.username);
            })
        }
        else{
            this.setState({
                signUpError: "* Your Username or Password is incorrect. Try again."
            })
        }
    }
  }

  logOutClick() {
    if(this.props.users[i].username === this.state.signedInUser) {
        axios.put('/userId', {
            username: this.state.signedInUser,
            logged: "no"
        })
        .then( result => {
            this.setState ({
                signedInUser: "",
                signedIn: false,
                password: "",
                hiddenPassword: ""
            })
        })
        .then(() => {
            this.props.logOut();
        })
    }
  }

  logOutClick2(){
    axios.put('/userId', {
        username: this.props.name,
        logged: "no"
    })
    .then( result => {
        this.setState ({
            signedInUser: "",
            signedIn: false
        })
    })
    .then(() => {
        this.props.logOut();
    })
  }

  changeState() {
    this.props.current(this.state.username);
    //console.log(this.state.loggedInUser);
  }

  render() {
      if(this.state.signedInUser === "" && this.state.signUp === false && this.state.signedIn === false) {
          return (
              <div>
                  <NavBar name={this.props.name}/>
                  <div id='logInBox'>
                      <div id='titleBox'> <h2 id='logInTitle'>Log In</h2> </ div>
                      <div id='logInSection'>
                          <h2 id='signUpError'>{this.state.signUpError}</h2>
                          <div id="usernameBlock">
                            <h2 id='userName'>Username</h2>
                            <input type="text" id='username' onChange={(e) => this.enterUsername(e)} />
                          </div>
                          <div id="passwordBlock">
                            <h2 id='passWord'>Password</h2><input type="password" id='password' onChange={(e) => this.enterPassword(e)}></input>
                          </div>
                          <button id='loginButton' onClick={this.logInClick}>Log In!</button>
                      </div>
                      <div id='accountMessage'>
                        <h2 id='signUp'>Don't have an account yet?
                            <button id='signUpButton' name='signUp' onClick={(e) => this.signUp(e)}>Sign Up!</button>
                        </h2>
                      </div>
                  </div>
                  <FooterThree />
              </div>
          );
      }

      if(this.state.signUp === true && this.state.signedIn === false) {
        return (
            <div>
                <NavBar name={this.props.name}/>
                <div id='signUpBox'>
                    <div id='titleBox'> <h2 id='logInTitle2'>Sign Up</h2> </ div>
                    <div id='signUpSection'>
                        <h2 id='signUpError'>{this.state.signUpError}</h2>
                        {/* <div id='userColumn'>

                        </div> */}
                        <div id='userColumn2'>
                            <h2 id='userName2'>Username</h2>
                            <input type="text" id='username2' onChange={(e) => this.enterUsername(e)}></input>
                            <h2 id='passWord2'>Password</h2>
                            <input type="text" id='password2' onChange={(e) => this.enterPassword(e)}></input>
                            <h2 id='reenter'>Re-enter Password</h2>
                            <input type="text" id='reEnter' onChange={(e) => this.enterRePassword(e)}></input>
                        </div>
                        <button id='loginButton2' onClick={this.signUpClick}>Sign Up!</button>
                    </div>
                    <div id='accountMessage2'>
                        <h2 id='signUp2'>Already a user?
                            <button id='signUpButton2' name='logIn' onClick={(e) => this.signUp(e)}>Log In!</button>
                        </h2>
                    </div>
                </div>
                <FooterThree />
            </div>
        );
      }

      if(this.state.signUp === false && this.state.signedIn === true) {
        return (
            <div>
                <NavBar name={this.props.name}/>
                <div id='logInBox'>
                    <div id='titleBox'> <h2 id='successTitle'>Success!</h2> </ div>
                    <div id='logInSection'>
                        <h2 id='successMessage'>You have successfully logged in! <br /> Welcome {this.state.username}!</h2>
                    </div>
                    <div id='accountMessage'>
                        <button id='signUpButton3' name='logOut' onClick={this.logOutClick}>Log Out!</button>
                    </ div>
                </div>
                <FooterThree />
            </div>
        );
      }

      if(this.props.name != "") {
        return (
            <div>
                <NavBar name={this.props.name}/>
                <div id='logInBox'>
                    <div id='titleBox'> <h2 id='successTitle'>Success!</h2> </ div>
                    <div id='logInSection'>
                        <h2 id='successMessage'>You are logged in! <br /> Welcome {this.state.signedInUser}!</h2>
                    </div>
                    <div id='accountMessage'>
                        <button id='signUpButton3' name='logOut' onClick={this.logOutClick2}>Log Out!</button>
                    </ div>
                </div>
                <FooterThree />
            </div>
        );
      }
  }
}

export default LogIn;



