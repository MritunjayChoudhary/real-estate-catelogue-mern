import React from 'react'
import './sidebar.css'

const items = [
    {icon:"other_houses",name:"Property"},
    {icon:"notifications",name:"PPD Assistance"},
    {icon:"place_item",name:"Recieved Intrest"},
    {icon:"input_circle",name:"Sent Intrest"},
    {icon:"visibility",name:"Property Views"},
    {icon:"sell",name:"Tariff Plans"}
]
const Sidebar = () => {
  return (
    <div className='sidebar-container'>
        <div className='sidebar-head'>
            Logo
        </div>
        <div className='sidebar-body'>
            {items.map((data)=>{
                return (
                    <div className='sidebar-items'>
                        <div className='sidebar-item_inner'>
                            <span className='sidebar-icon'>
                                <span class="material-symbols-outlined">
                                    {data.icon}
                                </span>
                            </span>
                            
                            <span>{data.name}</span>
                        </div>
                    </div>
                )
            })}
        </div>
        
    </div>
  )
}

export default Sidebar