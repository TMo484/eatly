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
            )
        } else {
            return <h1>No grocery's added yet. Start Searching!</h1>
        }
    }
}

export default GroceryList;