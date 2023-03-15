import react_node from "../../assets/react_node.jpg";

export const Profile = () => {

    const data = [
        { backgroundImgae: `${react_node}`, image: '', name: 'Daniel aldana', rol: 'backend' },
        { backgroundImgae: '', image: '', name: 'Yuliam Andrey Osorio', rol: 'frontend' },
        { backgroundImgae: '', image: '', name: 'Jeison Rua', rol: 'backend' },
        { backgroundImgae: '', image: '', name: 'Juan Pablo Aranda', rol: 'frontend' }
    ]


    return (
        <div className='h-screen w-screen overflow-auto md:overflow-none'>
            <div class="flex gap-5 flex-col md:flex-row md:flex-wrap justify-center items-center p-5 h-[100vh]">
            {
                data.map((dat) => (
                        <div class="flex flex-col items-center  rounded-[20px] w-[350px] p-4 bg-slate-500 shadow-3xl shadow-shadow-500 ">
                            <div class="relative flex h-32 w-full justify-center rounded-xl bg-cover" >
                                <img src={dat.backgroundImgae} class="absolute flex h-32 w-full justify-center rounded-xl bg-cover" />
                                <div class="absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white  dark:!border-navy-700">
                                    {/* <img class="h-full w-full rounded-full" src='https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar11.1060b63041fdffa5f8ef.png' alt="" /> */}
                                </div>
                            </div>
                            <div class="mt-16 flex flex-col items-center text-black">
                                <h4 class="text-xl font-bold text-navy-700 ">{dat.name}</h4>
                                <p class="text-base font-normal text-black">{dat.rol}</p>
                            </div>
                            <div class="mt-6 mb-3 flex gap-14 md:!gap-14 text-black">
                                <div class="flex flex-col items-center justify-center">
                                    <i class='bx bxl-github'></i>
                                </div>
                            </div>
                        </div>
                ))
            }
            </div>  
        </div>
    )
}