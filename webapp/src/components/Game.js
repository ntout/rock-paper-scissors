import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../index.css';


function Item(props) {
    return (
        <button onClick={props.onClick}>{props.text}</button>
    );
}

class Board extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [
                { text: 'Rock'},
                { text: 'Paper' },
                { text: 'Scissors' }
            ]
        }
    }

    

    render() {
        return ( 
            <div>
                {this.state.items.map((item, index) => (
                    <Item key={item.text} text={item.text} onClick={(i,j) => this.props.onClick(i,j)} />
                ))}
            </div>
        );
    }
}



class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            choice: "choose one",
            computer: "",
            picked: false,
            locked: false,
            result: {
                compWins: 0,
                playerWins: 0
            }
        };
    }

    computerPickRPS() {
        var choices = ["Rock", "Paper", "Scissors"];
        const randomChoice = choices[Math.floor(Math.random()*choices.length)];
        console.log("random:" + randomChoice);
        console.log("computer after setState: " + this.state.computer);
        return randomChoice;
    }

    handleClick(item) {
        if (!this.state.locked) {
            const choice = item.target.firstChild.data
            console.log(choice)

            this.setState({
                choice: choice,
                picked: true 
            })
        } 
    }

    lockAnswer() {
        if (!this.state.locked && this.state.picked) {
            console.log("Lock answer")
            this.setState({
                locked: true, 
                computer: this.computerPickRPS()
            })
        } else console.log("Already locked or havent picked one yet")
    }
    

    render() {

        let status;
        let compChoice;
        let result;
        let myChoice;
        if (!this.state.locked) {
            status = "Lock in Answer";
            compChoice = "Thinking..."
        } else {
            status = "Answer Locked in";
            compChoice = this.state.computer;
            result = this.state.result;
            myChoice = this.state.choice;
        }

        if (myChoice === "Rock" && compChoice === "Scissors") {
            result = "Win";
        } else if (myChoice === "Rock" && compChoice === "Paper") {
            result = "Lose";
        } else if (myChoice === "Scissors" && compChoice === "Paper") {
            result = "Win";
        } else if (myChoice === "Scissors" && compChoice === "Rock") {
            result = "Lose";
        } else if (myChoice === "Paper" && compChoice === "Rock") {
            result = "Win";
        } else if (myChoice === "Paper" && compChoice === "Scissors") {
            result = "Lose";
        } else if (myChoice === compChoice) {
            result = "Draw";
        }
        

        return (
            <div>
                <h2>Game</h2>
                <h3>Player 1: {this.state.choice}</h3>
                <div>
                    <Board onClick={(i) => this.handleClick(i)} />
                </div>
                <button onClick={() => this.lockAnswer()}>{status}</button>

                <h3>Computer: {compChoice}</h3>
                <h3>Result: { result }</h3>
            </div>
        )
    }
}

export default Game;