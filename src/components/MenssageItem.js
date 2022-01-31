import React, { useState, useEffect } from 'react';
import './MenssageItem.css';

export default ({data, user}) => {

    const [ time, setTime ] = useState('');

    useEffect(()=>{
        if(data.date > 0) {
            let d = new Date(data.date.seconds * 1000);
            let hours = d.getHours();
            let minutes = d.getMinutes();
            hours = hours < 10 ? '0'+hours : hours;
            minutes = minutes < 10 ? '0'+minutes : minutes;
            setTime(`${hours}${minutes}`);
        }
    }, [data]);

    return (
        <div className="MenssageLine" style={{ justifyContent: user.id === data.author ? 'flex-end' : 'flex-start'}}>
            <div className="MenssageItem" style={{ backgroundColor: user.id === data.author ? '#FA4c6F' : '#fa7c95'}}>
                <div className="MenssageText" >{data.body}</div>
                <div className="MenssageDate" style={{ color: user.id === data.author ? '#efefef' : '#e6e5e5'}}>{time}</div>
            </div>
        </div>
    );
}