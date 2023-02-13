// Styling
import "./Login.scss";
// Material UI
import {
    Box,
    CircularProgress,
} from "../../../Reusable/MaterialUICoreLazy/MaterialUICoreLazy";
// import MuiAlert from '@mui/material/Alert';
import Alert from '@mui/material/Alert';
import { Divider } from "@mui/material";
import CustomButton from "../../../Reusable/CustomComponent/CustomButton.jsx";
// Form Control
import { Formik } from "formik";
import { Loginschema } from "./LoginSchema";
// React
import React, { useState, useEffect } from "react";
// Redux
import { useDispatch } from "react-redux";
import { userRoleAdded } from "../../../Redux/features/users/userRoleSlice";
// animation
import { m, domAnimation, LazyMotion } from "framer-motion";
// URL
import { postRequest } from "../../../Reusable/Service/AxiosClient";
import { useNavigate, Navigate } from "react-router-dom";
import { setCookie } from "react-use-cookie";
import Pilar from "../../../Reusable/ComponentItems/Pilar/Pilar";
import { CustomTextField } from "../../../Reusable/TextField/CustomTextField";
import { Helmet } from "react-helmet-async";


// const Alert = React.forwardRef(function Alert(props, ref) {
//     return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
// });

export default function Login() {
    // state
    useEffect(() => {
        setCookie('login', 'login', { path: '/' });
        window.scrollTo(0, 0)
    }, []);
    const [loading, Setloading] = useState(false);
    // error handling
    const [error, Seterror] = useState(false);
    const [errorText, SeterrorText] = useState("");
    const dispatch = useDispatch();
    // animation
    const navigate = useNavigate();

    return (
        <>
            <Helmet>
                <title>Login | UMN Festival 2023</title>
                <meta name="description" content="Login | Login now to complete your journey sparta!" />
                <link rel="canonical" href="https://www.umnfestival.com/login" />
            </Helmet>

            <Formik
                validationSchema={Loginschema}
                initialValues={{
                    email: "",
                    password: ""
                }}
                onSubmit={(values) => {
                    Setloading(true);
                    async function login() {
                        try {
                            await postRequest('login', {
                                email: values.email,
                                password: values.password
                            }).then((res) => {
                                if (res.status === 201) {
                                    if (res.data.user.role_id === 1) {
                                        dispatch(userRoleAdded("admin"));
                                        localStorage.setItem('LoginID', res.data.login_token);
                                        localStorage.setItem('Email', res.data.user.email);
                                        Setloading(false);
                                        navigate('/admin/database');
                                        window.location.reload();
                                    } else if (res.data.user.role_id === 2) {
                                        dispatch(userRoleAdded("user"));
                                        localStorage.setItem('LoginID', res.data.login_token);
                                        localStorage.setItem('Email', res.data.user.email);
                                        Setloading(false);
                                        navigate('/');
                                        window.location.reload();
                                    } else {
                                        Setloading(false);
                                        SeterrorText(error.response.data.message);
                                        Seterror(true);

                                    }
                                } else {
                                    Setloading(false);
                                    SeterrorText(error.response.data.message);
                                    Seterror(true);
                                }
                            })
                        } catch (error) {
                            SeterrorText(error.response.data.message);
                            Setloading(false);
                            Seterror(true);
                        }
                    }
                    login();
                }}
            >
                {({
                    errors,
                    touched,
                    handleSubmit,
                    handleChange,
                }) => (
                    <div id="Login">
                        <Pilar />
                        {error === true && loading === false ?
                            <>
                                <Alert severity="error" sx={{
                                    margin: '10px',
                                    width: '80%',
                                    position: 'absolute',
                                    top: '8vh',
                                    zIndex: '4',
                                }}>
                                    {errorText ? errorText : "Error"}
                                </Alert>
                            </>
                            : ""}
                        <Box className="form" paddingX={["20px", "30px", "45px"]}>
                            <LazyMotion features={domAnimation}>
                                <m.div
                                    initial={{ opacity: 0, x: 100 }}
                                    animate={{ opacity: 1, x: 0 }}
                                >
                                    <form noValidate onSubmit={handleSubmit}>
                                        {/* Title */}
                                        <Box className="Title" fontSize={["35px", "40px", "45px"]}>WELCOME BACK!</Box>
                                        {/* Sub Title */}

                                        <Box className="Subtitle" fontSize={["10px", "10px", "15px"]}> Let's grow together with UFEST!</Box>
                                        <Divider className="Divider" />
                                        <CustomTextField
                                            id="email"
                                            name="email"
                                            label="Email Student UMN"
                                            placeholder="Enter UMN student email "
                                            onChange={handleChange}
                                            fullWidth
                                        />
                                        <p className="error">
                                            {errors.email && touched.email && errors.email}
                                        </p>
                                        <CustomTextField
                                            type={"password"}
                                            id="password"
                                            name="password"
                                            label="Password"
                                            placeholder="Enter your password"
                                            onChange={handleChange}
                                        />
                                        <p className="error">
                                            {errors.password && touched.password && errors.password}
                                        </p>
                                        <br />
                                        <div className="center">
                                            <CustomButton
                                                type="submit"
                                                disabled={!(errors.email === undefined && errors.password === undefined) || (loading === true)}
                                                // onClick={onSubmit}
                                                onClick={handleSubmit}
                                            >
                                                {loading ? (<CircularProgress
                                                    size={24}
                                                    sx={{
                                                        width: '10px',
                                                    }}
                                                />) : "Login"}
                                            </CustomButton>
                                        </div>
                                    </form>
                                    <div className="center">
                                        {/* <p
                                        className="ForgotPass"
                                        onClick={() => { dispatch(pageChanged("register")) }}>
                                        Forgot Password?
                                    </p> */}
                                    </div>
                                    <br />
                                    <Box className="center bold" fontSize={["13px", "14px", "15px"]}>
                                        Don't have account?&nbsp;
                                        <p className="purple underline" onClick={() => {
                                            navigate('/register')
                                        }}>
                                            Register Now!
                                        </p>
                                    </Box>
                                </m.div>
                            </LazyMotion>
                        </Box>
                    </div>
                )
                }
            </Formik >
        </>
    );
}
