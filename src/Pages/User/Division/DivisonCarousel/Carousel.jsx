import React, { lazy, Suspense } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./Carousel.scss"
import { Pagination, Mousewheel, FreeMode } from "swiper";
import { DivisionData } from "../DivisionData";
import { Modal } from "@mui/material";
import styled from "styled-components";

const CustomModal = styled(Modal)(({ theme }) => ({
    background: "rgb(0 0 0 0)",
    focus: {
        border: "none"
    },
    "&:focus": {
        outline: 'none'
    }
}));


function CarouselDetail({ props }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (<>
        <CustomModal
            open={open}
            onClose={handleClose}
            style={{ outline: 'none' }}
        >
            <div style={{ outline: 'none' }} className='Modal-Carousel'>
                <div className="Content-Modal">
                    <div className='Name'>
                        <span className="Name-Title">{props.name}</span>
                        <span className="Name-subTitle"> ({props.division})</span>
                    </div>
                    <div className='role'>
                        &ldquo;{(props.role)}&rdquo;
                        <br />
                        &ldquo;{(props.role2)}&rdquo;
                    </div>
                    <div className='NameDesc'>
                        &ldquo;{props.namedesc}&rdquo;
                    </div>
                    <br />
                    <div className='Jobdesk'>
                        {props.jobdesk}
                    </div>
                </div>
            </div>
        </CustomModal>
        <div onClick={handleOpen} className="Carousel-Detail">
            <div className="Carousel-Overlay-Text">
                <p>Click to see more!</p>
            </div>
            <img rel="lazy" decoding="async" src={props.image} className="Carousel-Image" />
        </div>
    </>)
}

export default function DivisonCarousel(props) {
    return (
        <>
            <div id="Carousel">
                <Swiper
                    slidesPerView={window.innerWidth > 1168 ? 3 : 1}
                    modules={[Pagination,
                        Mousewheel,
                    ]}
                    direction="horizontal"
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
                    className="Carousel-Swiper"
                    swipeHandler={".Carousel-Swiper-Slide"}
                    scrollbar={{
                        el: ".swiper-scrollbar",
                        draggable: true,
                        dragSize: 100,
                    }}
                >
                    {DivisionData.filter((item) => item.image).map((item, index) => {
                        return <SwiperSlide key={item.id} className="Carousel-Swiper-Slide">
                            <CarouselDetail
                                props={item} />
                        </SwiperSlide>
                    })}
                </Swiper>
            </div>
        </>
    );
}
