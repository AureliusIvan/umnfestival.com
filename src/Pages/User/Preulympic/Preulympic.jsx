//React
import { Link } from "react-router-dom";
import "./Preulympic.scss";
import { Box } from "../../../Reusable/MaterialUICoreLazy/MaterialUICoreLazy";
import { Formik } from "formik";
import { Loginschema } from "./PreulympicSchema";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { postRequest } from "../../../Reusable/Service/AxiosClient";
import { useNavigate, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  setCookie
} from "react-use-cookie";
// this is main function
export function PreulympicForm() {
  // state
  // error handling
  const [error, Seterror] = useState(false);
  const [errorText, SeterrorText] = useState("");
  const dispatch = useDispatch();
  // animation
  const [numberOfPlayers, setNumberOfPlayers] = useState();
  const [errors, setErrors] = useState({});
  // return here
  const navigate = useNavigate();
  return (
    <>
      <Formik
        validationSchema={Loginschema}
        initialValues={{
          teamName: "",
          numberOfPlayers: ""
        }}
        onSubmit={(values) => {
          // async function Submit() {
          //   try {
          //     await postRequest('preulympic-req', {
          //       teamName: values.teamName,
          //       number: values.number
          //     }).then((res) => {
          //       if (res.status === 201) {
          //         if (res.data.user.role_id === 1) {
          //         }
          //       } else {
          //         Setloading(false);
          //         SeterrorText(error.response.data.message);
          //         Seterror(true);
          //       }
          //     })
          //   } catch (error) {
          //     console.log(error);
          //     SeterrorText(error.response.data.message);
          //   }
          // }
          // Submit();
          navigate("/PreulympicRebelsquad");
          setCookie("teamName", values.teamName);
          setCookie("numberOfPlayers", values.numberOfPlayers);
        }}
      >
        {({
          errors,
          handleSubmit,
          handleChange,
        }) => (
          <div>
            <Box>
              <form className="preulympic-registration" noValidate onSubmit={handleSubmit}>
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
                        name="teamName"
                        onChange={handleChange}
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
                        name="numberOfPlayers"
                        type="number"
                        placeholder="Jumlah Player 5 - 7"
                        id="numberOfPlayers"
                        // value={numberOfPlayers}
                        onChange={handleChange}
                        autoComplete="off"
                      />
                      {errors.numberOfPlayers && (
                        <div className="preulympic-req-error-message">
                          {errors.numberOfPlayers}
                        </div>
                      )}
                    </div>
                    <button onClick={handleSubmit} onTouchEnd={handleSubmit} >Next</button>
                  </div>
                </div>
              </form>
            </Box>
          </div>
        )
        }
      </Formik >
    </>
  );
}


export default function Preulympic() {
  return (<>
    <Helmet>
      <title>Pre-Ulympic | UMN Festival 2023</title>
      <meta name="description" content="Pre-Ulympic | Pre-Ulympic merupakan kegiatan UMN Festival yang bertujuan sebagai sarana untuk mahasiswa menuangkan bakatnya dalam bidang e-sport khususunya mobile legend." />
      <link rel="canonical" href="https://www.umnfestival.com/pre-olympic" />
    </Helmet>
    <div id="preulympic">
      <div className="pre-olympic">
        <div className="pre-olympic__logo"></div>
        <div className="pre-olympic__title">
          <h1>Pre-Ulympic</h1>
        </div>
        <div className="pre-olympic__description">
          <p>
            Pre Ulympic merupakan kegiatan UMN Festival yang bertujuan sebagai
            sarana untuk mahasiswa menuangkan bakatnya dalam bidang e-sport
            khususunya mobile legend.
          </p>
        </div>
        <div className="pre-olympic__cta">
          <p>Daftarkan tim mu segera !!!</p>
          <Link to="/PreulympicRegistration" className="btn">
            Daftar Pre-Ulympic
          </Link>
        </div>
      </div>
    </div>
  </>
  );
}
