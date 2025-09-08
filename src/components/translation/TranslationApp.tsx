import { useState } from "react";
import { TranslationHeader } from "./TranslationHeader";
import { LanguageSelector } from "./LanguageSelector";
import { TranslationInput } from "./TranslationInput";
import { TranslationOutput } from "./TranslationOutput";
import { AnalysisPanel } from "./AnalysisPanel";

export interface Translation {
  text: string;
  from: string;
  to: string;
  translation: string;
  analysis?: {
    type: 'word' | 'sentence';
    partOfSpeech?: string;
    tense?: string;
    synonyms?: string[];
    antonyms?: string[];
    grammar?: {
      subject?: string;
      verb?: string;
      object?: string;
      modifiers?: string[];
    };
    idioms?: Array<{
      phrase: string;
      meaning: string;
    }>;
    pronunciation?: string;
    examples?: string[];
  };
}

export const TranslationApp = () => {
  const [inputText, setInputText] = useState("");
  const [sourceLang, setSourceLang] = useState("en");
  const [targetLang, setTargetLang] = useState("es");
  const [translation, setTranslation] = useState<Translation | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleTranslate = async () => {
    if (!inputText.trim()) return;
    
    setIsLoading(true);
    
    // Simulate API call with mock data
    setTimeout(() => {
      const mockTranslation: Translation = {
        text: inputText,
        from: sourceLang,
        to: targetLang,
        translation: "Hola, ¿cómo estás?", // Mock translation
        analysis: {
          type: inputText.split(' ').length === 1 ? 'word' : 'sentence',
          ...(inputText.split(' ').length === 1 ? {
            partOfSpeech: "noun",
            synonyms: ["greeting", "salutation"],
            antonyms: ["goodbye", "farewell"],
            pronunciation: "/həˈloʊ/",
            examples: [
              "Hello, how are you?",
              "Say hello to your friends",
              "A friendly hello"
            ]
          } : {
            tense: "present simple",
            grammar: {
              subject: "Hello",
              verb: "implied 'is'",
              object: "greeting",
              modifiers: ["informal"]
            },
            idioms: [
              {
                phrase: "how are you",
                meaning: "A common greeting asking about someone's wellbeing"
              }
            ]
          })
        }
      };
      
      setTranslation(mockTranslation);
      setIsLoading(false);
    }, 1500);
  };

  const handleSwapLanguages = () => {
    setSourceLang(targetLang);
    setTargetLang(sourceLang);
    setInputText("");
    setTranslation(null);
  };

  return (
    <div className="min-h-screen p-4 md:p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        <TranslationHeader />
        
        <div className="glass-card p-6 md:p-8 animate-fade-in">
          <LanguageSelector
            sourceLang={sourceLang}
            targetLang={targetLang}
            onSourceChange={setSourceLang}
            onTargetChange={setTargetLang}
            onSwap={handleSwapLanguages}
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            <TranslationInput
              value={inputText}
              onChange={setInputText}
              onTranslate={handleTranslate}
              isLoading={isLoading}
              language={sourceLang}
            />
            
            <TranslationOutput
              translation={translation}
              isLoading={isLoading}
              language={targetLang}
            />
          </div>
        </div>
        
        {translation && (
          <AnalysisPanel 
            translation={translation} 
            className="animate-slide-up"
          />
        )}
      </div>
    </div>
  );
};