import React from "react";
import Login from "./Login";

// We set a boolean to check if the user is logged in
var isLoggedIn = false;
// We set up a boolean to check if the user is registered
var userIsRegistered = false;

// This is the main App function
function App(){
    return (
        <div className="container">{
           isLoggedIn ? <h1>Hello</h1> : <Login isRegistered={userIsRegistered}/>
        }</div>
    );
}

export default App;