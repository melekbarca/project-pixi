import { useUpdateEffect } from '@piximind/custom-hook'
import { useWindowSize } from '@piximind/custom-hook/lib/esn/hooks/useWindowSize/useWindowSize'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { RootState } from '../interfaces'
import ForgetPass from '../pages/forgetPass/ForgetPass'
import Home from '../pages/home/Home'
import Login from '../pages/Login/Login'
import ResetPass from '../pages/resetPass/ResetPass'
import Signup from '../pages/Signup/Signup'
import LangueProvider from '../providers/LangueProvider/LangueProvider'
import { setScreen } from '../redux/Reducers'
import PrivateRoute from './PrivateRoutes/PrivateRoutes'
import PublicRoute from './PublicRoutes/PublicRoutes'

export default function AppRoute() {
    const { user, accessToken, refreshToken } = useSelector((state: RootState) => state.auth)
    const { width, height } = useWindowSize()
    const dispatch = useDispatch()

    function PrivateRouteRender(props: any) {
        return accessToken === "" && refreshToken === "" && user === null ? (
          <Navigate to="/login" />
        ) : (
          props.children
        )
      }
      function PublicRouteRender(props: any) {
        return !accessToken && !refreshToken && !user ? (
          props.children
        ) : (
          <Navigate to="/" />
        )
      }

    useUpdateEffect(()=>{
        dispatch(setScreen({width:width,height:height}))
    },[width,height])

    
    return (
        <LangueProvider>
            <BrowserRouter>
                <Routes>

                    <Route
                        element={
                            <PublicRouteRender>
                                <PublicRoute />
                            </PublicRouteRender>
                        }
                    >
                        <Route path='/' element={<Home />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/signup' element={<Signup />} />
                        <Route path='/forget' element={<ForgetPass />} />
                        <Route path='/reset' element={<ResetPass/>} />

                    </Route>

                    <Route
                        element={
                            <PrivateRouteRender>
                                <PrivateRoute />
                            </PrivateRouteRender>
                        }
                    >
                        <Route path='/' element={<Home/>} />

                    </Route>


                </Routes>
            </BrowserRouter>
        </LangueProvider>
    )
}
