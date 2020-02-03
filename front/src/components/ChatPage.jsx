import React, { useState, useEffect } from 'react';
import './ChatPage.css';
import Axios from 'axios';
import BgGlitch from './BgGlitch';
import NavBar from "./NavBar";
import { AuthContext } from './auth/Auth';
import { Redirect } from "react-router-dom";

const ChatPage = () => {
	const [ messages, setMessages ] = useState([]);
	const [ antiSpam, setAntiSpam ] = useState(0);
    const [ message, setMessage ] = useState();
    const [ need2BeDestroy, setneed2BeDestroy ] = useState(null);
    const [ isSubmit, setIsSubmit ] = useState()

	const dataUser = React.useContext(AuthContext);

	const pseudo = (dataUser && dataUser.userInfo && dataUser.userInfo.pseudo) || 'Stranger';

	const defaultAvatar = 'https://image.freepik.com/vector-gratis/payaso-aterrador-sombrero-rojo_43623-432.jpg';
    const avatar = (dataUser && dataUser.userInfo && dataUser.userInfo.avatar) || defaultAvatar;
    const isAdmin = (dataUser && dataUser.userInfo && dataUser.userInfo.admin)

	useEffect(() => {
		refreshChat();
	}, []);

	const refreshChat = () => {
		Axios.get('http://localhost:5000/api/chat').then((response) => response.data).then((data) => setMessages(data));
		setTimeout(refreshChat, 5000);
	};

	let wow = new Date();
	let annee = wow.getFullYear();
	let mois = wow.getMonth() + 1;
	let jour = wow.getDate();
	let heure = wow.getHours();
	let minute = wow.getMinutes();
	const hour = heure + ':' + minute;
	const date = jour + '/' + mois + '/' + annee;

	const checkAntiSpam = () => {
		if (antiSpam === 0) {
			return postMessage();
		} else if (antiSpam === 1) {
			return alert('Pas de spam ici !');
		}
	};

	const postMessage = () => {
		Axios.post('http://localhost:5000/api/chat', {
			pseudo: pseudo,
			date: date,
			hour: hour,
			message: message,
			avatar: avatar
		})
			.then(setAntiSpam(1))
			.then(setTimeout(() => setAntiSpam(0), 5000));
    };
    
    const destroyMessage = () => {
        Axios.delete(`http://localhost:5000/api/chat/${need2BeDestroy}`).then(() => setIsSubmit(true))
    }

    if(need2BeDestroy != null) {
        return destroyMessage();
    }

    if (isSubmit) {
		return <Redirect to="/chat" />;
    }

	return (
		<div className="ChatPage_container">
			<div className="Main_navBar">
				<NavBar />
			</div>
			<div className="ChatPage_BgGlitch">
				<BgGlitch title="MADE BY FUENCORE" glitch="-1- -1- 1 -1- " />
			</div>
			<div className="ChatPage_read">
				{messages.map((x) => (
					<div className="ChatPage_read_container">
						<div className="ChatPage_text">
							<div className="ChatPage_read_container_info">
								<p className="ChatPage_read_container_pseudo">{x.pseudo}</p>
								<p className="ChatPage_read_container_date">
									{x.date} à {x.hour}
								</p>
                               {(isAdmin === 1) ? <button id="chat_destroy" onClick={() => setneed2BeDestroy(x.id)}>DESTROY</button> : ""}
							</div>
							<div className="ChatPage_read_container_message">
								<p className="ChatPage_read_message">{x.message}</p>
							</div>
						</div>
						<img src={x.avatar} id="ChatPage_avatar" />
					</div>
				))}
				<div id="scrollToMe" />
			</div>
			<div className="ChatPage_write">
				<textarea
					required="required"
					type="text"
					className="ChatPage_textarea"
					onChange={(e) => setMessage(e.target.value)}
				/>
				<button type="sumbit" className="ChatPage_sendbutton" onClick={() => checkAntiSpam()}>
					{antiSpam === 1 ? 'Attendez 5s' : 'Envoyer le message'}
				</button>
			</div>
		</div>
	);
};

export default ChatPage;
