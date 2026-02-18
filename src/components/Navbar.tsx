import { Mic } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-primary/95 backdrop-blur-sm border-b border-primary-foreground/10">
      <div className="container flex items-center justify-between h-14 px-4">
        <a href="#" className="flex items-center gap-2 text-primary-foreground font-extrabold text-lg">
          <Mic className="w-5 h-5 text-accent" />
          Prachar Prasar Kendra
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm text-primary-foreground/80">
          <a href="#voice-samples" className="hover:text-accent transition-colors">Samples</a>
          <a href="#services" className="hover:text-accent transition-colors">Services</a>
          <a href="#pricing" className="hover:text-accent transition-colors">Pricing</a>
          <a href="#location" className="hover:text-accent transition-colors">Location</a>
        </div>
        <a
          href="https://wa.me/919525521211"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-accent text-accent-foreground font-bold text-sm px-4 py-2 rounded-lg hover:brightness-110 transition-all"
        >
          WhatsApp Us
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
