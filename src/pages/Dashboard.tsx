import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Activity, Layers, Zap, ChevronRight, Sparkles, ArrowUp, Clock, Footprints, Heart, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import LoginModal from "@/components/auth/LoginModal";
import avraLogo from "@/assets/avra-logo.png";

interface ProfileData {
  dailyLoad: number;
  sensations: string[];
  recovery: string;
  preferences: string[];
}

// Animated Leg Flow Visualization Component
const LegFlowVisualization = ({ profile }: { profile: ProfileData | null }) => {
  const flowIntensity = profile ? Math.max(20, 100 - profile.dailyLoad) : 50;
  const hasSensations = profile?.sensations && profile.sensations.length > 0 && !profile.sensations.includes("none");
  
  const getFlowColor = () => {
    if (!profile) return "from-primary/40 to-avra-orange/30";
    if (profile.dailyLoad < 33) return "from-avra-orange/50 to-primary/30"; // Sitting - needs more support
    if (profile.dailyLoad > 66) return "from-primary/50 to-avra-orange/40"; // Active - good flow
    return "from-primary/40 to-avra-orange/35"; // Mixed
  };

  const getActivityIcon = () => {
    if (!profile) return <Activity className="w-6 h-6" />;
    if (profile.dailyLoad < 33) return <Clock className="w-6 h-6" />; // Sitting
    if (profile.dailyLoad > 66) return <Footprints className="w-6 h-6" />; // Active
    return <Activity className="w-6 h-6" />; // Mixed
  };

  const getLoadLabel = () => {
    if (!profile) return { label: "Mixed Activity", sublabel: "Balanced day" };
    if (profile.dailyLoad < 33) return { label: "Desk-Focused", sublabel: "Extended sitting periods" };
    if (profile.dailyLoad > 66) return { label: "Active Lifestyle", sublabel: "Frequent movement" };
    return { label: "Mixed Activity", sublabel: "Balanced sitting & standing" };
  };

  const getRecoveryLabel = () => {
    if (!profile?.recovery) return "Throughout the day";
    const labels: Record<string, string> = {
      "end-of-day": "Evening recovery focus",
      "after-workouts": "Post-exercise recovery",
      "during-travel": "Travel support needed",
      "throughout-day": "All-day wellness"
    };
    return labels[profile.recovery] || "Throughout the day";
  };

  const loadInfo = getLoadLabel();

  return (
    <div className="relative h-64 bg-gradient-to-br from-secondary via-avra-peach/20 to-secondary rounded-2xl overflow-hidden border border-avra-orange/10">
      {/* Background flow animation */}
      <div className="absolute inset-0">
        {/* Flowing particles representing circulation */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-primary/40"
            style={{ left: `${15 + (i % 4) * 20}%` }}
            animate={{
              y: ["100%", "-20%"],
              opacity: [0, 0.8, 0.8, 0],
              scale: [0.5, 1, 1, 0.5],
            }}
            transition={{
              duration: 3 + (i * 0.3),
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {/* Central leg silhouette with flow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          {/* Pulsing glow */}
          <motion.div
            className={`absolute inset-0 rounded-full bg-gradient-to-t ${getFlowColor()} blur-2xl`}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />
          
          {/* Leg icon container */}
          <motion.div
            className="relative w-24 h-32 flex flex-col items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Simplified leg visualization */}
            <svg viewBox="0 0 60 100" className="w-16 h-24">
              {/* Left leg */}
              <motion.path
                d="M22 10 L22 45 Q22 55 18 70 L15 95"
                fill="none"
                stroke="url(#legGradient)"
                strokeWidth="8"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, delay: 0.5 }}
              />
              {/* Right leg */}
              <motion.path
                d="M38 10 L38 45 Q38 55 42 70 L45 95"
                fill="none"
                stroke="url(#legGradient)"
                strokeWidth="8"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, delay: 0.7 }}
              />
              {/* Flow arrows going up */}
              {[0, 1, 2].map((i) => (
                <motion.g key={i}>
                  <motion.path
                    d={`M${22 + i * 8} ${80 - i * 20} L${22 + i * 8} ${65 - i * 20}`}
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="2"
                    strokeLinecap="round"
                    opacity={0.6}
                    animate={{ opacity: [0.3, 0.8, 0.3] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
                  />
                </motion.g>
              ))}
              <defs>
                <linearGradient id="legGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="hsl(var(--avra-orange))" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.4" />
                </linearGradient>
              </defs>
            </svg>

            {/* Upward flow indicator */}
            <motion.div
              className="absolute -top-2 left-1/2 -translate-x-1/2"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowUp className="w-5 h-5 text-primary" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Info overlay - top left */}
      <motion.div
        className="absolute top-4 left-4"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8 }}
      >
        <div className="flex items-center gap-2 bg-background/80 backdrop-blur-sm rounded-lg px-3 py-2">
          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
            {getActivityIcon()}
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground">{loadInfo.label}</p>
            <p className="text-xs text-muted-foreground">{loadInfo.sublabel}</p>
          </div>
        </div>
      </motion.div>

      {/* Recovery indicator - bottom right */}
      <motion.div
        className="absolute bottom-4 right-4"
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
      >
        <div className="flex items-center gap-2 bg-background/80 backdrop-blur-sm rounded-lg px-3 py-2">
          <Heart className="w-4 h-4 text-avra-orange" />
          <p className="text-xs font-medium text-foreground">{getRecoveryLabel()}</p>
        </div>
      </motion.div>

      {/* Sensation indicators - bottom left */}
      {hasSensations && (
        <motion.div
          className="absolute bottom-4 left-4 flex gap-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          {profile?.sensations.slice(0, 3).map((s, i) => (
            <motion.div
              key={s}
              className="w-2 h-2 rounded-full bg-avra-orange"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
            />
          ))}
        </motion.div>
      )}
    </div>
  );
};

