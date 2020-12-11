import React from "react"
import ConnectHome from "../connect4/ConnectHome";
import BattleshipHome from "../battleship/BattleshipHome";
import "./home.css"


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

    goHome = (event) => {
        event.preventDefault();
        this.setState({
            currentGame: null
        })
    } 

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
                            <div>
                                { this.state.currentGame === "Connect4" ? <ConnectHome/> : <BattleshipHome/> }
                                <input className="go-back" type="submit" value="Go to Home" onClick={this.goHome}/>
                            </div>

                    }
                </div>
            
        )
    }
}

export default Home;