import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Tell us about your day",
      description: "A quick, friendly intake helps us understand how your legs spend most of their time — sitting, standing, moving, or all of the above.",
    },
    {
      number: "02",
      title: "Get your circulation profile",
      description: "Based on your lifestyle, we create a personalized snapshot of your leg wellness needs — no medical jargon, just clear insights.",
    },
    {
      number: "03",
      title: "Discover your support",
      description: "From lifestyle tips to personalized compression fit guidance, find the right level of support for legs that feel lighter, every day.",
    },
  ];

  return (
    <section className="py-24 bg-avra-gold-light/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-avra-gold/10 blur-3xl" />
        <div className="absolute bottom-1/4 -left-32 w-64 h-64 rounded-full bg-avra-orange/10 blur-3xl" />
      </div>

      <div className="avra-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-avra-gold uppercase tracking-wider mb-3 block">
            Simple & Personal
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
            How <span className="avra-gradient-text">AvraHealth</span> works
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Get personalized leg wellness insights in under 3 minutes.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="absolute left-8 md:left-12 top-20 bottom-0 w-px bg-gradient-to-b from-avra-gold/40 to-transparent hidden sm:block" />
              )}

              <div className="flex gap-6 md:gap-8 mb-12">
                {/* Number */}
                <div className="shrink-0">
                  <div className="w-16 h-16 md:w-24 md:h-24 rounded-2xl bg-avra-gold-light flex items-center justify-center">
                    <span className="font-display text-2xl md:text-3xl font-bold avra-gradient-text">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="pt-2 md:pt-4">
                  <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-lg">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-8"
        >
          <Button variant="hero" size="xl" asChild>
            <Link to="/onboarding" className="group">
              Start my profile
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
