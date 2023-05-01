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
    useCookies,
} from "react-use-cookie";
import { PreulympicButton as Button } from "./Components/Button/PreulympicButton";
// import { useFormik } from "formik";
import FileInput from "./Components/FileInput/FileInput";
import Error from "./Components/Error/Error";

export function PreulympicUser() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const [playernumber, setplayernumber] = useState(getCookie('Preulmcount'));
    const [currcount, setcurrcount] = useState(1);
    const navigate = useNavigate();
    // input
    const [fotoKtm, setfotoKtm] = useState('');
    const [buktiJoin, setbuktiJoin] = useState('');
    const [sisamember, setsisamember] = useState(0);

    // error handling
    const [loading, setLoading] = useState(false);
    const [error, Seterror] = useState(false);
    const [errorText, SeterrorText] = useState("");
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
                    buktiJoin: ""
                }}
                onSubmit={(values, { resetForm }) => {
                    setLoading(true);
                    async function Submit() {
                        console.log(values);
                        const formData = new FormData();
                        formData.append("fotoKtm", values.fotoKtm);
                        formData.append("buktiJoin", values.buktiJoin);
                        console.log(formData.get("fotoKtm"));
                        try {
                            await postRequest('timmobilelegend', {
                                tokenID: getCookie("Preulmtoken"),
                                nama: values.nama,
                                angkatan: values.angkatan,
                                jurusan: values.jurusan,
                                phoneNumber: values.phoneNumber,
                                userID: values.userId,
                                userName: values.userName,
                                fotoKtm: formData.get("fotoKtm"),
                                buktiWA: formData.get("buktiJoin"),
                            }).then((res) => {
                                console.log(res);
                                // const curramount = getCookie("Preulmcount");
                                setcurrcount(currcount + 1);
                                // setCookie("Preulmcurrcount", currcount);
                                setLoading(false);
                                // setcurrentCount(currentCount + 1);
                                // if (curramount === currcount) {
                                //     navigate("/PreulympicPayment");
                                // }
                                // if (res.data.success === false) {
                                //     navigate("/PreulympicPayment");
                                // }

                                if (res.data.sisaMember <= 0) {
                                    navigate("/PreulympicPayment");
                                }
                                // window.location.reload();
                                resetForm();
                                // window.scrollTo(0, 0);
                            }).catch((err) => {
                                console.log(err);
                                Seterror(true);
                                if (err.response.data.message)
                                    SeterrorText(err.response.data.message);
                                setLoading(false);
                            });
                        } catch (error) {
                            Seterror(true);
                            console.log(error);
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
                                            <FileInput
                                                onChange={e => {
                                                    handleChange
                                                    setFieldValue("fotoKtm", e.currentTarget.files[0]);
                                                }}
                                                id="ktmPhotos"
                                                // value={values.fotoKtm}
                                                name="fotoKtm"
                                                status={values.fotoKtm ? true : false}
                                            />
                                            <br />
                                            {errors.fotoKtm && (
                                                <div className="preulympic-req-error-message">
                                                    {errors.fotoKtm}
                                                </div>
                                            )}
                                        </div>
                                        <br />
                                        <div className="preulympic-form-image">
                                            <label htmlFor="buktiJoin">Bukti Join Whatsapp Community Rebel Squad</label>
                                            <FileInput
                                                onChange={e => {
                                                    handleChange
                                                    setFieldValue("buktiJoin", e.currentTarget.files[0]);
                                                }}
                                                id="buktiJoin"
                                                // value={values.buktiJoin}
                                                name="buktiJoin"
                                                status={values.buktiJoin ? true : false}
                                            />
                                            {errors.buktiJoin && (
                                                <div className="preulympic-req-error-message">
                                                    {errors.buktiJoin}
                                                </div>
                                            )}
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