import { useEffect, useState, Suspense, lazy } from "react";
import "./NavbarMobile.scss";
import { LazyMotion, m, domAnimation, useAnimation } from "framer-motion";
import { useLocation } from "react-router-dom";
const NavbarMobileMenu = lazy(() =>
  import("./NavbarMobileMenu/NavbarMobileMenu.jsx")
);

export default function NavbarMobile() {
  // redux
  const [open, setopen] = useState(true);
  // animation
  const control = useAnimation();
  const display = useAnimation();
  const bar1 = useAnimation();
  const bar2 = useAnimation();
  const navanimate = useAnimation();
  var location = useLocation();
  useEffect(() => {
    if (open === false) {
      control.start({
        transform: "scale(1)",
        transition: {
          type: "tween",
          duration: 0.8,
        },
      });
      bar1.start({
        y: -5,
      });
      bar2.start({
        y: 5,
      });
      display.start({
        transform: "translate3d(1000px,0,0)",
      });
    }

    setopen(true);
  }, [location]);

  function clickHandler() {
    setopen(!open);
    if (open) {
      control.start({
        transform: "scale(50)",
        transition: {
          type: "tween",
          duration: 0.4,
        },
      });
      bar1.start({
        y: 0,
        transition: {
          type: "spring",
          stiffness: 100,
          damping: 20,
        },
      });
      bar2.start({
        y: 0,
      });
      display.start({
        transform: "translate3d(0,0,0)",
      });
    } else {
      control.start({
        transform: "scale(1)",
        transition: {
          type: "tween",
          duration: 0.7,
        },
      });
      bar1.start({
        y: -5,
      });
      bar2.start({
        y: 5,
      });
      display.start({
        transform: "translate3d(1000px,0,0)",
        transition: {
          type: "tween",
          duration: 0,
          delay: 0.6,
        },
      });
    }
  }

  return (
    <>
      <LazyMotion features={domAnimation}>
        <m.div
          initial={{
            transform: "translate3d(1000px,0,0)",
          }}
          animate={display}
          className={`Navbar-Mobile-Menu-Container `}
        >
          <Suspense fallback={""}>
            <NavbarMobileMenu animate={navanimate} />
          </Suspense>
        </m.div>
      </LazyMotion>
      {/*  */}
      <LazyMotion features={domAnimation}>
        <m.div animate={control} id="navbar-mobile-menu-button"></m.div>
      </LazyMotion>
      <m.button
        aria-label="menu-button"
        onClick={clickHandler}
        className="Navbar-Mobile-Button"
      >
        <LazyMotion features={domAnimation}>
          <m.div
            className="bar up"
            animate={bar1}
            initial={{
              y: -5,
            }}
          ></m.div>
        </LazyMotion>
        <LazyMotion features={domAnimation}>
          <m.div
            animate={bar2}
            className="bar down"
            initial={{
              y: 5,
            }}
          ></m.div>
        </LazyMotion>
      </m.button>
    </>
  );
}
