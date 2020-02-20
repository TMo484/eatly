import React from 'react';
import PageHeader from '../components/headers/pageHeader';
import Recipe from '../components/content/recipe';

class RecipePage extends React.Component {
    render() {
        return (
            <div className="outer">
                <PageHeader/>
                <Recipe/>
            </div>
        )
    }
}

export default RecipePage;