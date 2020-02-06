import React from 'react';

class PageHeader extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="header page_header horizontally_spaced">
                    <div className="header_section"></div>
                    <button className="header_button">Recipe Search</button>
                    <button className="header_button">Meal Planning</button>
                    <button className="header_button">Grocery List</button>
                    <div className="header_section"></div>
                </div>
            </React.Fragment>
        )
    }
}

export default PageHeader;