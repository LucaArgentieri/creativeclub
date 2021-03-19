import React from 'react'

import Hero from '../../components/hero/hero'
import About from '../../components/about/about'
import Projects from '../../components/projects/projects'
import People from '../../components/people/people'
import Contacts from '../../components/contacts/contacts'

export default function home() {

    return (
        <>
            <Hero />
            <About />
            <Projects />
            <People />
            <Contacts />
        </>
    )
}