// Personalized Insights Component
const PersonalizedInsights = ({ profile }: { profile: ProfileData | null }) => {
  const getInsights = () => {
    if (!profile) {
      return {
        headline: "Your personalized circulation profile is ready.",
        details: [
          "Complete your profile to unlock tailored recommendations.",
        ],
        tip: null,
      };
    }

    const insights: string[] = [];
    let headline = "";
    let tip = "";

    // Daily load based insights
    if (profile.dailyLoad < 33) {
      headline = "Extended sitting reduces natural leg circulation by up to 50%.";
      insights.push("Your desk-focused lifestyle means your calf muscles — your body's 'second heart' — aren't activating as often as they could be.");
      insights.push("Even brief standing breaks every 30-45 minutes can significantly improve blood flow back to your heart and brain.");
      tip = "Try ankle circles under your desk — they activate your calf pump without standing.";
    } else if (profile.dailyLoad > 66) {
      headline = "Active legs need intentional recovery support.";
      insights.push("While movement is excellent for circulation, high-activity days can leave your veins working overtime.");
      insights.push("Post-activity compression and elevation help your venous system recover faster.");
      tip = "Elevate your legs for 10-15 minutes after intense activity to support natural drainage.";
    } else {
      headline = "Your balanced activity pattern offers flexibility for optimization.";
      insights.push("A mix of sitting and standing gives your circulation natural variety throughout the day.");
      insights.push("The key is supporting transitions — your legs adapt differently to changing positions.");
      tip = "Focus on micro-movements during long sitting periods and recovery during active stretches.";
    }

    // Sensation-based insights
    if (profile.sensations && !profile.sensations.includes("none")) {
      if (profile.sensations.includes("heaviness")) {
        insights.push("That heavy-leg feeling often signals pooled blood in your lower limbs — gentle compression can help counteract gravity's pull.");
      }
      if (profile.sensations.includes("tightness")) {
        insights.push("Leg tightness may indicate your muscles are working harder to support circulation. Regular stretching and graduated compression can help.");
      }
      if (profile.sensations.includes("restlessness")) {
        insights.push("Restless legs are often your body's signal for movement. Evening stretches and compression can calm this sensation.");
      }
      if (profile.sensations.includes("swelling")) {
        insights.push("Mild swelling after long days is common and usually responds well to elevation and gentle compression support.");
      }
    }

    // Recovery-based insights
    if (profile.recovery === "end-of-day") {
      insights.push("Evening is prime recovery time — your legs have worked all day and benefit most from support before sleep.");
    } else if (profile.recovery === "after-workouts") {
      insights.push("Post-workout is when your vascular system is most receptive to recovery support.");
    } else if (profile.recovery === "during-travel") {
      insights.push("Travel presents unique circulation challenges — cabin pressure, limited movement, and position changes all affect leg wellness.");
    }

    return { headline, details: insights.slice(0, 3), tip };
  };

  const { headline, details, tip } = getInsights();

  return (
    <div className="space-y-4">
      <motion.p
        className="text-lg md:text-xl font-medium text-foreground leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {headline}
      </motion.p>

      <div className="space-y-3">
        {details.map((detail, i) => (
          <motion.div
            key={i}
            className="flex items-start gap-3"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 + i * 0.15 }}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
            <p className="text-sm text-muted-foreground leading-relaxed">{detail}</p>
          </motion.div>
        ))}
      </div>

      {tip && (
        <motion.div
          className="mt-4 p-3 bg-avra-peach/30 rounded-xl border border-avra-orange/20"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <div className="flex items-start gap-2">
            <TrendingUp className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
            <p className="text-sm text-foreground">
              <span className="font-medium">Quick tip:</span> {tip}
            </p>
          </div>
        </motion.div>
      )}

      {/* Sensation tags */}
      {profile?.sensations && profile.sensations.length > 0 && !profile.sensations.includes("none") && (
        <motion.div
          className="flex flex-wrap gap-2 pt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <span className="text-xs text-muted-foreground mr-1">Your focus areas:</span>
          {profile.sensations.map((s) => (
            <span
              key={s}
              className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-full capitalize"
            >
              {s.replace("-", " ")}
            </span>
          ))}
        </motion.div>
      )}
    </div>
  );
};

