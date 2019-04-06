import React from 'react';
import _ from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Stars = (props) => {
    let stars = _.range(1, props.noOfStars + 1).map((number, i) =>
        <FontAwesomeIcon key={i} style={{ margin: 8, fontSize: 30 }} icon="star" />);
    return (
        <div className="col-md-5">
            {stars}
        </div>
    );
}

export default Stars;