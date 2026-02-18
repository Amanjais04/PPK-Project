import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How long does delivery take?",
    a: "Usually within a few hours. We also offer urgent delivery for an additional charge.",
  },
  {
    q: "Can I send my own script?",
    a: "Yes! Simply send your script via WhatsApp and we'll record it professionally.",
  },
  {
    q: "Which languages are available?",
    a: "We currently offer recordings in Hindi and Maithili.",
  },
  {
    q: "Is background music available?",
    a: "Yes, background music is included in our all plan.",
  },
];

const FAQSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground text-center mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-muted-foreground text-center mb-12">
          Got questions? We've got answers.
        </p>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-card border border-border rounded-lg px-5"
            >
              <AccordionTrigger className="text-left font-bold text-card-foreground hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
