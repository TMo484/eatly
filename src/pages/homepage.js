import React from 'react';
import PageHeader from '../components/headers/pageHeader';
import NavigationButton from '../components/buttons/navigationButton';
import { SEARCH_INGREDIENT } from '../redux/reducer';

class Homepage extends React.Component {

    render() {
        return (
            <div className="outer">
                <PageHeader/>
                <div className="content vertically_spaced">
                    <NavigationButton buttonType = "navigation_button" label="Explore by Cuisine" target="explore"/>
                    <NavigationButton buttonType = "navigation_button" label="Browse by Category" target="browse"/>
                    <NavigationButton buttonType = "navigation_button" label="Search by Ingredient" target={SEARCH_INGREDIENT}/>
                </div>
            </div>
        )
    }
}

export default Homepage;