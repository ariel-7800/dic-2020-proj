import React from "react"

class Board extends React.Component{

    render () {

        const squares = [];
        let count = 0;
        for (let i = 0; i < 7; i++) {
            let row = [];
            for (let j = 0; j < 7; j++) {
                row.push(this.props.value(count++));
            }
            squares.push(row);
        }

        return (
            
            <div>
                <div className="board-row">
                    { squares[0] }
                </div>

                <div className="board-row">
                    { squares[1] }
                </div>

                <div className="board-row">
                    { squares[2] }
                </div>

                <div className="board-row">
                    { squares[3] }
                </div>

                <div className="board-row">
                    { squares[4] }
                </div>

                <div className="board-row">
                    { squares[5] }
                </div>

                <div className="board-row">
                    { squares[6] }
                </div>
            </div>

        )
    }
}

export default Board;