
import React from 'react'
import CustomButton from '../CustomComponent/CustomButton'
import { setCookie } from "react-use-cookie";
import { useDispatch } from 'react-redux';
import { userCanPlay } from '../../Redux/features/users/userSoundSlice';

export function LoadingScreenInitial(props) {
    const dispatch = useDispatch();
    function Handler() {
        setCookie('AllowSound', false);
        dispatch(userCanPlay(false));
    }

    function Yes() {
        dispatch(userCanPlay(true));
        setTimeout(() => {
            props.handle();
        }, 1000);
    }

    return (
        <div className="Loading-Screen-Initial">
            <div className="logo" />
            <p className="Caption">
                Allow Sound ?
            </p>
            <div className='btn-choice'>
                <CustomButton onClick={Yes}>
                    Sure!
                </CustomButton>
                <CustomButton onTouchEnd={Handler} onClick={Handler}>
                    No
                </CustomButton>
            </div>
        </div>

    )
}