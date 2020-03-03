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

    handleInclude(e) {

    }

    render() {
        return (
            <div>            
                <h4>Search Term</h4>
                <input name="query" type="text" id="query" onChange={this.handleSearchTerm.bind(this)}></input>
                <h4>Include Ingredient</h4>
                <input name="includeItem" type="text" id="includeItem" onChange={this.handleSearchTerm.bind(this)}></input>
                <button name="includeButton" type="button" id="includeButton" onClick={this.handleInclude.bind(this)}>Include Ingredient</button>
                <h4>Exclude Ingredient</h4>
                <input name="excludeItem" type="text" id="excludeItem" onChange={this.handleSearchTerm.bind(this)}></input>
                <button name="excludeButton" type="button" id="excludeButton" onClick={this.handleInclude.bind(this)}>Exclude Ingredient</button>
            </div>
        )
    }
}

export default connect(null, {changePage, changeQueryTerms})(RecipeSearch);