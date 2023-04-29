import React from "react";
import "./PreulympicRebelSquad.scss";
import { Routes, Route, useNavigate } from 'react-router-dom';
import { PreulympicButton as Button } from "./Components/Button/PreulympicButton";

export default function PreulympicRebelSquad() {
  // navigasi onclick pindah page
  const navigate = useNavigate();
  const navigateToForm = () => {
    navigate('/PreulympicRegistrationUser');
  };

  return (
    <div className="preulympic-rebel-squad-container">
      <div className="preulympic-rebel-squad-border">
        <div className="preulympic-rebel-squad-logo"></div>
        <div className="preulympic-rebel-squad-title">
          Pastikan setiap peserta bergabung ke dalam group Whatsapp Community <strong>Rebel Squad</strong> dengan mengclick tombol di bawah
        </div>
        <a className="preulympic-rebel-squad-button"
          //taro nomornya nya dibawah
          href="https://wa.me/"
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