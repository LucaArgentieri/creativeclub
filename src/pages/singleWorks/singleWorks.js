import React, { useEffect, useState } from 'react'
import './singleWorks.scss'
import { Link, useParams, useLocation } from 'react-router-dom'
import { WorksData } from '../works/worksData'
import BackHome from '../../components/backHome/backHome'
import PageTransition from '../../components/pageTransition/pageTransition'


export default function SingleWorks() {
    const { pathname } = useLocation();


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);



    const { singleworks } = useParams()

    const [isLoaded, setIsLoaded] = useState(false)
    const [dataInfo, setDataInfo] = useState('')

    useEffect(() => {
        WorksData.find((el) => {
            if (el.name === singleworks) {
                setIsLoaded(true)
                setDataInfo(el)
            }
        })
    }, [])






    return (
        <div className="singleWorks_container">
            <PageTransition />
            <BackHome />


            <h2>{singleworks}</h2>

            <div>
                {
                    isLoaded ? <div className="singleWorks_info">
                        <img src={dataInfo.image} alt={dataInfo.name} />
                        <h1>{dataInfo.name}</h1>
                        <p>{dataInfo.desc}</p>
                        <p>Created by {dataInfo.workers}</p>
                    </div> : <h1>Content not aviable</h1>
                }
            </div>
        </div>
    )
}
