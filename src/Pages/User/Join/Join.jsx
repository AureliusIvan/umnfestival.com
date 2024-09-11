import "./Join.scss";
import "./UploadImage/UploadImage.scss"

import Pilar from "../../../Reusable/ComponentItems/Pilar/Pilar";
import Thankyou from "./Thankyou/Thankyou";
import CustomButton from "../../../Reusable/Button/Button";
import LinearProgress, {linearProgressClasses} from '@mui/material/LinearProgress';
import CoolTitle from "../../../Reusable/ComponentItems/CoolTitle/CoolTitle";
import {Autocomplete, Divider} from "../../../Reusable/MaterialUICoreLazy/MaterialUIMaterialLazy";
import {CircularProgress} from "../../../Reusable/MaterialUICoreLazy/MaterialUICoreLazy";
import {CustomTextField} from "../../../Reusable/TextField/CustomTextField";
import {styled} from '@mui/material/styles';
import {Formik} from "formik";
import {Suspense, lazy, useState} from "react";
import {DivisiData, JurusanData} from "./AutoComplete/AutoComplete";
import {JoinSchema} from "./JoinSchema";
import {useSelector, useDispatch} from "react-redux";
import {userSetJoin} from "../../../Redux/features/users/userDataSlice";
import {selectuserName, selectuserEmail, selectuserNim} from "../../../Redux/features/users/userRoleSlice";
import {selectUser} from "../../../Redux/features/users/userDataSlice";
import {useEffect} from "react";
import {postRequest} from "../../../Reusable/Service/AxiosClient";
import {setCookie} from 'react-use-cookie';
import {checkJoin} from "../../../Redux/features/users/userRoleSlice";

const Alert = lazy(() => import("@mui/material/Alert"));
const JoinPage0 = lazy(() => import("./Page/JoinPage0"));

const BorderLinearProgress = styled(LinearProgress)(({theme}) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]:
      {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
      },
  [`& .${linearProgressClasses.bar}`]:
      {
        borderRadius: 5, backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
      },
}));

