import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Basic Plan",
    price: "₹299",
    features: ["Up to 60 seconds", "Male voice", "WhatsApp delivery"],
    highlighted: false,
  },
  {
    name: "Premium Plan",
    price: "₹1499",
    features: ["Up to 20 minute ", "Male or Female voice", "Custom song T&C Applied", "WhatsApp delivery"],
    highlighted: true,
  },
  {
    name: "Standard Plan",
    price: "₹499",
    features: ["Up to 5 minute ", "Male or Female voice", "WhatsApp delivery",],
    highlighted: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="section-padding bg-background">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground text-center mb-4">
          Simple Pricing
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
          Transparent pricing with no hidden charges
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`rounded-xl p-6 md:p-8 border-2 transition-all relative ${plan.highlighted
                ? "border-accent bg-primary text-primary-foreground shadow-xl scale-105"
                : "border-border bg-card text-card-foreground hover:border-accent/40"
                }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-bold px-4 py-1 rounded-full flex items-center gap-1">
                  <Star className="w-3 h-3" /> Most Popular
                </div>
              )}
              <h3 className="text-lg font-bold mb-2">{plan.name}</h3>
              <div className="text-4xl font-extrabold mb-6">{plan.price}</div>
              <ul className="space-y-3 mb-6">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm">
                    <Check className={`w-4 h-4 ${plan.highlighted ? "text-accent" : "text-accent"}`} />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/919525521211?text=Hi%2C%20I%20am%20interested%20in%20the%20"
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center font-bold py-3 rounded-lg transition-all ${plan.highlighted
                  ? "bg-accent text-accent-foreground hover:brightness-110"
                  : "bg-primary text-primary-foreground hover:opacity-90"
                  }`}
              >
                Order Now
              </a>
            </div>
          ))}
        </div>

        <p className="text-center mt-8 text-sm text-muted-foreground">
          ⚡ Urgent Delivery Available (Extra Charges Apply)
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
