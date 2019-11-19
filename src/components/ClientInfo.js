import React,{useRef, useEffect} from 'react';

import {TweenMax, TimelineMax, Power3} from 'gsap';
import * as ScrollMagic from "scrollmagic"
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";

import CSSPlugin from 'gsap/CSSPlugin';

const C = CSSPlugin;

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

const A4 = require('../carouselImages/junaid.jpg');


function ClientInfo() {
let app=useRef(null)
let ap=useRef(null)
let text1=useRef(null)
let text2=useRef(null)
let text3=useRef(null)


useEffect(()=>{

    TweenMax.to(app,0,{css:{visibility:'visible'}})
    
    var tl = new TimelineMax({});
        const controller = new ScrollMagic.Controller();

        tl.from(ap,0.5,{scale:0.4, ease:Power3.easeOut})  
        tl.from(text1,1.5,{y:-30, ease:Power3.easeOut})  
        tl.from(text2,1.5,{y:-30, ease:Power3.easeOut},0.5)  
        tl.from(text3,2,{y:-30, ease:Power3.easeOut},0.7) 

        const scene = new ScrollMagic.Scene({
            triggerElement: app,
            triggerHook: 0.5,
            duration: "0"
        })
            .setPin(".app")
            // .addIndicators()
            .setTween(tl)
            .addTo(controller);
    
    
     

})

  return (
    <div>
        <div ref={el=>app=el} className="roundImage">
        {/* <div className="roundImage">ddddddddddd</div> */}
            <img ref={el=>ap=el} class="img-circle" src={A4}></img>
            <br/>
            <span ref={el=>text1=el}><h3><b>Muhanned Junaid</b></h3></span>
            <span ref={el=>text2=el}><h4>Design Lead in Tata Consultancy Limited</h4></span>
            <span ref={el=>text3=el}><h4>Designer | Painter | Photographer</h4></span>
        </div>
    </div>
  );
}

export default ClientInfo;
