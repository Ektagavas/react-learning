import React from 'react';

const Info = () => {
    return (
        <div>
            <h3>How to play:</h3>
            <ul>
                <li>Select the numbers from number tray so that their sum equals to the number of stars</li>
                <li>Click on the number to deselect it</li>
                <li>Click on = button to check the answer</li>
                <li>If the answer is right, click on the green check mark to submit the answer</li>
                <li>The numbers once submitted cannot be used again</li>
                <li>Click on the refresh icon to get new number of stars if no possible solution exists</li>
                <li>Play until all numbers in the tray are used to win the game</li>
                <li>You would lose the game if no refreshes are left and there are still unused numbers in the tray</li>
            </ul>
        </div>
    )
}

export default Info;