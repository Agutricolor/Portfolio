import React from "react";
import "./Footer.css"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export const Footer = () => {
    return (
        <footer>
            <div className="footer bg-sky-700 absolute w-14 h-40 top-1/3 rounded-r-md cursor-pointer duration-500 hover:w-16">
                <div className="flex flex-col justify-evenly items-center h-full w-full duration-500">
                    <a href="https://www.linkedin.com/in/agustin-v%C3%A1zquez-fullstack-backendoriented/" rel="noreferrer"
                    target="_blank" className="py-2 hover:text-white"><LinkedInIcon fontSize="large"/></a> 
                    <a href="https://github.com/Agutricolor" rel="noreferrer"
                    target="_blank" className="py-2 hover:text-white"><GitHubIcon fontSize="large"/></a>
                </div>
            </div>
        </footer>
    )
}