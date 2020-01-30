import React, { useState } from 'react';
import './HistoryPage.css';

const HistoryPage = () => {
	const History = {
		date: [ 1996, 2004, 2012, 2019 ],
		place: [ 'Bordeaux', 'Amsterdam', 'Bogota', 'Cuba' ],
		text: [
			"Blablabla, React c'est cool franchement",
			"Blablabla, Angular c'est cool franchement",
			"Blablabla, Ouais c'est cool franchement",
			"Blablabla, PHP c'est pas ouf franchement"
		]
	};

	// [
	//     date: 1996,
	//     place: "Bordeaux",
	//     text: "Blablabla, React c'est cool franchement"
	// ],
	// {
	//     date: 1999,
	//     place: "Amsterdam",
	//     text: "Blablabla, JSON c'est cool franchement"
	// },

	const [ slideCounter, setSlideCounter ] = useState(0);

	return (
		<div className="HistoryPage_container">
			Je suis une page d'histoire
			<div className="HistoryPage_aside_left">
				<div className="HistoryPage_container_img">
					<div className="HistoryPage_img">Je suis une image</div>
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
						{slideCounter === 1 ? History.date[0] : null}
						{slideCounter === 2 ? History.date[1] : null}
						{slideCounter === 3 ? History.date[2] : null}
						{slideCounter === 4 ? History.date[3] : null}
					</h3>
					<div className="filigrane" />
					<h4 className="HistoryPage_place">
						{slideCounter === 1 ? History.place[0] : null}
						{slideCounter === 2 ? History.place[1] : null}
						{slideCounter === 3 ? History.place[2] : null}
						{slideCounter === 4 ? History.place[3] : null}
					</h4>
					<p className="HistoryPage_text">
                    {slideCounter === 1 ? History.text[0] : null}
						{slideCounter === 2 ? History.text[1] : null}
						{slideCounter === 3 ? History.text[2] : null}
						{slideCounter === 4 ? History.text[3] : null}
                    </p>
				</div>
			</div>
		</div>
	);
};

export default HistoryPage;
