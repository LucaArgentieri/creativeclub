import React, { useEffect } from 'react'
import './hero.scss';
import { Link } from 'react-router-dom';
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);


export default function Hero() {

    useEffect(() => {

        const tl = gsap.timeline()

        tl.to('.hero_container', {
            pointerEvents: "none",
        })


        tl.from('.green', {
            duration: 1,
            opacity: 0,
            stagger: {
                from: "top",
                ease: "power2.in",
                amount: 2
            }
        })

        tl.from('.white', {
            duration: 1,
            opacity: 0
        })

        tl.from('.wrapper', {
            duration: 1,
            opacity: 0
        })


        tl.to('.hero_container', {
            pointerEvents: "all"
        })




    }, [])





    return (

        <div className="hero_container">
            <ul>
                <li>
                    <Link to="/creative-project">
                        <span className="green">C</span>
                        <span className="white">reative P</span>
                        <span className="green">r</span>
                        <span className="white">oj</span>
                        <span className="green">e</span>
                        <span className="white">ct</span>
                    </Link>
                </li>
                <li>
                    <Link to="/branding">
                        <span className="white">Br</span>
                        <span className="green">a</span>
                        <span className="white">nding</span>
                    </Link>
                </li>
                <li>
                    <Link to="/architecture">
                        <span className="white">Archi</span>
                        <span className="green">t</span>
                        <span className="white">ecture</span>
                    </Link>
                </li>
                <li>
                    <Link to="/innovator">
                        <span className="green">I</span>
                        <span className="white">nno</span>
                        <span className="green">v</span>
                        <span className="white">ator</span>
                    </Link>
                </li>
                <li>
                    <Link to="/interior">
                        <span className="white">Int</span>
                        <span className="green">e</span>
                        <span className="white">rior</span>
                    </Link>
                </li>
            </ul>

            <div className="wrapper">
                <svg xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xhtml"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    width="10cm" height="10cm"
                    viewBox="0 0 1000 1000"
                    preserveAspectRatio="xMinYMin">
                    <defs>
                        <path id="textPath" d="M 250 500 A 250,250 0 1 1 250 500.0001" />
                    </defs>
                    <text className="circle-text" x="0" y="0" textAnchor="middle"><textPath xlinkHref="#textPath" startOffset="50%" >Creative Club Creative Club Creative Club Creative Club Creative</textPath></text>
                </svg>
            </div>
        </div >

    );
}

