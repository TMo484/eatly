import React from 'react';
import RecipeCard from '../cards/recipeCard';
import RecipeListView from '../cards/recipeList';


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

    addParameter(currParams, newParam, newCategory) {
        if (currParams && newParam) {
            currParams += `&${newCategory}=${newParam}`
        } else if (!currParams && newParam) {
            currParams += `${newCategory}=${newParam}`
        }
        return currParams
    }
    
    getSearchResults() {
        const URLParams = new URLSearchParams(window.location.search)

        const URLQuery = URLParams.get("query")
        const URLCuisine = URLParams.get("cuisine")

        let paramCategory = ["query", "cuisine"]
        let paramTerm = [URLQuery, URLCuisine]

        let queryString = paramCategory.map((category, i) => {
            if (paramTerm[i]) {
                return [category, paramTerm[i]].join("=")
            } else {
                return ""
            }
        }).filter(category => {
            return category !== undefined
        }).join("&")

        const fetchURL = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?number=50&${queryString}`

        fetch(fetchURL, {
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
            if(this.props.viewMode === "Grid View") {
                return (
                    <div className="recipe_list">
                        {this.state.recipies.results.map(recipe => {
                            return <RecipeCard key={recipe.id} recipe={recipe}/>
                        })}
                    </div>
                )} else if (this.props.viewMode === "List View") {
                    return (
                        <div>
                            {this.state.recipies.results.map(recipe => {
                                return <RecipeListView key={recipe.id} recipe={recipe}/>
                            })}
                        </div>
                    )}
            }
    }
}

export default RecipeList;