import { useState } from "react";
import { ThemeToggle } from "./themeToggle";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: "smooth" });
        setIsMenuOpen(false);
    };

    const navItems = [
        { id: "skills", label: "Skills" },
        { id: "projects", label: "Projects" },
        { id: "contributions", label: "Contributions" },
        { id: "hobbies", label: "Hobbies" },
        { id: "contact", label: "Contact" },
    ];

    return (
        <header className="fixed left-0 right-0 z-50 p-2">
            <nav className="max-w-7xl mx-auto glass p-2 flex items-center rounded-3xl justify-between border border-neutral-600">
                <span className="text-2xl text-primary ms-1 font-bold">/home/sandesh</span>

                {/* Desktop nav */}
                <div className="hidden md:flex items-center space-x-8">
                    {navItems.map((item) => (
                        <Button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            variant="ghost"
                            className="text-foreground-muted hover:text-foreground transition-colors duration-200"
                        >
                            {item.label}
                        </Button>
                    ))}
                </div>

                <div className="hidden md:block">
                    <ThemeToggle />
                </div>

                <div className="flex items-center gap-2 md:hidden">
                    <ThemeToggle />
                    <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-foreground">
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </Button>
                </div>
            </nav>

            {/* Mobile nav */}
            {isMenuOpen && (
                <div className="md:hidden fixed left-2 right-2 top-20 glass rounded-3xl border border-neutral-600 p-4 animate-in slide-in-from-top-5">
                    <div className="flex flex-col space-y-2">
                        {navItems.map((item) => (
                            <Button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                variant="ghost"
                                className="text-foreground-muted hover:text-foreground transition-colors duration-200 w-full justify-start text-lg"
                            >
                                {item.label}
                            </Button>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
}
