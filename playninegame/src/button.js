import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = (props) => {
    let button;
    switch (props.isAnsCorrect) {
        case true:
            button = <button className="btn btn-success" onClick={props.acceptAns}>
                <FontAwesomeIcon icon="check"></FontAwesomeIcon>
            </button>;
            break;

        case false:
            button = <button className="btn btn-danger">
                <FontAwesomeIcon icon="times"></FontAwesomeIcon>
            </button>;
            break;

        default:
            button = <button className="btn" onClick={props.checkAns} disabled={props.selectedNumbers.length === 0}>
                =
        </button>;
            break;

    }
    return (
        <div className="col-md-2">
            {button}
            <br /> <br />
            <button className="btn btn-warning btn-sm" disabled={props.noOfRedraw === 0} onClick={props.redraw}>
                <FontAwesomeIcon icon="sync-alt"></FontAwesomeIcon>&nbsp;
                {props.noOfRedraw}
            </button>
        </div>
    );
}

export default Button;