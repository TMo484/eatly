import React from 'react';
import { Link } from 'react-router-dom';

class RecipeListView extends React.Component {
    render() {
        return (
            <Link to={{pathname: "/recipe", search: `recipeid=${this.props.recipe.id}`}}>
                <div className="recipe_list_view">
                    <img src={this.props.recipe.image} alt={this.props.recipe.title}/>
                    <h3>{this.props.recipe.title}</h3>
                </div>
            </Link>
        )
    }
}

export default RecipeListView;