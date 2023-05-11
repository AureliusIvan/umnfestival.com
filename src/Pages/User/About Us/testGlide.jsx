import Logo from "../../../Reusable/ComponentItems/Logo/Logo"
// Default theme
import '@splidejs/react-splide/css';

// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';

// or only core styles
import '@splidejs/react-splide/css/core';
import { Splide, SplideSlide } from '@splidejs/react-splide';

export default function testGlide(){
    const options = {
        direction: 'ttb',
        arrows : false,
        paginationDirection: 'ltr',
        height: '500px',
        width: '500px',
      };
    return (
        <div>   
            <Splide options={options}>
                <SplideSlide>
                    <Logo variant="color" glow={true} width="100%" height="100%"/>
                </SplideSlide>
                <SplideSlide>
                    <Logo variant="white" glow={true} width="100%" height="100%"/>
                </SplideSlide>
                <SplideSlide>
                    <Logo variant="black" glow={true} width="100%" height="100%"/>
                </SplideSlide>
            </Splide>
        </div>
    );
}