import { Mic, Phone, MapPin, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Mic className="w-6 h-6 text-accent" />
              <span className="text-xl font-extrabold">Prachar Prasar Kendra</span>
            </div>
            <p className="text-primary-foreground/70 text-sm">
              Professional audio recording service for all your promotion needs in Supaul, Bihar.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-accent">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="#voice-samples" className="hover:text-accent transition-colors">Voice Samples</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Services</a></li>
              <li><a href="#pricing" className="hover:text-accent transition-colors">Pricing</a></li>
              <li><a href="#location" className="hover:text-accent transition-colors">Location</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-accent">Contact</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent" /> +91 95255 21211
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-accent" /> WhatsApp: +91 95255 21211
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-accent mt-0.5" /> Kirtan Bhawan ,Thana Road ,Ward no-12, Supaul, Bihar 852131


              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 text-center text-sm text-primary-foreground/50">
          © {new Date().getFullYear()} Prachar Prasar Kendra Supaul. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
