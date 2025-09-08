import { Languages, Sparkles } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export const TranslationHeader = () => {
  return (
    <header className="relative text-center space-y-4 animate-fade-in">
      <div className="absolute top-0 right-0">
        <ThemeToggle />
      </div>
      
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="glass-card p-3 rounded-full">
          <Languages className="w-8 h-8 text-primary" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gradient">
          LinguaAI
        </h1>
        <div className="glass-card p-3 rounded-full">
          <Sparkles className="w-8 h-8 text-secondary" />
        </div>
      </div>
      
      <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto">
        Advanced translation with deep linguistic analysis, grammar insights, and contextual understanding
      </p>
      
      <div className="flex items-center justify-center gap-6 text-sm text-text-muted">
        <span className="flex items-center gap-2">
          <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
          Real-time Analysis
        </span>
        <span className="flex items-center gap-2">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          Grammar Insights
        </span>
        <span className="flex items-center gap-2">
          <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
          Context Aware
        </span>
      </div>
    </header>
  );
};