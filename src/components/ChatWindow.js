import React, { useState, useEffect, useRef } from 'react';
import EmojiPicker from 'emoji-picker-react';
import './ChatWindow.css';

import Api from '../Api';

import MenssageItem from './MenssageItem';

export default ({user, data}) => {

    function alerta() {
        alert("Você não pode não pode realizar uma ligação com este contato, sentimos muito.")
    }
    function alerta2() {
        alert("Você não pode realizar uma chamada de vídeo com este contato, sentimos muito.")
    }

    const body = useRef();

    const [ emojiOpen, setEmojiOpen ] = useState(false);
    const [ text, setText ] = useState('');
    const [ list, setList ] = useState([]);
    const [users, setUsers ] = useState([]);

    useEffect(()=>{
        setList([]);
        let unsub = Api.onChatContent(data.chatId, setList, setUsers);
        return unsub;
    }, [data.chatId]);

    useEffect(()=>{
        if(body.current.scrollHeight > body.current.offsetHeight) {
            body.current.scrollTop = body.current.scrollHeight - body.current.offsetHeight;
    }}, [list]);
    const handleEmojiClick = (e, emojiObject) => { setText( text + emojiObject.emoji ); }
    const handleOpenEmoji = () => { setEmojiOpen(true); }
    const handleCloseEmoji = () => { setEmojiOpen(false); }

    const handleInputKeyUp = (e) => {
        if(e.keyCode === 13) {
            handleSendClick();
        }
    }
    const handleSendClick = () => {
        if(text !== '') {
            Api.sendMessage(data, user.id, 'text', text, users);
            setText('');
            setEmojiOpen(false);
        }
    }

    return (
        <div className="ChatWindow">
            <div className="ChatWindow__header">
                <div className="ChatWindow__headerinfo">
                    <img src={data.image} className="ChatWindow__icon" />
                    <div className="ChatWindow__name">{data.title}</div>
                </div>
                <div className="ChatWindow__headerbuttons">
                    <div onClick={alerta} className="ChatWindow__btn">
                        <img src="https://i.ibb.co/0hY4ck1/chamada-recebida.png" className="call" style={{ height: '25px', width: '25px' }} />
                    </div>
                    <div onClick={alerta2} className="ChatWindow__btn">
                        <img src="https://i.ibb.co/Yy4NGrC/camera-de-video.png" className="video" style={{ height: '25px', width: '25px' }} />
                    </div>
                </div>
            </div>
            <div ref={body} className="ChatWindow__body">
                {list.map((item, key)=>(
                    <MenssageItem
                     key={key}
                     data={item}
                     user={user}
                    />
                ))}
            </div>
            <div className="ChatWindow__emojiarea" style={{ height: emojiOpen ? '300px' : '0' }} >
                <EmojiPicker
                 onEmojiClick={handleEmojiClick}
                 disableSearchBar
                 disableSkinTonePicker
                />
            </div>
            <div className="ChatWindow__footer">
                <div className="ChatWindow__pre">
                    <div className="ChatWindow__btn" onClick={handleCloseEmoji} style={{width: emojiOpen ? 40 : 0}}>
                        <img src="https://i.ibb.co/72Xkbvb/teclado.png" className="teclado" style={{ height: '30px', width: '30px' }} />
                    </div>
                    <div className="ChatWindow__btn" onClick={handleOpenEmoji} style={{width: emojiOpen ? 0 : 40}}>
                        <img src="https://i.ibb.co/qJN9Zrx/coracoes-sorridentes.png" className="emoji" style={{ height: '30px', width: '30px' }} />
                    </div>
                </div>
                <div className="inputArea">
                    <input
                     type="text"
                     className="inputArea__input"
                     placeholder="Escreva uma mensagem para o cupido."
                     value={text}
                     onChange={e=>setText(e.target.value)}
                     onKeyUp={handleInputKeyUp}
                    />
                </div>
                <div className="ChatWindow__pos">
                    <div className="ChatWindow__btn" style={{marginRight: '32px'}}>
                        <img src="https://i.ibb.co/r24jZPT/arco.png" onClick={handleSendClick} className="enviar" style={{ height: '30px', width: '30px' }} />
                    </div>
                </div>
            </div>
        </div>
    );
}