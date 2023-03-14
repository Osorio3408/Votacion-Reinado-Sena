import React from 'react'
import { LoadingTwo } from "../../ui/Loading/Loading";

export const HomeEs = () => {
    return (
        <main className="grid h-screen w-screen place-items-center bg-white py-24 px-6 sm:py-32 lg:px-8">
            <div className="text-center">
                <p className="mt-6 text-base leading-7 text-gray-600">Agradecemos tu voto y apoyo en el reinado. ¡Gracias por ayudarnos a hacer de este evento un éxito!</p>
                <LoadingTwo />
            </div>
        </main>
    )
}
