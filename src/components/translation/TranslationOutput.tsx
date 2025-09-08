import { Copy, Volume2, Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import type { Translation } from "./TranslationApp";

interface TranslationOutputProps {
  translation: Translation | null;
  isLoading: boolean;
  language: string;
}

export const TranslationOutput = ({
  translation,
  isLoading,
  language,
}: TranslationOutputProps) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    if (translation?.translation) {
      await navigator.clipboard.writeText(translation.translation);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const speakTranslation = () => {
    if ('speechSynthesis' in window && translation?.translation) {
      const utterance = new SpeechSynthesisUtterance(translation.translation);
      utterance.lang = language;
      speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-text-primary">Translation</h3>
        {translation && (
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={copyToClipboard}
              className="glass-card border-glass-border bg-white/5 backdrop-blur-lg hover:bg-white/10"
            >
              {copied ? (
                <Check className="w-4 h-4 text-success" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={speakTranslation}
              className="glass-card border-glass-border bg-white/5 backdrop-blur-lg hover:bg-white/10"
            >
              <Volume2 className="w-4 h-4" />
            </Button>
          </div>
        )}
      </div>
      
      <div className="glass-input min-h-32 p-4 border-glass-border bg-white/5 backdrop-blur-lg rounded-xl">
        {isLoading ? (
          <div className="flex items-center justify-center h-full min-h-24">
            <div className="flex items-center gap-3 text-text-secondary">
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Translating and analyzing...</span>
            </div>
          </div>
        ) : translation ? (
          <div className="space-y-3">
            <p className="text-lg text-text-primary leading-relaxed">
              {translation.translation}
            </p>
            
            {translation.analysis?.pronunciation && (
              <div className="flex items-center gap-2 text-sm text-text-secondary">
                <span className="font-medium">Pronunciation:</span>
                <span className="font-mono bg-muted/30 px-2 py-1 rounded">
                  {translation.analysis.pronunciation}
                </span>
              </div>
            )}
            
            <div className="flex items-center gap-4 text-xs text-text-muted pt-2">
              <span>
                {translation.text.split(' ').length} words translated
              </span>
              <span>•</span>
              <span>
                {translation.from.toUpperCase()} → {translation.to.toUpperCase()}
              </span>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full min-h-24">
            <p className="text-text-muted text-center">
              Translation will appear here
            </p>
          </div>
        )}
      </div>
    </div>
  );
};