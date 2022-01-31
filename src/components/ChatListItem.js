import React, { useState, useEffect } from 'react';
import './ChatListItem.css';

export default ({onClick, active, data}) => {

    const [ time, setTime ] = useState('');

    useEffect(()=>{
        if(data.lastMessageDate > 0) {
            let d = new Date(data.lastMessageDate.seconds * 1000);
            let hours = d.getHours();
            let minutes = d.getMinutes();
            hours = hours < 10 ? '0'+hours : hours;
            minutes = minutes < 10 ? '0'+minutes : minutes;
            setTime(`${hours}${minutes}`);
        }
    }, [data]);


    return (
        <div onClick={onClick} className={`chatListItem ${active ? 'active' : ''}`}>
            <img src={data.icon} className="chatListItem__icon" />
            <div className="chatListItem__lines">
                <div className="chatListItem__line">
                    <div className="chatListItem__name">{data.title}</div>
                    <div className="chatListItem__date">{time}</div>
                </div>
                <div className="chatListItem__line">
                    <div className="chatListItem__lastMsg">
                        <p>{data.lastMessage}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}