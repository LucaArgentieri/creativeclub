import React from 'react'
import './projects.scss'
import Carousel from './carousel/carousel'
import { CarouselData } from './carousel/carouselData'


export default function Projects() {
    return (
        <div className="projects_container">
            <h2><span>C</span>reative <span>P</span>rojects</h2>
            <Carousel slides={CarouselData} />
        </div>
    )
}
