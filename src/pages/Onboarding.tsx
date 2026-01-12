import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import OnboardingProgress from "@/components/onboarding/OnboardingProgress";
import DailyLoadStep from "@/components/onboarding/steps/DailyLoadStep";
import SensationStep from "@/components/onboarding/steps/SensationStep";
import RecoveryStep from "@/components/onboarding/steps/RecoveryStep";
import PreferenceStep from "@/components/onboarding/steps/PreferenceStep";
import avraLogo from "@/assets/avra-logo.png";

interface OnboardingData {
  dailyLoad: number;
  sensations: string[];
  recovery: string;
  preferences: string[];
}

const Onboarding = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  const [data, setData] = useState<OnboardingData>({
    dailyLoad: 50,
    sensations: [],
    recovery: "",
    preferences: [],
  });

  const updateData = <K extends keyof OnboardingData>(
    key: K,
    value: OnboardingData[K]
  ) => {
    setData((prev) => ({ ...prev, [key]: value }));
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return true; // Slider always has a value
      case 2:
        return true; // Sensations are optional
      case 3:
        return data.recovery !== "";
      case 4:
        return data.preferences.length > 0;
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1);
    } else {
      // Save data and navigate to dashboard
      localStorage.setItem("avra_profile", JSON.stringify(data));
      navigate("/dashboard");
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <DailyLoadStep
            value={data.dailyLoad}
            onChange={(v) => updateData("dailyLoad", v)}
          />
        );
      case 2:
        return (
          <SensationStep
            value={data.sensations}
            onChange={(v) => updateData("sensations", v)}
          />
        );
      case 3:
        return (
          <RecoveryStep
            value={data.recovery}
            onChange={(v) => updateData("recovery", v)}
          />
        );
      case 4:
        return (
          <PreferenceStep
            value={data.preferences}
            onChange={(v) => updateData("preferences", v)}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between p-4 md:p-6">
        <Link to="/" className="flex items-center gap-2">
          <img src={avraLogo} alt="AvraHealth" className="h-9 w-auto" />
          <span className="font-display font-semibold text-lg avra-gradient-text">
            AvraHealth
          </span>
        </Link>
        <button
          onClick={() => navigate("/")}
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          Exit
        </button>
      </header>

      {/* Main content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-8">
        <div className="w-full max-w-xl">
          <OnboardingProgress currentStep={currentStep} totalSteps={totalSteps} />

          <AnimatePresence mode="wait">
            <motion.div key={currentStep} className="min-h-[400px] flex items-center">
              {renderStep()}
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex justify-between items-center mt-8"
          >
            <Button
              variant="ghost"
              onClick={handleBack}
              disabled={currentStep === 1}
              className="gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>

            <Button
              variant="hero"
              onClick={handleNext}
              disabled={!canProceed()}
              className="gap-2"
            >
              {currentStep === totalSteps ? "See my profile" : "Continue"}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </main>

      {/* Footer hint */}
      <footer className="p-4 text-center">
        <p className="text-xs text-muted-foreground">
          Your answers help personalize your experience. No medical data is collected.
        </p>
      </footer>
    </div>
  );
};

export default Onboarding;
