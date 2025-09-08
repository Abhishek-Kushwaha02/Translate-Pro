import { useState } from "react";
import { Send, Mic, Volume2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface TranslationInputProps {
  value: string;
  onChange: (value: string) => void;
  onTranslate: () => void;
  isLoading: boolean;
  language: string;
}

export const TranslationInput = ({
  value,
  onChange,
  onTranslate,
  isLoading,
  language,
}: TranslationInputProps) => {
  const [isListening, setIsListening] = useState(false);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onTranslate();
    }
  };

  const toggleListening = () => {
    setIsListening(!isListening);
    // Voice recognition would be implemented here
  };

  const speakText = () => {
    if ('speechSynthesis' in window && value) {
      const utterance = new SpeechSynthesisUtterance(value);
      utterance.lang = language;
      speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-text-primary">Original Text</h3>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={toggleListening}
            className={`glass-card border-glass-border bg-white/5 backdrop-blur-lg hover:bg-white/10 ${
              isListening ? 'bg-error/20 border-error/30' : ''
            }`}
          >
            <Mic className={`w-4 h-4 ${isListening ? 'text-error' : ''}`} />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={speakText}
            disabled={!value}
            className="glass-card border-glass-border bg-white/5 backdrop-blur-lg hover:bg-white/10 disabled:opacity-50"
          >
            <Volume2 className="w-4 h-4" />
          </Button>
        </div>
      </div>
      
      <div className="relative">
        <Textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type or paste your text here..."
          className="glass-input min-h-32 resize-none text-base border-glass-border bg-white/5 backdrop-blur-lg placeholder:text-text-muted/70"
        />
        
        <div className="absolute bottom-3 right-3 flex items-center gap-2">
          <span className="text-xs text-text-muted">
            {value.length} characters
          </span>
          <Button
            onClick={onTranslate}
            disabled={!value.trim() || isLoading}
            size="sm"
            className="bg-gradient-primary hover:bg-gradient-secondary text-text-on-primary font-medium"
          >
            {isLoading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Send className="w-4 h-4" />
            )}
          </Button>
        </div>
      </div>
      
      <div className="text-xs text-text-muted">
        Press <kbd className="px-2 py-1 bg-muted rounded text-xs">Enter</kbd> to translate or <kbd className="px-2 py-1 bg-muted rounded text-xs">Shift + Enter</kbd> for new line
      </div>
    </div>
  );
};