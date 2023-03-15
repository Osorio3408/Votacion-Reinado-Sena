import react_node from "../../assets/react_node.jpg";
import react_c from "../../assets/react_c.jpg";
import typerscript_node from "../../assets/typerscript_node.jpg";
import react from "../../assets/react.jpg";

export const Profile = () => {
  const data = [
    {
      backgroundImgae: `${react_node}`,
      image: "",
      name: "Daniel aldana",
      rol: "backend",
      redes: [],
    },
    {
      backgroundImgae: `${react_c}`,
      image: "",
      name: "Yuliam Andrey Osorio",
      rol: "frontend",
      redes: [
        "https://github.com/Osorio3408",
        "https://www.linkedin.com/in/yuliam-osorio-574b64264/",
        "https://www.instagram.com/yosorio34/",
      ],
    },
    {
      backgroundImgae: `${typerscript_node}`,
      image: "",
      name: "Jeison Rua",
      rol: "backend",
      redes: [],
    },
    {
      backgroundImgae: `${react}`,
      image: "",
      name: "Juan Pablo Aranda",
      rol: "frontend",
      redes: [],
    },
  ];

  return (
    <div className="h-screen w-screen pt-96 md:pt-0">
      <div className="flex justify-center items-center mb-40 md:mb-0">
        <h1 className="text-4xl md:text-6xl font-black absolute top-36 md:top-44">
          Equipo de desarrollo
        </h1>
      </div>
      <div class="flex gap-5 flex-col md:flex-row md:flex-wrap justify-center items-center p-5 h-[100vh]">
        {data.map((dat) => (
          <div class="flex flex-col items-center rounded-[10px] w-[350px] p-4 bg-gray-200 h-96 shadow-lg shadow-neutral-400 ">
            <div class="relative flex h-32 w-full justify-center bg-cover">
              <img
                src={dat.backgroundImgae}
                class="absolute flex h-48 w-full justify-center rounded-md bg-cover object-cover"
              />
              <div class="absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white  dark:!border-navy-700">
                {/* <img class="h-full w-full rounded-full" src='https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar11.1060b63041fdffa5f8ef.png' alt="" /> */}
              </div>
            </div>
            <div class="mt-20 flex flex-col items-center text-black">
              <h2 class="text-3xl font-bold text-navy-700 ">{dat.name}</h2>
              <p class="text-xl text-neutral-800 font-semibold">{dat.rol}</p>
            </div>
            <div class="mt-6 mb-3 flex gap-14 md:!gap-14 text-black">
              <div class="flex flex-row gap-3 items-center justify-center">
                <a href={dat.redes[0]}>
                  <i class="text-xl bx bxl-github"></i>
                </a>
                <a href={dat.redes[1]}>
                  <i class="text-xl bx bxl-linkedin"></i>
                </a>
                <a href={dat.redes[2]}>
                  <i class="text-xl bx bxl-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
