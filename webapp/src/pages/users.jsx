import React from "react";

const UsersPage = () => {
    return (
        <div>
            <ul>
                {["Nathan", "Keri", "Natalie", "Ashlyn"].map((user, idx) => {
                    return <li key={idx}>{user}</li>
                })}
            </ul>
        </div>
    );
};

export default UsersPage;