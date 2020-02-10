import React from 'react';

class RecipeCard extends React.Component {
    render() {
        return (
            <div className="recipe_card">
                <div className="recipe_image">
                    <img src={this.props.recipe.image} alt={this.props.recipe.title} className="recipe_image"/>
                </div>
                <div className="recipe_title">{this.props.recipe.title}</div>
            </div>
        )
    }
}

export default RecipeCard;