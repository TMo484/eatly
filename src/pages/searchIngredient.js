import React from 'react';
import PageHeader from '../components/headers/pageHeader';
import RecipeSearch from '../components/content/recipeSearch';

class SearchIngredientPage extends React.Component {
    render() {
        return (
            <div className="outer">
                <PageHeader/>
                <RecipeSearch/>
            </div>
        )
    }
}

export default SearchIngredientPage;