import React, { useState, useEffect } from 'react';
import './HistoryPage.css';
import axios from 'axios';

const HistoryPage = () => {
	const [ history, setHistory ] = useState([]);
	const defaultPic =
		'https://www.gannett-cdn.com/-mm-/e1d78d18d18c0e71d5c7c4a0350b598687f50fe1/c=0-50-534-352/local/-/media/2016/10/28/Treasure%20Coast/TreasureCoast/636132784773010126-creepy-clown.jpg?width=1600&height=800&fit=crop';
	const defaultDate = '???';
	const defaultPlace = '???';
	const defaultText = 'Oui';

	const [ slideCounter, setSlideCounter ] = useState(0);

	useEffect(() => {
		axios.get(`http://localhost:5000/api/history`).then((res) => res.data).then((data) => setHistory(data));
	}, []);
	return (
		<div className="HistoryPage_container">
			<div className="HistoryPage_block">
				<div className="HistoryPage_dpi">
					<div className="HistoryPage_info">
					
						<h3 className="HistoryPage_date">
							{slideCounter < 1 ? defaultDate : null}
							{slideCounter === 1 ? history[0].date : null}
							{slideCounter === 2 ? history[1].date : null}
							{slideCounter === 3 ? history[2].date : null}
							{slideCounter === 4 ? history[3].date : null}
							{slideCounter === 5 ? history[4].date : null}
							{slideCounter === 6 ? history[5].date : null}
							{slideCounter === 7 ? history[6].date : null}
							{slideCounter > 7 ? defaultDate : null}
						</h3>
						<h4 className="HistoryPage_place">
							{slideCounter < 1 ? defaultPlace : null}
							{slideCounter === 1 ? history[0].place : null}
							{slideCounter === 2 ? history[1].place : null}
							{slideCounter === 3 ? history[2].place : null}
							{slideCounter === 4 ? history[3].place : null}
							{slideCounter === 5 ? history[4].place : null}
							{slideCounter === 6 ? history[5].place : null}
							{slideCounter === 7 ? history[6].place : null}
							{slideCounter > 7 ? defaultPlace : null}
						</h4>
						<div className="filigrane" />
				<p className="HistoryPage_text">
					{slideCounter < 1 ? defaultText : null}
					{slideCounter === 1 ? history[0].text : null}
					{slideCounter === 2 ? history[1].text : null}
					{slideCounter === 3 ? history[2].text : null}
					{slideCounter === 4 ? history[3].text : null}
					{slideCounter === 5 ? history[4].text : null}
					{slideCounter === 6 ? history[5].text : null}
					{slideCounter === 7 ? history[6].text : null}
					{slideCounter > 7 ? defaultText : null}
				</p>
					</div>
					<div className="HistoryPage_img">
						{slideCounter < 1 ? <img alt="history_pic" id="history_defaultpic" src={defaultPic} /> : null}
						{slideCounter === 1 ? <img alt="history_pic" id="history_pic" src={history[0].image} /> : null}
						{slideCounter === 2 ? <img alt="history_pic" id="history_pic" src={history[1].image} /> : null}
						{slideCounter === 3 ? <img alt="history_pic" id="history_pic" src={history[2].image} /> : null}
						{slideCounter === 4 ? <img alt="history_pic" id="history_pic" src={history[3].image} /> : null}
						{slideCounter === 5 ? <img alt="history_pic" id="history_pic" src={history[4].image} /> : null}
						{slideCounter === 6 ? <img alt="history_pic" id="history_pic" src={history[5].image} /> : null}
						{slideCounter === 7 ? <img alt="history_pic" id="history_pic" src={history[6].image} /> : null}
						{slideCounter > 7 ? <img alt="history_pic" id="history_defaultpic" src={defaultPic} /> : null}
					</div>
				</div>
			</div>
			<div className="HistoryPage_controler">
				<button
					onClick={() => (slideCounter > 7 ? null : setSlideCounter(slideCounter + 1))}
					id="HistoryPage_controler_up"
				>
					^
				</button>
				<button
					onClick={() => (slideCounter < 1 ? null : setSlideCounter(slideCounter - 1))}
					id="HistoryPage_controler_down"
				>
					^
				</button>
			</div>
		</div>
	);
};

export default HistoryPage;
