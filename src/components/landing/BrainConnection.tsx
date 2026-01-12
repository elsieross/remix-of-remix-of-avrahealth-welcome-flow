import { motion } from "framer-motion";
import { Heart, Zap, TrendingUp, Activity } from "lucide-react";

const researchFindings = [
  {
    icon: Activity,
    stat: "10 Years",
    headline: "Leg strength predicts cognitive aging",
    description: "A landmark twin study found that leg power was the strongest predictor of cognitive changes over a decade — even more than other lifestyle factors.",
    source: "Gerontology Journal, 2015",
  },
  {
    icon: Heart,
    stat: "15%",
    headline: "Improved cerebral blood flow",
    description: "Aerobic leg exercise significantly increases blood flow to the brain, enhancing executive function and mental clarity in older adults.",
    source: "Frontiers in Aging Neuroscience, 2019",
  },
  {
    icon: Zap,
    stat: "Second Heart",
    headline: "Your calves pump blood upward",
    description: "Calf muscles act as a 'second heart,' contracting to push blood back toward the brain. Strong, active legs support whole-body circulation.",
    source: "Vascular Health Research",
  },
  {
    icon: TrendingUp,
    stat: "40%",
    headline: "Reduced cognitive decline risk",
    description: "Regular movement and healthy leg circulation are associated with significantly lower rates of age-related cognitive decline.",
    source: "The Lancet, 2025",
  },
];

