import React from 'react';

class NavigationButton extends React.Component{

    render() {
        return (
            <a href={this.props.target}>
                <div className="navigation_button">
                    {this.props.label}
                </div>
            </a>
        )
    }
}

export default NavigationButton;