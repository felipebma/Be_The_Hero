import React from 'react'
import './styles.css'
import { FiArrowLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import logoImg from '../../assets/logo.svg'

export default function Register() {
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero" />
                    <h1>Cadastro</h1>
                    <p>Faça o seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#e02041" />
                            Não tenho cadastro
                    </Link>
                </section>
                <form action="">
                    <input placeholder="Nome da ONG"/>
                    <input placeholder="E-mail" type="email"/>
                    <input placeholder="WhatsApp"/>

                    <div className="input-group">
                    <input placeholder="Cidade"/>
                    <input placeholder="UF" style={{width: 80}}/>
                    </div>

                    <button className="button">
                        Cadastrar
                    </button>
                </form>

            </div>
        </div>
    )
}