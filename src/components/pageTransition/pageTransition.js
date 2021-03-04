import React, { useEffect } from 'react'
import './pageTransition.scss'
import { gsap } from 'gsap'


export default function PageTransition() {
    useEffect(() => {
        gsap.to('.animation', {
            duration: 5,
            ease: "Power4.easeOut",
            x: "-150%"
        })
    }, [])

    return (
        <div className="animation"></div>
    )
}
