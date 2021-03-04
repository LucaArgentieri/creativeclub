import React, { useEffect } from 'react'
import './about.scss'

import { gsap } from 'gsap'


export default function About() {

    const displayBox = (e) => {
        const img = document.querySelector('.boxGif')

        gsap.to(img, {
            display: "unset",
            opacity: 1,
            duration: 0,
            position: "absolute",
            left: e.pageX,
            top: e.pageY + 20
        })

    }

    const removeBox = () => {
        const img = document.querySelector('.boxGif')

        gsap.to(img, {
            display: "none",
            duration: 1,
            opacity: 0
        })
    }

    const displayBerlusca = (e) => {
        const img = document.querySelector('.berluscaGif')

        gsap.to(img, {
            display: "unset",
            opacity: 1,
            duration: 0,
            position: "absolute",
            left: e.pageX,
            top: e.pageY + 20
        })
    }

    const removeBerlusca = () => {
        const img = document.querySelector('.berluscaGif')

        gsap.to(img, {
            display: "none",
            duration: 1,
            opacity: 0
        })
    }

    const displayKanye = (e) => {
        const img = document.querySelector('.kanyeClub')

        gsap.to(img, {
            display: "unset",
            opacity: 1,
            duration: 0,
            position: "absolute",
            left: e.pageX,
            top: e.pageY + 20
        })

    }

    const removeKanye = () => {
        const img = document.querySelector('.kanyeClub')

        gsap.to(img, {
            display: "none",
            duration: 1,
            opacity: 0
        })
    }






    return (
        <div className="about_container">
            <h2><span>C</span>reative <span>C</span>lub</h2>
            <div>
                <img className="gif boxGif" src="https://media.giphy.com/media/13N8crGK0Mi34c/giphy.gif" alt="out of the box" />
                <section>Curiosity for life, passion for architecture, design, innovation, socializing and people represent the key-elements and the driving force of our concept, that we love to define as <p> <span className="box" onMouseMove={(e) => displayBox(e)} onMouseLeave={removeBox}>“out of the box”</span> and which includes design, architecture, technology, people and rave parties.
                </p></section>
            </div>

            <div>
                <img className="gif berluscaGif" src="https://media1.tenor.com/images/d47fb3e781b0ddef8ca48f689da416a0/tenor.gif?itemid=11677382" alt="berlusconi che conta" />
                <p className="greyNormal">We are creative talents with different backgrounds and experiences.
                    <span onMouseMove={(e) => displayBerlusca(e)} onMouseLeave={removeBerlusca}>We are architects, artists, designers, makers, photographers, sociologists, psychologists, managers and also djs, performers, dancers and barmans.
                </span>
                </p>
            </div>

            <div>
                <p className="greyNormal">Our aim is not simply to involve people in parties, but we want to make him/her feel loved and part of a family to cooperate and share positive vibes, go wild on the dance floor and also discuss about technology, creativity, people and emotions, trying to improve our knowledge and turning every event into a unique experience.</p>
            </div>

            <div>
                <img className="gif kanyeClub" src="https://media.giphy.com/media/l0Nwu9N7s5fWlpLIk/giphy.gif" alt="kanye west meme" />
                <section>Clubs are becoming more and more hybrid. They are real multifunctional social spaces,<p>as our itinerant <span onMouseMove={(e) => displayKanye(e)} onMouseLeave={removeKanye}>CREATIVE CLUB,</span> officially an Art Performance Container.</p>

                </section>
            </div>

        </div>

    )
}
