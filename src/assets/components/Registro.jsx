import Formulario from "./Formulario";
import SocialButton from "./SocialButton";
import {
  faFacebook,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

function Registro() {
  const [alert, setAlert] = useState({ mensaje: "", color: "" });
  return (
    <>
      <div className="general">
        <h3>Crea una cuenta</h3>
        <div className="icono">
          <SocialButton icono={faFacebook} />
          <SocialButton icono={faGithub} />
          <SocialButton icono={faLinkedinIn} />
        </div>
        <p>o usa tu email para registrarte</p>

        <Formulario setAlert={setAlert} />
        {alert.mensaje && (
          <p
            className="mensaje"
            style={{
              color: alert.color,
              backgroundColor: alert.backgroundColor,
            }}
          >
            {alert.mensaje}
          </p>
        )}
      </div>
    </>
  );
}
export default Registro;
