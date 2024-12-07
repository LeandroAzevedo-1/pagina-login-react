import { FaUser, FaLock } from "react-icons/fa";
 
import { useState } from "react";

import "./login.css"
const Login = () => {
    
    const [userName, setUsername] = useState("");
    const [password, setPassword] = useState("");

    
    const handleSubmit = (event) => {
        event.preventDefault();


        console.log(`Enviando os dados: ${userName} - ${password}`)
        console.log("Envio")
    }
  return (
    <div className="container">
                        
        <form action="" onSubmit={handleSubmit}>
            <h1 className="title">Acesse o sistema</h1>

            <div className="input-field">
                <input 
                    type="email" 
                    name="email" id="email" placeholder="E-mail" 
                    onChange={(e) => setUsername(e.target.value)}/>
                <FaUser className="icon"/>
            </div>
            <div className="input-field">
                <input 
                    type="password" 
                    name="password" id="password" placeholder="Senha" 
                    onChange={(e) => setPassword(e.target.value)}/>
                <FaLock className="icon"/>
            </div>

            <div className="recall-forget">
                <label htmlFor="checkbox">
                    <input type="checkbox" name="checkbox" id="checkbox" />
                    Lembre de mim.
                </label>
                <a href="#">Esqueceu a senha?</a>
            </div>
            <button className="btn">Entrar</button>

            <div className="signup-link">
                <p>Não tem uma conta? <a href="#">Registar</a></p>
            </div>
        </form>
    </div>
  )
}

export default Login