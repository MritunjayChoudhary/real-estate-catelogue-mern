import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import Property from './Property'
import Listing from './Listing'
import './Main.css'

const Main = ({pageType}) => {
  return (
    <div className='main-container'>
        <div className='main-sidebar'>
            <Sidebar/>
        </div>
        <div className='main-rightbar'>
            <Header/>
            {pageType == 'form'?<Property/>:<Listing/>}
            
        </div>
    </div>
  )
}

export default Main