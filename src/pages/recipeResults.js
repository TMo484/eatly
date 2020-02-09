import React from 'react';
import PageHeader from '../components/headers/pageHeader';
import RecipeList from '../components/content/recipeList';

class RecipeResultsPage extends React.Component {
    render() {
        return (
            <div className="outer">
                <PageHeader/>
                <RecipeList/>
            </div>
        )
    }
}

export default RecipeResultsPage;