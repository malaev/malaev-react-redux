import React from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';

export class Header extends React.Component {
    render() {
        return(
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Блог</h1>
                <button><Link to='/'>Главная</Link></button>
                <button><Link to='/createPost'>Новый пост</Link></button>
            </div>
        )
    }
}