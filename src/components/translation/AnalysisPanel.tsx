import { BookOpen, MessageCircle, Users, Volume2, Lightbulb } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Translation } from "./TranslationApp";
import { cn } from "@/lib/utils";

interface AnalysisPanelProps {
  translation: Translation;
  className?: string;
}

export const AnalysisPanel = ({ translation, className }: AnalysisPanelProps) => {
  const { analysis } = translation;
  
  if (!analysis) return null;

  const speakExample = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = translation.from;
      speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className={cn("space-y-6", className)}>
      {/* Word Analysis */}
      {analysis.type === 'word' && (
        <div className="glass-card p-6">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-6 h-6 text-primary" />
            <h2 className="text-xl font-semibold text-text-primary">Word Analysis</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Part of Speech & Pronunciation */}
            <div className="space-y-4">
              {analysis.partOfSpeech && (
                <div>
                  <h3 className="text-sm font-medium text-text-secondary mb-2">Part of Speech</h3>
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    {analysis.partOfSpeech}
                  </Badge>
                </div>
              )}
              
              {analysis.pronunciation && (
                <div>
                  <h3 className="text-sm font-medium text-text-secondary mb-2">Pronunciation</h3>
                  <div className="flex items-center gap-2">
                    <span className="font-mono bg-muted/30 px-3 py-2 rounded-lg text-text-primary">
                      {analysis.pronunciation}
                    </span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => speakExample(translation.text)}
                      className="glass-card border-glass-border bg-white/5 hover:bg-white/10"
                    >
                      <Volume2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              )}
            </div>
            
            {/* Synonyms & Antonyms */}
            <div className="space-y-4">
              {analysis.synonyms && analysis.synonyms.length > 0 && (
                <div>
                  <h3 className="text-sm font-medium text-text-secondary mb-2">Synonyms</h3>
                  <div className="flex flex-wrap gap-2">
                    {analysis.synonyms.map((synonym, index) => (
                      <Badge key={index} variant="outline" className="bg-success/10 text-success border-success/20">
                        {synonym}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
              
              {analysis.antonyms && analysis.antonyms.length > 0 && (
                <div>
                  <h3 className="text-sm font-medium text-text-secondary mb-2">Antonyms</h3>
                  <div className="flex flex-wrap gap-2">
                    {analysis.antonyms.map((antonym, index) => (
                      <Badge key={index} variant="outline" className="bg-error/10 text-error border-error/20">
                        {antonym}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Examples */}
          {analysis.examples && analysis.examples.length > 0 && (
            <div className="mt-6">
              <h3 className="text-sm font-medium text-text-secondary mb-3">Example Usage</h3>
              <div className="space-y-3">
                {analysis.examples.map((example, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                    <span className="text-text-primary">{example}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => speakExample(example)}
                      className="hover:bg-white/10"
                    >
                      <Volume2 className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Sentence Analysis */}
      {analysis.type === 'sentence' && (
        <div className="space-y-6">
          {/* Grammar Analysis */}
          <div className="glass-card p-6">
            <div className="flex items-center gap-3 mb-6">
              <MessageCircle className="w-6 h-6 text-secondary" />
              <h2 className="text-xl font-semibold text-text-primary">Grammar Analysis</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Tense */}
              {analysis.tense && (
                <div>
                  <h3 className="text-sm font-medium text-text-secondary mb-2">Tense</h3>
                  <Badge variant="secondary" className="bg-secondary/10 text-secondary border-secondary/20">
                    {analysis.tense}
                  </Badge>
                </div>
              )}
              
              {/* Grammar Breakdown */}
              {analysis.grammar && (
                <div className="space-y-3">
                  <h3 className="text-sm font-medium text-text-secondary mb-2">Grammar Structure</h3>
                  <div className="space-y-2">
                    {analysis.grammar.subject && (
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-medium text-accent">Subject:</span>
                        <span className="text-sm text-text-primary">{analysis.grammar.subject}</span>
                      </div>
                    )}
                    {analysis.grammar.verb && (
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-medium text-primary">Verb:</span>
                        <span className="text-sm text-text-primary">{analysis.grammar.verb}</span>
                      </div>
                    )}
                    {analysis.grammar.object && (
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-medium text-secondary">Object:</span>
                        <span className="text-sm text-text-primary">{analysis.grammar.object}</span>
                      </div>
                    )}
                    {analysis.grammar.modifiers && analysis.grammar.modifiers.length > 0 && (
                      <div className="flex items-start gap-2">
                        <span className="text-xs font-medium text-warning">Modifiers:</span>
                        <div className="flex flex-wrap gap-1">
                          {analysis.grammar.modifiers.map((modifier, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {modifier}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Idioms & Phrases */}
          {analysis.idioms && analysis.idioms.length > 0 && (
            <div className="glass-card p-6">
              <div className="flex items-center gap-3 mb-6">
                <Lightbulb className="w-6 h-6 text-warning" />
                <h2 className="text-xl font-semibold text-text-primary">Idioms & Phrases</h2>
              </div>
              
              <div className="space-y-4">
                {analysis.idioms.map((idiom, index) => (
                  <div key={index} className="p-4 bg-warning/10 border border-warning/20 rounded-lg">
                    <div className="flex items-start gap-3">
                      <Badge variant="outline" className="bg-warning/20 text-warning border-warning/30 mt-1">
                        Idiom
                      </Badge>
                      <div className="flex-1">
                        <p className="font-medium text-text-primary mb-1">"{idiom.phrase}"</p>
                        <p className="text-sm text-text-secondary">{idiom.meaning}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};