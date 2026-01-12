import { motion } from "framer-motion";
import lifestyleAthlete from "@/assets/lifestyle-athlete.png";
import lifestyleNurse from "@/assets/lifestyle-nurse.png";
import lifestylePregnancy from "@/assets/lifestyle-pregnancy.png";
import lifestyleRetail from "@/assets/lifestyle-retail.png";
import lifestyleBarista from "@/assets/lifestyle-barista.png";
import lifestyleTravel from "@/assets/lifestyle-travel.png";

interface LifestyleCard {
  id: string;
  image: string;
  title: string;
  subtitle: string;
}

const lifestyleCards: LifestyleCard[] = [
  {
    id: "athlete",
    image: lifestyleAthlete,
    title: "Athletic Recovery",
    subtitle: "Peak performance, faster bounce-back",
  },
  {
    id: "healthcare",
    image: lifestyleNurse,
    title: "Healthcare",
    subtitle: "12-hour shifts, lighter legs",
  },
  {
    id: "travel",
    image: lifestyleTravel,
    title: "Frequent Travel",
    subtitle: "Stay fresh across time zones",
  },
  {
    id: "pregnancy",
    image: lifestylePregnancy,
    title: "Expecting Parents",
    subtitle: "Comfort through every step",
  },
  {
    id: "retail",
    image: lifestyleRetail,
    title: "Retail & Warehouse",
    subtitle: "Move freely, feel better",
  },
  {
    id: "hospitality",
    image: lifestyleBarista,
    title: "Hospitality",
    subtitle: "From open to close",
  },
];

const LifestyleShowcase = () => {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="avra-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider mb-3 block">
            For Every Lifestyle
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Real people. <span className="avra-gradient-text">Real support.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Compression wellness isn't just for athletes or medical settings — it's for anyone who wants their legs to feel better, every day.
          </p>
        </motion.div>

        {/* Clean 3x2 masonry-style grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {lifestyleCards.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`group relative overflow-hidden rounded-2xl md:rounded-3xl ${
                i % 3 === 0 ? "row-span-1 lg:row-span-2" : ""
              }`}
            >
              <div className={`relative ${i % 3 === 0 ? "aspect-[3/4] lg:aspect-[3/5]" : "aspect-[4/3] lg:aspect-square"}`}>
                <img
                  src={card.image}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                  <span className="text-[10px] md:text-xs font-medium text-white/70 uppercase tracking-wider mb-1 block">
                    {card.subtitle}
                  </span>
                  <h3 className="font-display text-sm md:text-lg lg:text-xl font-semibold text-white">
                    {card.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LifestyleShowcase;
