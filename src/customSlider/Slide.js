import React, { useState, useEffect } from 'react';
import Arrows from './Arrows';
import Dots from './Dots';
import ImageContainer from './ImageContainer';
import  ImageSlider from './imageSlider'

import './slide.css';
const imageSlider = ImageSlider;
let len = imageSlider.length - 1;

const Slide = () => {
	const [activeIndex, setActiveIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
		}, 3000)
		return () => {
			clearInterval(interval)
		}
	}, [activeIndex])

	return (
		<div className="slider-container">
			<ImageContainer activeIndex={activeIndex} imageSlider={imageSlider} />
			<Arrows prevSlide={() => setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)}
				nextSlide={() => setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)} />
			<Dots imageSlider={imageSlider} activeIndex={activeIndex} onclick={(activeIndex) => setActiveIndex(activeIndex)} />
		</div>
	)
}

export default Slide
