import React from 'react';
import './BgGlitch.css';

const BgGlitch = (props) => {
	return (
		<div className="BgGlitch_container">
			<div class="glitch" data-text={props.glitch || "H4CK_C1RCU5"}>
			<div class="BgGLitch_color">{props.glitch || 'H4CK_C1RCU5'}</div>
			<p class="BgGlitch_p">{props.title || "LE D4RKNET DES CL0WNS"}</p>	
			</div>
			<div class="glow">HACK_CIRCUS</div>
			<div class="scanlines" />
		</div>
	);
};

export default BgGlitch;
