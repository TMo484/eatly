import React from 'react';
import _ from 'lodash';

class Recipe extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            recipe: null,
            groceryList: {},
            hasError: false
        }
    }

    componentDidMount() {
        this.setState({ groceryList: JSON.parse(window.localStorage.getItem("groceryList")) || this.state.groceryList })
        this.getRecipe()
    }

    componentDidUpdate() {
        window.localStorage.setItem("groceryList", JSON.stringify(this.state.groceryList))
    }

    getRecipe() {
        const URLParams = new URLSearchParams(window.location.search)

        const recipeid = URLParams.get("recipeid")

        const fetchURL = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/informationBulk?ids=${recipeid}`

        fetch(fetchURL, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
                "x-rapidapi-key": "567db352abmsh13357ac57d5601dp13e396jsn107cd8d716e7"
            }
            }).then(response => {
                response.json().then(parsedJson => {
                    this.setState({ recipe: parsedJson })
                })
            })
            .catch(err => {
                console.log(err);
                this.setState({ recipe: {}})
        })
    }

    addToGroceryList(i, r) {
        if(i) {
            let ingredient = {
                recipeid: r.id,
                recipeName: r.title,
                ingredientid: i.id,
                name: i.name,
                aisle: i.aisle,
                amount: i.amount,
                unit: i.measures.us.unitLong
            }
            let id = `${r.id}_${i.id}`
            let metaGroceryList = this.state.groceryList
            metaGroceryList[id] = ingredient
            this.setState({ groceryList: metaGroceryList })
        }
    }

    render() {
        if (this.state.hasError) {
            return <h3>Uh Oh! Something went wrong. Please try again.</h3>
        }
        else if(!this.state.recipe) {
            return <h3>Excellent Choice! Loading the recipe now</h3>
        } else {
            const recipe = this.state.recipe[0]
            // this.addToGroceryList()
            return (
                <React.Fragment>
                    <div className="recipe_header">
                        <img src={recipe.image} alt={`${recipe.title}`}/>
                        <div className="recipe_info">
                            <h1>{recipe.title}</h1>
                            <div>
                                <i className="far fa-clock"></i>
                                <h3>Ready in: {recipe.readyInMinutes} minutes</h3>
                            </div>
                            <div>
                                <i className="fas fa-cheese"></i>
                                <h3>Serves: {recipe.servings}</h3>
                            </div>
                        </div>
                    </div>
                    <div id="ingredientAndDirection">
                        <div id="ingredientSection">
                            <h1>Ingredients</h1>
                            {recipe.extendedIngredients.map(ingredient => {
                                    if(this.state.groceryList[`${recipe.id}_${ingredient.id}`]) {
                                        return (
                                            <div key={ingredient.id} className="flex groceryItem">
                                                <i className="fas fa-check-circle fa-lg" onClick={this.addToGroceryList.bind(this, ingredient, recipe)}></i>
                                                <h3 className="groceryIngredient">{`${ingredient.amount} ${ingredient.measures.us.unitLong} ${_.startCase(ingredient.name)}`}</h3>
                                            </div>
                                    )} else {
                                        return (
                                            <div key={ingredient.id} className="flex groceryItem">
                                                <i className="fas fa-plus-circle fa-lg" onClick={this.addToGroceryList.bind(this, ingredient, recipe)}></i>
                                                <h3 className="groceryIngredient">{`${ingredient.amount} ${ingredient.measures.us.unitLong} ${_.startCase(ingredient.name)}`}</h3>
                                            </div>
                                    )}
                                })}
                        </div>
                        <div id="directionSection">
                            <h1>Directions</h1>
                            {recipe.analyzedInstructions[0].steps.map(instruction => {
                                return (
                                    <div key={instruction.number} className="directionItem">
                                        <h2>{instruction.number}</h2>
                                        <h3>{instruction.step}</h3>
                                    </div>
                            )})}
                        </div>
                    </div>
                </React.Fragment>
            )
        }
    }
}

export default Recipe;