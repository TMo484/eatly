import React from 'react';
import PageHeader from '../components/headers/pageHeader';
import CusineCard from '../components/cards/cuisineCard';
import { Route } from 'react-router-dom';

let cuisineList = ["african", "chinese", "japanese", "korean", "vietnamese", "thai", "indian", "british", "irish", "french", "italian", "mexican", "spanish", "middle eastern", "jewish", "american", "cajun", "southern", "greek", "german", "nordic", "eastern european", "caribbean", "latin american"]

class ExploreCuisinePage extends React.Component {
    render() {
        return (
            <div className="outer">
                <PageHeader/>
                {cuisineList.map(cuisine => {
                    return <CusineCard cuisine={cuisine}/>
                })}
            </div>

        )
    }
}

export default ExploreCuisinePage;