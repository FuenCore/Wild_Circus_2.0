import React from 'react';
import './BgGlitch.css';

const BgGlitch = (props) => {
	return (
		<div className="BgGlitch_container">
			<div className="glitch" data-text={props.glitch || "H4CK_C1RCU5"}>
			<div className="BgGLitch_color">{props.glitch || 'H4CK_C1RCU5'}</div>
			<p className="BgGlitch_p">{props.title || "LE D4RKNET DES CL0WNS"}</p>	
			</div>
			<div className="glow">HACK_CIRCUS</div>
			<div className="scanlines" />
		</div>
	);
};

export default BgGlitch;
