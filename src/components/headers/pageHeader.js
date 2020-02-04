import React from 'react';

class PageHeader extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="header page_header horizontally_spaced">
                    <div>Welcome!</div>
                    <div><button className="header_button">Recipe Search</button></div>
                    <div><button className="header_button">Meal Planning</button></div>
                    <div><button className="header_button">Grocery List</button></div>
                    
                </div>
            </React.Fragment>
        )
    }
}

export default PageHeader;