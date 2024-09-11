import "./Footer.scss";

import styled from 'styled-components';
import {Grid as MuiGrid} from '../MaterialUICoreLazy/MaterialUICoreLazy';
import Logo from "./../../Asset/Image/Ufest Logo/ufestlogowhite.webp"
import {SocialMediaList} from './medsos';
import CoolTitle from '../ComponentItems/CoolTitle/CoolTitle';


const Grid = styled(MuiGrid)(({theme}) => ({
  width: '100%',
}));

const GridItem = styled(MuiGrid)(({theme}) => ({
  width: '100%',
  position: 'relative',
  margin: '20px',
  padding: '20px',
}));

const GridItem2 = styled(MuiGrid)(({theme}) => ({
  gap: '20px',
}));


function LinkCard(props) {
  return (<Grid
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

  </Grid>)
}


function Title({children}) {
  return (
      <CoolTitle
          size={'30px'}
          className="title"
      >
        {children}
      </CoolTitle>
  )
}

export default function Footer() {
  return (
      <Grid
          container
          id="Footer"
          spacing={0}
      >

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
                  src={Logo}/>
            </div>
          </div>

          <div className="divider"/>
        </GridItem>

        {/* 2nd Column */}
        <GridItem item md={3} xs={12}>
          <div className="Footer-Section">
            <Title>
              ADDRESS
            </Title>
            <p className="address">
              Universitas Multimedia Nusantara
              <br/>
              Jl. Scientia Boulevard, Gading Serpong
              <br/>
              Tangerang, Banten
              <br/>
              15811, Indonesia
            </p>
          </div>
          <div className="divider"/>
        </GridItem>

        {/* 3rd Column */}
        <GridItem item md={4} xs={12}>
          <div className="Footer-Section">
            <Title>
              FOLLOW US!
            </Title>
            <GridItem2
                container
                className="Footer-Link-Card-Sosmed"
            >
              {SocialMediaList.map((item, index) => {
                return (<LinkCard
                    key={index}
                    title={item.title}
                    image={item.image}
                    href={item.href}
                    color={item.color}
                />)
              })}
            </GridItem2>
          </div>
        </GridItem>

        <Grid item xs={12}>
          <div className="Footer-Foot">
            <div className="curve"/>
            © UMN FESTIVAL 2023
            Managed by{' '}
            <CoolTitle size="15px" className="purpleText">
              Coeus
            </CoolTitle> UMN Festival 2023
          </div>
        </Grid>
      </Grid>
  )
}