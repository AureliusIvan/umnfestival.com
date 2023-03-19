// *Footer Component*
// [ Import ]
// Styling
import styled from 'styled-components';
import "./Footer.scss";
// Component
import { Grid as MuiGrid } from '../MaterialUICoreLazy/MaterialUICoreLazy';
// Asset
import Logo from "./../../Asset/Image/Ufest Logo/ufestlogowhite.webp"
// Data
import { MedsosList } from './medsos';
import CoolTitle from '../ComponentItems/CoolTitle/CoolTitle';
// End 


// Custom style for MuiGrid (item)
// You can customize Mui component just like this one 
// (scss overide sometimes not working for MUI)
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
// 


// Card for link (social icon in footer)
function LinkCard(props) {
    return (
        <Grid
            item lg={2}
            md={2}
            sm={2}
            xs={2}>
            <a
                className="Footer-Link-Card"
                href={props.href}>
                <img
                    loading="lazy"
                    alt="social media icon"
                    className="Card-Image"
                    decoding='async'
                    title={props.title}
                    src={props.image}/>
            </a>

        </Grid>
    )
}



// Create custom cool title component
function Title({ children }) {
    return (
        <CoolTitle
            size={'30px'}
            className="title"
        >
            {children}
        </CoolTitle>)
}

// Main func start here
export default function Footer() {
    return (
        <Grid
            // Tell Mui we going to use Grid Container
            container
            id="Footer"
            // Remove Spacing
            spacing={0}
        >
            {/* 1st Column */}
            <GridItem
                item md={4}
                xs={12}
            >
                <div className="Footer-Section">
                    <div className='Logo-Wrap'>
                        <img
                            loading="lazy"
                            alt="UMN FESTIVAL 2023 Logo"
                            className="UFEST-LOGO"
                            title='UMN Festival 2023 Logo White'
                            src={Logo} />
                    </div>
                </div>
                <div className="divider" />
            </GridItem>
            {/* 2nd Column */}
            <GridItem item md={4} sm={12}>
                <div className="Footer-Section">
                    <Title>
                        ADDRESS
                    </Title>
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
            {/* 3rd Column */}
            <GridItem item md={4} xs={12}>
                <div className="Footer-Section">
                    <Title>
                        FOLLOW US!
                    </Title>
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
            {/* 4th column (in second row) */}
            <Grid item xs={12}>
                <div className="Footer-Foot">
                    <div className="curve"></div>
                    © UMN FESTIVAL 2023
                    <br />
                    {/* Wrap "Coeus" with <Sparkles></Sparkles> to create star effect */}
                    Managed by <CoolTitle size="15px" className="purpleText">Coeus</CoolTitle> UMN Festival 2023
                </div>
            </Grid>
        </Grid >
    )
}