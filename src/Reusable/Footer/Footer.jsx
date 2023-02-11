import { Grid as MuiGrid } from '../MaterialUICoreLazy/MaterialUICoreLazy';
import "./Footer.scss";
import Sparkles from "../Animation/Sparkle/Sparkle";
import Logo from "./../../Asset/Image/Ufest Logo/ufestlogowhite.webp"
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { MedsosList } from './medsos';
import styled from 'styled-components';


const Grid = styled(MuiGrid)(({ theme }) => ({
    width: '100%',
}));

const GridItem = styled(MuiGrid)(({ theme }) => ({
    width: '100%',
    position: 'relative',
    margin: '20px',
    padding: '20px',
}));

const GridItem2 = styled(MuiGrid)(({ theme }) => ({
    gap: '20px',
}));





function LinkCard(props) {
    return (
        <Grid item lg={2} md={2} sm={2} xs={2}>
            <a className="Footer-Link-Card" href={props.href}>
                <img loading="lazy" alt="social media icon"
                    className="Card-Image"
                    decoding='async'
                    src={props.image} />
            </a>

        </Grid>
    )
}

export default function Footer() {
    return (
        <LazyMotion features={domAnimation}>
            <Grid container id="Footer"
                spacing={0}
            >
                <GridItem item md={4} xs={12}>
                    <div className="Footer-Section">
                        <div className='Logo-Wrap'>
                            <img loading="lazy" alt="UMN FESTIVAL 2023 Logo" className="UFEST-LOGO" src={Logo} />
                        </div>
                    </div>
                    <div className="divider" />
                </GridItem>
                <GridItem item md={4} sm={12}>
                    <div className="Footer-Section">
                        <Sparkles>
                            <p className="title">ADDRESS</p>
                        </Sparkles>
                        <p className="address">
                            Universitas Multimedia Nusantara
                            <br />
                            Jl. Scientia Boulevard, Gading Serpong
                            <br />
                            Tangerang, Banten
                            <br />
                            15811, Indonesia
                        </p>
                    </div>
                    <div className="divider" />
                </GridItem>
                <GridItem item md={4} xs={12}>
                    <div className="Footer-Section">
                        <p className="title">
                            <Sparkles>
                                FOLLOW US!
                            </Sparkles>
                        </p>
                        <GridItem2 container
                            className="Footer-Link-Card-Sosmed"
                        >
                            {MedsosList.map((item, index) => {
                                return (
                                    <LinkCard
                                        key={index}
                                        title={item.title}
                                        image={item.image}
                                        href={item.href}
                                        color={item.color}
                                    />
                                )
                            })}
                        </GridItem2>

                    </div>
                </GridItem>
                <Grid item xs={12}>

                    <div className="Footer-Foot">
                        <div className="curve"></div>
                        © UMN FESTIVAL 2023
                        <br />
                        Managed by <Sparkles><span className="purpleText">Coeus</span></Sparkles> UMN Festival 2023
                    </div>
                </Grid>
            </Grid >
        </LazyMotion>
    )
}