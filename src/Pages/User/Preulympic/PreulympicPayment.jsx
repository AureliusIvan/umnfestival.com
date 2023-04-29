import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postRequest } from "../../../Reusable/Service/AxiosClient";
import { useNavigate, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./PreulympicPayment.scss";
import { Formik } from "formik";
import { Loginschema } from "./PreulympicSchema";
import { Box } from "../../../Reusable/MaterialUICoreLazy/MaterialUICoreLazy";
import { FileUploader } from "react-drag-drop-files";
import { PreulympicButton as Button } from "./Components/Button/PreulympicButton";
// const PreulympicPayment = () => {
//     const fileInputRef = useRef(null);

//     const handleFileInputChange = () => {
//         const file = fileInputRef.current.files[0];
//         console.log(file); // 
//     };

// };

function PreulympicPayment() {
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
    const fileTypes = ["jpg", "png"];
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
                                <div className="preulympic-payment">
                                    <div className="preulympic-payment-container">
                                        <div className="preulympic-payment-border">
                                            <div className="preulympic-payment-logo"></div>
                                            <div className="preulympic-payment-title">
                                                Pembayaran dilakukan ke no rekening BCA (No Rekening Vajang) A/N Vania Jiang
                                            </div>
                                            <div className="preulympic-payment-bukti">Bukti Pembayaran</div>
                                            <div className="preulympic-payment-file">
                                                <input
                                                    type="file"
                                                    // ref={fileInputRef}
                                                    style={{ display: "none" }}
                                                // onChange={handleFileInputChange}
                                                />
                                                {/* <button onClick={() => fileInputRef.current.click()}> */}
                                                {/* Choose File */}
                                                {/* </button> */}
                                                {/*  */}
                                                <div className="preulympic-payment-file-upload">
                                                    <FileUploader
                                                        child
                                                        handleChange={(file) => setFieldValue("vaksin", file)}
                                                        types={fileTypes}
                                                        multiple={false}
                                                        maxFileSize={1000000}
                                                        minFileSize={0}
                                                        maxFiles={1}
                                                        minFiles={0}
                                                        accept="image/*"
                                                    >
                                                        <div
                                                            classes="drop_area drop_zone"
                                                            className="UploadImage"
                                                        >{values.vaksin ?
                                                            <>
                                                                {/* <img className="img" loading="lazy" src={URL.createObjectURL(values.vaksin)} /> */}
                                                                <p className="caption" >{values.vaksin.name}</p>
                                                            </>
                                                            :
                                                            <>
                                                                 {/* <img className="Img-Placeholder" loading="lazy" src="https://img.icons8.com/fluency/48/null/image.png" /> */}
                                                                <p>Choose File</p>
                                                            </>
                                                            }
                                                        </div>
                                                    </FileUploader>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="preulympic-payment-Submit-button">
                                            <Button action={handleSubmit}>Submit</Button>
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