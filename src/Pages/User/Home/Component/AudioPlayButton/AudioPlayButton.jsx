import React from 'react'
import BGM from "./../../../../../Asset/Sound/bgm.mp3"
import useSound from 'use-sound';
import {useDispatch, useSelector} from 'react-redux';
import {userCanPlay, userSoundControl} from '../../../../../Redux/features/users/userSoundSlice';
import "./AudioPlayButton.scss"
import {selectPageLoading} from '../../../../../Redux/features/users/userSoundSlice';

export default function AudioPlayButton() {
  const [play, {stop, isPlaying}] = useSound(BGM, {
    volume: 0.15,
    playbackRate: 1,
  });
  // const [onplay, setOnplay] = useState("");
  const dispatch = useDispatch();
  // const userSound = useSelector(selectSound);
  // const [open, setopen] = useState(false);
  // const canplay = useSelector(selectCanPlay);
  // handler

  // useEffect(() => {
  //     console.log(selectLoading);
  //     if (selectLoading === true) {
  //         play();
  //         setTimeout(() => {
  //             // setopen(false);
  //         }, 3000);
  //         play();
  //     }
  // }, [selectLoading])
  const selectLoading = useSelector(selectPageLoading);

  function handler() {
    dispatch(userCanPlay(true));
    play();
    setTimeout(() => {
      stop();
    }, 100);
    setTimeout(() => {
      play();
    }, 3000);
  }

  return (<>
        {/* <div className='Audio-Play-Button-Wrapper' onClick={handler}>
            <div className={`AudioPlayButton ${onplay}`} />
        </div> */}
        <div style={{
          width: "100%",
          height: "100%",
        }} onClick={handler}>
          {/* <div className={`AudioPlayButton ${onplay}`} /> */}
          Yes
        </div>
      </>
  )
}
