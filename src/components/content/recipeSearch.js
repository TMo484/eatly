import React from 'react';
import { connect } from 'react-redux';
import { changePage, changeQueryTerms } from '../../redux/actions';
import { RECIPE_RESULTS } from '../../redux/reducer';

class RecipeSearch extends React.Component {
    constructor(props){
        super(props)
        this.handleSearch = this.handleSearch.bind(this)
    }

    handleSearch() {
        this.props.changePage(RECIPE_RESULTS)
        // this.props.changeQueryTerms([`query:${document.getElementById("query").value}`])
    }

    render() {
        return (
            <div className="content vertically_spaced">
                <form method="get" action="/">
                    <input name="query" type="text" id="query"></input>
                    <button type="submit" id="recipeSearch" onClick={this.handleSearch}>Search for Recipe</button>
                </form> 
            </div>
        )
    }
}

export default connect(null, {changePage, changeQueryTerms})(RecipeSearch);