import React from "react";

export default function addProjectToList(title, description, image, link, linkName) {
    return (
        <li>
            <div>
                <h2
                    className="text-2xl font-semibold rounded-lg p-2 
                        bg-purple-600 text-purple-50 hover:bg-purple-700 
                        transition-colors duration-300"
                >
                    {title}
                </h2>

                <div className="mt-4 flex m-4 relative">
                    <div className="flex flex-col p-2">
                        <p className="text-gray-300">{description}</p>
                        <a
                            href={link}
                            className="flex px-5 gap-2 border-2 border-purple-400 rounded-lg p-2 
                                text-purple-600 bg-purple-50 w-fit mt-4 font-bold
                                hover:bg-purple-600 hover:text-purple-50 hover:scale-105
                                transform duration-300 ease-in-out"
                        >
                            {linkName}
                        </a>
                    </div>
                    <img src={image} alt="Project 1" className="w-1/3 h-auto rounded-lg mt-4" rel="preload" />
                </div>
            </div>
        </li>
    );
}
