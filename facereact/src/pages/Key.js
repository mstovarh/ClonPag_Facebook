import React from 'react';
import './key.css';

function Key() {
  return (
    <>
      <div className='key-style p-0 m-0'>
        <nav className="navbar p-0 m-0">
          <fieldset>
            <div className="row p-0 m-0 h-100 d-flex align-items-center">
              <div className='col-sm'>
                <h3>facebook</h3>
              </div>
              <div className='col-sm form-style'>
                <form className='row m-0'>
                  <input
                    type="email"
                    className="form-control col-lg"
                    id="Email"
                    placeholder="Correo electronico o telefono"
                  />
                  <input
                    type="password"
                    className="form-control col-lg"
                    id="Password"
                    aria-describedby="passwordHelpBlock"
                    placeholder="Contraseña"
                  />
                  <button
                    type="button"
                    className="btn btn-primary btn-lg col-lg"
                    id="button1"
                  >
                    <a href="login.html">Iniciar Sesion</a>
                  </button>
                  <a id="older" href="key.html" className='col-lg'>
                    ¿Has olvidado la cuenta?
                  </a>
                </form>
              </div>
            </div>
          </fieldset> 
        </nav>
        <div className="c-key">
          <div className="cont-f">
            <fieldset>
              <form>
                <h2 className='m-0 h2-st'>Recupera tu cuenta</h2>
                <hr className="border" />
                <h3 className='m-0 h3-st'>
                  Introduce tu correo electrónico o número de móvil para buscar tu cuenta.
                </h3>
                <input
                  type="email"
                  className="form-control"
                  id="Email"
                  placeholder="Correo electronico o número de movil"
                />
                <hr className="border m-1 p-0" />
                <div className="buttends m-0 p-0">
                  <button type="button" className="btn" id="button1">
                    Cancelar
                  </button>
                  <button type="button" className="btn" id="button2">
                    Buscar
                  </button>
                </div>
              </form>
            </fieldset>
          </div>
        </div>
      </div>
      <footer></footer>
    </>
  );
}

export default Key;
