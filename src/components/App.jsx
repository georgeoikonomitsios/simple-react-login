import React from "react";

// We set up a boolean to check if the user is logged in
var isLoggedIn = false;

// This function checks the login status and displays either hello for logged in user
// or the login form
function renderConditionally(){
    if (isLoggedIn === true){
        return <h1>Hello</h1>;
    } else {
        return (
            <form className="form">
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password"/>
                <button type="submit">Login</button>
            </form>
        );
    }
}
// This is the main App function
function App(){
    return (
        <div className="container">
            {/* Here we call the function to check if the user is logged in or not*/}
            {renderConditionally()}
        </div>
    );
}

export default App;