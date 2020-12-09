import React from "react"
import ConnectHome from "../connect4/ConnectHome";
import BattleshipHome from "../battleship/BattleshipHome";


class Home extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            currentGame: null,
        };
    }
    
    launchBattleShip = (event) => {
        event.preventDefault();
        this.setState({
            currentGame: "Battleship"
        });
    };

    launchConnect4 = (event) => {
        event.preventDefault();
        this.setState({
            currentGame: "Connect4"
        });
    };

    render () {
        return (
                <div>
                    {
                        this.state.currentGame === null ? 
                            <div>
                                <input type="submit" value="Connect4" onClick={this.launchConnect4}/>
                                <input type="submit" value = "Battleship" onClick={this.launchBattleShip}/>
                            </div>
                        :
                            this.state.currentGame === "Connect4" ? <ConnectHome/> : <BattleshipHome/>

                    }
                </div>
            
        )
    }
}

export default Home;