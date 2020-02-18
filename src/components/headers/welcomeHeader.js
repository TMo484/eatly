import React from 'react';
// import eatly_splash from '../../assets/eatly_splash_tmori.jpg';

class WelcomeHeader extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="welcome_header header">
                    {/* <img src={eatly_splash} alt="A set dining table with food"/> */}
                    <div className="centered_caption" id="welcome_header_text">Welcome to <span className="eatly_font">eatly</span></div>
                </div>
            </React.Fragment>
        )
    }
}

export default WelcomeHeader;