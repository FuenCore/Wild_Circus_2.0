import React, { useState } from "react";
import "./ModalAvatar.css";

const ModalAvatar = () => {

    const [ file, setFile ] = useState({
        file: "",
        name: ''
    })

    const [ isOpen, setIsOpen ] = useState(0)

    return(
        <div className="ModalAvatar_container">
            <div className="ModalAvatar_box">
            Je suis une modal       
            <input type="file" name="file"></input>
            <button type="submit">Enregistrer</button>
            </div>
        </div>
    )
}

export default ModalAvatar;