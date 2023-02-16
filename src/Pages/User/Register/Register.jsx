// Styling
import "./Register.scss";
import { Box } from "../../../Reusable/MaterialUICoreLazy/MaterialUICoreLazy";
import { CircularProgress } from "../../../Reusable/MaterialUICoreLazy/MaterialUICoreLazy";
// Form Control
import { Formik } from "formik";
import { RegisterSchema } from "./RegisterSchema";
// React
import { useState, useRef, useEffect } from "react";
// Redux
import { useDispatch } from "react-redux";
import { userRoleAdded, userTokenAdded } from "../../../Redux/features/users/userRoleSlice";
// Module
import { CustomTextField } from "../../../Reusable/TextField/CustomTextField";
// animation
import { domAnimation, LazyMotion, m } from "framer-motion";
import { userDataAdded } from "../../../Redux/features/users/userRoleSlice";
import { useNavigate, useLocation } from "react-router-dom";
import { postRequest } from "../../../Reusable/Service/AxiosClient";
import CustomButton from "../../../Reusable/CustomComponent/CustomButton";
import Alert from "@mui/material/Alert";
import Pilar from "../../../Reusable/ComponentItems/Pilar/Pilar";
import { Helmet } from "react-helmet-async";
import Sparkles from "../../../Reusable/Animation/Sparkle/Sparkle";

export default function Register() {
    // use dispatch to change page
    const dispatch = useDispatch();
    // next input when press enter
    const [loading, Setloading] = useState(false);
    const formInput = useRef(null);
    const EnterHandleClick = (e) => {
        if (e.key === 'Enter') {
            formInput.current.focus()
        }
    }
    // error handling
    const [error, Seterror] = useState(false);
    const [errorText, SeterrorText] = useState("");
    const navigate = useNavigate();
    const pathname = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (<>
        <Helmet>
            <title>Register | UMN Festival 2023</title>
            <meta name="description" content="Register | Register now to start your journey on UMN Festival 2023" />
            <link rel="canonical" href="https://www.umnfestival.com/Register" />
        </Helmet>
        <Formik
            // include validation schema
            validationSchema={RegisterSchema}
            // initial value
            initialValues={{ email: "", password: "", fullname: "", nim: "", repassword: "" }}
            // on submit function
            onSubmit={(values) => {
                // start loading when submitted
                Setloading(true);
                // send data to backend
                const sendData = async () => {
                    try {
                        await postRequest('register', {
                            name: values.fullname,
                            nim: values.nim,
                            password: values.password,
                            email: values.email,
                        })
                            .then((response) => {
                                // console.log(response);
                                if (response.data.success === true) {
                                    // console.log(response.data);
                                    localStorage.setItem('LoginID', response.data.login_token);
                                    localStorage.setItem('Email', response.data.users.email);
                                    dispatch(userTokenAdded(response.data.login_token));
                                    dispatch(userRoleAdded(response.data.users.role_id));
                                    dispatch(userDataAdded({
                                        name: response.data.users.name,
                                        nim: response.data.users.nim,
                                        email: response.data.users.email,
                                    }));
                                    navigate('/recruitment', {
                                        state: { previousPath: pathname }
                                    });
                                    window.location.reload();
                                }
                                else {
                                    Seterror(true);
                                }
                                Setloading(false);

                            })
                            .catch((error) => {
                                SeterrorText(error.response.data.message);
                                Seterror(true);
                                // console.log(error.response.data.message);
                                Setloading(false);
                            })
                    }
                    catch (error) {
                        SeterrorText(error.response.data.message);
                        Seterror(true);
                        // console.log(error.response.data.message);
                        Setloading(false);
                    }
                }
                sendData();
            }
            }
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit
            }) => (
                <div id="Register">
                    {/* pop up on error */}
                    {error === true && loading === false ?
                        <>
                            <Alert severity="error" sx={{
                                margin: '10px',
                                width: '80%',
                                position: 'absolute',
                                top: '8vh',
                                zIndex: '4',
                            }}>
                                {errorText ? errorText : "Registration Failed, re-check your data"}
                            </Alert>
                        </>
                        : ""}
                    <Pilar />
                    {/* form start here */}
                    <Box className="form" paddingX={["20px", "30px", "45px"]}>

                        <form noValidate onSubmit={handleSubmit}>

                            <Box className="Title" fontSize={["35px", "40px", "45px"]}>Register!</Box>
                            <CustomTextField
                                id="fullname"
                                value={values.fullname}
                                onKeyDownCapture={EnterHandleClick}
                                type="text"
                                name="fullname"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                label="Nama Lengkap"
                                placeholder="Masukan Nama Lengkap"
                            />
                            <p className="error">
                                {errors.fullname && touched.fullname && errors.fullname}
                            </p>
                            <CustomTextField
                                id="nim"
                                value={values.nim}
                                onKeyDownCapture={EnterHandleClick}
                                type="text"
                                name="nim"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                label="NIM"
                                placeholder="E.g 00000012345"
                            />
                            <p className="error">
                                {errors.nim && touched.nim && errors.nim}
                            </p>
                            <CustomTextField
                                id="email"
                                value={values.email}
                                onKeyDownCapture={EnterHandleClick}
                                type="email"
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                label="Email Student"
                                placeholder="Masukan Email Student UMN"
                            />
                            <p className="error">
                                {errors.email && touched.email && errors.email}
                            </p>
                            <CustomTextField
                                id="password"
                                // ref={formInput}
                                value={values.password}
                                onKeyDownCapture={EnterHandleClick}
                                type="password"
                                name="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                label="Password"
                                placeholder="Buat Password"
                            />
                            <p className="error">
                                {errors.password && touched.password && errors.password}
                            </p>
                            <CustomTextField
                                id="repassword"
                                // ref={formInput}
                                value={values.repassword}
                                onKeyDownCapture={EnterHandleClick}
                                type="password"
                                name="repassword"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                label="Re-Enter Password"
                                placeholder="Masukan Ulang Password"
                            />
                            <p className="error">
                                {touched.repassword && errors.repassword}
                            </p>
                            <div className="center">
                                <CustomButton
                                    disabled={(errors.fullname || errors.nim || errors.email || errors.password || errors.repassword) ? true : false}
                                    type="submit">
                                    {loading ? (<CircularProgress />) : "Register"}
                                </CustomButton>
                            </div>
                        </form>
                        <br />
                        <p fontSize={"15px"} className="bold">
                            Already have account?{' '}
                            <a className="purple underline" onClick={() => {
                                navigate('/login');
                            }}>
                                <Sparkles>
                                    Login now!
                                </Sparkles>
                            </a>
                        </p>
                    </Box>
                </div>
            )
            }
        </Formik >
    </>

    );
}
