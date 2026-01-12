import { motion } from "framer-motion";
import { Lightbulb, Watch, Layers } from "lucide-react";
import { Check } from "lucide-react";

interface PreferenceStepProps {
  value: string[];
  onChange: (value: string[]) => void;
}

const preferenceOptions = [
  { 
    id: "insights", 
    icon: <Lightbulb className="w-6 h-6" />, 
    label: "Lifestyle insights only",
    description: "Tips and guidance for daily habits" 
  },
  { 
    id: "wearable", 
    icon: <Watch className="w-6 h-6" />, 
    label: "Wearable-friendly tools",
    description: "Connect with your devices" 
  },
  { 
    id: "compression", 
    icon: <Layers className="w-6 h-6" />, 
    label: "Compression guidance",
    description: "Personalized fit recommendations" 
  },
];

const PreferenceStep = ({ value, onChange }: PreferenceStepProps) => {
  const togglePreference = (id: string) => {
    if (value.includes(id)) {
      onChange(value.filter(v => v !== id));
    } else {
      onChange([...value, id]);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="w-full max-w-lg mx-auto"
    >
      <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground text-center mb-3">
        What kind of support are you open to?
      </h2>
      <p className="text-muted-foreground text-center mb-10">
        Select all that interest you.
      </p>

      <div className="space-y-4">
        {preferenceOptions.map((option, i) => {
          const isSelected = value.includes(option.id);
          return (
            <motion.button
              key={option.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.05 }}
              onClick={() => togglePreference(option.id)}
              className={`
                w-full flex items-center gap-4 p-5 rounded-2xl text-left
                border transition-all duration-200
                ${isSelected 
                  ? "border-primary bg-primary/5 shadow-card" 
                  : "border-border bg-card hover:border-primary/30 hover:shadow-soft"
                }
              `}
            >
              <div className={`
                w-14 h-14 rounded-xl flex items-center justify-center shrink-0
                transition-colors duration-200
                ${isSelected 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-secondary text-primary"
                }
              `}>
                {option.icon}
              </div>
              <div className="flex-1">
                <span className="font-semibold text-foreground block mb-0.5">
                  {option.label}
                </span>
                <span className="text-sm text-muted-foreground">
                  {option.description}
                </span>
              </div>
              <div className={`
                w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0
                transition-all duration-200
                ${isSelected 
                  ? "border-primary bg-primary" 
                  : "border-muted-foreground/30"
                }
              `}>
                {isSelected && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  >
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </motion.div>
                )}
              </div>
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
};

export default PreferenceStep;
