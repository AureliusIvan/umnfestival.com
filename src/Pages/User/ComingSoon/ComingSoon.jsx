// This is Coming soon page
// Redirect to this page when feature are not coming yet
import React, { useEffect } from 'react'
import "./ComingSoon.scss"
import Pilar from '../../../Reusable/ComponentItems/Pilar/Pilar'
import CoolTitle from '../../../Reusable/ComponentItems/CoolTitle/CoolTitle'

export default function ComingSoon() {
    // declare useEffect hook
    useEffect(() => {
        // scroll to top
        window.scroll(0, 0)
    })
    return (
        <div id="ComingSoon">
            <Pilar />
            <div className="Wrapper">
                <div className="Content">
                    <CoolTitle>
                        Coming Soon!
                    </CoolTitle>
                    <br />
                    13 February 2023
                </div>
            </div>
        </div>
    )
}
