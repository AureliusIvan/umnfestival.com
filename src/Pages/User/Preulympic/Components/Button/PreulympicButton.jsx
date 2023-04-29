import React from 'react';
import style from './PreulympicButton.module.scss';

export function PreulympicButton(props) {
    return (
        <button
            className={style.button}
            onClick={props.action}
            onTouchEnd={props.action}
            {...props}
            disabled={props.disabled ? props.disabled : false}
        >
            {props.children ? props.children : "Next"}
        </button>)
}