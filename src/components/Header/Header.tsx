import React from 'react';
import "./Header.module.css"
import '@fontsource/roboto/400.css';
import styles from './Header.module.css'

interface HeaderProps{
    title: string;
};

const Header: React.FC<HeaderProps> = ({title}) =>{
    return (
        <header className={styles.headerClass}>
            <h1>{title}</h1>
        </header>
    )
};

export default Header;