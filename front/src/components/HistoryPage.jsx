import React from "react";
import "./HistoryPage.css"

const HistoryPage = () => {
    return(
        <div className="HistoryPage_container">
            Je suis une page d'histoire
            <div className="HistoryPage_aside_left">
            <div className="HistoryPage_container_img">
                <div className="HistoryPage_img">Je suis une image</div>
                </div>
                <div className="HistoryPage_controler">
                    <div id="HistoryPage_controler_up">^</div>
                    <div id="HistoryPage_controler_down">^</div>
                </div>
            <div className="HistoryPage_aside_right">
            <h3 className="HistoryPage_date">1998</h3>
            <div className="filigrane"></div>
            <h4 className="HistoryPage_place">Bordeaux</h4>
            <p className="HistoryPage_text">
                BlaBlaBla, React c'est cool franchement
            </p>
            </div>
            </div>
            </div>

    )
}

export default HistoryPage;