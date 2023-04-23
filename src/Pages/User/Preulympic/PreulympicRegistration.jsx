import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./PreulympicRegistration.scss";

const PreulympicRegistration = () => {
  const [teamName, setTeamName] = useState("");
  const [numberOfPlayers, setNumberOfPlayers] = useState();
  const [errors, setErrors] = useState({});

  const handleTeamNameChange = (event) => {
    setTeamName(event.target.value);
  };

  const handleNumberOfPlayersChange = (event) => {
    setNumberOfPlayers(event.target.value);
  };
  
  const handleNextButtonClick = () => {
    const errors = {};

    if (teamName.trim() === "") {
      errors.teamName = "Tolong masukan nama Tim";
    }

    if (numberOfPlayers < 5 || numberOfPlayers > 7) {
      errors.numberOfPlayers = "Jumlah Player Minimal 5 - 7";
    }

    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      // Kirim data ke server menggunakan fetch()
      const formData = new FormData();
      formData.append("teamName", teamName);
      formData.append("numberOfPlayers", numberOfPlayers);

      fetch("/api/preulympic-req", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Form data submitted successfully!", data);
        })
        .catch((error) => {
          console.error("Error submitting form data:", error);
        });
    }
  };

  return (
    <div className="preulympic-req-container">
      <div className="preulympic-req-page">
        <div className="preulympic-req-logo"></div>
          <div className="preulympic-req-group">
            <label htmlFor="teamName">
              Nama Tim (Berdasarkan bahasa yunani)
            </label>
          <input
            type="text"
            id="teamName"
            value={teamName}
            onChange={handleTeamNameChange}
            placeholder="Nama Tim"
            autoComplete="off"
            pattern="[A-Za-z\s]+"
          />
          {errors.teamName && (
            <div className="preulympic-req-error-message">
              {errors.teamName}
            </div>
          )}
        </div>
        <div className="preulympic-req-group">
          <label htmlFor="numberOfPlayers">Jumlah Pemain:</label>
          <input
            type="number"
            placeholder="Jumlah Player 5 - 7"
            id="numberOfPlayers"
            value={numberOfPlayers}
            onChange={handleNumberOfPlayersChange}
            autoComplete="off"
          />
          {errors.numberOfPlayers && (
            <div className="preulympic-req-error-message">
              {errors.numberOfPlayers}
            </div>
          )}
        </div>
        {/* <Link to="/PreulympicRebelSquad">
          <button onClick={handleNextButtonClick}>Next</button>
        </Link> */}
        <button onClick={handleNextButtonClick}>Next</button>
      </div>
    </div>
  );
};

export default PreulympicRegistration;
