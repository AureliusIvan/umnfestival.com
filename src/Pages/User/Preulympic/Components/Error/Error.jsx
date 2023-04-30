import React from 'react'
import { Alert } from '@mui/material'
import styled from 'styled-components'


const AlertStyled = styled(Alert)`
    background-color: rgba(0, 0, 0, 0) !important;
`


function Error(props) {
    return (<>
        {
            props.error === true && props.loading === false ?
                <AlertStyled severity="error">
                    {props.errorText ? props.errorText : ""}
                </AlertStyled>
                : ""
        }
    </>
    )
}

export default Error