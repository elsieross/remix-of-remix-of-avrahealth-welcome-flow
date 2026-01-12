import { motion } from "framer-motion";
import { Sunset, Dumbbell, Plane, Clock } from "lucide-react";

interface RecoveryStepProps {
  value: string;
  onChange: (value: string) => void;
}

const recoveryOptions = [
  { 
    id: "end-of-day", 
    icon: <Sunset className="w-6 h-6" />, 
    label: "End of day",
    description: "When I finally sit down" 
  },
  { 
    id: "after-workouts", 
    icon: <Dumbbell className="w-6 h-6" />, 
    label: "After workouts",
    description: "Post-exercise recovery" 
  },
  { 
    id: "travel", 
    icon: <Plane className="w-6 h-6" />, 
    label: "During long travel",
    description: "Flights and road trips" 
  },
  { 
    id: "throughout", 
    icon: <Clock className="w-6 h-6" />, 
    label: "Throughout the day",
    description: "Consistent support" 
  },
];

const RecoveryStep = ({ value, onChange }: RecoveryStepProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="w-full max-w-lg mx-auto"
    >
      <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground text-center mb-3">
        When do your legs need the most support?
      </h2>
      <p className="text-muted-foreground text-center mb-10">
        Choose what resonates most.
      </p>

      <div className="grid grid-cols-2 gap-4">
        {recoveryOptions.map((option, i) => {
          const isSelected = value === option.id;
          return (
            <motion.button
              key={option.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.05 }}
              onClick={() => onChange(option.id)}
              className={`
                flex flex-col items-center text-center p-5 rounded-2xl
                border transition-all duration-200
                ${isSelected 
                  ? "border-primary bg-primary/5 shadow-card" 
                  : "border-border bg-card hover:border-primary/30 hover:shadow-soft"
                }
              `}
            >
              <div className={`
                w-14 h-14 rounded-xl flex items-center justify-center mb-3
                transition-colors duration-200
                ${isSelected 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-secondary text-primary"
                }
              `}>
                {option.icon}
              </div>
              <span className="font-semibold text-foreground mb-1">
                {option.label}
              </span>
              <span className="text-xs text-muted-foreground">
                {option.description}
              </span>
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
};

export default RecoveryStep;
