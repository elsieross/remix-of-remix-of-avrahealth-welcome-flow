import Header from "@/components/layout/Header";
import HeroSection from "@/components/landing/HeroSection";
import TrustBadges from "@/components/landing/TrustBadges";
import IdentitySelector from "@/components/landing/IdentitySelector";
import LifestyleShowcase from "@/components/landing/LifestyleShowcase";
import WellnessFacts from "@/components/landing/WellnessFacts";
import BrainConnection from "@/components/landing/BrainConnection";
import HowItWorks from "@/components/landing/HowItWorks";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <TrustBadges />
        <IdentitySelector />
        <LifestyleShowcase />
        <WellnessFacts />
        <BrainConnection />
        <HowItWorks />
        
        {/* Trust & Philosophy section */}
        <section className="py-24 bg-avra-slate-light/30">
          <div className="avra-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
                Wellness, not diagnosis.
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                AvraHealth helps you understand and support your circulation through 
                lifestyle insights — not medical labels or symptom checklists. 
                It's about feeling better in your legs, every day.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                {[
                  { label: "Personalized", value: "to your body" },
                  { label: "Built on", value: "lived experience" },
                  { label: "Focused on", value: "daily wellness" },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="text-center"
                  >
                    <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1">
                      {item.label}
                    </p>
                    <p className="font-display text-xl font-medium text-foreground">
                      {item.value}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-border bg-background">
        <div className="avra-container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2026 AvraHealth. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
