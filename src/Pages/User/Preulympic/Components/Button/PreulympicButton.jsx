import style from './PreulympicButton.module.scss';
import { CircularProgress } from '../../../../../Reusable/MaterialUICoreLazy/MaterialUICoreLazy';
import styled from 'styled-components';

const CircularProgressStyled = styled(CircularProgress)`
    color: #fff !important;
`

export function PreulympicButton(props) {
    return (
        <button
            className={style.button}
            onClick={props.action}
            onTouchEnd={props.action}
            {...props}
            disabled={props.disabled ? props.disabled : false}
            style={{
                justifyContent: props.justifyContent ? props.justifyContent : "center",
            }}
        >
            {props.loading ? <CircularProgressStyled /> :
                props.children ? props.children : "Next"}
        </button>)
}