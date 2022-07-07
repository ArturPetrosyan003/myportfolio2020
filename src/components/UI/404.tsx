import React from "react";
import { Router } from "react-router";

const NotFound = () => {
    return (
        <div className="not_found">
            <p>Page not found :(</p>
            <button onClick={() => window.history.go(-1)}>Back</button>
        </div>
    );
};

export default NotFound;
