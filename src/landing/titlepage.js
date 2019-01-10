import React from 'react';
import './titlepage.css'

class TitlePage extends React.Component {
	render() {
		return (
			<div>
				<div class="titletext" id="name"><h1>JIMMY QI</h1></div>
				<div id="links">
					<div id="resume">
						<a href={require("../resources/resume.pdf")}><button type="button" class="brownbtn btn btn-outline-secondary">Resume</button></a>
					</div>
					<div id="portfolio">
						<button type="button" class="brownbtn btn btn-outline-secondary">Portfolio</button>
					</div>
				</div>
				<div class="keyart" id="nonparallax"></div>
				<div class="keyart" id="parallax">
				  <div class="keyart_layer parallax" id="keyart-0" data-speed="2"></div>	
				  <div class="keyart_layer parallax" id="keyart-1" data-speed="5"></div>
				  <div class="keyart_layer parallax" id="keyart-2" data-speed="11"></div>	
				  <div class="keyart_layer parallax" id="keyart-3" data-speed="16"></div>
				  <div class="keyart_layer parallax" id="keyart-4" data-speed="26"></div>	
				  <div class="keyart_layer parallax" id="keyart-5" data-speed="36"></div>
				  <div class="keyart_layer parallax" id="keyart-6" data-speed="49"></div>	
				  <div class="keyart_layer" id="keyart-scrim"></div>
				  <div class="keyart_layer parallax" id="keyart-7" data-speed="69"></div>	
				  <div class="keyart_layer" id="keyart-8" data-speed="100"></div>
				</div>
			</div>
		);
	}
	componentDidMount() {
		castParallax();
	}
}

function castParallax() {
	window.addEventListener("scroll", function(event){
		var top = this.pageYOffset;
		var layers = document.getElementsByClassName("parallax");
		var layer, speed, yPos;
		for (var i = 0; i < layers.length; i++) {
			layer = layers[i];
			speed = layer.getAttribute('data-speed');
			yPos = -(top * speed / 100);
			layer.setAttribute('style', 'transform: translate3d(0px, ' + yPos + 'px, 0px)');
		}
	});
}

// document.body.onload = castParallax();

export default TitlePage;