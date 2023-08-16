import React from 'react'
import { Sidebar } from '../Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

export const Home = () => {
  return (
    <div className='container'>
        <div className="flex ">
            <Sidebar/>
            <Outlet/>
        </div>
    </div>
  )
}
