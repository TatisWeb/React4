import React from 'react';
import s from './Post.module.css';

const Header = () => {
    
    return ( <header className="header">
    <img className="content" src="https://i.ibb.co/7RRTxBJ/kisspng-blue-angle-area-symbol-apps-facebook-messenger-5ab0ea80931e25-0125352915215438086026.jpg" alt="logo"/>
    <p className={s.text_logo}>Tatis messenger </p>
    </header>
    );
};
 

export default Header;
