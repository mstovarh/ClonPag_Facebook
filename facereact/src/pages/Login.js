import React from 'react';
import './login.css';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <>
      <div className='log-style'>
        <div className="section1-log">
          <h1>facebook</h1>
        </div>
        <div className="section2-log">
          <form method="post">
            <fieldset>
              <label className="form-label">Iniciar sesión en Facebook</label>
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
              <button type="button" className="btn btn-lg" id="button1">
                <Link to="/login">Iniciar Sesión</Link>
              </button>
              <Link to="/key">¿Has olvidado la contraseña?</Link>
            </fieldset>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
