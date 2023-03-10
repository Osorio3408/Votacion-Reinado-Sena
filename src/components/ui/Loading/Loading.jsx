import React from 'react'
import logo from '../../assets/logo-sena-verde-png-sin-fondo.png'

export const Loading = () => {
    return (
        <div class="p-10 h-screen w-screen flex items-center justify-center bg-zinc-200">
            <div class="animate-wiggle flex justify-center">
                <img src={logo} alt="" className='w-[50%] h-[50%]'/>
            </div>
        </div>
    )
}
