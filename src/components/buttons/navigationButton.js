import React from 'react';
import { Link } from 'react-router-dom';

class NavigationButton extends React.Component{
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Link to={this.props.route}>
                <button className={this.props.buttonType}>{this.props.label}</button>
            </Link>
        )
    }
}

export default NavigationButton;