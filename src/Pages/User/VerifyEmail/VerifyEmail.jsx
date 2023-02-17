import React, { useEffect, useState } from 'react'
import './VerifyEmail.scss'
import { useNavigate } from 'react-router-dom';
import { CircularProgress } from '../../../Reusable/MaterialUICoreLazy/MaterialUICoreLazy';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { checkVerify } from '../../../Redux/features/users/userRoleSlice';


function VerifyEmail() {
    const verify = useSelector(checkVerify);
    let email;
    let ID;

    const navigate = useNavigate();
    useEffect(() => {
        if (verify !== null) {
            navigate("/");
        }
        window.scrollTo(0, 0);
        email = localStorage.getItem('Email');
        ID = localStorage.getItem('LoginID');
        // console.log(email);
    }, [])

    const [sent, setSent] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    async function verifyEmail() {
        setLoading(true);
        try {

            await axios.post('https://databaseufest.aureliusivan.my.id/api/email/verification-notification', { email: email }, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${ID}`
                }
            })
                .then((res) => {
                    console.log(res);
                    if (res.status === 200) {
                        setSent(true);
                        setError(false);
                    } else {
                        setSent(false);
                        setError(true);
                    }
                    setLoading(false);
                })
        } catch (error) {
            console.log(error);
            setSent(false);
            setError(true);
            console.log(localStorage.getItem('Email'));
            setLoading(false);

        }
    }
    return (
        <div className='verifyEmail'>
            <div className='content center'>
                <div className="Title">
                    Verify yout email address
                </div>
                <br />
                <button
                    className='Button'
                    onClick={verifyEmail}
                    disabled={loading}
                >
                    {loading ? <CircularProgress /> : "Send Verification Email"}
                </button>
                {sent ? <div className='Message success'>
                    Verification email has been sent to your email! <br />
                    Check in your inbox or your spam folder
                    (Refresh this page if you already verify your email)
                </div> : <div>
                    {
                        error ?
                            <div className='Message alert'>
                                Error sending verification email
                                <br />
                                Contact admin if you already verify your email and still get this error
                            </div>
                            : null
                    }
                </div>}
                <br />

                <br />
            </div>
        </div>
    )
}

export default VerifyEmail;