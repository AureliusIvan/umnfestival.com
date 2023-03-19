// *Verify User Email Func*
// Import start here
import React, { useEffect, useState } from 'react'
import './VerifyEmail.scss'
import { useNavigate } from 'react-router-dom';
import { CircularProgress } from '../../../Reusable/MaterialUICoreLazy/MaterialUICoreLazy';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { checkVerify } from '../../../Redux/features/users/userRoleSlice';
// end



// main func start here
export default function VerifyEmail() {
    // [Declare and assign variable]
    // verify is store value to check wheter user account has been verified or haven't
    const verify = useSelector(checkVerify);
    // navigate with react router
    const navigate = useNavigate();
    // store value, whether backend already sent the email or not
    const [sent, setSent] = useState(false);
    // store value, whether loading is true or false
    const [loading, setLoading] = useState(false);
    // store value whether error is true or false
    const [error, setError] = useState(false);
    // store email and user ID
    let email, ID;

    // [useEffect hooks] 
    useEffect(() => {
        // if user was not verify, it will navigate to home
        if (verify !== null) {
            navigate("/");
        }
        // scroll windows to top, when page is rendered
        window.scrollTo(0, 0);
        // store value to allow backend to send email
        email = localStorage.getItem('Email');
        ID = localStorage.getItem('LoginID');
    }, [])

    // When function is called, function will trying to send email from registered email
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
            setSent(false);
            setError(true);
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