import React, {useState} from 'react';
import logo from '../../assets/imagens/logo-white.svg';
import './styles.css';


const Login = () => {
  
  return (  
    <div className="page-login">
        <div className="header">
          <img className="logo" src={logo} alt="logo Cyan"/>
        </div>
        
       <form className="form-login">
         <fieldset className="fieldset-login">
        <label htmlFor="usuario" className="lb-usuario">usúario *</label>
         <input  type="text" className="input"/>
         
         <label htmlFor="senha" className="lb-senha">senha *</label>
         <input type="password" className="input2" />

         <button className="btn-login">ENTRAR</button>

         <a to="/cadastro">Não tenho cadastro</a>

         </fieldset>
       </form>

    </div>



  )
}

export default Login;