const Dashboard = () => {
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [showLoginModal, setShowLoginModal] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("avra_profile");
    if (stored) {
      setProfile(JSON.parse(stored));
    }
  }, []);

  const handleFeatureClick = () => {
    setShowLoginModal(true);
  };

  const features = [
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Leg Flow Coach",
      description: "Personalized micro-routines for leg wellness throughout your day.",
      cta: "Start leg routine",
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Personalized Compression Fit",
      description: "Guidance based on your legs — not generic sizing charts.",
      cta: "Set up now",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Recovery & Activity Support",
      description: "Support your athletic recovery with personalized compression and wellness suggestions.",
      cta: "Learn more",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <LoginModal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)} />
      <header className="border-b border-border bg-card/50 backdrop-blur-lg sticky top-0 z-50">
        <div className="avra-container flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <img src={avraLogo} alt="AvraHealth" className="h-9 w-auto" />
            <span className="font-display font-semibold text-lg avra-gradient-text">
              AvraHealth
            </span>
          </Link>
          <nav className="flex items-center gap-4">
            <Button variant="ghost" size="sm">Settings</Button>
          </nav>
        </div>
      </header>

      <main className="avra-container py-8 md:py-12">
        {/* Welcome section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 text-primary mb-2">
            <Sparkles className="w-5 h-5" />
            <span className="text-sm font-medium">Your profile is ready</span>
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-semibold text-foreground">
            Your Circulation Profile
          </h1>
        </motion.div>

        {/* Profile snapshot */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-card rounded-3xl border border-border shadow-card p-6 md:p-8 mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Leg flow visualization */}
            <div className="lg:w-[45%]">
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
                Leg Flow Snapshot
              </h3>
              <LegFlowVisualization profile={profile} />
            </div>

            {/* Insights */}
            <div className="lg:w-[55%]">
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
                Personalized Insight
              </h3>
              <PersonalizedInsights profile={profile} />
            </div>
          </div>
        </motion.div>

        {/* Feature cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="font-display text-xl font-semibold text-foreground mb-6">
            Explore your tools
          </h2>
          
          <div className="grid md:grid-cols-3 gap-4">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                onClick={handleFeatureClick}
                className="group bg-card rounded-2xl border border-border p-6 hover:shadow-card hover:border-primary/30 transition-all duration-300 cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {feature.description}
                </p>
                <span className="inline-flex items-center text-sm font-medium text-primary group-hover:gap-2 transition-all">
                  {feature.cta}
                  <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-2 group-hover:ml-0 transition-all" />
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Smart nudge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 p-4 bg-avra-peach/30 rounded-xl border border-avra-orange/20"
        >
          <p className="text-sm text-muted-foreground text-center">
            💡 <span className="font-medium text-foreground">Tip:</span> Connect Apple Watch to personalize your recovery insights based on real activity data.
          </p>
        </motion.div>
      </main>
    </div>
  );
};

export default Dashboard;
