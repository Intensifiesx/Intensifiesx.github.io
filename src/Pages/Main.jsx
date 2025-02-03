import Navbar from "./Navbar.jsx";
import bg from "../Images/Zain.png";
import rove from "../Images/2DRove.png";
import AddProjectToList from "../Components/ProjectList.jsx";
import NewSection from "../Components/NewSection.jsx";

export default function Main() {
    return (
        <div className="bg-black">
            <Navbar />
            <div className="h-screen flex items-center justify-center">
                <div className="w-full max-w-[800px] flex flex-col items-center">
                    {/* ZAIN IMAGE */}
                    <div className="w-full sm:w-4/5 md:w-3/5 lg:w-2/5 px-4">
                        <img src={bg} className="w-full h-auto" alt="Zain" rel="preload" />
                    </div>
                    {/* ZAIN Name */}
                    <div className="text-white text-center mt-4">
                        <p className="text-xl sm:text-2xl md:text-3xl">Hi, I'm</p>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mt-2">Zain Hindi</h1>
                    </div>
                    {/* ZAIN Description */}
                    <div className="text-white text-center mt-4">
                        <p className="text-sm sm:text-base md:text-lg">
                            Computer Scientist B.S. & Systems Engineer
                            <br />
                            Based in Nevada
                        </p>
                    </div>

                    {/* View Projects Button UNDER ZAIN SECTION */}
                    <a
                        href="#projects"
                        onClick={(e) => {
                            e.preventDefault();
                            document.querySelector("#projects").scrollIntoView({
                                behavior: "smooth",
                            });
                        }}
                        className="relative text-white text-lg mt-5 px-6 py-3 border-2 border-white rounded-full no-underline
                            overflow-hidden transition-all duration-500 hover:shadow-[0_0_25px_rgba(255,255,255,0.5)]
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

            {/* --------------------------------------------------------------- */}

            {/* Experience Section */}
            <NewSection
                title="Experience"
                content={[
                    <AddProjectToList
                        title="Freelance Software Engineer @ Fiverr"
                        description={`
                            Conducted comprehensive qualitative and quantitative analyses of AI-generated responses, providing actionable feedback to optimize model accuracy, contextual understanding, and user satisfaction across technical and creative domains.
                            Developed and implemented advanced AI model evaluation methodologies, enhancing model performance through systematic training on complex system instructions and API tools.
                            Pioneered sophisticated AI code analysis techniques, including image-to-code conversion, to rigorously assess technical proficiency and adaptive intelligence in AI models.`}
                        image="https://management.org/wp-content/uploads/2023/06/A-Comprehensive-Fiverr-Review.png"
                        link="https://www.fiverr.com/intensifiesx/"
                        linkName="Fiverr"
                    />,
                ]}
            />

            {/* Projects Section */}
            <NewSection
                title="Projects"
                content={[
                    <AddProjectToList
                        title="2D Isometric Roguelike Game"
                        description={`Welcome to our 2D roguelike horror game project built in Unity! Our game features diverse map styles, from horror to ancient settings, combined with strategic spell casting and an augment system for character progression. Players will experience procedurally generated levels, fluid movement mechanics, and an immersive atmosphere through visuals and sound design. Each playthrough offers unique challenges and experiences, keeping players engaged with continuous content variety.`}
                        image={rove}
                        link="https://github.com/UNLV-CS472-672/2024-S-GROUP2-2DRove"
                        linkName="GitHub"
                    />,
                    <AddProjectToList
                        title="ML Cosmic Mystery Competition"
                        description={`Developed a machine learning solution for the Spaceship Titanic challenge, predicting passenger transport anomalies in an interstellar accident. Using scikit-learn's Hist Gradient Boosting Classifier, my colleague and I engineered features and optimized the model to achieve 81.32% validation accuracy. The project involved extensive data preprocessing, feature engineering, and model tuning, resulting in a top 150 placement (#141) on the Kaggle leaderboard. This project demonstrated practical applications of machine learning in analyzing complex passenger data patterns and contributing to theoretical rescue strategy development.`}
                        image="https://storage.googleapis.com/kaggle-media/competitions/Spaceship%20Titanic/joel-filipe-QwoNAhbmLLo-unsplash.jpg"
                        link="https://github.com/Intensifiesx/Spaceship-Titanic"
                        linkName="GitHub"
                    />,
                ]}
            />
        </div>
    );
}
