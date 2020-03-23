import React from 'react'
import './liquid.styles.scss';

export default function Liquid({children, d, filled, border, margin}) {
    return (
        <div className="square" width={d} height={d} style={{margin: margin}}>
            <span className={`${filled} ${border}`}></span>            
            <span className={`${filled} ${border}`}></span>            
            <span className={`${filled} ${border}`}></span>            
            <div className="content">
                {children}
            </div>
        </div>
    )
}
