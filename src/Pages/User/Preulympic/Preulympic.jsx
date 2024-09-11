import "./Preulympic.scss";

import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {Helmet} from "react-helmet-async";
import {
  getCookie,
} from "react-use-cookie";

export default function Preulympic() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  function RouteHandler() {
    if (getCookie('Preulmstate') === "1") {
      navigate("/PreulympicRebelsquad");
    } else if (getCookie('Preulmstate') === "2") {
      navigate("/PreulympicRegistrationUser");
    } else if (getCookie('Preulmstate') === "3") {
      navigate("/PreulympicPayment");
    } else {
      navigate("/PreulympicRegistration");
    }
  }

  return (<>
        <Helmet>
          <title>Pre-Ulympic | UMN Festival 2023</title>
          <meta
              name="description"
              content="Pre-Ulympic | Pre-Ulympic merupakan kegiatan UMN Festival yang bertujuan sebagai sarana untuk mahasiswa menuangkan bakatnya dalam bidang e-sport khususunya mobile legend."
          />
          <link rel="canonical" href="https://www.umnfestival.com/pre-olympic"/>
        </Helmet>

        <div id="preulympic">
          <div className="pre-olympic">
            <div className="logo"></div>
            <h1 className="title">Pre-Ulympic</h1>
            <p className="description">
              Pre Ulympic merupakan kegiatan UMN Festival yang bertujuan sebagai
              sarana untuk mahasiswa menuangkan bakatnya dalam bidang e-sport
              khususunya mobile legend.
            </p>
            <div className="cta">
              <p>Pendaftaran telah ditutup, nantikan informasi selanjutnya!</p>
            </div>
          </div>
        </div>
      </>
  );
}
