import { Megaphone, GraduationCap, Store, Church, CalendarDays, FileText } from "lucide-react";

const services = [
  { icon: Megaphone, title: "Political Digital Prachar", desc: "Election campaign & rally announcements" },
  { icon: GraduationCap, title: "School & Coaching Promotion", desc: "Admission open & batch announcements" },
  { icon: Store, title: "Shop Opening & Offers", desc: "Grand opening & discount prachar" },
  { icon: Church, title: "Religious Announcements", desc: "Temple & religious event prachar" },
  { icon: CalendarDays, title: "Event & Program Promotion", desc: "Functions, mela & program prachar" },
  { icon: FileText, title: "Custom Script Recording", desc: "Your own script, our professional voice" },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-muted/50">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground text-center mb-4">
          Our Services
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
          Professional voice recording for every type of promotion
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-card rounded-lg p-5 md:p-6 text-center border border-border hover:border-accent/50 hover:shadow-lg transition-all group"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                <s.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-bold text-card-foreground text-sm md:text-base mb-1">{s.title}</h3>
              <p className="text-xs md:text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>

        <p className="text-center mt-10 text-foreground font-semibold text-lg">
          🎧 Audio Delivered via WhatsApp Within Few Hours.
        </p>
      </div>
    </section>
  );
};

export default ServicesSection;