// Animated Brain SVG Component
const AnimatedBrain = () => {
  return (
    <div className="relative w-56 h-56 md:w-72 md:h-72">
      {/* Glow effects */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-avra-orange/20 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Pulsing rings */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute inset-0 rounded-full border border-primary/20"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{
            scale: [0.8, 1.4],
            opacity: [0.5, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            delay: i * 0.8,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Realistic Brain SVG */}
      <motion.svg
        viewBox="0 0 120 100"
        className="relative w-full h-full drop-shadow-lg"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <defs>
          <linearGradient id="brainGradientLeft" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="100%" stopColor="hsl(var(--avra-orange))" />
          </linearGradient>
          <linearGradient id="brainGradientRight" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--avra-orange))" />
            <stop offset="100%" stopColor="hsl(var(--primary))" />
          </linearGradient>
          <linearGradient id="brainFill" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.15" />
            <stop offset="50%" stopColor="hsl(var(--avra-orange))" stopOpacity="0.1" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.15" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Left Hemisphere - Filled shape */}
        <motion.path
          d="M58 15 
             C45 12 32 18 25 28
             C18 38 15 52 18 65
             C20 72 24 78 30 82
             C38 88 48 90 58 88
             C58 88 58 15 58 15"
          fill="url(#brainFill)"
          stroke="url(#brainGradientLeft)"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />

        {/* Right Hemisphere - Filled shape */}
        <motion.path
          d="M62 15 
             C75 12 88 18 95 28
             C102 38 105 52 102 65
             C100 72 96 78 90 82
             C82 88 72 90 62 88
             C62 88 62 15 62 15"
          fill="url(#brainFill)"
          stroke="url(#brainGradientRight)"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut", delay: 0.2 }}
        />

        {/* Frontal lobe detail - left */}
        <motion.path
          d="M28 35 Q35 30 45 32 Q52 34 55 40"
          fill="none"
          stroke="url(#brainGradientLeft)"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, delay: 1 }}
        />

        {/* Frontal lobe detail - right */}
        <motion.path
          d="M92 35 Q85 30 75 32 Q68 34 65 40"
          fill="none"
          stroke="url(#brainGradientRight)"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, delay: 1.1 }}
        />

        {/* Gyri (brain folds) - Left hemisphere */}
        <motion.path
          d="M25 45 Q32 42 40 45 Q48 48 52 52"
          fill="none"
          stroke="url(#brainGradientLeft)"
          strokeWidth="1.2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
        />
        <motion.path
          d="M22 55 Q30 52 38 54 Q46 56 54 58"
          fill="none"
          stroke="url(#brainGradientLeft)"
          strokeWidth="1.2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
        />
        <motion.path
          d="M24 65 Q32 62 42 65 Q50 68 55 72"
          fill="none"
          stroke="url(#brainGradientLeft)"
          strokeWidth="1.2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        />
        <motion.path
          d="M32 75 Q40 73 48 76 Q54 79 56 82"
          fill="none"
          stroke="url(#brainGradientLeft)"
          strokeWidth="1.2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
        />

        {/* Gyri (brain folds) - Right hemisphere */}
        <motion.path
          d="M95 45 Q88 42 80 45 Q72 48 68 52"
          fill="none"
          stroke="url(#brainGradientRight)"
          strokeWidth="1.2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 1.35 }}
        />
        <motion.path
          d="M98 55 Q90 52 82 54 Q74 56 66 58"
          fill="none"
          stroke="url(#brainGradientRight)"
          strokeWidth="1.2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 1.45 }}
        />
        <motion.path
          d="M96 65 Q88 62 78 65 Q70 68 65 72"
          fill="none"
          stroke="url(#brainGradientRight)"
          strokeWidth="1.2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 1.55 }}
        />
        <motion.path
          d="M88 75 Q80 73 72 76 Q66 79 64 82"
          fill="none"
          stroke="url(#brainGradientRight)"
          strokeWidth="1.2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 1.65 }}
        />

        {/* Temporal lobe curve - left */}
        <motion.path
          d="M20 70 Q18 60 22 50"
          fill="none"
          stroke="url(#brainGradientLeft)"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 1.7 }}
        />

        {/* Temporal lobe curve - right */}
        <motion.path
          d="M100 70 Q102 60 98 50"
          fill="none"
          stroke="url(#brainGradientRight)"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 1.75 }}
        />

        {/* Cerebellum hint */}
        <motion.path
          d="M45 88 Q50 92 55 88 M65 88 Q70 92 75 88"
          fill="none"
          stroke="url(#brainGradientLeft)"
          strokeWidth="1"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.6, delay: 1.8 }}
        />

        {/* Neural activity - synaptic firing */}
        {[
          { cx: 35, cy: 38, delay: 0 },
          { cx: 85, cy: 40, delay: 0.4 },
          { cx: 42, cy: 52, delay: 0.8 },
          { cx: 78, cy: 54, delay: 1.2 },
          { cx: 38, cy: 68, delay: 0.6 },
          { cx: 82, cy: 66, delay: 1.0 },
          { cx: 50, cy: 45, delay: 0.3 },
          { cx: 70, cy: 48, delay: 0.7 },
          { cx: 60, cy: 60, delay: 1.1 },
          { cx: 45, cy: 78, delay: 0.9 },
          { cx: 75, cy: 76, delay: 1.3 },
        ].map((dot, i) => (
          <motion.circle
            key={i}
            cx={dot.cx}
            cy={dot.cy}
            r="2"
            fill="hsl(var(--primary))"
            filter="url(#glow)"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 1, 0],
              scale: [0.3, 1.2, 1, 0.3],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              delay: dot.delay,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Neural pathways - connections firing */}
        <motion.path
          d="M35 38 Q45 42 50 45 Q55 48 60 60"
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="0.8"
          strokeLinecap="round"
          opacity={0.5}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 1, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.path
          d="M85 40 Q75 44 70 48 Q65 52 60 60"
          fill="none"
          stroke="hsl(var(--avra-orange))"
          strokeWidth="0.8"
          strokeLinecap="round"
          opacity={0.5}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 1, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: 0.5,
            ease: "easeInOut",
          }}
        />
        <motion.path
          d="M38 68 Q48 72 55 75 Q62 72 75 76"
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="0.8"
          strokeLinecap="round"
          opacity={0.4}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 1, 0] }}
          transition={{
            duration: 2.8,
            repeat: Infinity,
            delay: 1,
            ease: "easeInOut",
          }}
        />
      </motion.svg>
    </div>
  );
};

