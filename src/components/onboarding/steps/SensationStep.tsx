import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface SensationStepProps {
  value: string[];
  onChange: (value: string[]) => void;
}

const sensations = [
  { id: "heaviness", label: "Heaviness" },
  { id: "tightness", label: "Tightness by evening" },
  { id: "restlessness", label: "Restlessness" },
  { id: "swelling", label: "Swelling after long days" },
  { id: "none", label: "None of these" },
];

const SensationStep = ({ value, onChange }: SensationStepProps) => {
  const toggleSensation = (id: string) => {
    if (id === "none") {
      // If "none" is clicked, clear all others
      onChange(value.includes("none") ? [] : ["none"]);
    } else {
      // If any other is clicked, remove "none" and toggle the selection
      const withoutNone = value.filter(v => v !== "none");
      if (withoutNone.includes(id)) {
        onChange(withoutNone.filter(v => v !== id));
      } else {
        onChange([...withoutNone, id]);
      }
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
        Which of these sound familiar?
      </h2>
      <p className="text-muted-foreground text-center mb-10">
        Select all that apply — or skip if none resonate.
      </p>

      <div className="space-y-3">
        {sensations.map((sensation, i) => {
          const isSelected = value.includes(sensation.id);
          return (
            <motion.button
              key={sensation.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.05 }}
              onClick={() => toggleSensation(sensation.id)}
              className={`
                w-full flex items-center justify-between p-4 rounded-xl
                border transition-all duration-200
                ${isSelected 
                  ? "border-primary bg-primary/5 text-foreground" 
                  : "border-border bg-card hover:border-primary/30 text-foreground"
                }
              `}
            >
              <span className="font-medium">{sensation.label}</span>
              <div className={`
                w-6 h-6 rounded-full border-2 flex items-center justify-center
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

export default SensationStep;
