// react
import { useEffect, Suspense, lazy, useState } from "react";
// redux
import { isJoinAdded, userRoleAdded } from "./Redux/features/users/userRoleSlice";
import { useSelector, useDispatch } from "react-redux";
import { userDataAdded } from "./Redux/features/users/userRoleSlice";
// Loading Screen
import LoadingScreen from "./Reusable/LoadingScreen/LoadingScreen";
import { getRequest } from "./Reusable/Service/AxiosClient";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import ProtectedRoute from "./Route/ProtectedRoute";
import { selectCanPlay } from "./Redux/features/users/userSoundSlice";
import { LoadingScreenInitial } from "./Reusable/LoadingScreen/LoadingScreenInitial";
import { getCookie } from "react-use-cookie";
import useSound from "use-sound";
import BGM from "./Asset/Sound/BGM.mp3";
import { isVerifyAdded } from "./Redux/features/users/userRoleSlice";
// Pages
const User = lazy(() => import("./Pages/User/User"));
const Admin = lazy(() => import("./Pages/Admin/Admin"));


function App() {
  const dispatch = useDispatch();
  const [loading, setloading] = useState(true);
  const CanPlay = useSelector(selectCanPlay);
  const AllowSound = getCookie('AllowSound');
  const location = useLocation();
  const [play, { stop, isPlaying }] = useSound(BGM, {
    volume: 0.15,
    playbackRate: 1,
  });
  // 
  const Loading = () => {
    if (AllowSound) {
      return <LoadingScreen />
    } else {
      if (location.pathname === '/' || location.pathname === '/home') {
        return <LoadingScreenInitial handle={play} />
      } else {
        return <LoadingScreen />
      }
    }
  }
  useEffect(() => {
    async function fetchUser() {
      try {
        await getRequest('me')
          .then((res) => {
            // console.log(res.data.user.role_id);
            dispatch(userDataAdded({
              name: res.data.user.name,
              nim: res.data.user.nim,
              email: res.data.user.email,
            }));
            dispatch(isVerifyAdded(res.data.user.email_verified_at));
            dispatch(isJoinAdded(res.data.panitia));
            if (res.data.user.role_id === 1) {
              dispatch(userRoleAdded("admin"));
            } else if (res.data.user.role_id === 2) {
              dispatch(userRoleAdded("user"));
            }
          })
      } catch (error) {
        dispatch(userRoleAdded("guest"));
      }
    }
    if (localStorage.getItem('LoginID')) {
      fetchUser();
    } else {
      dispatch(userRoleAdded("guest"));
    }
    // loading screen
    if (location.pathname === '/' || location.pathname === '/home') {
      if (CanPlay !== null || AllowSound === 'false') {
        setloading(false);
      }
    } else {
      setloading(false);
    }
  }, [CanPlay, AllowSound])
  return (
    <div id="App">
      <Suspense fallback={<LoadingScreen />}>
        {loading ? <Loading /> :
          <Routes>
            <Route path="/*" element={<User />} />
            <Route path="/admin/*" element={<>
              <ProtectedRoute user="admin">
                <Admin />
              </ProtectedRoute>
            </>
            } />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        }
      </Suspense>
    </div>
  );
}

export default App;
