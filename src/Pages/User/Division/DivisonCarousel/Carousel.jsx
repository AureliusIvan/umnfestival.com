import "./Carousel.scss"
import "swiper/css";
import "swiper/css/pagination";

import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Mousewheel, Pagination} from "swiper/modules";
import {DivisionData} from "../DivisionData";
import {Modal} from "@mui/material";
import styled from "styled-components";

const CustomModal = styled(Modal)(({theme}) => ({
  background: "rgb(0 0 0 0)", focus: {
    border: "none"
  }, "&:focus": {
    outline: 'none'
  }
}));

function CarouselDetail({props}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (<>
        <CustomModal
            open={open}
            onClose={handleClose}
            style={{outline: 'none'}}
        >
          <div
              className='Modal-Carousel'
              style={{outline: 'none'}}
          >
            <div className="Content-Modal">
              <div className='Name'>
                <span className="Name-Title">
                  {props.name}
                </span>
                <span className="Name-subTitle">
                  ({props.division})
                </span>
              </div>

              <div className='role'>
                &ldquo;{(props.role)}&rdquo;
                <br/>
                &ldquo;{(props.role2)}&rdquo;
              </div>

              <div className='NameDesc'>
                &ldquo;{props.namedesc}&rdquo;
              </div>

              <div className='Jobdesk'>
                {props.jobdesk}
              </div>
            </div>
          </div>
        </CustomModal>

        <div
            onClick={handleOpen}
            className="Carousel-Detail"
        >
          <img
              className="Carousel-Image"
              rel="lazy"
              decoding="async"
              alt={"Division"}
              src={props.image}
          />
        </div>
      </>
  );
}

export default function DivisionCarousel() {
  return (
      <>
        <section id="Carousel">
          <Swiper
              slidesPerView={window.innerWidth > 1168 ? 3 : 1}
              direction="horizontal"
              className="Carousel-Swiper"
              swipeHandler={".Carousel-Swiper-Slide"}
              parallax={true}
              modules={[
                Pagination,
                Mousewheel
              ]}
              keyboard={{
                enabled: true,
                onlyInViewport: false
              }}
              mousewheel={{
                enabled: true,
                sensitivity: 1
              }}
              pagination={{
                clickable: true
              }}
              scrollbar={{
                el: ".swiper-scrollbar",
                draggable: true,
                dragSize: 100
              }}
          >
            {
              DivisionData.filter((item) => item.image).map((item, index) => {
                return (
                    <SwiperSlide
                        key={item.id} className="Carousel-Swiper-Slide">
                      <CarouselDetail
                          props={item}/>
                    </SwiperSlide>
                );
              })
            }

          </Swiper>
        </section>
      </>
  );
}
