import React, { useState } from "react";
import ReactDOM from 'react-dom';

export const PortalModal = ({children,visible, onClose}) =>{

    
    if(!visible){
        return null
    }

    const styles = {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: '0',
        left: '0',
        background: 'linear-gradient(to top right, #667eea, #764ba2)',
        opacity:'0.95',
        color:'#fff'
    }

    return( ReactDOM.createPortal((
            <div>
                
            <div style={styles}>
            {children}
            <button onClick={onClose}>cerrar</button>
                
            </div>
            </div>
        ), document.getElementById('modal-root'))
    )
}