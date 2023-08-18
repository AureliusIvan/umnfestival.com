// *Home Page*
import { Suspense, lazy, useEffect, useState, useCallback } from "react";
import style from "./Home.module.scss"
import { useMediaQuery } from "@mui/material";
import { setCookie } from "react-use-cookie";
import { CounterTesting as UfestCaption } from "./Component/UFESTLOGO/WordAnimate/Testing";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import bgImg from "./../../../Asset/Image/Background/HomeBgNew.png"

import ufestLogoIMG from "./../../../Asset/Image/OtherIcon/ufest-logo-home.png"
import homeTitleIMG from "./../../../Asset/Image/TextImage/home-title.png"

import timelineSpartanIMG from "./../../../Asset/Image/OtherIcon/timeline-spartan.png"
import timelineBgIMG from "./../../../Asset/Image/OtherIcon/timeline-bg.png"
import temaIMG from "./../../../Asset/Image/TextImage/tema-ufest.png"
import taglineIMG from "./../../../Asset/Image/TextImage/tagline-ufest.png"
import titleEventIMG from "./../../../Asset/Image/TextImage/title-event.png"
import titlePartnershipIMG from "./../../../Asset/Image/TextImage/title-partner.png"
import titleVisiIMG from "./../../../Asset/Image/TextImage/title-visi.png"
import titleMisiIMG from "./../../../Asset/Image/TextImage/title-misi.png"
import titlePenjelasan from "./../../../Asset/Image/TextImage/content-intro-1.png"
import titleKonsep from "./../../../Asset/Image/TextImage/content-intro-2.png"

import PaperBackground from "./../../../Asset/Image/OtherIcon/roll-paper-revisi.png";
// Lazy load to increase page load performance
const HomeButton = lazy(() => import("./Component/HomeButton/HomeButton"));


// [Main function start here]
export default function Home() {
    // Check if screen mobile or desktop
    // declare useEffect
    useEffect(() => {
        setCookie('home', 'home', { path: '/' });
        window.scrollTo(0, 0)
    }, []);
    // 


    // return start here
    return (<>
        {/* Helmet for SEO and META TAGS */}
        <Helmet>
            <title>Home | UMN Festival 2023</title>
            <meta name="description" content="Home | Click button to start your journey with UFEST!" />
            <link rel="canonical" href="https://www.umnfestival.com" />
        </Helmet>

        <div className={style.home}>

            <img className={style.bgImg} src={bgImg} />

            <div
                className={style.HeroSection}
            >
                <img className={style.UMNFestivalHeroLogo} src={ufestLogoIMG}
                    alt="logo UMN Festival"
                />
                <img className={style.mainTitle} src={homeTitleIMG}
                    alt="judul website UMN Festival" />
            </div>


            <div className={style.ConceptSection}>
                <div className={style.paperIntro}>
                    <img src={PaperBackground} alt=""
                        className={style.paperBackground}
                    />
                    <div className={style.contentIntro}>
                        <img className={style.contentTitleImage} src={titlePenjelasan} alt="" />
                        <p>UMN Festival merupakan kegiatan mahasiswa dibawah naungan BEM UMN, UMN Festival juga merupakan acara tahunan yang diadakan untuk merayakan ulang tahun Universitas Multimedia Nusantara yang bertepatan pada 26 November.</p>
                    </div>

                </div>
                <div className={style.paperIntro}>
                    <img src={PaperBackground}
                        className={style.paperBackground}
                    />
                    <div className={style.contentIntro}>
                        <img className={style.contentTitleImage} src={titleKonsep} alt="" />
                        <p>UMN Festival 2023 mengangkat tema Spartan dengan tujuan untuk Spartans (Panitia) dan Sparta (Peserta) UMN Festival dapat menanamkannilai-nilai yang merepresentasikan kepribadian seorang Spartan, yaitu Curiosity, Generosity, Courage & Resilience dan Willingness.</p>
                    </div>
                </div>

            </div>


            <div
            className={style.TemaTaglineSection}
            >
                <div className={style.containerTT}>
                    <h1 className={style.titleTT}>Tema UMN Festival 2023</h1>
                    <img src={temaIMG} alt="" className={style.contentTT}></img>
                    {/* <h1 className={style.textTT}>DEVOTE YOURSELF TO BE A TRUE SPARTAN</h1> */}
                </div>
                <div className={style.containerTT}>
                    <h1 className={style.titleTT}>Tagline UMN Festival 2023</h1>
                    <img src={taglineIMG} alt="" className={style.contentTT} id={style.tagline}></img>
                    {/* <h1 className={style.textFont}>UNITING SPIRITS CONQUERING DREAMS</h1> */}
                </div>
            </div>
            <div>
                <div className={style.containerVM}>
                    <img src={titleVisiIMG}
                        className={style.titleVM}
                        alt="text visi UMN Festival"
                    />
                    <div className={style.contentVM}>
                        <p>Menjadikan UMN Festival 2023 sebagai kegiatan yang dapat menjadi wadah kolaborasi antar UKM dan mahasiswa/mahasiswi serta sebagai sarana mahasiswa/mahasiswi untuk meningkatkan rasa persatuan dan kesatuan dalam rangka perayaan ulang tahun Universitas Multimedia Nusantara.</p>
                    </div>
                </div>
                <div className={style.containerVM}>
                    <img
                        className={style.titleVM}
                        src={titleMisiIMG} alt="text misi UMN Festival" />
                    <div className={style.contentVM}>
                        <p>1. Membuat kegiatan yang dapat merangkul seluruh mahasiswa/mahasiswi dari semua fakultas yang ada di Universitas Multimedia Nusantara untuk bertumbuh secara bersama-sama.</p>
                        <p>2. Menanamkan nilai positif kepada mahasiswa/mahasiswi serta masyarakat melalui acara UMN Festival 2022.</p>
                        <p>3. Membuat rangkaian kegiatan yang mengangkat tema ulang tahun UMN dengan mengimplementasikan nilai curiosity (rasa ingin tahu), generosity (murah hati), Courage & Resilience (berani & konsisten) serta Willingness (kesediaan) dalam setiap rangkaian kegiatannya, yang dapat dirayakan oleh seluruh mahasiswa/mahasiswi UMN.</p>
                    </div>
                </div>
            </div>
            <img className={style.titleEvent} src={titleEventIMG} alt="" />
            <div className={style.containerEvent}>
                <img className={style.eventTimeline} src={timelineBgIMG}></img>
                <img className={style.eventSpartan} src={timelineSpartanIMG}></img>
                <h3 className={style.event} id={style.eventUnify}>UNIFY</h3>
                <h3 className={style.event} id={style.eventUcare}>U-CARE</h3>
                <h3 className={style.event} id={style.eventUlympic}>ULYMPIC</h3>
                <h3 className={style.event} id={style.eventUnveiling}>UNVEILING</h3>
                <h3 className={style.event} id={style.eventColorRun}>COLOR RUN</h3>
                <h3 className={style.event} id={style.eventPreUlympic}>PRE-ULYMPIC</h3>
            </div>

            <div className={style.PartnershipSection}>
                <img className={style.titlePartner} src={titlePartnershipIMG} alt="" />
                <div
                    className={style.containerPartner}
                >
                    <div className={style.contentPartner}>
                        <HomeButton>
                            EVENT WITH SPONSORS
                        </HomeButton>
                    </div>
                    <div className={style.contentPartner}>
                        <HomeButton>
                            OUR SPONSORS
                        </HomeButton>
                    </div>
                </div>
            </div>
            <br />
            <br />
        </div>
    </>
    )
}