import React from "react";

const RoomPage = (props) => {
    const  { id } = props.match.params
    return (
        <div>
            <p>{ id }</p>
        </div>
    );
}



export default RoomPage;