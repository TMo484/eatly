import React from 'react';
import PageHeader from '../components/headers/pageHeader';
import CuisineList from '../components/content/ToBeDeleted_cuisineList';

class ExploreCuisinePage extends React.Component {
    render() {
        return (
            <div className="outer">
                <PageHeader/>
                <CuisineList/>
            </div>

        )
    }
}

export default ExploreCuisinePage;