import React from 'react';

const DoneStatusFrame = (props) => {
    return (
        <div className="text-center">
            <h2>{props.doneStatus}</h2>
            <button className="btn btn-secondary" onClick={props.resetGame}>Play Again!</button>
        </div>
    );
}

export default DoneStatusFrame;