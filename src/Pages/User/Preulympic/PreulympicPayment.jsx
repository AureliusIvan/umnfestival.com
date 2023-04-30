import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postRequest } from "../../../Reusable/Service/AxiosClient";
import { useNavigate, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./PreulympicPayment.scss";
import { Formik } from "formik";
import { Loginschema } from "./PreulympicSchema";
import { Box } from "../../../Reusable/MaterialUICoreLazy/MaterialUICoreLazy";
import { PreulympicButton as Button } from "./Components/Button/PreulympicButton";
import FileInput from "./Components/FileInput/FileInput";
import { setCookie } from "react-use-cookie";



function PreulympicPayment() {
    // animation
    const [loading, setLoading] = useState(false);
    // return here
    const fileTypes = ["jpg", "png"];
    const navigate = useNavigate();
    return (
        <>
            <Formik
                validationSchema={Loginschema}
                initialValues={{
                    file: "",
                }}
                onSubmit={(values) => {
                    console.log(values);
                    setLoading(true);
                    async function Submit() {
                        try {
                            await postRequest('ulympic/1?_method=PATCH', {
                                file: values.file,
                            }).then((res) => {
                                setCookie("Preulm", 1212312, {
                                    expires: 99,
                                    path: "/",
                                })
                                console.log(res);
                                navigate("/");
                            })
                        } catch (error) {
                            setLoading(false);
                            console.log(error);
                            // navigate("/PreulympicRebelsquad");
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
                            <form className="" noValidate onSubmit={handleSubmit}>
                                <div className="preulympic-payment">
                                    <div className="preulympic-payment-container">
                                        <div className="preulympic-payment-border">
                                            <div className="preulympic-payment-logo"></div>
                                            <div className="preulympic-payment-title">
                                                Pembayaran dilakukan ke nomor rekening 7615580589 (BCA) A/N VANIA JIANG

                                                Sejumlah Rp 70.000,00 untuk single slot
                                                Rp 70.000,00 + Rp 80.000,00 untuk multi slot
                                            </div>
                                            <div className="preulympic-payment-bukti">Bukti Pembayaran</div>
                                            <FileInput
                                                onChange={handleChange}
                                                name="file"
                                                values={values.file}
                                                status={values.file ? true : false}
                                            />
                                            <Button
                                                loading={loading}
                                                disabled={loading || !values.file}
                                                action={handleSubmit}>Submit</Button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </Box>
                    </div>)
                }
            </Formik >
        </>
    );
}

export default PreulympicPayment;