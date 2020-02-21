import React from 'react';
import NavigationButton from '../buttons/navigationButton';
import { HOMEPAGE } from '../../redux/reducer';

class PageHeader extends React.Component {

    handleGoBack() {
            window.history.back()
    }

    render() {
        return (
            <React.Fragment>
                <div className="header page_header horizontally_spaced">
                    <div className="header_section"></div>
                    <i class="fas fa-arrow-left fa-3x" onClick={this.handleGoBack.bind(this)}></i>
                    <NavigationButton buttonType="header_button" route="/find" label="Recipe Search" target={ HOMEPAGE }/>
                    <NavigationButton buttonType="header_button" route="/planning" label="Meal Planning" target="LOGINPAGE"/>
                    <NavigationButton buttonType="header_button" route="/grocery" label="Grocery List" target="LOGINPAGE"/>
                    <div className="header_section"></div>
                </div>
            </React.Fragment>
        )
    }
}

export default PageHeader;