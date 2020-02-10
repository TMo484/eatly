import React from 'react';
import RecipeCard from '../cards/recipeCard';
import { ingredientSearchResult } from '../../fakeAPIData/searchForRecipe';

var unirest = require("unirest");

var req = unirest("GET", "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/98730/information");

req.headers({
	"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
	"x-rapidapi-key": "92197e62f2msh377f9ed69df35c4p1aa491jsn89aa5fbc8831"
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});

class RecipeList extends React.Component {
    render() {
        return (
            <div className="content vertically_spaced">
                {ingredientSearchResult.results.map(recipe => {
                    return <RecipeCard recipe={recipe}/>
                })}
            </div>
        )
    }
}

export default RecipeList;