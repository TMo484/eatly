import React from 'react';
import PageHeader from '../components/headers/pageHeader';

class GroceryPage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <PageHeader/>
                {/* <--These are not working because localstorage stores as string, and I need it as a list -->
                {window.localStorage.getItem("groceryList").map(ingredient => {
                    return <h1>testaroony</h1>
                })}
                <h1>{window.localStorage.getItem("groceryList")}</h1> */}
            </React.Fragment>
        )
    } 
}

export default GroceryPage;