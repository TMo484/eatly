import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/headers/pageHeader';
import NavigationButton from '../components/buttons/navigationButton';

class SearchPage extends React.Component {
    constructor(props){
        super(props)
        this.handleSearchTerm = this.handleSearchTerm.bind(this)
        this.handleInclude = this.handleInclude.bind(this)
        this.state = {
            searchTerm: "",
            searchCuisine: [],
            cuisineList: {
                "african":{name: "african", active: false}, 
                "chinese":{name: "chinese", active: false}, 
                "japanese":{name: "japanese", active: false}, 
                "korean":{name: "korean", active: false}, 
                "vietnamese":{name: "vietnamese", active: false}, 
                "thai":{name: "thai", active: false}, 
                "indian":{name: "indian", active: false}, 
                "british":{name: "british", active: false}, 
                "irish":{name: "irish", active: false}, 
                "french":{name: "french", active: false}, 
                "italian":{name: "italian", active: false}, 
                "mexican":{name: "mexican", active: false}, 
                "spanish":{name: "spanish", active: false}, 
                "middle eastern":{name: "middle eastern", active: false}, 
                "jewish":{name: "jewish", active: false}, 
                "american":{name: "american", active: false}, 
                "cajun":{name: "cajun", active: false}, 
                "southern":{name: "southern", active: false}, 
                "greek":{name: "greek", active: false}, 
                "german":{name: "german", active: false}, 
                "nordic":{name: "nordic", active: false}, 
                "eastern european":{name: "eastern european", active: false}, 
                "caribbean":{name: "caribbean", active: false}, 
                "latin american":{name: "latin american", active: false}
            }
        }
    }

    handleSearchTerm(e) {
        this.setState({searchTerm: document.getElementById("query").value})
    }

    handleInclude(e) {

    }

    handleCuisineClick(cuisineKey) {
        let metaCuisineList = this.state.cuisineList
        metaCuisineList[cuisineKey].active = !metaCuisineList[cuisineKey].active
        let metaSearchCuisine = this.state.searchCuisine
        if (metaCuisineList[cuisineKey].active) {
            metaSearchCuisine.push(cuisineKey)
        } else {
            metaSearchCuisine = metaSearchCuisine.filter(value => value !== cuisineKey)
        }
        this.setState({
            searchCuisine: metaSearchCuisine,
            cuisineList: metaCuisineList})
    }
    
    render() {
        return (
            <div className="content">
                <PageHeader/>
                <div>
                    <div className="search_section" id="search_term_section">
                        <h3>Search Term</h3>
                        <input name="query" type="text" id="query" onChange={this.handleSearchTerm}></input>
                    </div>
                    <div className="search_section">
                        <h3>Include / Exclude Ingredients</h3>
                        <div id="inc_exc_section">
                            <div class="include_exclude">
                                <h4>Include Ingredient</h4>
                                <input name="includeItem" type="text" id="includeItem" onChange={this.handleSearchTerm}></input>
                                <button name="includeButton" type="button" id="includeButton" onClick={this.handleInclude}>Include Ingredient</button>
                            </div>
                            <div class="include_exclude">
                                <h4>Exclude Ingredient</h4>
                                <input name="excludeItem" type="text" id="excludeItem" onChange={this.handleSearchTerm}></input>
                                <button name="excludeButton" type="button" id="excludeButton" onClick={this.handleInclude}>Exclude Ingredient</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="search_section">
                    <h3>Select Cuisines</h3>
                    <div id="cuisine_list">
                        {Object.keys(this.state.cuisineList).map(cuisineKey => {
                            let cuisine = this.state.cuisineList[cuisineKey]
                            let cuisine_class = cuisine.active ? "cuisine_card cuisine_card_active" : "cuisine_card"
                            return <button className={cuisine_class} cuisine={cuisine.name} active={cuisine.active} onClick={this.handleCuisineClick.bind(this, cuisineKey)}>{cuisine.name}</button>
                        })}
                    </div>
                </div>
                <NavigationButton route={{pathname: "/results", search: `query=${this.state.searchTerm}&cuisine=${this.state.searchCuisine.join()}`}} label="Search for Recipe"/>
            </div>
        )
    }
}

export default SearchPage;