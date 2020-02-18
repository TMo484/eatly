import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';

class CusineCard extends React.Component {

    render() {
        return (
            <Link to={{pathname: "/results", search: `cuisine=${this.props.cuisine}`}}>
                <button>{_.startCase(this.props.cuisine)}</button>
            </Link>
        )
    }
}

export default CusineCard;