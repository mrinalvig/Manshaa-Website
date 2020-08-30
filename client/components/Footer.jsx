import React from "react";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.redirect = this.redirect.bind(this);
  }

  redirect(e) {
      if(e.target.id === 'facebookBox') {
        window.open('https://www.facebook.com/manshaaobsession/', '_blank');
      }

      if(e.target.id === 'instagramBox') {
        window.open('https://www.instagram.com/manshaaobsession/?hl=en', '_blank');
      }
  }

  render() {
    return(
        <div id='footer'>
            <h2 id='links'>Links</h2>
            <h2 id='contacts'>Contact Info</h2>
            <button type='button' id='facebookBox' onClick={(e) => this.redirect(e)}/>
            <button type='button' id='instagramBox' onClick={(e) => this.redirect(e)}/>
            <button type='button' id='mailBox' />
            <button type='button' id='phoneBox' />
            <h2 id='email'>manshaa@live.com</h2>
            <h2 id='phone'>(562) 402-7525</h2>
        </div>
    );
  }
}

export default Footer;