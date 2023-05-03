import React, { useEffect } from "react";
import "./PreulympicRebelSquad.scss";
import { Routes, Route, useNavigate } from 'react-router-dom';
import { PreulympicButton as Button } from "./Components/Button/PreulympicButton";
import {
  getCookie,
  setCookie
} from "react-use-cookie";

export default function PreulympicRebelSquad() {
  // navigasi onclick pindah page
  const navigate = useNavigate();
  const navigateToForm = () => {
    navigate('/PreulympicRegistrationUser');
  };
  useEffect(() => {
    setCookie("Preulmstate", 1);
  })

  return (
    <div className="preulympic-rebel-squad-container">
      <div className="preulympic-rebel-squad-border">
        <div className="preulympic-rebel-squad-logo"></div>
        <div className="preulympic-rebel-squad-title">
          Pastikan setiap peserta bergabung ke dalam Whatsapp Community <strong>Rebel Squad</strong> dengan mengisi form dibawah
        </div>
        <a className="preulympic-rebel-squad-button"
          //taro nomornya nya dibawah
          href="http://bit.ly/Join-Rebels-Squad"
          target="_blank"
        >
          Join Rebel Squad Group
        </a>
        <div className="preulympic-rebel-squad-next-button">
          <Button action={navigateToForm}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};