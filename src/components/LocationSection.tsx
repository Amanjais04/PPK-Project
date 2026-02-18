import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";

const LocationSection = () => {
  return (
    <section id="location" className="section-padding bg-muted/50">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground text-center mb-4">
          Visit Our Shop
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
          Come visit us or reach out via WhatsApp
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="rounded-xl overflow-hidden border border-border h-[300px] md:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.554613039148!2d86.59363849999998!3d26.113453800000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ee43002ed20521%3A0x5ef908bfccb83f13!2sPrachar%20Prasar%20Kendra%20Supaul!5e0!3m2!1sen!2sin!4v1771392986305!5m2!1sen!2sin"
              className="w-full h-[400px]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Prachar Prasar Kendra Location"
            />
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h4 className="font-bold text-foreground">Address</h4>
                <p className="text-muted-foreground">Kirtan Bhawan ,Thana Road ,Ward no-12, Supaul, Bihar 852131, India</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h4 className="font-bold text-foreground">Phone</h4>
                <p className="text-muted-foreground">+91 95255 21211</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h4 className="font-bold text-foreground">Business Hours</h4>
                <p className="text-muted-foreground">Open 24/7 – Contact Us Anytime on WhatsApp</p>
              </div>
            </div>

            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 text-primary-foreground font-bold px-6 py-3 rounded-lg hover:bg-green-700 transition-colors w-full justify-center"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
