import "./Announcement.scss";

import Pilar from '../../../Reusable/ComponentItems/Pilar/Pilar';
import React from 'react';
import CoolTitle from '../../../Reusable/ComponentItems/CoolTitle/CoolTitle';
import CustomButton from '../../../Reusable/Button/Button';

function Announcement() {
  return (
      <div className='Announcement'>
        <Pilar/>

        <CoolTitle>
          Announcement!
        </CoolTitle>

        <a
            style={{
              textDecoration: 'none',
            }}
            href="https://drive.google.com/drive/folders/1lszNte3vX4iQA06Wn22usT9neYkJFwXT"
        >
          <CustomButton
              style={{
                width: 'fit-content',
              }}
          >
            Check your name here!
          </CustomButton>
        </a>
      </div>
  )
}

export default Announcement