import React, { useState } from 'react';
import './Termosde.css';

export default ({ user, setUser, show, setShow}) => {

    const handleClose = () => {
        setShow(false);
    }

    return (
        <div className="Termosde" style={{left: show ? 403 : -962}}>
            <div className="Termosde__header">
                <div onClick={handleClose} className="backbutton">
                    <img src="https://i.ibb.co/Bt1qx5J/cruzar.png" style={{ height: '20px', width: '20px', filter: 'invert(100%)' }} />
                </div>
                <div className="headtitle">Termos de Uso</div>
            </div>
            <div className="Termosde__body">
                <h4> 1.Aceitação dos Termos:
                    1.1 Para usar os Serviços, o usuário deverá primeiro concordar com os Termos. Não é permitido o uso dos Serviços por parte do usuário se ele não aceitar os Termos.
                    1.2 O usuário pode aceitar os Termos usando efetivamente os Serviços. Nesse caso, o usuário compreende e aceita que considerará o uso dos Serviços uma aceitação dos Termos a partir desse momento.
                    1.3 O usuário não poderá usar os Serviços nem aceitar os Termos se:
                    (a) não tiver idade legal para celebrar um acordo com efeito jurídico; ou
                    (b) for uma pessoa com restrições quanto ao recebimento de serviços impostas pelas leis do Brasil ou de outros países, incluindo o país onde o usuário é residente ou a partir do qual usa os Serviços.
                    1.4 Antes de continuar, o usuário deverá imprimir ou guardar uma cópia local dos Termos Universais em seus registros.
                </h4>
            </div>
        </div>
    );
}