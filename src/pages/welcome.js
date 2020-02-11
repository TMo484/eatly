import React from 'react';
import WelcomeHeader from '../components/headers/welcomeHeader';
import NavigationButton from '../components/buttons/navigationButton';
import { HOMEPAGE } from '../redux/reducer';

class WelcomePage extends React.Component {

    render() {
        return (
            <div className="outer">
                <WelcomeHeader/>
                <div className="content vertically_spaced">
                    <NavigationButton buttonType = "navigation_button" route="/login" label="Login" target="LOGINPAGE"/>
                    <NavigationButton buttonType = "navigation_button" route="/find" label="Visit as Guest" target={HOMEPAGE}/>
                </div>
            </div>
        )
    }
}

export default WelcomePage