/*index.jsx*/
import React from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
    
    let roomId = "garfunkle";
    return (
        <div>
            <h3>Welcome to the React Router Tutorial</h3>
            <small>Main Page</small>
            <Link to="/users">Show List of Users</Link>
            <Link to={`/room/${roomId}`}>Go to room</Link>
        </div>
    );
};

export default MainPage;