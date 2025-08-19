import { ThemeToggle } from "./themeToggle";
import SplitText from "@/components/*/TextAnimations/SplitText/SplitText";
import { Button } from "./ui/button";

export function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed left-0 right-0 z-50 p-2">
      <nav className="max-w-7xl mx-auto glass p-4 flex items-center rounded-3xl justify-between">
        <SplitText text="SAN DESH" className="text-2xl text-primary font-bold" />

        <div className="hidden md:flex items-center space-x-8">
          <Button
            onClick={() => scrollToSection("projects")}
            variant={"ghost"}
            className="text-foreground-muted hover:text-foreground transition-colors duration-200"
          >
            Projects
          </Button>
          <Button
            onClick={() => scrollToSection("skills")}
            variant={"ghost"}
            className="text-foreground-muted hover:text-foreground transition-colors duration-200"
          >
            Skills
          </Button>
          <Button
            onClick={() => scrollToSection("hobbies")}
            variant={"ghost"}
            className="text-foreground-muted hover:text-foreground transition-colors duration-200"
          >
            Hobbies
          </Button>
          <Button
            onClick={() => scrollToSection("contact")}
            variant={"ghost"}
            className="text-foreground-muted hover:text-foreground transition-colors duration-200"
          >
            Contact
          </Button>
        </div>

        <ThemeToggle />
      </nav>
    </header>
  );
}