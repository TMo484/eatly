import React from 'react';
import { Link } from 'react-router-dom';

class RecipeCard extends React.Component {
    render() {
        return (
            <Link to={{pathname: "/recipe", search: `recipeid=${this.props.recipe.id}`}}>
                <div className="recipe_card">
                    <div className="recipe_image">
                        <img src={this.props.recipe.image} alt={this.props.recipe.title} className="recipe_image"/>
                    </div>
                    <div className="recipe_title">{this.props.recipe.title}</div>
                </div>
            </Link>
        )
    }
}

export default RecipeCard;