export default function Join() {
  const [loading, SetLoading] = useState(false);
  const [joinPage, SetJoinPage] = useState(0);
  const [error, SetError] = useState(false);
  const [errormessage, SetErrorMessage] = useState("");
  const name = useSelector(selectuserName);
  const nim = useSelector(selectuserNim);
  const email = useSelector(selectuserEmail);
  const joined = useSelector(selectUser).isJoin;
  const isJoin = useSelector(checkJoin);
  const dispatch = useDispatch();

  useEffect(() => {
    setCookie(
        'recruitment',
        'recruitment',
        {path: '/'});
    if (joined === true || isJoin !== null) {
      SetJoinPage(7);
    }

    window.scrollTo(0, 0)
  }, [joinPage])

  function Prev(props) {
    const handlePrev = () => {
      SetJoinPage(props.page);
    }
    return (
        <CustomButton
            type="button"
            onClick={handlePrev}
        >
          PREV
        </CustomButton>
    )
  }

  function Next(props) {
    const handleNext = () => {
      SetJoinPage(props.page);
    };

    return (
        <CustomButton
            type="button"
            disabled={props.disabled}
            onClick={handleNext}
        >
          NEXT
        </CustomButton>
    )
  }

  return (
      <section>
        <Formik
            validationSchema={JoinSchema}
            initialValues={{
              jurusan: "",
              angkatan: "",
              alamat: "",
              vaksin: "",
              nohp: "",
              idline: "",
              ig: "",
              domisili: "",
              divisi: "",
              divisialt: "",
              jawaban: "",
              jawaban2: "",
              portofolio: ""
            }}

            onSubmit={(values) => {
              SetLoading(true);

              async function postData() {
                try {
                  const response = await postRequest(`panitia/insertData`, {
                    nim: nim,
                    name: name,
                    email: email,
                    angkatan: values.angkatan,
                    program_studi: values.jurusan,
                    division_1: values.divisialt,
                    division_2: values.divisi,
                    phone_number: values.nohp,
                    reason_1: values.jawaban,
                    reason_2: values.jawaban2,
                    portofolio: values.portofolio,
                    id_line: values.idline,
                    instagram_account: values.ig,
                    city: values.domisili,
                  })
                  if (response.status === 201) {
                    dispatch(userSetJoin());
                    SetJoinPage(7);
                  } else {
                    SetError(true);
                    SetErrorMessage(error.response.data.message);
                  }
                } catch (error) {
                  SetError(true);
                  SetErrorMessage(error.response.data.message);
                } finally {
                  SetLoading(false);
                }
              }

              postData();
            }}
        >
          {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              setFieldValue
            }) => (
              <div className="join" padding={"10px"}>

                {
                  error === true && loading === false ? <Suspense fallback="">
                    <Alert severity="error" sx={{
                      margin: '10px', width: '80%', position: 'absolute', top: '8vh', zIndex: '4',
                    }}>
                      {errormessage ? errormessage : "Error"}
                    </Alert>
                  </Suspense> : ""
                }

                <div className="form">
                  {
                    joinPage === 0 ? "" : <Suspense fallback="">
                      <div className="progress-bar">
                        <BorderLinearProgress variant="determinate" value={(100 / 7) * joinPage}/>
                      </div>
                    </Suspense>
                  }

                  <form noValidate onSubmit={handleSubmit}>

                    <Pilar/>

                    {(() => {
                      switch (joinPage) {
                        case 0:
                          return (
                              <Suspense fallback={<div>Loading...</div>}>
                                <div>
                                  <div className="page1">

                                    <CoolTitle>
                                      JOIN US!
                                    </CoolTitle>

                                    <Divider/>

                                    <JoinPage0/>

                                    <div className="center">
                                      <CustomButton type="button" onClick={() => {
                                        SetJoinPage(1)
                                      }}>
                                        Let's GO
                                      </CustomButton>
                                    </div>
                                  </div>

                                </div>
                              </Suspense>
                          )
                        case 1:
                          return (<section>
                                <Autocomplete
                                    options={JurusanData}
                                    onBlur={handleBlur}
                                    type="text"
                                    value={values.jurusan}
                                    renderInput={(params) => <Suspense fallback={<div>Loading...</div>}>
                                      <CustomTextField
                                          {...params}
                                          label="Jurusan"
                                          placeholder="Masukan Jurusan"
                                          name="jurusan"
                                          fullWidth
                                      />
                                    </Suspense>
                                    }
                                    isOptionEqualToValue={(option, value) => value === undefined || value === "" || option.id === value.id}
                                    onChange={(_, data) => setFieldValue("jurusan", data.label)}
                                />
                                <p className="error">
                                  {errors.jurusan && touched.jurusan && errors.jurusan}
                                </p>

                                <Suspense fallback={<div>Loading...</div>}>
                                  <Autocomplete
                                      options={[{label: "2020"}, {label: "2021"}, {label: "2022"},]}
                                      value={values.angkatan}
                                      id="angkatan"
                                      onBlur={handleBlur}
                                      renderInput={(params) => <Suspense fallback={<div>Loading...</div>}>
                                        <CustomTextField
                                            {...params}
                                            label="Angkatan"
                                            type="text"
                                            name="angkatan"

                                            fullWidth
                                        />
                                      </Suspense>

                                      }
                                      isOptionEqualToValue={(option, value) => value === undefined || value === "" || option.id === value.id}
                                      onChange={(_, data) => setFieldValue("angkatan", data.label.valueOf())}
                                  />
                                </Suspense>

                                <p className="error">
                                  {errors.angkatan && touched.angkatan && errors.angkatan}
                                </p>

                                {/* alamat */}
                                <Suspense fallback={<div>Loading...</div>}>
                                  <CustomTextField
                                      id="alamat"
                                      value={values.alamat}
                                      type="text"
                                      name="alamat"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      label="Alamat"
                                      placeholder="Alamat Sekarang"
                                  />
                                </Suspense>

                                <p className="error">
                                  {errors.alamat && touched.alamat && errors.alamat}
                                </p>

                                {/* Kota Domisili */}
                                <Suspense fallback={<div>Loading...</div>}>
                                  <CustomTextField
                                      type="text"
                                      name="domisili"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values.domisili}
                                      placeholder="Kota Domisili"
                                      className="form-control inp_text"
                                      id="domisili"
                                      label="Domisili"
                                  />

                                  <p className="error">
                                    {errors.domisili && touched.domisili && errors.domisili}
                                  </p>

                                  <div className="space-between">
                                    <Prev page={0}/>
                                    <CustomButton
                                        disabled={!(values.jurusan && values.angkatan && values.alamat && values.domisili)}
                                        onClick={() => {
                                          SetJoinPage(2);
                                        }}>NEXT</CustomButton>
                                  </div>
                                </Suspense>
                              </section>
                          );

                        case 2:
                          return (
                              <section className="page2">
                                {/* No Handphone */}
                                <CustomTextField
                                    type="text"
                                    name="nohp"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.nohp}
                                    placeholder="E.g +628123456789"
                                    className="form-control inp_text"
                                    id="nohp"
                                    label="Phone number (with +62)"
                                />

                                <p className="error">
                                  {errors.nohp && touched.nohp && errors.nohp}
                                </p>

                                {/* ID Line */}
                                <CustomTextField
                                    type="text"
                                    name="idline"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.idline}
                                    placeholder="Enter Active ID Line"
                                    className="form-control inp_text"
                                    id="idline"
                                    label="ID Line"
                                />
                                <p className="error">
                                  {errors.idline && touched.idline && errors.idline}
                                </p>

                                {/* Instagram */}
                                <CustomTextField
                                    type="text"
                                    name="ig"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.ig}
                                    placeholder="Active Instagram account (without @)"
                                    className="form-control inp_text"
                                    id="ig"
                                    label="Instagram username (without @)"
                                />
                                <p className="error">
                                  {errors.ig && touched.ig && errors.ig}
                                </p>

                                <div className="space-between">
                                  <Prev page={1}/>
                                  <Next page={3}
                                        disabled={!(values.nohp && values.idline && values.ig)}
                                  />
                                </div>

                              </section>
                          )
                        case 3:
                          return (<section>
                                <Autocomplete
                                    options={DivisiData}
                                    onBlur={handleBlur}
                                    value={values.divisi}
                                    id="jurusan"
                                    isOptionEqualToValue={(option, value) => value === undefined || value === "" || option.id === value.id}
                                    onChange={(_, data) => setFieldValue("divisi", data.label)}
                                    renderInput={(params) => <CustomTextField
                                        {...params}
                                        label="Divisi"
                                        type="text"
                                        name="divisi"
                                        placeholder="Masukan Divisi"
                                        fullWidth
                                    />}
                                />

                                <p className="error">
                                  {errors.divisi && touched.divisi && errors.divisi}
                                </p>

                                <Autocomplete
                                    options={DivisiData}
                                    onBlur={handleBlur}
                                    type="text"
                                    value={values.divisialt}
                                    isOptionEqualToValue={(option, value) => value === undefined || value === "" || option.id === value.id}
                                    onChange={(_, data) => setFieldValue("divisialt", data.label)}
                                    renderInput={(params) => <CustomTextField
                                        {...params}
                                        label="Divisi Alternatif"
                                        placeholder="Masukan Divisi Alternatif"
                                        name="divisialt"
                                        fullWidth
                                    />}
                                />
                                <p className="error">
                                  {errors.divisialt && touched.divisialt && errors.divisialt}
                                </p>

                                <div className="space-between">
                                  <Prev page={2}/>
                                  <Next
                                      page={
                                        values.divisi === "Visual" ||
                                        values.divisi === "Dokumentasi" ||
                                        values.divisialt === "Dokumentasi" ||
                                        values.divisialt === "Visual" ? 4 : 5
                                      }
                                      disabled={
                                          !(values.divisi && values.divisialt) ||
                                          !(values.divisi !== values.divisialt)
                                      }
                                  />
                                </div>
                              </section>
                          )
                        case 4:
                          return (
                              <section>
                                <p className="Wrapper">
                                  Upload Portofolio
                                </p>
                                <CustomTextField
                                    type="text"
                                    label="Portofolio"
                                    name="portofolio"
                                    placeholder="E.g https://drive.google.com/drive/folders/yourfolder"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.portofolio}
                                    className="textarea"
                                    id="portofolio"
                                    multiline
                                    maxRows={3}
                                />

                                <p className="error">
                                  {errors.portofolio && touched.portofolio && errors.portofolio}
                                </p>

                                <div className="space-between">
                                  <Prev page={3}/>
                                  <Next
                                      disabled={!(values.portofolio)}
                                      page={5}
                                  />
                                </div>

                              </section>
                          )
                        case 5:
                          return (
                              <section>
                                <p className="Wrapper">
                                  Apa yang kamu ketahui tentang U-FEST?
                                </p>

                                <CustomTextField
                                    type="text"
                                    name="jawaban"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.jawaban}
                                    label="Jawaban"
                                    placeholder="Masukan Jawaban"
                                    className="textarea"
                                    id="jawaban"
                                    multiline
                                    maxRows={3}
                                />

                                <p className="error">
                                  {errors.jawaban && touched.jawaban && errors.jawaban}
                                </p>

                                <div className="space-between">
                                  <Prev page={values.divisi === "Visual" ? 4 : 3}/>
                                  <Next page={6}
                                        disabled={!(values.jawaban)}
                                  />
                                </div>
                              </section>
                          );
                        case 6:
                          return (
                              <section>
                                <p className="Wrapper">
                                  Berdasarkan Divisi yang kamu pilih, menurut kamu sifat apa saja yang
                                  diperlukan untuk menjadi bagian dari divisi tersebut?
                                </p>

                                <CustomTextField
                                    type="text"
                                    name="jawaban2"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.jawaban2}
                                    className="textarea"
                                    label="Alasan"
                                    placeholder="Masukan Jawaban"
                                    id="jawaban2"
                                    multiline
                                    maxRows={3}
                                />

                                <p className="error">
                                  {errors.jawaban2 && touched.jawaban2 && errors.jawaban2}
                                </p>

                                <div className="space-between">
                                  <Prev page={5}/>
                                  <CustomButton
                                      variant="contained"
                                      type="submit"
                                      disabled={!(values.jawaban2)}
                                  >
                                    {loading ? (<CircularProgress/>) : "Submit"}
                                  </CustomButton>
                                </div>
                              </section>
                          )
                        case 7:
                          return (
                              <section>
                                <Thankyou/>
                                <p className="textfillheart">
                                  Tap to fill heart!
                                </p>
                              </section>
                          )
                        default:
                          return null;
                      }
                    })()}
                  </form>
                </div>
              </div>)
          }
        </Formik>
      </section>);
}