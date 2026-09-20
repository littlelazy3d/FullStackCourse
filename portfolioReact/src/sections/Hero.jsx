import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Button } from "@/Components/Button";

const skills = [
    "ReactJS",
    "Tailwindcss",
    "Typescript",
    "Figma",
    "Blender3D"
];

export const Hero = () => {
    return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* BG */}
        <div>
            <img/>
        </div>
        {/* CONTENT */}
        <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* LEFT SECTION */}
                <div className="space-y-4">
                    <div className="animate-fade-in">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                            <span className="w-2 h-2 bg-primary rounded animate-pulse" />
                                Software Engineer • Web Designer
                        </span>

                    </div> 
                    {/* HEAD SECTION */}
                    <div className="space-y-2">
                        <h1 className="text-4xl font-bold leading-tight animate-fade-in"> 
                            Crafting <span className="text-primary glow-text"> Hand-painted </span> Websites,
                            <br/>
                            Tailored to your desire.
                        </h1>
                        <p className="pt-3 text-muted-foreground max-w-lg text-lg animate-fade-in animation-delay-500">
                            I'm a software Engineer and Web Designer
                            Specializing in Bootstrap, ReactJS and Tailwindcss.
                            I build unique websites with a hand-painted feel that makes it standout!
                        </p>
                    </div>

                {/* SOCIALS */}
                    <div className="flex items-center gap-1 animate-fade-in animation-delay-500">
                        <a href="#" target="_blank" rel="noreferrer" className="text-2xl text-muted-foreground hover:text-primary transition-colors duration-200">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    
                        <a href="#" target="_blank" rel="noreferrer" className="text-2xl text-muted-foreground hover:text-primary transition-colors duration-200">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    
                        <a href="#" target="_blank" rel="noreferrer" className="text-2xl text-muted-foreground hover:text-primary transition-colors duration-200">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>

                    </div>
                </div>
                {/* RIGHT SECTION */}
                <div className="relative animate-fade-in animation-delay-300">
                    <div className="relative w-fit">
                        <img src="pfp2.jpg" className=" w-80 w-80 aspect-square object-cover rounded-full"/>
                {/* Badge */}
                    <div className="absolute -bottom-4 right-0 rounded-full py-3 px-4 animate-float bg-border">
                        <div className="flex items-center gap-3">
                            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                            <span> Available for work</span>
                        </div>

                    </div>

                    </div>
                </div>
            </div>
        {/* SKILLS */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center font-bold tracking-wider">
            Technologies I work with
          </p>
          <div className="relative overflow-hidden">
            <div
              className="absolute left-0 top-0 bottom-0 w-32
             from-background to-transparent z-10"
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-32
              from-background to-transparent z-10"
            />
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>


    </section>
    );
};