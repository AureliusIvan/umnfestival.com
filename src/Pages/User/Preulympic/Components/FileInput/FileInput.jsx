import React from 'react';
import style from './FileInput.module.scss';


export default function PreUlympicFileInput(props) {
    return (
        <>
            <input
                className={style.input}
                onChange={props.handleChange}
                type="file"
                id={props.id}
                value={props.value}
                name={props.name}
                multiple required
            />
        </>
    )
}