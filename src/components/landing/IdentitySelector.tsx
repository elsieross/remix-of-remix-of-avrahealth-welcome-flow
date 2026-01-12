import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Monitor, Footprints, Dumbbell, Plane, Sparkles } from "lucide-react";

interface IdentityTile {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const identityTiles: IdentityTile[] = [
  {
    id: "desk",
    icon: <Monitor className="w-8 h-8" />,
    title: "Desk & long sitting",
    description: "My legs feel heavy by the end of the day",
  },
  {
    id: "standing",
    icon: <Footprints className="w-8 h-8" />,
    title: "On your feet all day",
    description: "I spend most of my time standing or walking",
  },
  {
    id: "athletic",
    icon: <Dumbbell className="w-8 h-8" />,
    title: "Active / athletic recovery",
    description: "I care about recovery and performance",
  },
  {
    id: "travel",
    icon: <Plane className="w-8 h-8" />,
    title: "Travel / frequent flying",
    description: "Long trips leave my legs feeling off",
  },
  {
    id: "curious",
    icon: <Sparkles className="w-8 h-8" />,
    title: "Just curious",
    description: "I want to be proactive about circulation",
  },
];

const IdentitySelector = () => {
  const navigate = useNavigate();

  const handleSelect = (id: string) => {
    // Store selection and navigate to onboarding
    localStorage.setItem("avra_identity", id);
    navigate("/onboarding");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const tileVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    },
  };

  return (
    <section className="py-24 bg-avra-peach-light/50">
      <div className="avra-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Where are you starting from?
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Select what resonates most — no wrong answers.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {identityTiles.map((tile, index) => (
            <motion.button
              key={tile.id}
              variants={tileVariants}
              onClick={() => handleSelect(tile.id)}
              className={`
                group relative bg-card rounded-2xl p-6 text-left
                border border-border hover:border-primary/40
                shadow-soft hover:shadow-elevated
                transition-all duration-300 ease-out
                hover:-translate-y-1
                ${index === 4 ? "sm:col-span-2 lg:col-span-1 lg:col-start-2" : ""}
              `}
            >
              <div className="flex flex-col gap-4">
                <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  {tile.icon}
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg text-foreground mb-1">
                    {tile.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {tile.description}
                  </p>
                </div>
              </div>
              
              {/* Hover arrow indicator */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileHover={{ opacity: 1, x: 0 }}
                className="absolute top-6 right-6 text-primary"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.div>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default IdentitySelector;
