import React from 'react';
import style from './FileInput.scss';


export default function PreUlympicFileInput(props) {
    return (
        <>
            <input
                className={`input ${props.status ? "inputtrue" : ""}`}
                onChange={props.onChange}
                type="file"
                id={props.id}
                value={props.value}
                name={props.name}
                multiple required
            />
        </>
    )
}