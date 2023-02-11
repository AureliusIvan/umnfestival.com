import React, { useEffect } from 'react'
import "./ComingSoon.scss"
import Sparkles from '../../../Reusable/Animation/Sparkle/Sparkle'
import Pilar from '../../../Reusable/ComponentItems/Pilar/Pilar'

function ComingSoon() {
    useEffect(() => {
        window.scroll(0, 0)
    })
    return (
        <div id="ComingSoon">
            <Pilar />
            <div className="Wrapper">
                <div className="Content">
                    <Sparkles>
                        Coming Soon!
                    </Sparkles>
                    <br />
                    13 February 2023
                </div>
            </div>
        </div>
    )
}

export default ComingSoon;