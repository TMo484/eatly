import React from 'react';
import WelcomeHeader from '../components/headers/welcomeHeader';
import NavigationButton from '../components/buttons/navigationButton';
import { HOMEPAGE } from '../redux/reducer';

class WelcomePage extends React.Component {

    render() {
        return (
            <div class="outer">
                <WelcomeHeader/>
                <div className="content vertically_spaced">
                    <NavigationButton label="Login" target="LOGINPAGE"/>
                    <NavigationButton label="Visit as Guest" target={HOMEPAGE}/>
                </div>
            </div>
        )
    }
}

export default WelcomePage