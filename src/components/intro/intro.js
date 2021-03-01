import React from 'react'
import Logo from '../../assets/logo.png'
import { gsap } from 'gsap'

export default function intro() {

    // tl.to('.logo', {
    //     css: {
    //         display: "none"
    //     }
    // })

    // tl.to('.gb', {
    //     duration: 0.5,
    //     y: "100vh",
    // })

    // tl.to('.logo', {
    //     css: {
    //         display: "unset"
    //     }
    // })

    // tl.to('.logo', {
    //     duration: 3,
    //     opacity: 0,
    // })
    // tl.to('.logo', {
    //     css: {
    //         display: "none"
    //     }
    // })

    // tl.from(['.intro_container', '.gb', '.logo'], {
    //     display: "none"
    // })

    return (
        <div className="intro_container">
            <div className="gb"></div>
            <img className="logo" src={Logo} alt="creative club logo" />
        </div>
    )
}
