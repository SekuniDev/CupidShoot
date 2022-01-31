import React, { useState } from "react";
import './Profile.css';

export default ({ show, setShow, user, setUser }) => {

    const handleClose = () => {
        setShow(false);
    }

    return (
        <div className="Profile" style={{left: show ? 0 : -415}}>
            <div className="Profile__head">
                <div onClick={handleClose} className="backbutton">
                    <img src="https://i.ibb.co/nf3qSRt/angle-double-left.png" style={{ height: '20px', width: '20px', filter: 'invert(100%)' }} />
                </div>
                <div className="headtitle">Perfil</div>
            </div>
            <div className="Profile__body">
            <div className="item1">
                <div className="info">
                    <div className="icondiv">
                        <img src={user.icon} className="icon" />
                    </div>
                <div className="name">{user.name}</div>
                </div>
            </div>
            </div>
        </div>
    );
}