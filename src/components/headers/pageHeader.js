import React from 'react';
import NavigationButton from '../buttons/navigationButton';
import { HOMEPAGE } from '../../redux/reducer';

class PageHeader extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="header page_header horizontally_spaced">
                    <div className="header_section"></div>
                    <NavigationButton buttonType="header_button" label="Recipe Search" target={HOMEPAGE}/>
                    <NavigationButton buttonType="header_button" label="Meal Planning" target="LOGINPAGE"/>
                    <NavigationButton buttonType="header_button" label="Grocery List" target="LOGINPAGE"/>
                    <div className="header_section"></div>
                </div>
            </React.Fragment>
        )
    }
}

export default PageHeader;