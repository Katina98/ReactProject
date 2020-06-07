import React from 'react';
import './Footer.css';

const styles = {
    backgroundColor: '#0e1921',
    height: '100px',
    width: '100%',
    position: 'fixed',
    bottom: 0,
    color: '#f7f7f7',  
};


export function Footer() {
    return (
        <div className="footer" style={styles}>
            <h2 className="footer-text">Footer works</h2>
        </div>
    );
}