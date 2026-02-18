import heroBg from "@/assets/hero-bg.jpg";
import { Mic, MessageCircle, Zap, CheckCircle, Clock, Play } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/919525521211?text=Hi%2C%20I%20want%20to%20get%20a%20digital%20prachar%20recording%20done.";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt="Professional recording studio"
        className="absolute inset-0 w-full h-full object-cover scale-105 animate-[slowZoom_20s_ease-in-out_infinite_alternate]"
      />
      <div className="absolute inset-0 hero-overlay" />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative z-10 container text-center px-4 py-24">
        <div className="inline-flex items-center gap-2 bg-accent/15 backdrop-blur-sm border border-accent/25 rounded-full px-5 py-2 mb-8 animate-float">
          <Mic className="w-4 h-4 text-accent" />
          <span className="text-sm font-semibold tracking-wide text-accent uppercase">Prachar Prasar Kendra</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-primary-foreground leading-[1.1] max-w-5xl mx-auto mb-8">
          Professional{" "}
          <span className="text-accent relative inline-block">
            Digital Prachar
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-accent/50 rounded-full" />
          </span>{" "}
          Services in Supaul
        </h1>

        <p className="text-lg md:text-2xl text-primary-foreground/75 max-w-2xl mx-auto mb-12 leading-relaxed">
          High Quality Male & Female Voice Recording for Political, School, Shop & Event Promotion
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="#voice-samples"
            className="group inline-flex items-center justify-center gap-3 bg-accent text-accent-foreground font-bold px-10 py-5 rounded-xl text-lg shadow-[0_0_30px_hsl(45_100%_51%/0.3)] hover:shadow-[0_0_50px_hsl(45_100%_51%/0.5)] hover:scale-105 transition-all duration-300"
          >
            <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Listen Voice Samples
          </a>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 border-2 border-primary-foreground/20 backdrop-blur-sm text-primary-foreground font-bold px-10 py-5 rounded-xl text-lg hover:bg-primary-foreground/10 hover:border-primary-foreground/40 hover:scale-105 transition-all duration-300"
          >
            <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Send Script on WhatsApp
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-8 text-primary-foreground/60 text-sm">
          <span className="flex items-center gap-2 bg-primary-foreground/5 backdrop-blur-sm rounded-full px-4 py-2 border border-primary-foreground/10">
            <Zap className="w-4 h-4 text-accent" /> Fast Delivery
          </span>
          <span className="flex items-center gap-2 bg-primary-foreground/5 backdrop-blur-sm rounded-full px-4 py-2 border border-primary-foreground/10">
            <CheckCircle className="w-4 h-4 text-accent" /> Clear Voice
          </span>
          <span className="flex items-center gap-2 bg-primary-foreground/5 backdrop-blur-sm rounded-full px-4 py-2 border border-primary-foreground/10">
            <Clock className="w-4 h-4 text-accent" /> Affordable Pricing
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary-foreground/40 animate-bounce">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-8 border-2 border-primary-foreground/30 rounded-full flex justify-center pt-1">
          <div className="w-1 h-2 bg-accent rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
