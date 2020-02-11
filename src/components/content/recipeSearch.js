import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { changePage, changeQueryTerms } from '../../redux/actions';
import { RECIPE_RESULTS } from '../../redux/reducer';

class RecipeSearch extends React.Component {
    constructor(props){
        super(props)
        this.handleSearch = this.handleSearch.bind(this)
    }

    handleSearch(e) {
        console.log(document.getElementById("query").value)
        this.props.changePage(RECIPE_RESULTS)
    }

    render() {
        return (
            <Link to={{
                pathname: "/results",
                search: document.getElementById("query").value
            }}>
                <div className="content vertically_spaced">
                    <input name="query" type="text" id="query"></input>
                    
                        <button type="submit" onClick={this.handleSearch} id="recipeSearch">Search for Recipe</button>
                </div>
            </Link>
        )
    }
}

export default connect(null, {changePage, changeQueryTerms})(RecipeSearch);