import React from 'react'
import { Link, useParams } from 'react-router-dom'

export default function Works() {

    const { works } = useParams()

    return (
        <div>
            <h1>{works}</h1>
            <Link to={`/${works}/progetto-singolo`}>Progetto Singolo</Link>
        </div>
    )
}
