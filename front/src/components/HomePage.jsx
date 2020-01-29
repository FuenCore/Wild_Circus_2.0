import React from "react";
import "./HomePage.css"

const HomePage = () => {
    return(
    <div className="HomePage_container">
        Je suis une page home
        <img className="HomePage_img_clown" src="https://img.bfmtv.com/c/1256/708/e9a/af23a9e39d545d7e0973b6fc1d085.png"/>
        <div className="HomePage_button_container">
        <button className="HomePage_button">Les tournées</button>
        <button className="HomePage_button">Les artistes</button>
        <button className="HomePage_button">L'histoire</button>
        </div>
    </div>
)}

export default HomePage;