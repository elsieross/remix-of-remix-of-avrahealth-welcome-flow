import { motion } from "framer-motion";
import { Users, Zap, ShieldCheck } from "lucide-react";

const badges = [
  {
    icon: Users,
    title: "MD-Designed",
    subtitle: "Board certified specialists",
    color: "from-primary/20 to-avra-peach",
  },
  {
    icon: Zap,
    title: "AI-Powered",
    subtitle: "Advanced analysis technology",
    color: "from-avra-gold/20 to-avra-gold-light",
    iconColor: "text-avra-gold",
  },
  {
    icon: ShieldCheck,
    title: "Encrypted & Private",
    subtitle: "Secure data protection",
    color: "from-avra-sage/15 to-avra-sage-light",
    iconColor: "text-avra-sage",
  },
];

const TrustBadges = () => {
  return (
    <section className="py-8 md:py-12 bg-background">
      <div className="avra-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 sm:gap-8 md:gap-12 px-8 py-6 bg-secondary/50 rounded-2xl border border-border/50">
            {badges.map((badge, i) => (
              <motion.div
                key={badge.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${badge.color} flex items-center justify-center flex-shrink-0`}>
                  <badge.icon className={`w-5 h-5 ${badge.iconColor || "text-primary"}`} />
                </div>
                <div className="text-left">
                  <p className="font-display font-semibold text-foreground text-sm md:text-base">
                    {badge.title}
                  </p>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    {badge.subtitle}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustBadges;
