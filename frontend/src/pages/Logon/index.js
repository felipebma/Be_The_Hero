import React from 'react';
import { Link } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'


import './styles.css';

import heroesimg from '../../assets/heroes.png'
import logoimg from '../../assets/logo.svg'

export default function Logon(){

    return(
        <div>
            <div className="logon-container">
                <section className="form">
                    <img src={logoimg} alt="Be The Hero"/>
                    <form action="">
                        <h1>Faça Seu Logon</h1>
                        <input placeholder = "Sua ID"></input>
                        <button className= "button" type="submit">Entrar</button>

                        <Link className="back-link" to="/register">
                            <FiLogIn size={16} color = "#e02041"/>
                            Não tenho cadastro
                        </Link>
                    </form>
                </section>

                <img src={heroesimg} alt="Heroes"/>
            </div>
        </div>
    );
}