import React from 'react';
import _ from 'lodash';

class GroceryList extends React.Component {

    deleteFromGroceryList(i) {
        console.log("ingredient",i)
        let groceryList = JSON.parse(window.localStorage.getItem("groceryList"))
        console.log("groceryList", groceryList)
    }
    
    render() {
        let groceryList = JSON.parse(window.localStorage.getItem("groceryList"))
        if(groceryList) {
            return(
                Object.keys(groceryList).map(key => {
                    console.log(groceryList[key])
                    let ingredient = groceryList[key]
                    return <h1>{_.startCase(ingredient.name)}</h1>
                })
            )
        } else {
            return <h1>No grocery's added yet. Start Searching!</h1>
        }
    }
}

export default GroceryList;