import { useState } from 'react';
import './Login.css';

export const Login = () => {

    const [password, setPassword] = useState('');
    const [usuario, setUsuario] = useState('');

    const AccerLogin = (e) =>{
        e.preventDefault();
        console.log({
            usuario: usuario,
            password:password
        });
    }
  return (
    <body>
    <div id="contenedor">
            <div id="central">
                <div id="login">
                    <div class="titulo">
                    <img src="https://www.gob.ec/sites/default/files/styles/medium/public/2018-11/INSPI%20LOGO_0.png?itok=3n2KJyo2" alt="Logo de INSPI" />
                    </div>
                    <form id="loginform">
                        <input onChange={(event)=>{setUsuario(event.target.value)}} type="text" name="usuario" placeholder="Usuario" required />
                        
                        <input onChange={(event)=>{setPassword(event.target.value)}} type="password" placeholder="Contraseña" name="password" required />
                        
                        <button type="submit" title="Ingresar" name="Ingresar" onClick={AccerLogin}>Acceder</button>
                    </form>
                    <div class="pie-form">
                        <a href="#">¿No puedes Iniciar Sesión?</a>
                    </div>
                </div>
            </div>
        </div>
    </body>
  );
};
