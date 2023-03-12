import React, { useState, useEffect } from 'react'
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import axios from "axios";
import { getParticipants } from "../../helpers/ApiRest";
import { Loading } from "../../ui/Loading/Loading";

export const ResultCard = () => {
  const [datos, setDatos] = useState([])
  const [isloading, setIsloading] = useState(true)



  //funcion que pide los datos
  const getPartcipe = async () => {
    await axios
      .get(getParticipants)
      .then(({ data }) => {
        setIsloading(false)
        setDatos(data);
      })
      .catch((err) => {
        console.log("servidor")
      })
  }

  useEffect(() => {
    getPartcipe()
  }, [])


  const data = {
    labels: datos.map(categoria => { return categoria.name }),
    datasets: [
      {
        label: 'Sales',
        data: datos.map(serie => { return serie.votes }),
        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(255, 99, 132, 0.2)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 99, 132, 1)'],
        borderWidth: 1,
      },
    ],
  };


  return (
    <div className='flex justify-center items-center w-screen h-screen'>
      {
        isloading ? <Loading /> :
        <div className='w-[50%] h-[50%]'>
          <Bar data={data} />
        </div>
      }
    </div>
  )
}
