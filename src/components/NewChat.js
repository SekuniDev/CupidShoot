import React, { useState, useEffect } from 'react';
import './NewChat.css';

import Api from '../Api';

export default ({chatlist, user, show, setShow}) => {

    const [ list, setList ] = useState([]);

    useEffect(()=>{
        const getList = async () => {
            if(user !== null) {
                let results = await Api.getContactlist(user.id);
                setList(results);
            }
        }
        getList();
    }, [user]);

    const addNewChat = async (user2) => {
        await Api.addNewChat(user, user2);

        handleClose();
    }

    const handleClose = () => {
        setShow(false);
    }

    return (
        <div className="NewChat" style={{left: show ? 0 : -415}}>
            <div className="NewChat__head">
                <div onClick={handleClose} className="backbutton">
                    <img src="https://i.ibb.co/nf3qSRt/angle-double-left.png" style={{ height: '20px', width: '20px', filter: 'invert(100%)' }} />
                </div>
                <div className="headtitle">Nova Conversa?</div>
            </div>
            <div className="NewChat__list">
                {list.map((item, key)=>(
                    <div onClick={()=>addNewChat(item)} className="item" key={key}>
                        <img src={item.icon} className="item__icon" />
                        <div className="item__name">{item.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}