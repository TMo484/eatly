import React from 'react';
import RecipeCard from '../cards/recipeCard';


class RecipeList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            recipies: null
        }
    }

    componentDidMount() {
        this.getSearchResults()
    }
    
    getSearchResults() {
        fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?cuisine=italian&offset=0&query=salmon", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
                "x-rapidapi-key": "567db352abmsh13357ac57d5601dp13e396jsn107cd8d716e7"
            }
            }).then(response => {
                response.json().then(parsedJson => {
                    this.setState({ recipies: parsedJson })
                })
            })
            .catch(err => {
                console.log(err);
                this.setState({ recipies: {}})
            })
        }
    
    render() {
        if (!this.state.recipies) {
            return (
            <div className="content vertically_spaced">
                <h3>Finding the best of the best...</h3>
            </div>
            )
        } else {
            return (
                <div className="content vertically_spaced">
                    {this.state.recipies.results.map(recipe => {
                        return <RecipeCard key={recipe.id} recipe={recipe}/>
                    })}
                </div>
            )}
    }
}

export default RecipeList;