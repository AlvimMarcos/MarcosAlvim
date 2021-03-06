import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../services/api';

import './styles.css';

import logoImg from '../assets/logo.svg';
import heroesImg from '../assets/heroes.png';


export default function Logon() {

    const [id, setId] = useState('');
    const history = useHistory();

    
    async function handleLogin(e){
        e.preventDefault();
        try{
            const response = await api.post('sessions', {id});
            
            localStorage.setItem('ongID', id);
            localStorage.setItem('ongName', response.data.name);

            history.push('/profile');

        }catch(err){
            alert('fail to log in, try again');
        }
    }



    return (
        <div className="logon-container">

            <section className="form">
                <img src={logoImg} alt="Be The Hero" />

                <form onSubmit={handleLogin}>
                    <h1> Log In </h1>

                    <input placeholder="Your ID"
                    value ={id}
                    onChange={e => setId(e.target.value)}
                    />
                    <button className="button" type="submit">Enter</button>

                    <Link className="Back-link" to="/register">
                        <FiLogIn size={16} color="E02041" />
                    I donnot have an account
                </Link>


                </form>
            </section>

            <img src={heroesImg} alt="Heroes" />
        </div>
    );
}