import React from 'react';
import WelcomePage from './pages/welcome';
import Homepage from './pages/homepage';
import SearchIngredientPage from './pages/searchIngredient';
import RecipeResultsPage from './pages/recipeResults';
import eatlyStore from './redux/reducer';
import { WELCOME_PAGE, HOMEPAGE, SEARCH_INGREDIENT, RECIPE_RESULTS } from './redux/reducer';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

class App extends React.Component {

    constructor(props) {
        super(props)

        this.state = ({
            page: ""
        })

        
        eatlyStore.subscribe(() => {
            this.setState({
                page: eatlyStore.getState().page
            })
        })
    }

    render() {
        return (
            <Switch>
                <Route path="/login">
                    <WelcomePage/>
                </Route>
                <Route path="/find">
                    <Homepage/>
                </Route>
                <Route path="/search">
                    <SearchIngredientPage/>
                </Route>
                <Route path="/results">
                    <RecipeResultsPage/>
                </Route>
                <Route path="/">
                    <WelcomePage/>
                </Route>
            </Switch>
        )
    }
}

export default App;