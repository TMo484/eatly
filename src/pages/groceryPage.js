import React from 'react';
import PageHeader from '../components/headers/pageHeader';
import GroceryList from '../components/content/groceryList';

class GroceryPage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <PageHeader/>
                <GroceryList/>
            </React.Fragment>
        )
    } 
}

export default GroceryPage;