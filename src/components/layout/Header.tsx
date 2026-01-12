import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import avraLogo from "@/assets/avra-logo.png";

const Header = () => {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50"
    >
      <div className="avra-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2">
            <img 
              src={avraLogo} 
              alt="AvraHealth" 
              className="h-9 md:h-11 w-auto object-contain"
            />
            <span className="font-display font-semibold text-lg md:text-xl avra-gradient-text">
              AvraHealth
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              to="/" 
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
            >
              How it works
            </Link>
            <a 
              href="#science" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('science')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium cursor-pointer"
            >
              Science
            </a>
            <Link 
              to="/" 
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
            >
              About
            </Link>
          </nav>

          <Link 
            to="/onboarding" 
            className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            Get started →
          </Link>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
