import React from 'react';
import { connect } from 'react-redux';
import { changePage } from '../../redux/actions';
import { Link } from 'react-router-dom';

class NavigationButton extends React.Component{
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.props.changePage(this.props.target)
    }

    render() {
        return (
            <Link to={this.props.route}>
                <button className={this.props.buttonType} onClick={this.handleClick}>{this.props.label}</button>
            </Link>
        )
    }
}

export default connect(null, {changePage})(NavigationButton);