import React, { useState } from 'react';
import './Cadastro.css';
import Api from '../Api';


export default ({ show, setShow, onReceiveGoogle }) => {

    const actionLoginDataGoogle = async () => {
        let result = await Api.googleLogar();

        if(result) {
            onReceiveGoogle(result.user);
        } else {
            alert("Ops! Parece que tivemos alguns problemas com a realização do seu login, tente novamente.");
        }
    }
    const handleClose = () => {
        setShow(false);
    }

    return (
        <div className="Cadastro" style={{left: show ? 820 : -400}}>
            <div className="Cadastro__info">
            <h1>Cupid Shot</h1>
            <div className="Cadastro__inputs">
                <div className="email">
                    <h3>E-mail</h3>
                    <input type="email" placeholder="ex.: cupidshoot@email.com" />
                </div>
                <div className="senha">
                    <h3>Senha</h3>
                    <input type="password" placeholder="ex.: Cupid_ShootS2" />
                </div>
                <button onClick={actionLoginDataGoogle} className="send">Cadastrar-se</button>
            </div>
            <div className="Cadastro__login">
                <p className="nop">Já tem uma conta?</p>
                <button onClick={handleClose} className="back">Login</button>
            </div>
            <p className="nopa">ou cadastre-se usando</p>
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