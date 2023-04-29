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
import { PreulympicButton as Button } from "./Components/Button/PreulympicButton";
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
  const [loading, setLoading] = useState(false);
  // return here
  const navigate = useNavigate();
  return (
    <>
      <Formik
        validationSchema={Loginschema}
        initialValues={{
          // name team
          teamName: "",
          // jumlah pemain
          numberOfPlayers: "",
          // nama ketua
          leaderName: "",
          // foto KTM
          ktm: "",
        }}
        onSubmit={(values) => {
          console.log(values);
          setLoading(true);
          async function Submit() {
            try {
              await postRequest('ulympic', {
                namaTim: values.teamName,
                jumlahMember: values.number
              }).then((res) => {
                if (res.status === 201 || res.status === 200) {
                  console.log(res);
                  setCookie("Preulmtoken", res.data.tokenID, { //nanti cek sini lagi ya, karena belum fix
                    expires: 99,
                    path: "/",
                  });
                  setLoading(false);
                  navigate("/PreulympicRebelsquad");
                } else {
                  setLoading(false);
                  console.log(res);
                }
              })
            } catch (error) {
              setLoading(false);
              console.log(error);
              navigate("/PreulympicRebelsquad");
            }
          }
          Submit();

        }}
      >
        {({
          values,
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
                        value={values.teamName}
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
                      <label htmlFor="numberOfPlayers">Jumlah Pemain (Termasuk Perwakilan) :</label>
                      <input
                        name="numberOfPlayers"
                        type="number"
                        placeholder="Jumlah Player 5 - 7"
                        id="numberOfPlayers"
                        value={values.numberOfPlayers}
                        onChange={handleChange}
                        autoComplete="off"
                      />
                      {errors.numberOfPlayers && (
                        <div className="preulympic-req-error-message">
                          {errors.numberOfPlayers}
                        </div>
                      )}
                    </div>
                    <Button
                      disabled={!(values.teamName && values.numberOfPlayers)}
                      action={handleSubmit}>Next</Button>
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
