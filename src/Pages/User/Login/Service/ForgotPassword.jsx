import React from 'react'
import { postRequest } from '../../../../Reusable/Service/AxiosClient'

function ForgotPassword() {
    const forgotPassword = async () => {
        try {
            const res = await postRequest('forgot-password')
            if (res.data.success === true) {
                console.log(res.data)
            } else {
                console.log(res.data)
            }
        }
        catch (error) {
            console.log(error)
        }

    }
    // forgotPassword();
    return(<>
    </>)
}

export default ForgotPassword