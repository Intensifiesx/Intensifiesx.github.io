// tailwind.config.js
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}", // Include all JS/JSX/TS/TSX files in src
        "./public/index.html", // If you have an index.html file
        "./src/Pages/CSS/**/*.css", // Include any CSS files in Pages/CSS
    ],
    theme: {
        extend: {
            backgroundImage: {
                HomeBG: "url('/src/Images/BG.jpg')",
            },
        },
    },
    plugins: [],
};
