import React from 'react'

export default function ImageContainer({ activeIndex, imageSlider }) {
	return (
		<section className="slides">
			{
				imageSlider.map((slide, index) => (
					<div key={index} className={activeIndex === index ? "slides active" : "inactive"}>
						<img className="slide-image" src={slide.src} alt="" />
						<h2 className="slide-title">{slide.title}</h2>
						<h3 className="slide-text">{slide.description}</h3>
					</div>
				))
			}
		</section>
	)
}
