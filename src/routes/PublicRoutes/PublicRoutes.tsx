import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { RootState } from '../../interfaces'

export default function PublicRoute():JSX.Element {
    const {width,height}=useSelector((state:RootState)=>state.screen)
    return (
        <div style={{width:width,height:height}} className='ds-flex-col'>
            <Outlet/>
        </div>
    )
}
