import React from "react";
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import me from "../../images/me.jpg"

export const Home = () => {
  return (
    <div id="Home" name="Home" className="h-screen my-10 flex justify-center">
      <div className="pl-16 flex flex-row items-center">
            <div className="flex justify-center h-max flex-col text-white text-xl">
              <h1 className="text-4xl py-2">Hola!</h1>
              <h1 className="text-5xl py-4">Soy <span className="text-sky-700">Agustin Vazquez</span></h1>
              <h1 className="text-4xl py-2 text-sky-700">Full Stack Web Developer</h1>
              <p>Estoy en la búsqueda de mi primera experiencia IT, como Full Stack Web Developer.</p>
              <p>Me encantaría formar parte de un proyecto desafiante, que me lleve al siguiente nivel como desarrollador.</p>
              <p>Mi especialización se encuentra en el Backend, tengo una fascinación por la creación de APIs,</p>
              <p>aunque el manejo de React y el diseño no son cosas que me desagraden ni se me dan mal <EmojiEmotionsIcon /> .</p>
            </div>
            <div className="pl-14 pr-3">
                <img src={me} alt="Mi foto" width={400} className="bg-origin-border rounded-3xl"/>
            </div>
        </div> 
    </div>
  );
};
