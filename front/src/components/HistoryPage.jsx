import React, { useState, useEffect } from 'react';
import './HistoryPage.css';
import axios from "axios";

const HistoryPage = () => {
	const History = {
		date: [],
		place: [],
		text: []
	};


	// date: [ 1996, 2004, 2012, 2019 ],
	// place: [ 'Bordeaux', 'Amsterdam', 'Bogota', 'Cuba' ],
	// text: [
	// 	"Blablabla, React c'est cool franchement",
	// 	"Blablabla, Angular c'est cool franchement",
	// 	"Blablabla, Ouais c'est cool franchement",
	// 	"Blablabla, PHP c'est pas ouf franchement"
	// ]

	const [ history, setHistory ] = useState([])

	const [ slideCounter, setSlideCounter ] = useState(0);

	useEffect(() => {
		axios
		  .get(`http://localhost:5000/api/history`)
		  .then(res => res.data)
		  .then(data => setHistory(data))
			  }, []);
			  console.log(history)
	return (
		<div className="HistoryPage_container">
			<div className="HistoryPage_aside_left">
				<div className="HistoryPage_container_img">
					<div className="HistoryPage_img">
					    {slideCounter === 1 ? <img id="history_pic" src={history[0].image}/> : null}
						{slideCounter === 2 ? <img id="history_pic" src={history[1].image}/> : null}
						{slideCounter === 3 ? <img id="history_pic" src={history[2].image}/> : null}
						{slideCounter === 4 ? <img id="history_pic" src={history[3].image}/> : null}
						{slideCounter === 5 ? <img id="history_pic" src={history[4].image}/> : null}
						{slideCounter === 6 ? <img id="history_pic" src={history[5].image}/> : null}
						{slideCounter === 7 ? <img id="history_pic" src={history[6].image}/> : null}
					</div>
				</div>
				<div className="HistoryPage_controler">
					<button onClick={() => setSlideCounter(slideCounter + 1)} id="HistoryPage_controler_up">
						^
					</button>
					<button onClick={() => setSlideCounter(slideCounter - 1)} id="HistoryPage_controler_down">
						^
					</button>
				</div>
				<div className="HistoryPage_aside_right">
					<h3 className="HistoryPage_date">
						{slideCounter === 1 ? history[0].date : null}
						{slideCounter === 2 ? history[1].date : null}
						{slideCounter === 3 ? history[2].date : null}
						{slideCounter === 4 ? history[3].date : null}
						{slideCounter === 5 ? history[4].date : null}
						{slideCounter === 6 ? history[5].date : null}
						{slideCounter === 7 ? history[6].date : null}

					</h3>
					<div className="filigrane" />
					<h4 className="HistoryPage_place">
						{slideCounter === 1 ? history[0].place : null}
						{slideCounter === 2 ? history[1].place : null}
						{slideCounter === 3 ? history[2].place : null}
						{slideCounter === 4 ? history[3].place : null}
						{slideCounter === 5 ? history[4].place : null}
						{slideCounter === 6 ? history[5].place : null}
						{slideCounter === 7 ? history[6].place : null}
					</h4>
					<p className="HistoryPage_text">
						{slideCounter === 1 ? history[0].text : null}
						{slideCounter === 2 ? history[1].text : null}
						{slideCounter === 3 ? history[2].text : null}
						{slideCounter === 4 ? history[3].text : null}
						{slideCounter === 5 ? history[4].text : null}
						{slideCounter === 6 ? history[5].text : null}
						{slideCounter === 7 ? history[6].text : null}
                    </p>
				</div>
			</div>
		</div>
	);
};

export default HistoryPage;
