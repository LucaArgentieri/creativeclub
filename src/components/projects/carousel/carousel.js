import React, { useState } from 'react'
import './carousel.scss'
import { CarouselData } from './carouselData'
import { CgArrowLongRight, CgArrowLongLeft } from 'react-icons/cg'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'


export default function Carousel({ slides }) {

    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);

        gsap.fromTo('.slide', {
            duration: 1,
            opacity: 0,
            x: -100
        }, {
            duration: 1,
            opacity: 1,
            x: 0
        })


        gsap.fromTo('.greenSquare', {
            duration: 1,
            opacity: 0,
            x: -100
        }, {
            duration: 2,
            opacity: 1,
            x: 0
        }
        )

        gsap.fromTo('.carouselInfo', {
            duration: 1,
            opacity: 0,
            x: -100
        }, {
            duration: 1,
            opacity: 1,
            x: 0
        })



    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);


        gsap.fromTo('.slide', {
            duration: 1,
            opacity: 0,
            x: 100
        }, {
            duration: 1,
            opacity: 1,
            x: 0
        })


        gsap.fromTo('.greenSquare', {
            duration: 1,
            opacity: 0,
            x: 100
        }, {
            duration: 2,
            opacity: 1,
            x: 0
        }
        )

        gsap.fromTo('.carouselInfo', {
            duration: 1,
            opacity: 0,
            x: 100
        }, {
            duration: 1,
            opacity: 1,
            x: 0
        })
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }


    return (
        <section className="slider">

            {
                CarouselData.map((slide, index) => {
                    return (
                        <div className={index === current ? 'slide active' : 'slide'} key={index} >
                            {index === current && (
                                <img key={index} src={slide.image} alt="carousel images" className="image" />

                            )}
                        </div>
                    )
                })
            }
            <CgArrowLongLeft className="left-arrow" onClick={prevSlide} />
            <CgArrowLongRight className="right-arrow" onClick={nextSlide} />

            <div className="carouselInfo">

                {
                    CarouselData.map((slide, index) => {
                        return (
                            <div className={index === current ? 'slide active' : 'slide'} key={index} >
                                {index === current && (
                                    <div key={index}>
                                        <h3>{slide.name}</h3>
                                        <p>{slide.desc}</p>
                                        <Link to={"/" + slide.url}><button className="greenSquare">Explore Projects</button></Link>

                                    </div>


                                )}
                            </div>
                        )
                    })
                }

            </div>


        </section >
    )
}
