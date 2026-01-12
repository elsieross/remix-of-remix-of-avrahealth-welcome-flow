import { motion } from "framer-motion";
import { TrendingUp, Heart, Zap, Moon } from "lucide-react";

interface WellnessFact {
  icon: React.ReactNode;
  stat: string;
  title: string;
  description: string;
  source: string;
}

const wellnessFacts: WellnessFact[] = [
  {
    icon: <TrendingUp className="w-6 h-6" />,
    stat: "Up to 30%",
    title: "Improved Blood Flow",
    description: "Graduated compression supports natural venous return, helping blood flow more efficiently back to the heart.",
    source: "Journal of Vascular Surgery",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    stat: "Less Heaviness",
    title: "End-of-Day Comfort",
    description: "Many report reduced feelings of leg heaviness and fatigue after long days of standing or sitting.",
    source: "European Journal of Applied Physiology",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    stat: "Faster Recovery",
    title: "Athletic Performance",
    description: "Athletes experience reduced muscle oscillation and enhanced proprioception during activity.",
    source: "Sports Medicine Journal",
  },
  {
    icon: <Moon className="w-6 h-6" />,
    stat: "Better Rest",
    title: "Travel Wellness",
    description: "Long-haul travelers report more comfortable journeys and less leg swelling upon arrival.",
    source: "Aviation, Space, and Environmental Medicine",
  },
];

const WellnessFacts = () => {
  return (
    <section id="science" className="py-24 bg-avra-sage-light/40 scroll-mt-20">
      <div className="avra-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-avra-sage uppercase tracking-wider mb-3 block">
            The Science of Feeling Good
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Evidence-backed <span className="avra-gradient-text">leg wellness</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Compression support isn't new — it's been studied for decades. Here's what the research shows about everyday wellness benefits.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {wellnessFacts.map((fact, i) => (
            <motion.div
              key={fact.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-card rounded-2xl p-6 border border-avra-sage/10 hover:border-avra-sage/40 hover:shadow-card transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-avra-sage-light flex items-center justify-center text-avra-sage mb-4 group-hover:bg-avra-sage group-hover:text-white transition-colors duration-300">
                {fact.icon}
              </div>

              {/* Stat highlight */}
              <div className="mb-3">
                <span className="font-display text-2xl font-bold text-avra-sage">
                  {fact.stat}
                </span>
              </div>

              {/* Content */}
              <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                {fact.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {fact.description}
              </p>

              {/* Source */}
              <p className="text-xs text-muted-foreground/70 italic">
                Source: {fact.source}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-xs text-muted-foreground mt-12 max-w-2xl mx-auto"
        >
          These wellness insights are based on published research. Individual experiences may vary. 
          AvraHealth focuses on lifestyle wellness, not medical treatment or diagnosis.
        </motion.p>
      </div>
    </section>
  );
};

export default WellnessFacts;
