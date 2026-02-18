import { MessageCircle } from "lucide-react";

const CTASection = () => {
  return (
    <section className="bg-accent py-16 md:py-20 px-4">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-accent-foreground mb-4">
          Ready to Promote Your Business?
        </h2>
        <p className="text-accent-foreground/80 mb-8 text-lg max-w-xl mx-auto">
          Send us your script and get a professional voice recording delivered on WhatsApp within hours.
        </p>
        <a
          href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20send%20my%20script%20for%20recording."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-accent-foreground text-accent font-extrabold px-10 py-4 rounded-xl text-lg hover:opacity-90 transition-all shadow-lg"
        >
          <MessageCircle className="w-6 h-6" />
          Send Your Script Now
        </a>
      </div>
    </section>
  );
};

export default CTASection;
