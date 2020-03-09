import React from 'react';
import _ from 'lodash';

class GroceryList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            groceryList: {}
        }
    }

    componentDidMount() {
        this.setState({ groceryList: JSON.parse(window.localStorage.getItem("groceryList")) || {} })
    }

    componentDidUpdate() {
        window.localStorage.setItem("groceryList", JSON.stringify(this.state.groceryList))
    }

    deleteFromGroceryList(i) {
        let metaGroceryList = this.state.groceryList
        delete metaGroceryList[`${i.recipeid}_${i.ingredientid}`]
        this.setState({ groceryList: metaGroceryList })
    }
    
    render() {
        if(this.state.groceryList) {
            return(
<<<<<<< HEAD
                <div>
                    {Object.keys(this.state.groceryList).map(key => {
                        let ingredient = this.state.groceryList[key]
                        return (
                            <div className="flex">
                                <button onClick={this.deleteFromGroceryList.bind(this, ingredient)} >Delete from Grocery List</button>
                                <h1 key={`${ingredient.recipeid}_${ingredient.ingredientid}`}>{`${ingredient.amount} ${ingredient.unit} ${_.startCase(ingredient.name)}`}</h1>
                            </div>
                        )
                    })}
                </div>
=======
                Object.keys(groceryList).map(key => {
                    let ingredient = groceryList[key]
                    return <h1 key={`${ingredient.recipeid}_${ingredient.ingredientid}`}>{`${ingredient.amount} ${ingredient.unit} ${_.startCase(ingredient.name)}`}</h1>
                })
>>>>>>> 5e34f83f257bd33353efc8faeb0a0f8b1cc506e1
            )
        } else {
            return <h1>No grocery's added yet. Start Searching!</h1>
        }
    }
}

export default GroceryList;