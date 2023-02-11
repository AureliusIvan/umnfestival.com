// React
import React, { useEffect, lazy, Suspense } from "react";
// Styling  & Animation 
import "./About.scss"
// MUI
// import { Grid } from "../../../Reusable/MaterialUICoreLazy/MaterialUICoreLazy";
// Cookies
import { setCookie } from "react-use-cookie";
import { AboutData } from "./AboutData";
import LoadingScreen from "../../../Reusable/LoadingScreen/LoadingScreen";
import Pilar from "../../../Reusable/ComponentItems/Pilar/Pilar";
import {
  motion,
  useScroll,
  useSpring,
} from "framer-motion";
// import YoutubeEmbed from "../../../Reusable/ComponentItems/Youtube/YoutubeEmbed";
import { CounterTesting } from "../Home/Component/UFESTLOGO/WordAnimate/Testing";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, FreeMode, Mousewheel } from "swiper";
import { AboutTitle } from "./Content/AboutTitle/AboutTitle";
// const AboutCard = lazy(() => import("./AboutCard/AboutCard"));
const AboutCardMobile = lazy(() => import("./AboutCard/AboutCard"));







export default function About() {
  useEffect(() => {
    setCookie('about', 'about', { path: '/' });
    window.scrollTo(0, 0)
  }, []);

  return (
    <div id="About">
      <Pilar />
      <Suspense fallback={<LoadingScreen />}>
        <Swiper
          allowTouchMove={true}
          slidesPerView={1}
          modules={[Pagination,
            Mousewheel,
            FreeMode]}
          direction="vertical"
          keyboard={{
            enabled: true,
            onlyInViewport: false,
          }}
          mousewheel={{
            enabled: true,
            sensitivity: 1,
          }}
          parallax={true}
          pagination={{
            clickable: true,
          }}
          className="Swiper"
          swipeHandler={".swiper-slide"}
          scrollbar={{
            el: ".swiper-scrollbar",
            draggable: true,
            dragSize: 100,
          }}
        >
          <SwiperSlide>
            <div className="About-Title">
              <AboutTitle />
              {/* <CounterTesting choice={'about'} /> */}
            </div>
          </SwiperSlide>
          {AboutData.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <AboutCardMobile
                  key={index}
                  title={item.title}
                  desc={item.data}
                  logo={item.image}
                />
              </SwiperSlide>
            )
          })}


        </Swiper>
      </Suspense>
    </div>
  )
}