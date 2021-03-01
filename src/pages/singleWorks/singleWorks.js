import React from 'react'
import { Link, useParams } from 'react-router-dom'


export default function SingleWorks() {

    const { singleworks } = useParams()

    return (
        <div>
            {singleworks}
        </div>
    )
}
