import { motion } from "framer-motion";
import { Armchair, RefreshCw, Footprints } from "lucide-react";

interface DailyLoadStepProps {
  value: number;
  onChange: (value: number) => void;
}

const DailyLoadStep = ({ value, onChange }: DailyLoadStepProps) => {
  const labels = [
    { icon: <Armchair className="w-5 h-5" />, text: "Mostly sitting" },
    { icon: <RefreshCw className="w-5 h-5" />, text: "Mixed" },
    { icon: <Footprints className="w-5 h-5" />, text: "Standing / Moving" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="w-full max-w-lg mx-auto"
    >
      <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground text-center mb-3">
        How do your legs spend most days?
      </h2>
      <p className="text-muted-foreground text-center mb-10">
        Drag the slider to what feels most accurate.
      </p>

      <div className="px-4">
        {/* Slider */}
        <div className="relative mb-8">
          <input
            type="range"
            min="0"
            max="100"
            value={value}
            onChange={(e) => onChange(Number(e.target.value))}
            className="w-full h-3 bg-secondary rounded-full appearance-none cursor-pointer
              [&::-webkit-slider-thumb]:appearance-none
              [&::-webkit-slider-thumb]:w-7
              [&::-webkit-slider-thumb]:h-7
              [&::-webkit-slider-thumb]:rounded-full
              [&::-webkit-slider-thumb]:bg-primary
              [&::-webkit-slider-thumb]:shadow-elevated
              [&::-webkit-slider-thumb]:cursor-grab
              [&::-webkit-slider-thumb]:active:cursor-grabbing
              [&::-webkit-slider-thumb]:transition-transform
              [&::-webkit-slider-thumb]:hover:scale-110
              [&::-moz-range-thumb]:w-7
              [&::-moz-range-thumb]:h-7
              [&::-moz-range-thumb]:rounded-full
              [&::-moz-range-thumb]:bg-primary
              [&::-moz-range-thumb]:border-0
              [&::-moz-range-thumb]:shadow-elevated
              [&::-moz-range-thumb]:cursor-grab
            "
          />
          {/* Track fill */}
          <div 
            className="absolute top-0 left-0 h-3 bg-primary/30 rounded-full pointer-events-none"
            style={{ width: `${value}%` }}
          />
        </div>

        {/* Labels */}
        <div className="flex justify-between items-start">
          {labels.map((label, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className={`flex flex-col items-center text-center gap-2 ${
                (i === 0 && value < 33) || 
                (i === 1 && value >= 33 && value <= 66) || 
                (i === 2 && value > 66)
                  ? "text-primary"
                  : "text-muted-foreground"
              } transition-colors duration-300`}
            >
              <div className={`p-2 rounded-lg ${
                (i === 0 && value < 33) || 
                (i === 1 && value >= 33 && value <= 66) || 
                (i === 2 && value > 66)
                  ? "bg-primary/10"
                  : "bg-secondary"
              } transition-colors duration-300`}>
                {label.icon}
              </div>
              <span className="text-sm font-medium max-w-[80px]">
                {label.text}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default DailyLoadStep;
