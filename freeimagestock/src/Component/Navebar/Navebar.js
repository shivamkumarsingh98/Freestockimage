import React from 'react'
import style from './Navebar.module.css'

function Navebar(){
    return(
        <>
        <div className={style.body}>
            <div className={style.namelogo}>
                <h2>Homepage</h2>
            </div>
            <div className={style.btnlogo}>
                <p>Login</p>
                <p>Creat account</p>
            </div>
        </div>
        </>
    )
}

export default Navebar