import React from 'react';

const Answer = (props) => {
    return (
        <div className="col-md-5">
            <div>
                {props.selectedNumbers.map((number, i) =>
                    <span key={i} onClick={() => props.unclickNumber(number)}>
                        {number}
                    </span>
                )}

            </div>
        </div>
    );
}

export default Answer;