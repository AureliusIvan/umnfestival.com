// This is fallback for recruitment page, if recruitment has been closed
// all import
import "./Join.scss"
import { setCookie } from "react-use-cookie"
import { useEffect } from "react"
import Pilar from "../../../Reusable/ComponentItems/Pilar/Pilar";

// func start here
export default function JoinClosed() {
    // declare use effect to call setCookie function when page first rendered
    useEffect(() => {
        // Set Cookie recruitment to true
        // to prevent notif icon (green dot) when user already go to recruitment page more than once
        setCookie('recruitment', 'recruitment', { path: '/' });
    }, [])

    // return page
    return (
        // this div have the same class with Join.jsx
        // The goal is reduce time when i build this component (code reusablity)
        <div className="join">
            <div className="form">
                {/* import pilar component to add more styling to the page */}
                <Pilar />
                <div className="join-closed-content">
                    {/* Batch 1 recruitment has been closed! */}
                    Batch 2 has closed!
                    <br />
                    {/* See you on the next Batch! */}
                </div>
            </div>
        </div>
    )
}
