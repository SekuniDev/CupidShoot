import React, { useState, useEffect } from "react";
import './Login.css';
import Api from '../Api';
import Cadastro from "./Cadastro";
import firebase from 'firebase/compat/app';


export default ({onReceiveGoogle}) => {
    const actionLoginDataGoogle = async () => {
        let result = await Api.googleLogar();

        if(result) {
            onReceiveGoogle(result.user);
        } else {
            alert("Ops! Parece que tivemos alguns problemas com a realização do seu login, tente novamente.");
        }
    }
    const [ showCadastro, setShowCadastro ] = useState(false);
    const handleCadastro = () => { setShowCadastro(true); }
  
    return (
        <div className="Login">
            <div className="Login__logo">
                <img src="https://i.ibb.co/6w1nb3k/Cupid-Shot.png" className="logo" />
            </div>
            <div className="Login__info">
            <Cadastro
             show={showCadastro}
             setShow={setShowCadastro}
            />
            <h1>Cupid Shot</h1>
            <div className="Login__inputs">
                <div className="email">
                    <h3>E-mail</h3>
                    <input placeholder="ex.: cupidshoot@email.com" />
                </div>
                <div className="senha">
                    <h3>Senha</h3>
                    <input placeholder="ex.: Cupid_ShootS2" />
                    <button className="forgot">Esqueceu a senha?</button>
                </div>
                <button onClick={actionLoginDataGoogle} className="send">Entrar</button>
            </div>
            <div className="Login__cadastro">
                <p className="nop">Não tem uma conta?</p>
                <button onClick={handleCadastro} className="cadastro">Cadastre-se</button>
            </div>
            <p className="nop">ou faça login usando</p>
            <div className="Login__google">
                <button onClick={actionLoginDataGoogle} className="Google__button"><img src="https://i.ibb.co/ZH9q08z/google.png" className="Google__logo" style={{filter: 'invert(100%)'}} /></button>
            </div>
            <div className="termos">
                <p>Termos de Serviço</p><p className="bolota">●</p>
                <p>Política de Privacidade</p>
            </div>
            </div>
        </div>
    );
}

