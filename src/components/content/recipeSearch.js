import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { changePage, changeQueryTerms } from '../../redux/actions';
import { RECIPE_RESULTS } from '../../redux/reducer';

class RecipeSearch extends React.Component {
    constructor(props){
        super(props)
        this.handleSearch = this.handleSearch.bind(this)
        this.state = {
            searchTerm: ""
        }
    }

    handleSearch(e) {
        this.props.changePage(RECIPE_RESULTS)
    }

    handleSearchTerm(e) {
        this.setState({searchTerm: document.getElementById("query").value})
    }

    render() {
        return (
            <div className="content vertically_spaced">            
                <input name="query" type="text" id="query" onChange={this.handleSearchTerm.bind(this)}></input>
                <Link to={{pathname: "/results", search: `query=${this.state.searchTerm}`}}>
                    <button type="submit" onClick={this.handleSearch} id="recipeSearch">Search for Recipe</button>
                </Link>
            </div>
        )
    }
}

export default connect(null, {changePage, changeQueryTerms})(RecipeSearch);