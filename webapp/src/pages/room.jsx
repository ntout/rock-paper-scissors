import React from "react";
import Game from "../components/Game"

const RoomPage = (props) => {
    const  { id } = props.match.params
    return (
        <div>
            <p>{ id }</p>
            <Game />
        </div>
    );
}



export default RoomPage;