import React from 'react';
import WelcomeHeader from '../components/headers/welcomeHeader';
import NavigationButton from '../components/buttons/navigationButton';

class WelcomePage extends React.Component {

    render() {
        return (
            <div class="outer">
                <WelcomeHeader/>
                <div className="content vertically_spaced">
                    <NavigationButton label="Login" target="Login"/>
                    <NavigationButton label="Visit as Guest" target="Welcome"/>
                </div>
            </div>
        )
    }
}

export default WelcomePage