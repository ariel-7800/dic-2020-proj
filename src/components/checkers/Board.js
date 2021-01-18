import React from "react";
import Square from "./Square";

class Checkers extends React.Component {
    constructor (props) {
        super (props);
        const boardArray = Array(8);

        for (let i = 0; i < boardArray.length; i++) {
            if (i === 3 || i === 4) {
                boardArray[i] = Array(8).fill("null");
            } else {
                let color = "red";
                if (i < 3) {
                    color  = "black";
                }
                let boardLine;
                if (i === 1 || i === 5 || i === 7) {
                    boardLine = [color, "null", color, "null",  color, "null", color, "null"]
                } else {
                    boardLine = ["null", color, "null",  color, "null", color, "null", color]
                }
                boardArray[i] = boardLine;
            }
        }

        this.state = {
            boardArray,
            currentTurn: null,
            selected: null,
            redTokens: 12,
            blueTokens: 12
        }
    }



    createBoardRow (i) {
        let color1 = "gray";
        let color2 = "white";
        if (i % 2 === 1) {
            color1 = "white";
            color2 = "gray";
        }
        
        return  (
            <div className="boardRow">
                <Square className={"checkers-square " + color1} color={this.state.boardArray[i][0]}/>
                <Square className={"checkers-square " + color2} color={this.state.boardArray[i][1]}/>
                <Square className={"checkers-square " + color1} color={this.state.boardArray[i][2]}/>
                <Square className={"checkers-square " + color2} color={this.state.boardArray[i][3]}/>
                <Square className={"checkers-square " + color1} color={this.state.boardArray[i][4]}/>
                <Square className={"checkers-square " + color2} color={this.state.boardArray[i][5]}/>
                <Square className={"checkers-square " + color1} color={this.state.boardArray[i][6]}/>
                <Square className={"checkers-square " + color2} color={this.state.boardArray[i][7]}/>
            </div>
        )
    }

    render () {
        return (
            <div>
                {this.createBoardRow(0)}
                {this.createBoardRow(1)}
                {this.createBoardRow(2)}
                {this.createBoardRow(3)}
                {this.createBoardRow(4)}
                {this.createBoardRow(5)}
                {this.createBoardRow(6)}
                {this.createBoardRow(7)}
            </div>
        )
    }
}

export default Checkers;
