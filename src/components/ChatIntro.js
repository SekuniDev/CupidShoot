import React from 'react';
import './ChatIntro.css';

export default () => {
    return (
        <div className="chatIntro">
            <img src="https://i.ibb.co/6w1nb3k/Cupid-Shot.png" className="chatIntro__foto" />
            <h1 className="hello">Por enquanto você não tem nenhuma mensagem...</h1>
            <h2>Inicie uma conversa ou aguarde até que um de nossos cupidos lhe envie um desafio.</h2>
        </div>
    );
}