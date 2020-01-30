import React, { useState } from "react"
import './PlacePage.css'

const PlacePage = () => {

    const [ placeShow, setPlaceShow ] = useState(0)
    const Chine = "https://firebasestorage.googleapis.com/v0/b/hackcircus-65650.appspot.com/o/china.png?alt=media&token=50b27228-51a0-4e2a-9690-be1d7c7c8b84"
    const France = "https://firebasestorage.googleapis.com/v0/b/hackcircus-65650.appspot.com/o/france.png?alt=media&token=fb5003a6-8340-461f-b099-b64deee79ced"
    const Pays_Bas = "https://firebasestorage.googleapis.com/v0/b/hackcircus-65650.appspot.com/o/pays_bas.png?alt=media&token=b2bf7299-2ed8-4a5d-8d6c-a146cddd7330"
    const Russie = "https://firebasestorage.googleapis.com/v0/b/hackcircus-65650.appspot.com/o/russia.png?alt=media&token=e8cf4946-7719-45ab-b0b9-dbb41dfce969"
    const Usa = "https://firebasestorage.googleapis.com/v0/b/hackcircus-65650.appspot.com/o/usa.png?alt=media&token=a4b7a25c-040f-482b-94a8-044cba6481a8"
    const World = "https://firebasestorage.googleapis.com/v0/b/hackcircus-65650.appspot.com/o/world.png?alt=media&token=a1832673-4c37-4dcc-98c1-a77763ef78d8"

    return(
        <div className="PlacePage_container">
            <div className="PlacePage_container_aside">
                <div className="PlacePage_aside_list">
                    <ul className="PlacePage_ul">
                        <button className="PlacePage_li" onClick={() => setPlaceShow(1)}>France - RAID du GIPN</button>
                        <button className="PlacePage_li" onClick={() => setPlaceShow(2)}>Pays-Bas - Braquage Banque X</button>
                        <button className="PlacePage_li" onClick={() => setPlaceShow(3)}>Amerique - Hack Pentagone</button>
                        <button className="PlacePage_li" onClick={() => setPlaceShow(4)}>Chine - Braquage Labo</button>
                        <button className="PlacePage_li" onClick={() => setPlaceShow(5)}>Russie - Hack du Président</button>
                    </ul>
                </div>
                <div className="PlacePage_aside_location">
                    <div className="PlacePage_aside_location_container">
                        {(placeShow === 1) ? <img id="hackMap"src={France} alt="France"/>: null}
                        {(placeShow === 2) ? <img id="hackMap" src={Pays_Bas} alt="Pays_Bas"/>: null}
                        {(placeShow === 3) ? <img id="hackMap" src={Usa} alt ="Usa"/>: null}
                        {(placeShow === 4) ? <img id="hackMap" src={Chine} alt="Chine" />: null}
                        {(placeShow === 5) ? <img id="hackMap" src={Russie} alt="Russie"/>: null}
                    </div>
                </div>
            </div>
        </div>
    )
}   

export default PlacePage;