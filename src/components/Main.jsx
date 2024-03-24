import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import Property from './Property'
import './Main.css'

const Main = () => {
  return (
    <div className='main-container'>
        <div className='main-sidebar'>
            <Sidebar/>
        </div>
        <div className='main-rightbar'>
            <Header/>
            <Property/>
        </div>
    </div>
  )
}

export default Main