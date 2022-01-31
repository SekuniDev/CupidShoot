import React, { useState, useEffect } from 'react';
import './App.css';

import Api from './Api';

import ChatListItem from './components/ChatListItem';
import ChatIntro from './components/ChatIntro';
import ChatWindow from './components/ChatWindow';
import NewChat from './components/NewChat';
import Profile from './components/Profile';
import Login from './components/Login';
import Menu from './components/Menu';
import Status from './components/Status';


export default () => {
  const [ showNewChat, setShowNewChat ] = useState(false);
  const [ showStatus, setShowStatus ] = useState(false);
  const handleStatus = () => { setShowStatus(true); }
  const [ showprofile, setShowProfile ] = useState(false);
  const handleProfile = () => { setShowProfile(true); }
  const [ showMenu, setShowMenu ] = useState(false);
  const handleMenu = () => { setShowMenu(true); }
  const [ chatlist, setChatList ] = useState([]);
  const [ activechat, setActivechat ] = useState({});
  
  const actionLoginDataGoogle = async (u) => {
    let newUser = {
      id: u.uid,
      name: u.displayName,
      icon: u.photoURL
    };
    await Api.addUser(newUser);
    setUser(newUser);
  }

  const [ user, setUser ] = useState(null);

  const handleNewChat = () => { setShowNewChat(true); }
  useEffect(()=>{ 
      if(user !== null) {
      let unsub = Api.onChatList(user.id, setChatList);
      return unsub;
     }
  }, [user]);
  
  if(user === null) {
    return (
    <Login onReceiveGoogle={actionLoginDataGoogle} />
    );
  }

  return (
    <div className="app-window">
      <div className="sidebar">
        <NewChat
         chatlist={chatlist}
         user={user}
         show={showNewChat}
         setShow={setShowNewChat}
        />
        <Profile
         show={showprofile}
         setShow={setShowProfile}
         user={user}
         setUser={setUser}
        />
        <Menu
         show={showMenu}
         setShow={setShowMenu}
         user={user}
         setUser={setUser}
        />
        <Status
         show={showStatus}
         setShow={setShowStatus}
        />
        <header>
          <img className="header__avatar" src="https://i.ibb.co/6w1nb3k/Cupid-Shot.png" />
          <h3 style={{ marginTop: '0' }} >Cupid Shot</h3>
          <div className="header__buttons">
            <div onClick={handleProfile} className="header__btn">
              <img src="https://i.ibb.co/yBXd60n/coracao.png" className="btn" style={{ height: '22px', width: '22px', filter: 'invert(100%)'}} />
            </div>
            <div onClick={handleNewChat} className="header__btn">
              <img src="https://i.ibb.co/V22L444/comentarios.png" className="btn" style={{ height: '22px', width: '22px', filter: 'invert(100%)'}} />
            </div>
            <div onClick={handleMenu} className="header__btn">
              <img src="https://i.ibb.co/Tv66c8M/menu-pontos-vertical.png" className="btn" style={{ height: '22px', width: '22px', filter: 'invert(100%)'}} />
            </div>
          </div>
        </header>
        <div className="search">
          <div className="search__input">
            <img src="https://i.ibb.co/vhWfQT5/procurar.png" style={{ height: '20px', width: '20px', filter: 'invert(100%)' }} />
            <input type="search" placeholder="Procurar uma conversa."></input>
          </div>
        </div>
        <div className="status">
            <div onClick={handleStatus}><img src="https://i.pinimg.com/564x/bc/ec/b6/bcecb6addf3a5924f6b9333209c524ba.jpg" className="status__img" /></div>
        </div>
        <div className="chatList">
          {chatlist.map((item, key)=>(
            <ChatListItem 
             key={key}
             data={item}
             active={activechat.chatId === chatlist[key].chatId}
             onClick={()=>setActivechat(chatlist[key])}
            />
          ))}
        </div>
      </div>
      <div className="contentarea">
        {activechat.chatId !== undefined && 
        <ChatWindow
         user={user}
         data={activechat}
        />}
        {activechat.chatId === undefined &&
        <ChatIntro
        />}
      </div>
    </div>
  );
}