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


export function PreulympicUser() {
    // state
    // error handling
    const [error, Seterror] = useState(false);
    const [errorText, SeterrorText] = useState("");
    const dispatch = useDispatch();
    // animation
    const [numberOfPlayers, setNumberOfPlayers] = useState();
    const [errors, setErrors] = useState({});
  
    // return here
    return (
      <>
        {/* Helmet for SEO opt */}
        <Helmet>
          <title>Login | UMN Festival 2023</title>
          <meta name="description" content="Login | Login now to complete your journey sparta!" />
          <link rel="canonical" href="https://www.umnfestival.com/login" />
        </Helmet>
        {/* Preulympic start here */}
        <Formik
          validationSchema={Loginschema}
          initialValues={{
            teamName: "",
            number: ""
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
          }}
        >
          {({
            errors,
            handleSubmit,
            handleChange,
          }) => (
            <div>
              <Box>
                <form className="preulympic-registration-user" noValidate onSubmit={handleSubmit}>
                </form>
              </Box>
            </div>
          )
          }
        </Formik >
      </>
    );
  }