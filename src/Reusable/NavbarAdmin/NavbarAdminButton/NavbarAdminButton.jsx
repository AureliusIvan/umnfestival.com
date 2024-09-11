import "./NavbarButtonAdmin.scss"

import {useNavigate, useLocation} from "react-router-dom"

export default function NavbarButtonAdmin(props) {
  const navigate = useNavigate();
  const location = useLocation();

  function handler() {
    navigate(`/admin/${props.state}`);
  }

  return (
      <button
          className="NavbarButtonAdmin"
          id={props.id}
          onClick={handler}
          style={{
            color: location.pathname === `/admin/${props.state}` ? "red" : "white"
          }}
      >
        {props.Title}
      </button>
  )
}