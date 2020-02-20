import React from 'react';

class Recipe extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            recipe: null
        }
    }

    componentDidMount() {
        this.getRecipe()
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

    render() {
        if(!this.state.recipe) {
            return <h3>Excellent Choice! Loading the recipe now</h3>
        } else {
            return (
                <p>{JSON.stringify(this.state.recipe)}</p>
            )
        }
    }
}

export default Recipe;