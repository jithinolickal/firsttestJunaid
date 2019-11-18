import React,{useRef, useEffect} from 'react';

import {TweenMax, TimelineMax, Power3} from 'gsap';
import * as ScrollMagic from "scrollmagic"
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

const C1 = require('../carouselImages/looney desktop.jpg');
const C2 = require('../carouselImages/NEWINSTA.jpg');
const C3 = require('../carouselImages/IMG.jpeg');
const C4 = require('../carouselImages/painting.jpg');

function SectionThree() {

	let app = useRef(null);
	let i1 = useRef(null);
	let i2 = useRef(null);
	let i3 = useRef(null);
	let i4 = useRef(null);
    useEffect(()=>{

		TweenMax.to(app,0,{css:{visibility:'visible'}})
		// TweenMax.to(appOne,0,{backgroundColor:"black"})
		
		var tl = new TimelineMax({});
			const controller = new ScrollMagic.Controller();
	
			tl.from(app,1,{backgroundColor:"turquoise", ease:Power3.easeOut})  
			tl.from(i1,3,{scale:0, ease:Power3.easeOut},1)  
			tl.from(i2,3,{scale:0, ease:Power3.easeOut},1)  
			tl.from(i3,3,{scale:0, ease:Power3.easeOut},1)  
			tl.from(i4,3,{scale:0, ease:Power3.easeOut},1)  

	
			const scene = new ScrollMagic.Scene({
				triggerElement: app,
				triggerHook: 1,
				duration: "0"
			})
				.setPin(".app")
				// .addIndicators()
				.setTween(tl)
				.addTo(controller); 
				
	});
	

  return (
    <div>
        <section ref={el=>app=el} id="three" className="wrapper style2">
				<div className="inner">
					<header className="align-center">
						<p className="special">"I just wanted to paint and sketch and tell stories by drawing"</p>
						<h2>Collections</h2>
					</header>
					<div className="gallery">
						<div ref={el=>i1=el}>
							<div className="image fit">
								<a href="#"><img src={C1} alt="" /></a>
							</div>
						</div>
						<div ref={el=>i2=el} style={{marginTop: "5%"}}>
							<div className="image fit">
								<a href="#"><img src={C2} alt="" /></a>
							</div>
						</div>
						<div ref={el=>i3=el} style={{marginTop: "-6%"}}>
							<div className="image fit">
								<a href="#"><img src={C3} alt="" /></a>
							</div>
						</div>
						<div ref={el=>i4=el} style={{marginTop: "14%"}}>
							<div className="image fit">
								<a href="#"><img src={C4} alt="" /></a>
							</div>
						</div>
					</div>
				</div>
			</section>
    </div>
  );
}

export default SectionThree;
