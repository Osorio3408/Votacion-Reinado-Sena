import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { OptionsAlert } from "../../helpers/ToastResp";

export const Form = () => {

    const [document, setDocument] = useState('')
    const [status, setStatus] = useState(true);

    const handle = (e) => {
        setDocument(e.target.value)
    }

    const handleSelectChange = (e) => {
        setStatus(e.target.value);
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(document);
        await axios.post('https://api-vote.up.railway.app/api/v1/voters', { document, status })
            .then((response) => {
                console.log(response);
                toast.success('se guardo', OptionsAlert)
                setDocument('')
            }).catch((err) => {
                toast.error('error', OptionsAlert)
                console.log(err);
            })

    }


    return (
        <div className=" bg-gray-100 flex flex-col  justify-center items-center h-screen p-5">
            <div className="bg-white lg:w-2/5 lg:h-2/4 p-10 rounded-lg shadow-slate-500 shadow-lg">
                <h1 className="text-2xl lg:text-4xl font-bold text-center mb-10">
                    <strong>¡Bienvenido</strong>
                </h1>
                <form onSubmit={handleSubmit}>
                    <div className="lg:mt-16 mt-10 mb-2 lg:mb-8">
                        <input
                            className="shadow appearance-none border rounded w-full mt-2 py-3 lg:py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="idNumber"
                            type="number"
                            name='document'
                            placeholder="Número de identificación"
                            value={document}
                            onChange={handle}
                            required
                        />
                        <select value={status} onChange={handleSelectChange} className="shadow appearance-none border rounded w-full mt-2 py-3 lg:py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                            <option value={true}>True</option>
                            <option value={false}>False</option>
                        </select>
                    </div>
                    <div className="flex justify-center">
                        <button
                            className="bg-green-600 hover:bg-green-700 text-white font-bold lg:py-3 lg:px-12 py-2 px-10 mt-8 rounded-md focus:outline-none focus:shadow-outline"
                            type="submit">
                            Ingresar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export const FormPar = () => {
    const [image, setImage] = useState(null);
    const [name, setName] = useState('')

    const handleFile = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setImage(reader.result);
        };
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(image);
        // await axios.post('https://projectvotessena.azurewebsites.net/api/v1/participants', { name, image })
        //     .then((response) => {
        //         console.log(response);
        //         toast.success('Se guardo', OptionsAlert)
        //         setImage(null)
        //         setName('')
        //     }).catch((err) => {
        //         console.log(err);
        //         toast.error('Paso algo', OptionsAlert)
        //     })

    }

    return (
        <div className=" bg-gray-100 flex flex-col  justify-center items-center h-screen p-5">
            <div className="bg-white lg:w-2/5 lg:h-2/4 p-10 rounded-lg shadow-slate-500 shadow-lg">
                <h1 className="text-2xl lg:text-4xl font-bold text-center mb-10">
                    <strong>¡Bienvenido</strong>
                </h1>
                <form onSubmit={handleSubmit}>
                    <div className="lg:mt-16 mt-10 mb-2 lg:mb-8">
                        <input
                            className="shadow appearance-none border rounded w-full mt-2 py-3 lg:py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="text"
                            type="text"
                            name='text'
                            placeholder="Número tu Nombre"
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        <input
                            type="file"
                            className="shadow appearance-none border rounded w-full mt-2 py-3 lg:py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            onChange={handleFile}
                        />
                    </div>
                    <div className="flex justify-center">
                        <button
                            className="bg-green-600 hover:bg-green-700 text-white font-bold lg:py-3 lg:px-12 py-2 px-10 mt-8 rounded-md focus:outline-none focus:shadow-outline"
                            type="submit">
                            Ingresar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
} 
