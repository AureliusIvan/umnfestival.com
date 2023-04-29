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
import { useFormik } from "formik";
import FileInput from "./Components/FileInput/FileInput";

export function PreulympicUser() {
    const [playernumber, setplayernumber] = useState(getCookie('numberOfPlayers'));
    const navigate = useNavigate();
    // input
    const [nama, setnama] = useState('');
    const [jurusan, setjurusan] = useState('');
    const [angkatan, setangkatan] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [userId, setuserId] = useState('');
    const [userName, setuserName] = useState('');
    const [fotoKtm, setfotoKtm] = useState('');
    const [buktiJoin, setbuktiJoin] = useState('');
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
                    async function Submit() {
                        try {
                            await postRequest('timmobilelegend', {
                                namaTim: "Tim3",
                                ketua: "GEE",
                                nama: values.nama,
                                angkatan: values.angkatan,
                                jurusan: values.jurusan,
                                phoneNumber: values.phoneNumber,
                                userID: values.userId,
                                userName: values.userName,
                                fotoKtm: fotoKtm,
                                buktiJoin: buktiJoin
                            }).then((res) => {
                                // if (res.status === 201 || res.status === 200) {
                                console.log(res);
                                // setCookie("Preulmtoken", res.data.tokenID, { //nanti cek sini lagi ya, karena belum fix
                                //     expires: 99,
                                //     path: "/",
                                // });
                                // setLoading(false);
                                // navigate("/PreulympicRebelsquad");
                                // } else {
                                // setLoading(false);
                                // console.log(res);
                                // }
                                console.log(res);
                            })
                        } catch (error) {
                            // setLoading(false);
                            console.log(error);
                        }
                    }
                    Submit();
                    resetForm();
                    // alert(JSON.stringify(values, null, 2));
                    // navigate("/PreulympicPayment");
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
                            <form className="preulympic-registration-user" noValidate onSubmit={handleSubmit}>
                                <div className="preulympic-form-container">
                                    <div className="preulympic-form-page">
                                        <div className="preulympic-form-logo"></div>
                                        <div className="preulympic-form-group">
                                            <label htmlFor="nama">Nama Player {playernumber}</label>
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
                                            <label htmlFor="idplayer">ID Player</label>
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
                                            <label htmlFor="userNames">Username Player</label>
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
                                            <label htmlFor="ktmPhotos">Foto KTM Player</label>
                                            <FileInput
                                                onChange={handleChange}
                                                id="ktmPhotos"
                                                value={values.fotoKtm}
                                                name="fotoKtm"
                                            />
                                            {errors.fotoKtm && (
                                                <div className="preulympic-req-error-message">
                                                    {errors.fotoKtm}
                                                </div>
                                            )}
                                        </div>
                                        <div className="preulympic-form-image">
                                            <label htmlFor="buktiJoin">Bukti Join Whatsapp Community Rebel Squad</label>
                                            <FileInput
                                                onChange={handleChange}
                                                id="buktiJoin"
                                                value={values.buktiJoin}
                                                name="buktiJoin"
                                            />
                                            {errors.buktiJoin && (
                                                <div className="preulympic-req-error-message">
                                                    {errors.buktiJoin}
                                                </div>
                                            )}
                                        </div>
                                        <Button action={handleSubmit}>Next</Button>
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