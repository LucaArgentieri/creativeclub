import React from 'react'
import './backHome.scss'
import { gsap } from 'gsap'

import { Link } from 'react-router-dom'

export default function BackHome() {

    const moveBtn = () => {
        gsap.to('.greenBtn', {
            duration: 0.5,
            rotation: -45,
            x: -10
        })
    }

    const defaultBtn = () => {
        gsap.to('.greenBtn', {
            duration: 0.5,
            rotation: 0,
            x: 0
        })
    }

    return (
        <Link onMouseEnter={moveBtn} onMouseLeave={defaultBtn} className="greenBtn" to="/">
        </Link>
    )
}
