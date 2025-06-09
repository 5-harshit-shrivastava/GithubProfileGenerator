import React,{useCallback, useEffect,useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "../component/header.js";
import Body from "../component/body.js"

function GithubProfile(){
    // Header
    // Body:10 card show karenge

    return (
        <>
            <Header />
            <Body />
        </>
    )
}


ReactDOM.createRoot(document.getElementById('root')).render(<GithubProfile/>);
