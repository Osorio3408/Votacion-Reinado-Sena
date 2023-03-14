import React from 'react'
import logo from '../../assets/logo-sena-verde-png-sin-fondo.png'
import './loadingTwo.css'

export const Loading = () => {
    return (
        <div class="p-10 h-screen w-screen flex items-center justify-center bg-zinc-200">
            <div class="animate-wiggle flex justify-center">
                <img src={logo} alt="" className='w-[50%] h-[50%]' />
            </div>
        </div>
    )
}


export const LoadingTwo = () => {
    return (
        <div className="mt-10 flex items-center justify-center gap-x-6 inset-0">
            <div class="loader">
                <div class="loader__bar"></div>
                <div class="loader__bar"></div>
                <div class="loader__bar"></div>
                <div class="loader__bar"></div>
                <div class="loader__bar"></div>
                <div class="loader__ball"></div>
            </div>
        </div>
    )
}
