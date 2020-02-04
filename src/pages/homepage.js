import React from 'react';
import PageHeader from '../components/headers/pageHeader';
import NavigationButton from '../components/buttons/navigationButton';

class Homepage extends React.Component {

    render() {
        return (
            <div className="outer">
                <PageHeader/>
                <div className="content vertically_spaced">
                    <NavigationButton label="Explore by Cuisine" target="explore"/>
                    <NavigationButton label="Browse by Category" target="browse"/>
                    <NavigationButton label="Search by Ingredient" target="search"/>
                </div>
            </div>
        )
    }
}

export default Homepage;