const BrainConnection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-avra-teal-light/30 to-avra-slate-light/20 overflow-hidden">
      <div className="avra-container">
        {/* Section Header with Brain Animation */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 mb-20">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left"
          >
            <span className="text-sm font-medium text-primary uppercase tracking-wider mb-3 block">
              The Science of Connection
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
              Your legs power your <span className="avra-gradient-text">brain.</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl">
              Emerging research reveals a profound connection between leg circulation, 
              cognitive function, and healthy aging. What happens in your legs doesn't stay there.
            </p>
          </motion.div>

          {/* Brain Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <AnimatedBrain />
          </motion.div>
        </div>

        {/* Visual Connection Diagram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-4xl mx-auto mb-20"
        >
          <div className="relative bg-gradient-to-br from-avra-peach/30 to-secondary rounded-3xl p-8 md:p-12 border border-avra-orange/10">
            {/* Flow animation */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl">
              <motion.div 
                className="absolute top-1/2 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-3xl"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div 
                className="absolute top-1/4 right-1/4 w-24 h-24 bg-avra-orange/10 rounded-full blur-2xl"
                animate={{ opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
              />
            </div>
            
            <div className="relative grid md:grid-cols-3 gap-8 items-center text-center">
              {/* Legs */}
              <motion.div 
                className="flex flex-col items-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-avra-orange flex items-center justify-center mb-4 shadow-lg shadow-primary/20">
                  <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 4v4m0 0l-2 12m2-12l2 12M8 8h8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-1">Strong Legs</h3>
                <p className="text-sm text-muted-foreground">Active muscles, better flow</p>
              </motion.div>

              {/* Flow Arrow with animated blood cells */}
              <div className="hidden md:flex flex-col items-center justify-center relative">
                <div className="flex items-center gap-2 relative">
                  <div className="h-px w-12 bg-gradient-to-r from-primary to-avra-orange relative overflow-visible">
                    {/* Animated blood cells */}
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary"
                        animate={{ x: [0, 48, 96] }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: i * 0.5,
                          ease: "linear",
                        }}
                      />
                    ))}
                  </div>
                  <motion.div 
                    className="w-10 h-10 rounded-full bg-avra-peach flex items-center justify-center"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <Heart className="w-5 h-5 text-primary" />
                  </motion.div>
                  <div className="h-px w-12 bg-gradient-to-r from-avra-orange to-primary" />
                </div>
                <p className="text-xs text-muted-foreground mt-2">Circulation</p>
              </div>

              {/* Brain with mini animation */}
              <motion.div 
                className="flex flex-col items-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="relative">
                  <motion.div
                    className="absolute inset-0 rounded-full bg-avra-orange/30 blur-xl"
                    animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-avra-orange to-primary flex items-center justify-center mb-4 shadow-lg shadow-avra-orange/20">
                    <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 4C8 4 5 7 5 11c0 3 1.5 5.5 4 7v2h6v-2c2.5-1.5 4-4 4-7 0-4-3-7-7-7z" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M9 22h6M12 4v2M8 9h2M14 9h2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-1">Sharp Mind</h3>
                <p className="text-sm text-muted-foreground">Oxygenated, thriving brain</p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Research Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {researchFindings.map((finding, i) => (
            <motion.div
              key={finding.headline}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-card rounded-2xl p-6 md:p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-avra-peach to-secondary flex items-center justify-center group-hover:from-primary/20 group-hover:to-avra-orange/20 transition-colors duration-300">
                  <finding.icon className="w-6 h-6 text-primary" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="font-display text-2xl md:text-3xl font-bold avra-gradient-text">
                      {finding.stat}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {finding.headline}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    {finding.description}
                  </p>
                  <p className="text-xs text-muted-foreground/70 italic">
                    {finding.source}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground text-base max-w-2xl mx-auto">
            Supporting your leg circulation isn't just about comfort — it's an investment 
            in your long-term cognitive vitality and overall wellbeing.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BrainConnection;
