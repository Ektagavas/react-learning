import React from 'react';
import _ from 'lodash';

const Numbers = (props) => {

    const numberClassName = (number) => {
        if (props.acceptedNumbers.indexOf(number) >= 0) {
            return 'used';
        }

        if (props.selectedNumbers.indexOf(number) >= 0) {
            return 'selected';
        }

    }

    return (
        <div className="card text-center">
            <div>
                {Numbers.numbersList.map((number, i) =>
                    <span key={i} className={numberClassName(number)} onClick={() => props.clickNumbers(number)}>
                        {number}
                    </span>
                )}

            </div>
        </div>
    );
}

Numbers.numbersList = _.range(1,10);

export default Numbers;