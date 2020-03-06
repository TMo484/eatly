import React from 'react';
import NavigationButton from '../buttons/navigationButton';

let recipeSearchButton = {
    buttonType: "header_button",
    route: "/find",
    label: "Recipe Search"
}

let mealPlannigButton = {
    buttonType: "header_button",
    route: "/planning",
    label: "Meal Planning"
}

let groceryListButton = {
    buttonType: "header_button",
    route: "/grocery",
    label: "Grocery List"
}

const buttonList = [recipeSearchButton, mealPlannigButton, groceryListButton]

class PageHeader extends React.Component {

    handleGoBack() {
            window.history.back()
    }

    render() {
        return (
            <React.Fragment>
                <div className="header">
                    <div><span className="eatly_font">eatly</span></div>
                    <div className="page_header">
                        <i className="fas fa-arrow-left fa-3x" onClick={this.handleGoBack.bind(this)}></i>
                        {buttonList.map(button => {
                            let buttonClass = window.location.pathname === button.route ? `${button.buttonType} ${button.buttonType}_active` : button.buttonType
                            return <NavigationButton key={button.label} buttonType={buttonClass} route={button.route} label={button.label}/>
                        })}
                        <i className="fas fa-bars fa-3x"></i>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default PageHeader;