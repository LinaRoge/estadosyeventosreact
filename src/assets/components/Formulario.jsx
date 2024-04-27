import { useState } from "react";

import { limpiar } from "../../util/limpiar";
import "../../App.css";

function validarCorreo(correo) {
  // Expresión regular para validar el formato de correo electrónico
  const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regexCorreo.test(correo);
}

function Formulario({ setAlert }) {
  const [user, setUser] = useState("");
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  function enviarFormulario(e) {
    e.preventDefault();
    if (
      user === "" ||
      password === "" ||
      correo === "" ||
      confirmPassword === ""
    ) {
      setAlert({
        mensaje: "Completar todos los campos",
        color: "red",
        backgroundColor: "rgba(199, 97, 97, 0.849)",
      });
      limpiar(setUser, setCorreo, setPassword, setConfirmPassword);
      return;
    }
    if (!validarCorreo(correo)) {
      setAlert({
        mensaje: "Formato de correo electrónico inválido",
        color: "red",
        backgroundColor: "rgba(199, 97, 97, 0.849)",
      });
      limpiar(setUser, setPassword, setConfirmPassword, setCorreo);
      return;
    }
    if (password !== confirmPassword) {
      setAlert({
        mensaje: "Las Contraseñas deben coincidir",
        color: "red",
        backgroundColor: "rgba(199, 97, 97, 0.849)",
      });
      limpiar(setUser, setCorreo, setPassword, setConfirmPassword);
      return;
    } else {
      setAlert({
        mensaje: "Te haz registrado con exito",
        color: "white",
        backgroundColor: "green",
      });
      limpiar(setUser, setCorreo, setPassword, setConfirmPassword);
    }
    console.log({ user, correo, password, confirmPassword });
  }
  return (
    <>
      <form onSubmit={enviarFormulario}>
        <div className="formulario">
          <input
            className="input"
            placeholder="Nombre de usuario"
            value={user}
            type="text"
            onChange={(e) => setUser(e.target.value)}
          />
          <input
            className="input"
            placeholder="tuemail@ejemplo.com"
            value={correo}
            type="text"
            onChange={(e) => setCorreo(e.target.value)}
          />
          <input
            className="input"
            placeholder="Contraseña"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            className="input"
            placeholder="confirme su contraseña"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button type="submit" className="buttonRegistrese">
            Registrese
          </button>
        </div>
      </form>
    </>
  );
}
export default Formulario;
