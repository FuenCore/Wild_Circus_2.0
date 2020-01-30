import React, { useState, useEffect } from "react";
import axios from "axios";
import './PlacePage.css'

const PlacePage = () => {

    const [ placeShow, setPlaceShow ] = useState(0)

    const [ exploit, setExploit ] = useState([])

    useEffect(() => {
		axios
		  .get(`http://localhost:5000/api/exploit`)
		  .then(res => res.data)
		  .then(data => setExploit(data))
			  }, []);
			  console.log(exploit)

    return(
        <div id="PlacePage_teleport" className="PlacePage_container">
            <div className="PlacePage_container_aside">
                <div className="PlacePage_aside_list">
                    <ul className="PlacePage_ul">
                        {exploit.map((yes, index) => (<button className="PlacePage_li" onClick={() => setPlaceShow(index + 1)}>{yes.place} - {yes.name}</button>))}
                    </ul>
                </div>
                <div className="PlacePage_aside_location">
                    <div className="PlacePage_aside_location_container">
                        {(placeShow === 1) ? <img id="hackMap" src={exploit[0].image} alt={exploit[0].place}/>: null}
                        {(placeShow === 2) ? <img id="hackMap" src={exploit[1].image} alt={exploit[1].place}/>: null}
                        {(placeShow === 3) ? <img id="hackMap" src={exploit[2].image} alt={exploit[2].place}/>: null}
                        {(placeShow === 4) ? <img id="hackMap" src={exploit[3].image} alt={exploit[3].place} />: null}
                        {(placeShow === 5) ? <img id="hackMap" src={exploit[4].image} alt={exploit[4].place}/>: null}
                    </div>
                </div>
            </div>
        </div>
    )
}   

export default PlacePage;