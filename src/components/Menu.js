import React, { useState } from 'react';
import './Menu.css';

import Termosde from './Termosde';
import Dados from './Dados';
import Politica from './Politica';

export default ({ user, setUser, show, setShow}) => {

    const [ showPolitica, setShowPolitica ] = useState(false);
    const handlePolitica = () => { setShowPolitica(true); }

    const [ showDados, setShowDados ] = useState(false);
    const handleDados = () => { setShowDados(true); }

    const [ showTermosde, setShowTermosde ] = useState(false);
    const handleTermosde = () => { setShowTermosde(true); }

    const handleClose = () => {
        setShow(false);
    }

    return (
        <div className="Menu" style={{left: show ? 171 : -415}}>
            <div className="Menu__header">
                <div onClick={handleClose} className="backbutton1">
                    <img src="https://i.ibb.co/nf3qSRt/angle-double-left.png" style={{ height: '20px', width: '20px', filter: 'invert(100%)' }} />
                </div>
            </div>
            <div className="Menu__body">
                <div className="Sair"> Sair </div>
                <div onClick={handleTermosde} className="TermosDeUso"> Termos de Uso </div>
                <div onClick={handleDados} className="DadosDoApp"> Dados do Aplicativo </div>
                <div onClick={handlePolitica} className="PolíticadePrivacidade"> Política de Privacidade </div>
            </div>
            <Termosde
             show={showTermosde}
             setShow={setShowTermosde}
            />
            <Dados
             show={showDados}
             setShow={setShowDados}
            />
            <Politica
             show={showPolitica}
             setShow={setShowPolitica}
            />
        </div>
    );
}