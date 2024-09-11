import "./About.scss"
import "swiper/css";
import "swiper/css/pagination";

import LoadingScreen from "../../../Reusable/LoadingScreen/LoadingScreen";
import Pilar from "../../../Reusable/ComponentItems/Pilar/Pilar";
import React, {useEffect, lazy, Suspense} from "react";
import {setCookie} from "react-use-cookie";
import {AboutData} from "./AboutData";
import {Swiper, SwiperSlide} from "swiper/react"
import {Pagination, FreeMode, Mousewheel} from "swiper";
import {AboutTitle} from "./Content/AboutTitle/AboutTitle";
import {Helmet} from "react-helmet-async";

const AboutCardMobile = lazy(() => import("./AboutCard/AboutCard"));

export default function About() {
  useEffect(() => {
    setCookie(
        'about',
        'about',
        {path: '/'}
    );
    window.scrollTo(0, 0)
  }, []);

  return (
      <>
        <Helmet>
          <title>About | UMN Festival 2023</title>
          <meta name="description" content="About | About series of events that going to held on UMN festival 2023 "/>
          <link rel="canonical" href="https://www.umnfestival.com/about"/>
        </Helmet>

        <section id="About">
          <Pilar/>
          <Suspense fallback={<LoadingScreen/>}>
            <Swiper
                allowTouchMove={true}
                slidesPerView={1}
                direction="vertical"
                className="Swiper"
                parallax={true}
                swipeHandler={".swiper-slide"}
                modules={
                  [
                    Pagination,
                    Mousewheel,
                    FreeMode
                  ]
                }
                mousewheel={{
                  enabled: true,
                  sensitivity: 1,
                }}
                pagination={{
                  clickable: true,
                }}
                scrollbar={{
                  el: ".swiper-scrollbar",
                  draggable: true,
                  dragSize: 100,
                }}
            >
              {/* Call component title */}
              <SwiperSlide>
                <div className="About-Title">
                  <AboutTitle/>
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
        </section>
      </>
  )
}