import React from 'react';
import _ from 'lodash';

class Recipe extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            recipe: null
        }
    }

    componentDidMount() {
        // this.getRecipe()
        this.setState({ recipe: fakeRecipeData })
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
            const recipe = this.state.recipe[0]
            return (
                <React.Fragment>
                    <img className="recipe_image" src={recipe.image}/>
                    <p>{JSON.stringify(recipe.title)}</p>
                    <h1>Ready in: {recipe.readyInMinutes} minutes</h1>
                    <h1>Serves: {recipe.servings}</h1>
                    <h1>Ingredients</h1>
                    {recipe.extendedIngredients.map(ingredient => {
                        return <h1>{`${ingredient.amount} ${ingredient.measures.us.unitLong} ${_.startCase(ingredient.name)}`}</h1>
                    })}
                    <h1>Directions</h1>
                    {recipe.analyzedInstructions[0].steps.map(instruction => {
                        return <h1>{`${instruction.number} ${instruction.step}`}</h1>
                    })}
                </React.Fragment>
            )
        }
    }
}

export default Recipe;


let fakeRecipeData = [{
    "vegetarian": false,
    "vegan": false,
    "glutenFree": true,
    "dairyFree": true,
    "veryHealthy": true,
    "cheap": false,
    "veryPopular": false,
    "sustainable": false,
    "weightWatcherSmartPoints": 12,
    "gaps": "no",
    "lowFodmap": false,
    "preparationMinutes": 15,
    "cookingMinutes": 15,
    "sourceUrl": "http://www.julieseatsandtreats.com/teriyaki-salmon-broccoli-bowls/",
    "spoonacularSourceUrl": "https://spoonacular.com/teriyaki-salmon-broccoli-bowls-791918",
    "aggregateLikes": 307,
    "spoonacularScore": 100,
    "healthScore": 100,
    "creditsText": "Julies Eats and Treats",
    "sourceName": "Julies Eats and Treats",
    "pricePerServing": 407.04,
    "extendedIngredients": [{
        "id": 1012034,
        "aisle": "Spices and Seasonings",
        "image": "seasoning.png",
        "consitency": "solid",
        "name": "Spice Rub",
        "original": "1 (5 oz) pouch 7 McCormick Grill Mates 7 Spice Teriyaki Marinade",
        "originalString": "1 (5 oz) pouch 7 McCormick Grill Mates 7 Spice Teriyaki Marinade",
        "originalName": "pouch 7 McCormick Grill Mates 7 Spice Teriyaki Marinade",
        "amount": 5,
        "unit": "oz",
        "meta": [],
        "metaInformation": [],
        "measures": {
            "us": {
                "amount": 5,
                "unitShort": "oz",
                "unitLong": "ounces"
            },
            "metric": {
                "amount": 141.748,
                "unitShort": "g",
                "unitLong": "grams"
            }
        }
    }, {
        "id": 10011090,
        "aisle": "Produce",
        "image": "broccoli.jpg",
        "consitency": "solid",
        "name": "broccoli florets",
        "original": "3 c. broccoli florets",
        "originalString": "3 c. broccoli florets",
        "originalName": "broccoli florets",
        "amount": 3,
        "unit": "c",
        "meta": [],
        "metaInformation": [],
        "measures": {
            "us": {
                "amount": 3,
                "unitShort": "cups",
                "unitLong": "cups"
            },
            "metric": {
                "amount": 709.764,
                "unitShort": "ml",
                "unitLong": "milliliters"
            }
        }
    }, {
        "id": 20040,
        "aisle": "Pasta and Rice",
        "image": "uncooked-brown-rice.png",
        "consitency": "solid",
        "name": "brown rice",
        "original": "1 (8.8 oz) bag brown Ready Rice",
        "originalString": "1 (8.8 oz) bag brown Ready Rice",
        "originalName": "brown Ready Rice",
        "amount": 8.8,
        "unit": "oz",
        "meta": [],
        "metaInformation": [],
        "measures": {
            "us": {
                "amount": 8.8,
                "unitShort": "oz",
                "unitLong": "ounces"
            },
            "metric": {
                "amount": 249.476,
                "unitShort": "g",
                "unitLong": "grams"
            }
        }
    }, {
        "id": 15076,
        "aisle": "Seafood",
        "image": "salmon.png",
        "consitency": "solid",
        "name": "salmon fillets",
        "original": "1 lb salmon fillets",
        "originalString": "1 lb salmon fillets",
        "originalName": "salmon fillets",
        "amount": 1,
        "unit": "lb",
        "meta": [],
        "metaInformation": [],
        "measures": {
            "us": {
                "amount": 1,
                "unitShort": "lb",
                "unitLong": "pound"
            },
            "metric": {
                "amount": 453.592,
                "unitShort": "g",
                "unitLong": "grams"
            }
        }
    }],
    "id": 791918,
    "title": "Teriyaki Salmon & Broccoli Bowls",
    "readyInMinutes": 30,
    "servings": 4,
    "image": "https://spoonacular.com/recipeImages/791918-556x370.jpg",
    "imageType": "jpg",
    "cuisines": ["Indian", "Asian", "Japanese"],
    "dishTypes": ["lunch", "main course", "main dish", "dinner"],
    "diets": ["gluten free", "dairy free", "pescatarian"],
    "occasions": [],
    "winePairing": {
        "pairedWines": ["chardonnay", "pinot noir", "sauvignon blanc"],
        "pairingText": "Chardonnay, Pinot Noir, and Sauvignon Blanc are my top picks for Salmon. To decide on white or red, you should consider your seasoning and sauces. Chardonnay is a great friend to buttery, creamy dishes, while sauvignon blanc can complement herb or citrus-centric dishes. A light-bodied, low-tannin red such as the pinot noir goes great with broiled or grilled salmon. The Talbott Sleepy Hollow Chardonnay () with a 4.3 out of 5 star rating seems like a good match. It costs about 35 dollars per bottle.",
        "productMatches": [{
            "id": 436621,
            "title": "Talbott Sleepy Hollow Chardonnay ()",
            "description": "We select fruit from the finest sections of the acclaimed Sleepy Hollow Vineyard for this Chardonnay. Sleepy Hollow consistently produces Chardonnay with intense tropical fruit character, which exhibits both richness and finesse. Sleepy Hollow Chardonnay is considered by many as one of the quality standards for California Chardonnay. Vineyard Manager and Winemaker Sam Balderas keeps yields low to increase concentration and minimizes the handling of the wine to preserve the fruit's natural essence. This wine is 100% barrel fermented in French Oak and aged on the yeast lees to impart a rich, toasty, complex character to the wine. \n\nTasting Notes for this Vintage\nConcentrated rich flavors of tropical fruit marry with mineral elements and French oak accents. A typically high level of acid produces a long, clean finish. Our signature Chardonnay, this wine can be cellared up to nine years and improves with age. Showing super lush now.",
            "price": "$34.99",
            "imageUrl": "https://spoonacular.com/productImages/436621-312x231.jpg",
            "averageRating": 0.86,
            "ratingCount": 5,
            "score": 0.7975,
            "link": "https://click.linksynergy.com/deeplink?id=*QCiIS6t4gA&mid=2025&murl=https%3A%2F%2Fwww.wine.com%2Fproduct%2Ftalbott-sleepy-hollow-chardonnay-2001%2F83056"
        }]
    },
    "instructions": "Place salmon fillets in resealable plastic bag. Pour half of marinade over them. Place in fridge to marinate 10 minutes. Meanwhile chop broccoli into florets. Place in a bowl and pour the rest of the marinade over broccoli florets. Heat grill to medium heat. Place salmon on a piece of tinfoil. Cook 8-10 minutes, or until no longer spongy. In a skillet cook broccoli 3-4 minutes or until cooked crisp. While broccoli is cooking prepare rice in microwave. Serve everything arrange in bowls.",
    "analyzedInstructions": [{
        "name": "",
        "steps": [{
            "number": 1,
            "step": "Place salmon fillets in resealable plastic bag.",
            "ingredients": [{
                "id": 10115076,
                "name": "salmon fillets",
                "image": "salmon.png"
            }],
            "equipment": [{
                "id": 221671,
                "name": "ziploc bags",
                "image": "plastic-bag.jpg"
            }]
        }, {
            "number": 2,
            "step": "Pour half of marinade over them.",
            "ingredients": [],
            "equipment": []
        }, {
            "number": 3,
            "step": "Place in fridge to marinate 10 minutes.",
            "ingredients": [],
            "equipment": [],
            "length": {
                "number": 10,
                "unit": "minutes"
            }
        }, {
            "number": 4,
            "step": "Meanwhile chop broccoli into florets.",
            "ingredients": [{
                "id": 11090,
                "name": "broccoli",
                "image": "broccoli.jpg"
            }],
            "equipment": []
        }, {
            "number": 5,
            "step": "Place in a bowl and pour the rest of the marinade over broccoli florets.",
            "ingredients": [{
                "id": 10011090,
                "name": "broccoli florets",
                "image": "broccoli.jpg"
            }],
            "equipment": [{
                "id": 404783,
                "name": "bowl",
                "image": "bowl.jpg"
            }]
        }, {
            "number": 6,
            "step": "Heat grill to medium heat.",
            "ingredients": [],
            "equipment": [{
                "id": 404706,
                "name": "grill",
                "image": "grill.jpg"
            }]
        }, {
            "number": 7,
            "step": "Place salmon on a piece of tinfoil. Cook 8-10 minutes, or until no longer spongy.",
            "ingredients": [{
                "id": 15076,
                "name": "salmon",
                "image": "salmon.png"
            }],
            "equipment": [],
            "length": {
                "number": 10,
                "unit": "minutes"
            }
        }, {
            "number": 8,
            "step": "In a skillet cook broccoli 3-4 minutes or until cooked crisp.",
            "ingredients": [{
                "id": 11090,
                "name": "broccoli",
                "image": "broccoli.jpg"
            }],
            "equipment": [{
                "id": 404645,
                "name": "frying pan",
                "image": "pan.png"
            }],
            "length": {
                "number": 4,
                "unit": "minutes"
            }
        }, {
            "number": 9,
            "step": "While broccoli is cooking prepare rice in microwave.",
            "ingredients": [{
                "id": 11090,
                "name": "broccoli",
                "image": "broccoli.jpg"
            }],
            "equipment": [{
                "id": 404762,
                "name": "microwave",
                "image": "microwave.jpg"
            }]
        }, {
            "number": 10,
            "step": "Serve everything arrange in bowls.",
            "ingredients": [],
            "equipment": [{
                "id": 404783,
                "name": "bowl",
                "image": "bowl.jpg"
            }]
        }]
    }]
}]