import React, {useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import react_node from "../../assets/react_node.jpg";

export const Profile = () => {
    const navigate = useNavigate()
      //peticion de los datos y restincion
  useEffect(() => {
    let userId = JSON.parse(localStorage.getItem("id_votante"));
    if (userId === null) {
      navigate("/");
    }
  }, []);
    return (
        <div className='flex justify-center items-center h-screen w-screen'>
            <div class="flex flex-col justify-center items-center h-[100vh]">
                <div class="relative flex flex-col items-center rounded-[20px] w-[400px] mx-auto p-4 bg-slate-500 bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:!shadow-none">
                    <div class="relative flex h-32 w-full justify-center rounded-xl bg-cover" >
                        <img src={react_node} class="absolute flex h-32 w-full justify-center rounded-xl bg-cover" />
                        <div class="absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white  dark:!border-navy-700">
                            {/* <img class="h-full w-full rounded-full" src='https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar11.1060b63041fdffa5f8ef.png' alt="" /> */}
                        </div>
                    </div>
                    <div class="mt-16 flex flex-col items-center text-black">
                        <h4 class="text-xl font-bold text-navy-700 ">
                            Daniel Aldana
                        </h4>
                        <p class="text-base font-normal text-black">Product Manager</p>
                    </div>
                    <div class="mt-6 mb-3 flex gap-14 md:!gap-14 text-black">
                        <div class="flex flex-col items-center justify-center">
                            <i class='bx bxl-github'></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}