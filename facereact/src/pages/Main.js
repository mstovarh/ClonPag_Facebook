import React, { useState } from 'react';
import './main.css';
import { Link } from 'react-router-dom';
import { HiOutlineX } from "react-icons/hi";
 
function Main() {
  const [modalVisible, setModalVisible] = useState(false);

  const mostrarModal = () => {
    setModalVisible(true);
  };

  const cerrarModal = () => {
    setModalVisible(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="main-style row">
        <div className="section1 col-xl col-xXl text-start">
            <h1>facebook</h1>
            <h2>
              Facebook te ayuda a comunicarte y compartir con las personas que forman
              parte de tu vida.
            </h2>
        </div>
        <div className="section2 col-xl col-xXl">
          <form onSubmit={handleSubmit}>
            <fieldset>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="Email"
                  placeholder="Correo electronico o numero de telefono"
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="Password"
                  aria-describedby="passwordHelpBlock"
                  placeholder="Contraseña"
                />
              </div>
              <Link to="/login">
                <button id="button1">
                  Iniciar Sesión
                </button>
              </Link>
              <Link to="/key">¿Olvidaste tu contraseña?</Link>
              <hr className="border m-4" />
              <button id="mostrarModal" type="button" onClick={mostrarModal}>
                Crear cuenta nueva
              </button>
              {modalVisible && (
                <div id="miModal" className={`modal ${modalVisible ? 'visible' : ''}`}>
                  <div className="modal-contenido">
                  <HiOutlineX onClick={cerrarModal} className="cerrar"/>
                    <div className="text-up">
                      <h2>Registrarte</h2>
                      <h3>Es rápido y fácil.</h3>
                    </div>
                    <input type="name" placeholder="Nombre" />
                    <input type="lastname" placeholder="Apellidos" />
                    <input
                      type="numberMobile"
                      placeholder="Número de móvil o correo electrónico"
                    />
                    <input type="password" placeholder="Contraseña nueva" />
                    <button type="submit" className='btn btn-modal-logup'>Registrarse</button>
                  </div>
                </div>
              )}
            </fieldset>
            <p><b>Crea una página</b> para una celebridad, una marca o un negocio.</p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Main;
