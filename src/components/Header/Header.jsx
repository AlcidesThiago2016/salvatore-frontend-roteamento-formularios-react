
import React from 'react'
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'
import './Header.css'

export default function Header(){
    return (
        <header>
            <img src={logo} alt='Logo' className="logo" />
            
            <nav>
                <Link to="/">Home</Link>
                <Link to="/create">Create</Link>
            </nav>    
        </header>
    )
}