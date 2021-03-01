import React from 'react'
import { TiSocialFacebook, TiSocialLinkedin, TiSocialInstagram } from 'react-icons/ti'

import './footer.scss'

export default function Footer() {
    return (
        <footer className="footer_container">
            <a href="mailto:creative@club.it">creative@club.it</a>
            <a href="#"><TiSocialFacebook size="30px" />
            </a>
            <a target="_blank" href="https://www.instagram.com/creativeclub.space/"><TiSocialInstagram size="30px" />
            </a>
            <a href="#"><TiSocialLinkedin size="30px" />
            </a>
        </footer>
    )
}
