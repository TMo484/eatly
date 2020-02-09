import React from 'react';
import { connect } from 'react-redux';
import { changePage } from '../../redux/actions';
import { RECIPE_RESULTS } from '../../redux/reducer';

class RecipeSearch extends React.Component {
    constructor(props){
        super(props)
        this.handleSearch = this.handleSearch.bind(this)
    }

    handleSearch() {
        let searchQuery = document.getElementById("recipeQuery").value
        this.props.changePage(RECIPE_RESULTS)
    }

    render() {
        return (
            <div className="content vertically_spaced">
                <input type="text" id="recipeQuery"></input>
                <button id="recipeSearch" onClick={this.handleSearch}>Search for Recipe</button>
            </div>
        )
    }
}

export default connect(null, {changePage})(RecipeSearch);