import React,{useRef, useEffect} from 'react';

import {TweenMax, TimelineMax, Power3} from 'gsap';
import * as ScrollMagic from "scrollmagic"
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";

import CSSPlugin from 'gsap/CSSPlugin';

const C = CSSPlugin;

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);


const B1 = require('../carouselImages/1.jpg');
const B2 = require('../carouselImages/1111.jpg');


const styles1={
	backgroundColor: "#aaaaaa",
  fontSize: "1.1rem",
  transition: "all ease .5s",
  '&:hover': {
    backgroundColor: "#ff0000",
    color: "#ffffff"
  },
  '&:active':{
	  backgroundColor:"#dddddd"
  }
}




function SectionOne() {

	
let app=useRef(null)
let appOne=useRef(null)
let box1=useRef(null)
let img1=useRef(null)
let ctnt1=useRef(null)
let ctnt11=useRef(null)
let btn1=useRef(null)
let box2=useRef(null)
let img2=useRef(null)
let ctnt2=useRef(null)
let ctnt22=useRef(null)
let btn2=useRef(null)


useEffect(()=>{

    TweenMax.to(app,0,{css:{visibility:'visible'}})
    // TweenMax.to(appOne,0,{backgroundColor:"black"})
    
    var tl = new TimelineMax({});
        const controller = new ScrollMagic.Controller();

        tl.to(appOne,1,{backgroundColor:"turquoise", ease:Power3.easeOut})  
        tl.from(box1,0.3,{x:-400, ease:Power3.easeOut},0)  
        tl.from(img1,2,{scale:0, ease:Power3.easeOut},1)  
        tl.from(ctnt1,2,{y:-30, ease:Power3.easeOut},1.3) 
        tl.from(ctnt11,2,{y:-30, ease:Power3.easeOut},1.5) 
        tl.from(btn1,2,{y:-30, ease:Power3.easeOut},1.7) 

        const scene = new ScrollMagic.Scene({
            triggerElement: app,
            triggerHook: 0,
            duration: "0"
        })
            .setPin(".app")
            // .addIndicators()
            .setTween(tl)
			.addTo(controller); 
			
    var tl2 = new TimelineMax({});
        const controller2 = new ScrollMagic.Controller();

        tl.from(box2,0.5,{x:400, ease:Power3.easeOut})  
        tl.from(img2,2,{scale:0, ease:Power3.easeOut},1)  
        tl.from(ctnt2,2,{y:-30, ease:Power3.easeOut},1.3) 
        tl.from(ctnt22,2,{y:-30, ease:Power3.easeOut},1.5) 
        tl.from(btn2,2,{y:-30, ease:Power3.easeOut},1.7) 

        const scene2 = new ScrollMagic.Scene({
            triggerElement: ctnt2,
            triggerHook: 1,
            duration: "0"
        })
            .setPin(".box2")
            // .addIndicators()
            .setTween(tl2)
            .addTo(controller2); 

})

  return (
    <div ref={el=>app=el} style={{marginTop: "10%"}}>
      <section ref={el=>appOne=el} id="one" className="wrapper style2">
				<div className="inner">
					<div className="grid-style">

						<div ref={el=>box1=el} style={{position: "relative", transform: "translate(50%, 0%)", marginBottom: "150px"}}>
							<div className="box" style={{styles1}}>
								<div ref={el=>img1=el} className="image fit">
									<img src={B1} alt="" />
								</div>
								<div className="content">
									<header ref={el=>ctnt1=el} className="align-center">
										<p>I draw like other people bite their nails</p>
										<h2>ART IS EVERYTHING!</h2>
									</header>
									<p ref={el=>ctnt11=el}> "It is only by drawing often, drawing everything, drawing incessantly, that one fine day you discover, to your surprise, that you have rendered something in its true character." - Camille Pissarro</p>
									<footer ref={el=>btn1=el} className="align-center">
										<a href="#" className="button alt">Learn More</a>
									</footer>
								</div>
							</div>
						</div>

						<div ref={el=>box2=el} style={{position: "relative", transform: "translate(45%, 0%)"}}>
							<div className="box">
								<div ref={el=>img2=el} className="image fit">
									<img src={B2} alt="" />
								</div>
								<div className="content">
									<header ref={el=>ctnt2=el} className="align-center">
										<p>"Drawing is vision on paper."</p>
										<h2>WORLD NEEDS ART!</h2>
									</header>
									<p ref={el=>ctnt22=el}> "Learning to draw is really a matter of learning to see - to see correctly - and that means a good deal more than merely looking with the eye." - Kimon Nicolaides</p>
									<footer ref={el=>btn2=el} className="align-center">
										<a href="#" className="button alt">Learn More</a>
									</footer>
								</div>
							</div>
						</div>

					</div>
				</div>
			</section>
    </div>
  );
}

export default SectionOne