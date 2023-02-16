import React from 'react';
import Pilar from '../../../Reusable/ComponentItems/Pilar/Pilar';
import AnnouncementCard from './Components/AnnouncementCard';
import "./Announcement.scss";
import File from "./File/pengumuman.pdf";

function Content() {
    return (
        <div className='Content'>
            <div className='Content-Title'>
                <img className='image' />
                {/* <img src={} */}
            </div>
        </div>
    )
}

function Announcement() {
    return (
        <div className='Announcement'>
            <Pilar />
            <h1 className='Title'>
                Annoucement
            </h1>
            <Content />
        </div>
    )
}

export default Announcement