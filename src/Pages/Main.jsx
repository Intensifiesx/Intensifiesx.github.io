import Navbar from "./Navbar.jsx";
import bg from "../Images/Zain.png";
import addProjectToList from "../Components/ProjectList.jsx";

export default function Main() {
    return (
        <div className="bg-black">
            <Navbar />
            {/* First Section - Full height view */}
            <div className="h-screen flex items-center justify-center">
                <div className="w-full max-w-[800px] flex flex-col items-center">
                    {/* Image container */}
                    <div className="w-full sm:w-4/5 md:w-3/5 lg:w-2/5 px-4">
                        <img src={bg} className="w-full h-auto" alt="Zain" rel="preload" />
                    </div>

                    {/* Text content */}
                    <div className="text-white text-center mt-4">
                        <p className="text-xl sm:text-2xl md:text-3xl">Hi, I'm</p>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mt-2">Zain Hindi</h1>
                    </div>

                    {/* Description */}
                    <div className="text-white text-center mt-4">
                        <p className="text-sm sm:text-base md:text-lg">
                            Computer Scientist B.S. & Software Engineer
                            <br />
                            Based in Nevada
                        </p>
                    </div>

                    <a
                        href="#projects"
                        onClick={(e) => {
                            e.preventDefault();
                            document.querySelector("#projects").scrollIntoView({
                                behavior: "smooth",
                            });
                        }}
                        className="relative text-white text-lg mt-5 px-6 py-3 
                            border-2 border-white rounded-full no-underline
                            overflow-hidden transition-all duration-500
                            hover:shadow-[0_0_25px_rgba(255,255,255,0.5)]
                            hover:scale-110 transform inline-flex items-center gap-2"
                    >
                        <span className="justify-center items-center">View Projects</span>
                        <svg
                            className="w-4 h-4 transition-transform duration-500 hover:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </a>
                </div>
            </div>

            {/* Projects Section - Below the fold */}
            <div className="min-h-screen flex items-center justify-center py-16" id="projects">
                <div className="w-full max-w-[800px]">
                    <section>
                        <div>
                            <h1 className="text-white text-7xl font-bold text-center mb-8">Projects</h1>
                        </div>
                        <ul className="space-y-8">
                            {addProjectToList({
                                title: "2D Isometric Roguelike Game",
                                description: `Welcome to our 2D roguelike horror game project built in Unity! Our game features diverse map styles, from horror to
                                                            ancient settings, combined with strategic spell casting and an augment system for character progression. Players will
                                                            experience procedurally generated levels, fluid movement mechanics, and an immersive atmosphere through visuals and sound
                                                            design. Each playthrough offers unique challenges and experiences, keeping players engaged with continuous content
                                                            variety.`,
                                image: "https://media.licdn.com/dms/image/v2/D562DAQGMWzPEIYomUQ/profile-treasury-image-shrink_1920_1920/profile-treasury-image-shrink_1920_1920/0/1728890487384?e=1736233200&v=beta&t=mqEPx0WUV2mSu6Iwt1_sHLIHE1EdTqhGr2q-_DdAZBE",
                                link: "https://github.com/UNLV-CS472-672/2024-S-GROUP2-2DRove",
                                linkName: "GitHub",
                            })}
                            {addProjectToList({
                                title: "ML Cosmic Mystery Competition",
                                description: `Developed a machine learning solution for the Spaceship Titanic challenge, predicting passenger transport anomalies in an interstellar accident. 
                                    Using scikit-learn's HistGradientBoostingClassifier, my collegue and I engineered features and optimized the model to achieve 81.32% validation accuracy. 
                                    The project involved extensive data preprocessing, feature engineering, and model tuning, resulting in a top 150 placement (#141) on the Kaggle 
                                    leaderboard. This project demonstrated practical applications of machine learning in analyzing complex passenger data patterns and contributing 
                                    to theoretical rescue strategy development.`,
                                image: "https://storage.googleapis.com/kaggle-media/competitions/Spaceship%20Titanic/joel-filipe-QwoNAhbmLLo-unsplash.jpg",
                                link: "https://github.com/Intensifiesx/Spaceship-Titanic",
                                linkName: "GitHub",
                            })}
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
}
