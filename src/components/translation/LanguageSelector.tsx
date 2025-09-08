import { ArrowLeftRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface LanguageSelectorProps {
  sourceLang: string;
  targetLang: string;
  onSourceChange: (lang: string) => void;
  onTargetChange: (lang: string) => void;
  onSwap: () => void;
}

const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "es", name: "Spanish", flag: "🇪🇸" },
  { code: "fr", name: "French", flag: "🇫🇷" },
  { code: "de", name: "German", flag: "🇩🇪" },
  { code: "it", name: "Italian", flag: "🇮🇹" },
  { code: "pt", name: "Portuguese", flag: "🇵🇹" },
  { code: "ru", name: "Russian", flag: "🇷🇺" },
  { code: "ja", name: "Japanese", flag: "🇯🇵" },
  { code: "ko", name: "Korean", flag: "🇰🇷" },
  { code: "zh", name: "Chinese", flag: "🇨🇳" },
  { code: "ar", name: "Arabic", flag: "🇸🇦" },
  { code: "hi", name: "Hindi", flag: "🇮🇳" },
];

export const LanguageSelector = ({
  sourceLang,
  targetLang,
  onSourceChange,
  onTargetChange,
  onSwap,
}: LanguageSelectorProps) => {
  const getLanguageName = (code: string) => {
    const lang = languages.find(l => l.code === code);
    return lang ? `${lang.flag} ${lang.name}` : code;
  };

  return (
    <div className="flex items-center gap-4 flex-wrap justify-center">
      <div className="flex-1 min-w-40">
        <label className="block text-sm font-medium text-text-secondary mb-2">
          From
        </label>
        <Select value={sourceLang} onValueChange={onSourceChange}>
          <SelectTrigger className="glass-input border-glass-border bg-white/5 backdrop-blur-lg">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="glass-card border-glass-border">
            {languages.map((lang) => (
              <SelectItem key={lang.code} value={lang.code}>
                <span className="flex items-center gap-2">
                  <span>{lang.flag}</span>
                  <span>{lang.name}</span>
                </span>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Button
        variant="outline"
        size="icon"
        onClick={onSwap}
        className="glass-card border-glass-border bg-white/5 backdrop-blur-lg hover:bg-white/10 mt-6"
      >
        <ArrowLeftRight className="w-4 h-4" />
      </Button>

      <div className="flex-1 min-w-40">
        <label className="block text-sm font-medium text-text-secondary mb-2">
          To
        </label>
        <Select value={targetLang} onValueChange={onTargetChange}>
          <SelectTrigger className="glass-input border-glass-border bg-white/5 backdrop-blur-lg">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="glass-card border-glass-border">
            {languages.map((lang) => (
              <SelectItem key={lang.code} value={lang.code}>
                <span className="flex items-center gap-2">
                  <span>{lang.flag}</span>
                  <span>{lang.name}</span>
                </span>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};