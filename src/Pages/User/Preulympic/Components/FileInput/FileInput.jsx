import React from 'react';
import './FileInput.scss';
import { Field } from 'formik';

export default function PreUlympicFileInput(props) {
    return (
        <>
            <input
                className={`input ${props.status ? "inputtrue" : ""}`}
                onChange={props.onChange}
                type="file"
                accept='image/*'
                id={props.id}
                value={props.value}
                name={props.name}
                maxFileSize={5000000}
            />

            {/* <Field
                className={`input ${props.status ? "inputtrue" : ""}`}
                onChange={props.onChange}
                type="file"
                id={props.id}
                value={props.value}
                name={props.name}
                maxFileSize={5000000} // 5 MB
            /> */}
        </>
    )
}