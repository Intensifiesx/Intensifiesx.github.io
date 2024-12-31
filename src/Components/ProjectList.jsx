import React from "react";
import PropTypes from "prop-types";

const AddProjectToList = ({ title, description, image, link, linkName }) => {
    return (
        <li className="list-none mb-8">
            <div className="container mx-auto">
                <h2
                    className="text-2xl font-semibold rounded-lg p-2 
                        bg-purple-600 text-purple-50 
                        hover:bg-purple-700 
                        transition-all duration-300 ease-in-out
                        -webkit-font-smoothing: antialiased"
                >
                    {title}
                </h2>

                <div className="mt-4 flex flex-col md:flex-row gap-4 relative p-4">
                    <div className="flex-1">
                        <p className="text-gray-300 mb-4 leading-relaxed text-justify">{description}</p>
                        <button
                            onClick={() => window.open(link, "_blank")}
                            className="flex items-center px-5 gap-2 
                                border-2 border-purple-400 rounded-lg p-2 
                                text-purple-600 bg-purple-50 
                                w-fit font-bold
                                hover:bg-purple-600 hover:text-purple-50 
                                hover:scale-105 active:scale-95
                                transform transition-all duration-300 ease-in-out
                                focus:outline-none focus:ring-2 focus:ring-purple-500
                                disabled:opacity-50"
                            rel="noopener noreferrer"
                        >
                            {linkName}
                        </button>
                    </div>
                    <div className="flex md:w-1/3">
                        <img
                            src={image}
                            alt={`${title} preview`}
                            className="w-full h-auto object-cover rounded-lg
                                    shadow-lg transition-transform duration-300
                                    hover:scale-[1.02]"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </li>
    );
};

AddProjectToList.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    linkName: PropTypes.string.isRequired,
};

export default AddProjectToList;
