// React
import React, { useEffect, lazy, Suspense } from "react";
// Styling  & Animation 
import "./About.scss"
// Cookies
import { setCookie } from "react-use-cookie";
import { AboutData } from "./AboutData";
import LoadingScreen from "../../../Reusable/LoadingScreen/LoadingScreen";
import Pilar from "../../../Reusable/ComponentItems/Pilar/Pilar";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, FreeMode, Mousewheel } from "swiper";
import { AboutTitle } from "./Content/AboutTitle/AboutTitle";
import { Helmet } from "react-helmet-async";
// Lazy load
const AboutCardMobile = lazy(() => import("./AboutCard/AboutCard"));





// main func start here
export default function About() {
  // useEffect hook
  useEffect(() => {
    // make sure green notif on navbar was gone when user go to this page once or more
    setCookie('about', 'about', { path: '/' });
    // scroll to top when rendered
    window.scrollTo(0, 0)
  }, []);

  
  // return here
  return (
    <>
      {/* Declare Helmet for page SEO */}
      <Helmet>
        <title>About | UMN Festival 2023</title>
        <meta name="description" content="About | About series of events that going to held on UMN festival 2023 " />
        <link rel="canonical" href="https://www.umnfestival.com/about" />
      </Helmet>
      {/* About page start here */}
      <div id="About">
        {/* Call pilar for styling */}
        <Pilar />
        {/* Suspense swiper with loading screen if swiper hasn't been loaded yet */}
        <Suspense fallback={<LoadingScreen />}>
          <Swiper
            cssMode={true}
            height="100vh"
            width="100vw"
            allowTouchMove={true}
            slidesPerView={1}
            modules={[Pagination,
              Mousewheel,
              FreeMode]}
            direction="vertical"
            // keyboard={{
            //   enabled: true,
            //   onlyInViewport: false,
            // }}
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
            {/* Call component title */}
            <SwiperSlide>
              <div className="About-Title">
                <AboutTitle />
              </div>
            </SwiperSlide>
            {/* Map Card */}
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
    </>
  )
}