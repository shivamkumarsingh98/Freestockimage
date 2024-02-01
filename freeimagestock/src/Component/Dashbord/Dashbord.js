import React from 'react'
import style from './Dashbord.module.css'
import Navebar from '../Navebar/Navebar'
import Searchbar from '../searchbar/Searchbar'
import Showlist from '../Display/Showlist'

 function Dashbord(){
 
    return (
      <div className={style.body}>
        <img src=''/>
        <div >
          <Navebar/>
          <Searchbar/>
        </div>
      </div>
    )
  }


export default Dashbord