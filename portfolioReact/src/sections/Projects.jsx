const projects = [
    {   
        title: "Mckinsey Website" ,
        description: "A professional corporate website presenting McKinsey’s consulting services, insights, and research through a structured and modern interface.",
        image: "/projects/apple.png"


    },{
        title: "Apple Website" ,
        description: "A sleek, minimalist website showcasing Apples products, with a strong focus on clean visuals, smooth interactions, and intuitive navigation.",
        image: "/projects/mckins.jpg"
    } , {

        title: "Web3" ,
        description: "A sleek, minimalist website showcasing Apples products, with a strong focus on clean visuals, smooth interactions, and intuitive navigation.",
        image: "/projects/web1.jpeg"
    } , {
        title: "Web4" ,
        description: "A sleek, minimalist website showcasing Apples products, with a strong focus on clean visuals, smooth interactions, and intuitive navigation.",
        image: "/projects/web2.avif"
    }];

export const Projects = () => {
    return (
        <section id="projects" className="py-32 relative overflow-hidden">
         <div className="max-w-6xl mx-auto px-6 relative z-10"> 
            <div className="text-center">
                <span className="text-primary text-sm font-bold tracking-wider uppercase animate-fade-in"> Featured work </span>
                    <h2 className="font-bold mb-16 text-primary font-serif text-4xl animate-fade-in"> Projects that
                        <span className="text-white italic font-serif"> make an Impact. </span> </h2>

                        {/* PROJECTS GRID*/ }
                        <div className="grid md:grid-cols-2 gap-10 max-w-6xl">
                            {projects.map((project, idx) =>
                            <div key={idx} className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1">
                                <div className="h-80">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    </div>
                                </div>
                            )}
                        </div>
                </div>
            </div>

        </section>
    );
};