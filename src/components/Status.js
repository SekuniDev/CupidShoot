import React from 'react';
import './Status.css';

export default ({ show, setShow}) => {

    const handleClose = () => {
        setShow(false);
    }

    return (
        <div className="Status" style={{left: show ? 403 : -962}}>
            <div className="Status__header">
                <div onClick={handleClose} className="backbutton">
                    <img src="https://i.ibb.co/Bt1qx5J/cruzar.png" style={{ height: '20px', width: '20px', filter: 'invert(100%)' }} />
                </div>
            </div>
            <div className="Status__body">
            <div className="CSSgal">
                <s id="s1"></s> 
                <s id="s2"></s>
                <s id="s3"></s>
                <s id="s4"></s>

                <div className="slider">
                    <div><p>Há muito, muito tempo atrás, <br/>
                            no início da criação, <br/>
                            os humanos possuíam quatro <br/>
                            pernas, quatro braços, duas <br/>
                            cabeças e apenas um coração. <br/>
                            Todos eram alegres, lindos, <br/>
                            completos.  Os deuses, com <br/>
                            inveja da plenitude dos meros <br/>
                            mortais, já que eles mesmos não <br/>
                            possuíam tal coisa, separaram <br/>
                            todos eles, espalhando os pares <br/>
                            pelo mundo.</p></div>
                    <div><p>E o que era feliz, puro e belo, <br/>
                            tornou-se desesperado, infeliz e <br/>
                            violento. Guerras foram travadas, <br/>
                            batalhas perdidas e mortes <br/>
                            concretizadas. Todos estavam <br/>
                            descontando sua tristeza enquanto <br/>
                            procuravam desesperadamente pela <br/>
                            sua outra metade. Pelo espelho,<br/>
                            pelo dinheiro, pelo poder... <br/>
                            Suas metades não estavam em lugar <br/>
                            algum.</p></div>
                    <div><p>Afrodite, infeliz em ver o amor desaparecendo<br/>
                            e sendo subtituido pelo ódio, tomara uma decisão. <br/>
                            Convocou um dos querubins que mais dava trabalho, <br/>
                            que era mais problemático e infeliz e o disse:<br/>
                            - Você gostaria de ser mais poderoso, certo?<br/>
                            Bem, façamos um trato: você encontra e une<br/>
                            todas as metades do mundo novamente, e eu lhe<br/>
                            dou toda a beleza e felicidade que desejar.<br/>
                            Que tal?<br/>
                            - Tudo bem - concordou o querubim. - Em troca,<br/>
                            quero ser amado, e ser belo. Se for assim, aceito<br/>
                            a proposta.</p></div>
                    <div><p>E assim, nasceu o Cupid Shot!<br/>
                            O mais dinâmico e criativo site<br/>
                            de relacionamentos, que te une<br/>
                            com a sua metade diretamente<br/>
                            pelo poder de Ágape!<br/>
                            <br/>
                            Siga as instruções do cupido,<br/>
                            e você verá o amor crescendo cada<br/>
                            vez mais dentro de si!<br/>
                            <br/>
                            Ajude um querubin e encontre a<br/>
                            <b>sua metade</b>!</p></div>
                </div>

                <div className="prevNext">
                    <div><a href="#s4"></a><a href="#s2"></a></div>
                    <div><a href="#s1"></a><a href="#s3"></a></div>
                    <div><a href="#s2"></a><a href="#s4"></a></div>
                    <div><a href="#s3"></a><a href="#s1"></a></div>
                </div>
            </div>
            </div>
        </div>
    );
}