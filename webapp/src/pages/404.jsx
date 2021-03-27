import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div>
            <p>404 error Page not found.</p>
            <p><Link to="/">Back to Home</Link></p>
        </div>
    );
};

export default NotFoundPage;