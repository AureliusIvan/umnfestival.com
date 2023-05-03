import React from 'react'
import { useState } from 'react'
import { setCookie } from 'react-use-cookie'
import { useNavigate } from 'react-router-dom';
// import style from './ResetForm.module.scss'

const ResetForm = () => {
    setCookie("Preulmtoken", "", { path: "/" });
    setCookie("Preulm", "", { path: "/" });
    setCookie("Preulmstate", "", { path: "/" });
    setCookie("Preulmcount", "", { path: "/" });
    setCookie("Preulmcurrcount", "", { path: "/" });
    const navigate = useNavigate();
    navigate("/");
}

export default ResetForm