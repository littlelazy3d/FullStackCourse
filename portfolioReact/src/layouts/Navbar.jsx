import {Button} from "@/Components/Button";
import { useEffect, useState } from "react";

const navLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#testimonials", label: "Testimonials" },
];

export const Navbar = () => {
    {/* Navbar scrolling sticked issue */}
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);     //size of navbar is 50

        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return <header className={`fixed top-0 left-0 right-0 transition-all duration-200
         ${isScrolled? "glass-strong py-3" : "bg-transparent py-5"} z-50`}>
        <nav className="container mx-auto px-6 flex items-center justify-between">
            <a href="#" className="text-xl font-bold tracking-tight hover:text-primary">
                LOGO
            </a>
        {/*Desktop nav */}
            <div>
                <div className="glass rounded-full px-2 py-1 flex items-center gap-3 font-bold">
                {navLinks.map((link, index) => (
                    <a href={link.href} key={index}
                    className="px-4 py-2 text-muted-foreground hover:text-primary"
                    >
                        {link.label}</a>
                ))}
                </div>

            </div>

            {/* CTA BUTTON */}
            <div>
                <Button size="sm" className="cursor-pointer">Contact Me </Button>
            </div>
        </nav>
    </header>;
};