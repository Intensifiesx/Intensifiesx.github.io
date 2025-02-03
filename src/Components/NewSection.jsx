const NewSection = ({ title, content }) => {
    return (
        <div className="min-h-screen flex items-center justify-center py-16" id="projects">
            <div className="w-full max-w-[800px]">
                <section>
                    <div>
                        <h1 className="text-white text-7xl font-bold text-center mb-8">{title}</h1>
                    </div>
                    <ul className="space-y-8">{content}</ul>
                </section>
            </div>
        </div>
    );
};

export default NewSection;
