import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Tilt from 'react-parallax-tilt';
import './worksList.scss'
import { gsap } from 'gsap'

export default function WorksList({ data, works }) {

    useEffect(() => {
        let tl = gsap.timeline()
        tl.to('.works_container', {
            overflow: "hidden"
        })
        tl.fromTo('.worksList_container', {
            opacity: 0,
            y: "100vh",
        }, {
            duration: 1,
            opacity: 1,
            y: 0,
            stagger: {
                amount: 1
            }
        })
        tl.to('.works_container', {
            overflow: "unset"
        })
    }, [])


    return (
        <div className="worksList_main_container">
            {data.map((el, index) => {
                return <Link key={index} to={`/${works}/${el.name}`}>
                    <div className="worksList_container">
                        <Tilt
                            className="parallax-effect"
                            tiltReverse={true}
                            perspective={500}
                        >
                            <img src={el.image} alt="" />
                            <div className="name_container">
                                <p>{el.name}</p>
                            </div>
                        </Tilt>

                    </div>
                </Link>
            })}
        </div >
    )
}
