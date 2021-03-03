import React, { useEffect } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { WorksData } from './worksData'
import BackHome from '../../components/backHome/backHome'
import WorksList from '../../components/worksList/worksList'
import './works.scss'

export default function Works() {

    const { works } = useParams()
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);


    return (
        <div className="works_container">
            <BackHome />
            <h2>{works} projects</h2>

            <WorksList data={WorksData} works={works} />
        </div>
    )
}
