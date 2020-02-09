import React from 'react';
import { connect } from 'react-redux';
import { changePage } from '../../redux/actions';

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
            <button className={this.props.buttonType} onClick={this.handleClick}>{this.props.label}</button>
        )
    }
}

export default connect(null, {changePage})(NavigationButton);