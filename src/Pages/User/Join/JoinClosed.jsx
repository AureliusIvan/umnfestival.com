import "./Join.scss"

import {setCookie} from "react-use-cookie"
import {useEffect} from "react"
import Pilar from "../../../Reusable/ComponentItems/Pilar/Pilar";

export default function JoinClosed() {
  useEffect(() => {
    setCookie('recruitment', 'recruitment', {path: '/'});
  }, [])

  return (
      <div className="join">
        <div className="form">
          <Pilar/>
          <div className="join-closed-content">
            Batch 2 has closed!
            <br/>
          </div>
        </div>
      </div>
  )
}
