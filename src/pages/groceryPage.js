import React from 'react';
import _ from 'lodash';
import PageHeader from '../components/headers/pageHeader';

class GroceryPage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <PageHeader/>
                {JSON.parse(window.localStorage.getItem("groceryList")).map(ingredient => {
                    return <h1>{_.startCase(ingredient.name)}</h1>
                })}
            </React.Fragment>
        )
    } 
}

export default GroceryPage;