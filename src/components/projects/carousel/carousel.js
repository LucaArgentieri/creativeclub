import React, { useState } from 'react'
import './carousel.scss'
import { CarouselData } from './carouselData'
import { CgArrowLongRight, CgArrowLongLeft } from 'react-icons/cg'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import Tilt from 'react-parallax-tilt';


export default function Carousel({ slides }) {

    const [current, setCurrent] = useState(0);
    const length = slides.length;
    const tl = gsap.timeline()

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
        tl.to('.left-arrow', {
            pointerEvents: "none",
        })

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

        tl.to('.left-arrow', {
            pointerEvents: "all",
        })

    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
        tl.to('.left-arrow', {
            pointerEvents: "none",
        })

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
            duration: 2,
            opacity: 0,
            x: 100
        }, {
            duration: 1,
            opacity: 1,
            x: 0
        })


        gsap.fromTo('.carouselInfo', {
            duration: 1,
            opacity: 0,
            x: 100
        }, {
            duration: 1,
            opacity: 1,
            x: 0
        })

        tl.to('.left-arrow', {
            pointerEvents: "all",
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
                                <Tilt
                                    tiltReverse={true}
                                    glareEnable={true} glareMaxOpacity={0.3} glareColor="#ffffff" glarePosition="bottom"
                                    tiltAngleXInitial={20} tiltAngleYInitial={20}
                                    reset={false}
                                >
                                    <img key={index} src={slide.image} alt="carousel images" className="image" />
                                </Tilt>

                            )}
                        </div>
                    )
                })
            }


            <div className="carouselInfo">

                {
                    CarouselData.map((slide, index) => {
                        return (
                            <div className={index === current ? 'slide active' : 'slide'} key={index} >
                                {index === current && (
                                    <div key={index}>
                                        <h3>{slide.name}</h3>
                                        <p>{slide.desc}</p>
                                        <Link to={"/" + slide.url}><button className="greenSquare">Explore {slide.name}</button></Link>
                                        <div className="arrow_container">
                                            <CgArrowLongLeft className="left-arrow" onClick={prevSlide} />
                                            <CgArrowLongRight className="right-arrow" onClick={nextSlide} />
                                        </div>
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
