import React from 'react';
import {Link} from 'react-router-dom';
import{FiArrowLeft} from 'react-icons/fi';


import './styles.css';
import logoImg from '../assets/logo.svg';


export default function NewIncident() {
    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero" />

                    <h1> Register new case</h1>
                    <p> describe the case in details  </p>

                    <Link className="Back-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02041" />
                    Back to the HOME Page
                </Link>
                </section>
                <form>
                    <input placeholder="Case title"/>
                    <textarea placeholder="Description"/>
                    
                    
                     <input placeholder="Value in US$"/>
                     

                    <button className="button" type="submit">INSERT</button>
                </form>

            </div>
        </div>
    )}