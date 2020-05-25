import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'

import api from '../../services/api'

import './styles.css';

import heroesimg from '../../assets/heroes.png'
import logoimg from '../../assets/logo.svg'

export default function Logon(){

    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();

        try{
            const res = await api.post('/sessions', {id});
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', res.data.ong.name)
            history.push('/profile')
            console.log(res.data.ong.name)
        }catch(e){
            alert('Falha no Login, tente novamente')
        }
    }


    return(
        <div>
            <div className="logon-container">
                <section className="form">
                    <img src={logoimg} alt="Be The Hero"/>
                    <form onSubmit={handleLogin}>
                        <h1>Faça Seu Logon</h1>
                        <input
                            placeholder = "Sua ID"
                            value = {id}
                            onChange = {e => setId(e.target.value)}
                        />
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