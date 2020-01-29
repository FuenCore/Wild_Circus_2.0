import React, { useState } from "react"
import './PlacePage.css'

const PlacePage = () => {

    const [ placeShow, setPlaceShow ] = useState({
        place: 1
    })

    return(
        <div className="PlacePage_container">
            Je suis une PlacePage
            <div className="PlacePage_container_aside">
                <div className="PlacePage_aside_list">
                    Events list
                    <ul className="PlacePage_ul">
                        <li  className="PlacePage_li">France - RAID du GIPN</li>
                        <li  className="PlacePage_li">Pays-Bas - Braquage Banque X</li>
                        <li  className="PlacePage_li">Amerique - Hack Pentagone</li>
                        <li  className="PlacePage_li">Chine - Braquage Labo</li>
                        <li  className="PlacePage_li">Russie - Hack du Président</li>
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