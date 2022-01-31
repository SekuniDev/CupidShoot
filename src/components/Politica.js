import React, { useState } from 'react';
import './Politica.css';

export default ({ user, setUser, show, setShow}) => {

    const handleClose = () => {
        setShow(false);
    }

    return (
        <div className="Politica" style={{left: show ? 403 : -962}}>
            <div className="Politica__header">
                <div onClick={handleClose} className="backbutton">
                    <img src="https://i.ibb.co/Bt1qx5J/cruzar.png" style={{ height: '20px', width: '20px', filter: 'invert(100%)' }} />
                </div>
                <div className="headtitle">Política de Privacidade</div>
            </div>
            <div className="Politica__body">
                <h4></h4>
            </div>
        </div>
    );
}