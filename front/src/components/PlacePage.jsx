import React from "react"
import './PlacePage.css'

const PlacePage = () => {
    return(
        <div className="PlacePage_container">
            Je suis une PlacePage
            <div className="PlacePage_container_aside">
                <div className="PlacePage_aside_list">
                    Events list
                    <ul className="PlacePage_ul">
                        <li className="PlacePage_li">Exemple 1</li>
                        <li className="PlacePage_li">Exemple 2</li>
                        <li className="PlacePage_li">Exemple 3</li>
                        <li className="PlacePage_li">Exemple 4</li>
                        <li className="PlacePage_li">Exemple 5</li>

                    </ul>
                </div>
                <div className="PlacePage_aside_location">
                    <div className="PlacePage_aside_location_container">
                        Google Map
                    </div>
                </div>
            </div>
        </div>
    )
}   

export default PlacePage;