import React from 'react'

export default function Dots({ activeIndex, imageSlider, onclick }) {
	return (
		<div className="all-dots">
			{
				imageSlider.map((slide, index) => (
					<div key={index} className={`${activeIndex === index ? "dot active-dot" : "dot" }`} onClick={() => onclick(index)} />
				))
			}
		</div>
	)
}
