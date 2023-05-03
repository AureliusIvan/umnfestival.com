//React
import { Link } from "react-router-dom";
import "./Preulympic.scss";
import { Box } from "../../../Reusable/MaterialUICoreLazy/MaterialUICoreLazy";
import { Formik } from "formik";
import { Loginschema } from "./PreulympicSchema";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getRequest, postRequest } from "../../../Reusable/Service/AxiosClient";
import { useNavigate, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  getCookie,
  setCookie
} from "react-use-cookie";
import { PreulympicButton as Button } from "./Components/Button/PreulympicButton";
// this is main function
import Error from "./Components/Error/Error";

export function PreulympicForm() {
  // state
  // error handling
  const [error, Seterror] = useState(false);
  const [errorText, SeterrorText] = useState("");
  // const dispatch = useDispatch();
  const [teamName, setTeamName] = useState();
  const [numberOfPlayers, setNumberOfPlayers] = useState();
  // const [errors, setErrors] = useState(false);
  const [loading, setLoading] = useState(false);
  // return here
  const navigate = useNavigate();
  useEffect(() => {
    let token = getCookie("Preulmtoken");
    async function Check() {
      try {
        await getRequest(`ulympic/find/${token}`).then((res) => {
          console.log(res.data.data.namaTim);
          setTeamName(res.data.data.namaTim);
          setNumberOfPlayers(res.data.data.jumlahMember);
          if (res.status === 201 || res.status === 200) {
            // navigate("/PreulympicRebelsquad");
          }
        })
      } catch (error) {
        console.log(error);
      }
    }
    Check();
    window.scrollTo(0, 0);
  })
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
          setLoading(true);
          async function Submit() {
            try {
              await postRequest('ulympic', {
                namaTim: values.teamName,
                jumlahMember: values.numberOfPlayers
              }).then((res) => {
                // console.log(res);
                if (res.status === 201 || res.status === 200) {
                  setCookie("Preulmtoken", res.data.data.tokenID, {
                    expires: 99,
                    path: "/",
                  });
                  setCookie("Preulmcount", 1, {
                    expires: 99,
                    path: "/",
                  });
                  setCookie("Preulmcurrcount", 1);
                  setLoading(false);
                  navigate("/PreulympicRebelsquad");
                }
              })
            } catch (error) {
              SeterrorText(error.response.data.message);
              setLoading(false);
              Seterror(true);
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
                    <Error error={error} errorText={errorText} loading={loading} />
                    <div className="preulympic-req-logo"></div>
                    <div className="preulympic-req-group">
                      <label htmlFor="teamName">
                        Nama Tim (Berdasarkan Kota di Yunani)
                      </label>
                      <input
                        type="text"
                        id="teamName"
                        name="teamName"
                        onChange={handleChange}
                        value={values.teamName}
                        // defaultValue={teamName}
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
                      <label htmlFor="numberOfPlayers">Jumlah Pemain :</label>
                      <input
                        name="numberOfPlayers"
                        type="number"
                        placeholder="Jumlah Player 5 - 7"
                        id="numberOfPlayers"
                        value={values.numberOfPlayers}
                        // defaultValue={numberOfPlayers}
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
                      loading={loading}
                      disabled={loading || !(values.teamName && values.numberOfPlayers && values.numberOfPlayers >= 5 && values.numberOfPlayers <= 7)}
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
  const [status, setStatus] = useState(getCookie("Preulm"));
  useEffect(() => {
    window.scrollTo(0, 0);
  })

  let statepreulm = getCookie("Preulmstate");
  const navigate = useNavigate();
  function RouteHandler() {
    if (getCookie('Preulmstate') === "1") {
      navigate("/PreulympicRebelsquad");
    }
    else if (getCookie('Preulmstate') === "2") {
      navigate("/PreulympicRegistrationUser");
    }
    else if (getCookie('Preulmstate') === "3") {
      navigate("/PreulympicPayment");
    } else {
      navigate("/PreulympicRegistration");
    }
  }

  return (<>
    <Helmet>
      <title>Pre-Ulympic | UMN Festival 2023</title>
      <meta name="description" co ntent="Pre-Ulympic | Pre-Ulympic merupakan kegiatan UMN Festival yang bertujuan sebagai sarana untuk mahasiswa menuangkan bakatnya dalam bidang e-sport khususunya mobile legend." />
      <link rel="canonical" href="https://www.umnfestival.com/pre-olympic" />
    </Helmet>
    <div id="preulympic">
      <div className="pre-olympic">
        <div className="logo"></div>
        <h1 className="title">Pre-Ulympic</h1>
        <p className="description">
          Pre Ulympic merupakan kegiatan UMN Festival yang bertujuan sebagai
          sarana untuk mahasiswa menuangkan bakatnya dalam bidang e-sport
          khususunya mobile legend.
        </p>
        <div className="cta">
          {status === "1212312" ?
            <p>Selamat! Kamu telah berhasil mendaftar Pre Ulympic</p>
            :
            <>
              <p>Daftarkan tim mu segera !!!</p>
              <button onClick={RouteHandler} onTouchEnd={RouteHandler} className="btn">
                {statepreulm ? "Lanjutankan Pendaftaran" : "Daftar Pre Ulympic"}
              </button>
            </>
          }
        </div>
      </div >
    </div >
  </>
  );
}
