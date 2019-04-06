import React, { Component } from 'react';
import _ from 'lodash';
import Button from './button';
import Numbers from './numbers';
import Answer from './answer';
import Info from './info';
import Stars from './stars';
import DoneStatusFrame from './donestatus';


export default class Game extends Component {
    state = {
        selectedNumbers: [],
        noOfStars: Game.generateRandom(),
        isAnsCorrect: null,
        acceptedNumbers: [],
        noOfRedraw: 5,
        doneStatus: ''
    };



    render() {
        const { selectedNumbers,
            noOfStars,
            isAnsCorrect,
            noOfRedraw,
            acceptedNumbers,
            doneStatus
        } = this.state;

        return (
            <div className="container">
                <h3>Play Nine!</h3>
                <hr></hr>
                <div className="row">
                    <Stars noOfStars={noOfStars} />
                    <Button selectedNumbers={selectedNumbers} checkAns={this.checkAns}
                        isAnsCorrect={isAnsCorrect} acceptAns={this.acceptAns}
                        redraw={this.redraw} noOfRedraw={noOfRedraw} />
                    <Answer selectedNumbers={selectedNumbers} unclickNumber={this.unclickNumber} />
                    <br />
                </div>
                <br />
                {doneStatus ? <DoneStatusFrame doneStatus={doneStatus} resetGame={this.resetGame}/> :
                    <Numbers clickNumbers={this.clickNumbers} selectedNumbers={selectedNumbers}
                        acceptedNumbers={acceptedNumbers} />}
                <Info />
            </div>
        );
    }

    static generateRandom = () => {
        return 1 + Math.floor(Math.random() * 9);
    }

    updateDoneStatus = () => {
        this.setState((prevState) => {
            if (prevState.acceptedNumbers.length === 9) {
                return { doneStatus: 'Done. Nice!' };
            }
            if (prevState.noOfRedraw === 0 && !this.possibleSolutions(prevState)) {
                return { doneStatus: 'Game Over!' };
            }
        });
    }

    possibleSolutions = ({ noOfStars, acceptedNumbers }) => {
        const possibleNos = _.range(1, 10)
            .filter(number =>
                acceptedNumbers.indexOf(number) === -1);

        return this.possibleCombinationSum(possibleNos, noOfStars);
    }

    possibleCombinationSum = (arr, n) => {
        if (arr.indexOf(n) >= 0) { return true; }
        if (arr[0] > n) { return false; }
        if (arr[arr.length - 1] > n) {
            arr.pop();
            return this.possibleCombinationSum(arr, n);
        }
        var listSize = arr.length, combinationsCount = (1 << listSize)
        for (var i = 1; i < combinationsCount; i++) {
            var combinationSum = 0;
            for (var j = 0; j < listSize; j++) {
                if (i & (1 << j)) { combinationSum += arr[j]; }
            }
            if (n === combinationSum) { return true; }
        }
        return false;
    }

    redraw = () => {
        if (this.state.noOfRedraw === 0) { return; }
        this.setState((prevState) => ({
            selectedNumbers: [],
            isAnsCorrect: null,
            noOfStars: Game.generateRandom(),
            noOfRedraw: prevState.noOfRedraw - 1
        }), this.updateDoneStatus);

    }

    clickNumbers = (clickNumber) => {
        if (this.state.selectedNumbers.indexOf(clickNumber) < 0) {
            this.setState((prevState) => ({
                selectedNumbers: prevState.selectedNumbers.concat(clickNumber),
                isAnsCorrect: null
            }));
        }
    }

    unclickNumber = (clickNumber) => {
        this.setState((prevState) => ({
            selectedNumbers: prevState.selectedNumbers
                .filter(number => number !== clickNumber),
            isAnsCorrect: null
        }))
    }


    checkAns = () => {
        this.setState((prevState) => ({
            isAnsCorrect: prevState.noOfStars ===
                prevState.selectedNumbers.reduce((acc, n) => acc + n, 0)
        }))
    }

    acceptAns = () => {
        this.setState((prevState) => ({
            acceptedNumbers: prevState.acceptedNumbers.concat(prevState.selectedNumbers),
            selectedNumbers: [],
            isAnsCorrect: null,
            noOfStars: Game.generateRandom()
        }), this.updateDoneStatus);
    }

    resetGame = () => {
        this.setState(() => ({
            selectedNumbers: [],
            noOfStars: Game.generateRandom(),
            isAnsCorrect: null,
            acceptedNumbers: [],
            noOfRedraw: 5,
            doneStatus: ''
        }));
    }
}
