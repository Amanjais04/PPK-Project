import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "Best Digital Prachar Service in Supaul. Very professional voice quality and fast delivery!",
    name: "Ravi Kumar",
    role: "Political Campaign Manager",
  },
  {
    text: "Got our school admission prachar done in just 2 hours. Excellent work and affordable pricing.",
    name: "Priya Singh",
    role: "School Administrator",
  },
  {
    text: "We use their service for all our shop promotions. The quality is always top-notch!",
    name: "Amit Sharma",
    role: "Shop Owner",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground text-center mb-4">
          What Clients Say
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
          Trusted by hundreds of clients across Supaul
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-card border border-border rounded-xl p-6 relative">
              <Quote className="w-8 h-8 text-accent/30 absolute top-4 right-4" />
              <p className="text-card-foreground mb-4 italic">"{t.text}"</p>
              <div>
                <p className="font-bold text-card-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
