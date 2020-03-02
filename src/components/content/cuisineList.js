import React from 'react';
import CusineCard from '../../components/cards/cuisineCard';

let cuisineList = ["african", "chinese", "japanese", "korean", "vietnamese", "thai", "indian", "british", "irish", "french", "italian", "mexican", "spanish", "middle eastern", "jewish", "american", "cajun", "southern", "greek", "german", "nordic", "eastern european", "caribbean", "latin american"]

class CuisineList extends React.Component {
    render() {
        return (
            <div className="cuisine_list">
                {cuisineList.map(cuisine => {
                    return <CusineCard cuisine={cuisine}/>
                })}
            </div>
        )
    }
}

export default CuisineList;