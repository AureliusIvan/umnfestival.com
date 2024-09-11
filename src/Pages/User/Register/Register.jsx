import "./Register.scss";

import {Box} from "../../../Reusable/MaterialUICoreLazy/MaterialUICoreLazy";
import {CircularProgress} from "../../../Reusable/MaterialUICoreLazy/MaterialUICoreLazy";
import {Formik} from "formik";
import {RegisterSchema} from "./RegisterSchema";
import {useState, useRef, useEffect} from "react";
import {useDispatch} from "react-redux";
import {userRoleAdded, userTokenAdded} from "../../../Redux/features/users/userRoleSlice";
import {CustomTextField} from "../../../Reusable/TextField/CustomTextField";
import {userDataAdded} from "../../../Redux/features/users/userRoleSlice";
import {useNavigate, useLocation} from "react-router-dom";
import {postRequest} from "../../../Reusable/Service/AxiosClient";
import CustomButton from "../../../Reusable/Button/Button";
import Alert from "@mui/material/Alert";
import Pilar from "../../../Reusable/ComponentItems/Pilar/Pilar";
import {Helmet} from "react-helmet-async";
import Sparkles from "../../../Reusable/Animation/Sparkle/Sparkle";

export default function Register() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const formInput = useRef(null);
  const [errorText, setErrorText] = useState("");
  const navigate = useNavigate();
  const pathname = useLocation();
  const [error, setError] = useState(false);

  const EnterHandleClick = (e) => {
    if (e.key === 'Enter') {
      formInput.current.focus()
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (<>
        <Helmet>
          <title>Register | UMN Festival 2023</title>
          <meta name="description" content="Register | Register now to start your journey on UMN Festival 2023"/>
          <link rel="canonical" href="https://www.umnfestival.com/Register"/>
        </Helmet>

        <Formik

            validationSchema={RegisterSchema}
            initialValues={{
              email: "",
              password: "",
              fullname: "",
              nim: "",
              repassword: ""
            }}

            onSubmit={(values) => {
              setLoading(true);
              const sendData = async () => {
                try {
                  await postRequest('register', {
                    name: values.fullname,
                    nim: values.nim,
                    password: values.password,
                    email: values.email,
                  })
                      .then((response) => {
                        if (response.data.success === true) {
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
                            state: {previousPath: pathname}
                          });

                          window.location.reload();
                        } else {
                          setError(true);
                        }
                      })
                      .catch((error) => {
                        setErrorText(error.response.data.message);
                        setError(true);
                      })
                } catch (error) {
                  setErrorText(error.response.data.message);
                  setError(true);
                } finally {
                  setLoading(false);
                }
              }

              sendData();
            }}
        >
          {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit
            }) => (
              <section id="Register">
                {
                  error === true && loading === false ? <>
                    <Alert
                        severity="error"
                        sx={{
                          margin: '10px',
                          width: '80%',
                          position: 'absolute',
                          top: '8vh',
                          zIndex: '4',
                        }}
                    >
                      {errorText ? errorText : "Registration Failed, re-check your data"}
                    </Alert>
                  </> : ""
                }

                <Pilar/>

                <Box
                    className="form"
                    paddingX={[
                      "20px",
                      "30px",
                      "45px"
                    ]}
                >
                  <form
                      noValidate
                      onSubmit={handleSubmit}
                  >
                    <Box
                        className="Title"
                        fontSize={[
                          "35px",
                          "40px",
                          "45px"
                        ]}
                    >
                      Register!
                    </Box>

                    <CustomTextField
                        id="fullname"
                        type="text"
                        name="fullname"
                        label="Nama Lengkap"
                        placeholder="Masukan Nama Lengkap"
                        value={values.fullname}
                        onKeyDownCapture={EnterHandleClick}
                        onBlur={handleBlur}
                        onChange={handleChange}
                    />
                    <p className="error">
                      {
                          errors.fullname &&
                          touched.fullname &&
                          errors.fullname
                      }
                    </p>

                    <CustomTextField
                        id="nim"
                        type="text"
                        value={values.nim}
                        name="nim"
                        label="NIM"
                        placeholder="E.g 00000012345"
                        onKeyDownCapture={EnterHandleClick}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <p className="error">
                      {
                          errors.nim &&
                          touched.nim &&
                          errors.nim
                      }
                    </p>

                    <CustomTextField
                        id="email"
                        type="email"
                        name="email"
                        label="Email Student"
                        placeholder="Masukan Email Student UMN"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        onKeyDownCapture={EnterHandleClick}
                    />
                    <p className="error">
                      {
                          errors.email &&
                          touched.email &&
                          errors.email
                      }
                    </p>

                    <CustomTextField
                        id="password"
                        type="password"
                        name="password"
                        label="Password"
                        placeholder="Buat Password"
                        value={values.password}
                        onKeyDownCapture={EnterHandleClick}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <p className="error">
                      {
                          errors.password &&
                          touched.password &&
                          errors.password
                      }
                    </p>

                    <CustomTextField
                        id="repassword"
                        type="password"
                        name="repassword"
                        label="Re-Enter Password"
                        placeholder="Masukan Ulang Password"
                        value={values.repassword}
                        onKeyDownCapture={EnterHandleClick}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <p className="error">
                      {
                          touched.repassword &&
                          errors.repassword
                      }
                    </p>

                    <div className="center">
                      <CustomButton
                          type="submit"
                          disabled={!!(
                              errors.fullname ||
                              errors.nim ||
                              errors.email ||
                              errors.password ||
                              errors.repassword
                          )}
                      >
                        {loading ? (<CircularProgress/>) : "Register"}
                      </CustomButton>
                    </div>
                  </form>

                  <p className="bold">
                    Already have account?{' '}
                    <a className="purple underline"
                       onClick={() => {
                         navigate('/login');
                       }}
                    >
                      <Sparkles>
                        Login now!
                      </Sparkles>
                    </a>
                  </p>
                </Box>
              </section>)
          }
        </Formik>
      </>
  );
}
