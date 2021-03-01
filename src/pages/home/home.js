import React from 'react'

import Hero from '../../components/hero/hero'
import About from '../../components/about/about'
import Projects from '../../components/projects/projects'
import Contacts from '../../components/contacts/contacts'
import Footer from '../../components/footer/footer'

export default function home() {
    return (
        <>
            <Hero />
            <About />
            <Projects />
            <Contacts />
            <Footer />
        </>
    )
}
