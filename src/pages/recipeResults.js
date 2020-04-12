import React from 'react';
import PageHeader from '../components/headers/pageHeader';
import RecipeList from '../components/content/recipeList';

let gridView = {
    label: "Grid View",
    active: true,
}

let listView = {
    label: "List View",
    active: false,
}

class RecipeResultsPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            viewButtons: [gridView, listView]
        }
    }

    changeView(elem) {
        let metaViewButtons = this.state.viewButtons
        metaViewButtons.forEach(view => {
            view.active = view.label === elem.target.getAttribute("id");
        })
        this.setState({ viewButtons: metaViewButtons })
    }

    render() {
        return (
            <div className="outer">
                <PageHeader/>
                <div className="view_selector">
                    {this.state.viewButtons.map(view => {
                        let buttonClass = view.active ? "view_mode view_mode_active" : "view_mode"
                        return <div key={view.label} id={view.label} className={buttonClass} onClick={this.changeView.bind(this)}>{view.label}</div>
                    })}
                </div>
                <RecipeList viewMode={this.state.viewButtons.filter(view => view.active)[0].label}/>
            </div>
        )
    }
}

export default RecipeResultsPage;