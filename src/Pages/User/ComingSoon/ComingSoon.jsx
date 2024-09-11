import "./ComingSoon.scss"

import React, {useEffect} from 'react'
import Pilar from '../../../Reusable/ComponentItems/Pilar/Pilar'
import CoolTitle from '../../../Reusable/ComponentItems/CoolTitle/CoolTitle'

export default function ComingSoon() {
  useEffect(() => {
    window.scroll(0, 0)
  }, [])

  return (
      <div id="ComingSoon">

        <Pilar/>

        <div className="Wrapper">
          <div className="Content">
            <CoolTitle>
              Coming Soon!
            </CoolTitle>
            13 February 2023
          </div>
        </div>

      </div>
  )
}
