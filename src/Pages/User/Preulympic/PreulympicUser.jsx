//React
import { Link } from "react-router-dom";
import "./PreulympicUser.scss";
import { Box } from "../../../Reusable/MaterialUICoreLazy/MaterialUICoreLazy";
import { Formik } from "formik";
import { Loginschema } from "./PreulympicSchema";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { postRequest } from "../../../Reusable/Service/AxiosClient";
import { useNavigate, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
    getCookie,
    setCookie,
} from "react-use-cookie";
import { PreulympicButton as Button } from "./Components/Button/PreulympicButton";
// import { useFormik } from "formik";
import FileInput from "./Components/FileInput/FileInput";
import Error from "./Components/Error/Error";
import compressImage from "../../../Reusable/ImageCompressor/ImageCompressor";

export function PreulympicUser() {
    const [token, setToken] = useState(getCookie('Preulmtoken'));

    // const [playernumber, setplayernumber] = useState(getCookie('Preulmcount'));
    const [currcount, setcurrcount] = useState(1);
    const navigate = useNavigate();
    // input
    // const [sisamember, setsisamember] = useState(0);

    // error handling
    const [loading, setLoading] = useState(false);
    const [error, Seterror] = useState(false);
    const [errorText, SeterrorText] = useState("");

    useEffect(() => {
        const count = getCookie('Preulmcount');
        setcurrcount(count);
        setCookie('Preulmstate', 2);
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            {/* Preulympic start here */}
            <Formik
                validationSchema={Loginschema}
                initialValues={{
                    nama: "",
                    angkatan: "",
                    jurusan: "",
                    phoneNumber: "",
                    userId: "",
                    userName: "",
                    fotoKtm: "",
                    buktiWA: ""
                }}
                onSubmit={(values, { resetForm }) => {
                    setLoading(true);
                    const formData = new FormData();
                    formData.append("tokenID", token);
                    formData.append("nama", values.nama);
                    formData.append("angkatan", values.angkatan);
                    formData.append("jurusan", values.jurusan);
                    formData.append("phoneNumber", values.phoneNumber);
                    formData.append("userID", values.userId);
                    formData.append("userName", values.userName);


                    async function Submit() {
                        // console.log(values);

                        // if (!values.buktiWA.startsWith("image/")) {
                        //     // console.log("Invalid file type. Please select an image file.");
                        //     alert("Invalid file type. Please select an image file.");
                        //     return;
                        // }
                        // if (!values.fotoKtm.startsWith("image/")) {
                        //     console.log("Invalid file type. Please select an image file.");
                        //     alert("Invalid file type. Please select an image file.");
                        //     return;
                        // }
                        try {
                            const fotoKtmCompressed = await compressImage(values.fotoKtm);
                            const buktiWACompressed = await compressImage(values.buktiWA);
                            console.log(fotoKtmCompressed);
                            console.log(buktiWACompressed);
                            formData.append("fotoKtm", fotoKtmCompressed);
                            formData.append("buktiWA", buktiWACompressed);
                            await postRequest('timmobilelegend',
                                formData
                            ).then((res) => {
                                console.log(res);
                                setcurrcount(parseInt(currcount) + 1);
                                var countnow = parseInt(currcount) + 1;
                                setCookie('Preulmcount', countnow);
                                setLoading(false);
                                if (res.data.sisaMember <= 0) {
                                    navigate("/PreulympicPayment");
                                }
                                resetForm();
                                Seterror(false);
                                // window.scrollTo(0, 0);
                            }).catch((err) => {
                                console.log(err);
                                Seterror(true);
                                if (err.response.data.message)
                                    SeterrorText(err.response.data.message);
                                else if (err.response.data.error)
                                    SeterrorText(err.response.data.error);
                                else if (err.message)
                                    SeterrorText(err.response.data.error);
                                else
                                    SeterrorText(err.response.data);
                                setLoading(false);
                            });
                        } catch (error) {
                            Seterror(true);
                            // console.log(error);
                            setLoading(false);
                            // SeterrorText(error);
                            // console.log(error);
                            // if (!error.response.data.message) {
                            //     navigate("/PreulympicPayment");
                            // }
                        }
                    }
                    Submit();

                }
                }

            >
                {({
                    values,
                    errors,
                    handleSubmit,
                    handleChange,
                    setFieldValue,
                }) => (
                    <div>
                        <Box>
                            <form className="preulympic-registration-user" noValidate onSubmit={handleSubmit}>
                                <div className="preulympic-form-container">
                                    <div className="preulympic-form-page">
                                        <Error error={error} errorText={errorText} loading={loading} />
                                        <div className="preulympic-form-logo"></div>
                                        <div className="preulympic-form-group">
                                            <label htmlFor="nama">Nama Player {currcount}</label>
                                            <input
                                                type="text"
                                                id="nama"
                                                name="nama"
                                                value={values.nama}
                                                onChange={handleChange}
                                                placeholder="Nama Player"
                                                autoComplete="off"
                                                required
                                            />
                                            {errors.nama && (
                                                <div className="preulympic-req-error-message">
                                                    {errors.nama}
                                                </div>
                                            )}
                                        </div>
                                        <div className="preulympic-form-group">
                                            <label htmlFor="batchAndMajor">Angkatan </label>

                                            <input
                                                onChange={handleChange}
                                                type="number"
                                                value={values.angkatan}
                                                id="angkatan"
                                                name="angkatan"
                                                placeholder="Angkatan "
                                                autoComplete="off"
                                                required
                                            // title={errors.angkatan}
                                            />
                                            {errors.angkatan && (
                                                <div className="preulympic-req-error-message">
                                                    {errors.angkatan}
                                                </div>
                                            )}
                                        </div>
                                        <div className="preulympic-form-group">
                                            <label htmlFor="batchAndMajor">Jurusan </label>
                                            <input
                                                onChange={handleChange}
                                                type="text"
                                                value={values.jurusan}
                                                id="batchAndMajor"
                                                name="jurusan"
                                                placeholder="jurusan "
                                                autoComplete="off"
                                                required
                                            />
                                            {errors.jurusan && (
                                                <div className="preulympic-req-error-message">
                                                    {errors.jurusan}
                                                </div>
                                            )}
                                        </div>
                                        <div className="preulympic-form-group">
                                            <label htmlFor="whatsappNumber">No. Telp Whatsapp</label>
                                            <input
                                                onChange={handleChange}
                                                type="number"
                                                value={values.phoneNumber}
                                                id="whatsappNumber"
                                                name="phoneNumber"
                                                placeholder="No. Telp Whatsapp"
                                                autoComplete="off"
                                                required
                                            />
                                            {errors.phoneNumber && (
                                                <div className="preulympic-req-error-message">
                                                    {errors.phoneNumber}
                                                </div>
                                            )}
                                        </div>
                                        <div className="preulympic-form-group">
                                            <label htmlFor="idplayer">ID Player {currcount}</label>
                                            <input
                                                onChange={handleChange}
                                                type="text"
                                                id="idplayer"
                                                value={values.userId}
                                                name="userId"
                                                placeholder="ID Player"
                                                autoComplete="off"
                                                required
                                            />
                                            {errors.userId && (
                                                <div className="preulympic-req-error-message">
                                                    {errors.userId}
                                                </div>
                                            )}
                                        </div>
                                        <div className="preulympic-form-group">
                                            <label htmlFor="userNames">Username Player {currcount}</label>
                                            <input
                                                onChange={handleChange}
                                                type="text"
                                                id="userNames"
                                                name="userName"
                                                placeholder="Username Player"
                                                autoComplete="off"
                                                value={values.userName}
                                                required
                                            />
                                            {errors.userName && (
                                                <div className="preulympic-req-error-message">
                                                    {errors.userName}
                                                </div>
                                            )}
                                        </div>
                                        <div className="preulympic-form-image">
                                            <label htmlFor="ktmPhotos">Foto KTM Player {currcount}</label>
                                            {/* <FileInput
                                                onChange={e => {
                                                    handleChange
                                                    setFieldValue("fotoKtm", e.currentTarget.files[0]);
                                                }}
                                                id="fotoKtm"
                                                name="fotoKtm"
                                                status={values.fotoKtm ? true : false}
                                            /> */}

                                            <input
                                                className={`input ${values.fotoKtm ? "inputtrue" : ""}`}
                                                onChange={e => {
                                                    handleChange
                                                    setFieldValue("fotoKtm", e.currentTarget.files[0]);
                                                }}
                                                type="file"
                                                accept='image/*'
                                                id={"fotoKtm"}
                                                // value={values.fotoKtm ? true : false}
                                                name={"fotoKtm"}
                                                maxFileSize={5000000}
                                            />

                                            <br />
                                        </div>
                                        <br />
                                        <div className="preulympic-form-image">
                                            <label htmlFor="buktiJoin">Bukti Join Whatsapp Community Rebel Squad</label>
                                            {/* <FileInput
                                                onChange={e => {
                                                    handleChange
                                                    setFieldValue("buktiWA", e.currentTarget.files[0]);
                                                }}
                                                id="buktiWA"
                                                // value={values.buktiJoin}
                                                name="buktiWA"
                                                status={values.buktiWA ? true : false}
                                            /> */}

                                            <input
                                                className={`input ${values.buktiWA ? "inputtrue" : ""}`}
                                                onChange={e => {
                                                    handleChange
                                                    setFieldValue("buktiWA", e.currentTarget.files[0]);
                                                }}
                                                type="file"
                                                accept='image/*'
                                                id={"buktiWA"}
                                                name={"buktiWA"}
                                                maxFileSize={5000000}
                                            />

                                        </div>
                                        <br />
                                        <br />
                                        <Button
                                            loading={loading}
                                            disabled={loading || !(values.nama && values.angkatan && values.jurusan && values.phoneNumber && values.userId && values.userName)}
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