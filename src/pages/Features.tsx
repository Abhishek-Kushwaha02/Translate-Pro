import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Brain, 
  Zap, 
  Globe, 
  Code, 
  MessageSquare, 
  BookOpen,
  Mic,
  Copy,
  History,
  Shield,
  Smartphone,
  Headphones,
  ArrowRight
} from "lucide-react";

const mainFeatures = [
  {
    icon: Brain,
    title: "Advanced Linguistic Analysis",
    description: "Get comprehensive analysis of your text including grammar breakdown, tense detection, and structural insights.",
    features: [
      "Grammar structure analysis",
      "Tense and mood detection", 
      "Sentence component breakdown",
      "Linguistic pattern recognition"
    ],
    badge: "AI-Powered"
  },
  {
    icon: MessageSquare,
    title: "Idiom & Phrase Detection",
    description: "Understand cultural context with automatic detection and explanation of idioms, phrases, and expressions.",
    features: [
      "Idiom identification",
      "Cultural context explanations",
      "Alternative expressions",
      "Regional variations"
    ],
    badge: "Cultural"
  },
  {
    icon: BookOpen,
    title: "Word-Level Insights",
    description: "Deep dive into individual words with synonyms, antonyms, pronunciation guides, and usage examples.",
    features: [
      "Synonyms and antonyms",
      "Part of speech identification",
      "Pronunciation guides",
      "Usage examples"
    ],
    badge: "Learning"
  }
];

const additionalFeatures = [
  {
    icon: Globe,
    title: "100+ Languages",
    description: "Support for over 100 languages with native-quality translations."
  },
  {
    icon: Zap,
    title: "Real-time Translation",
    description: "Get instant translations as you type with live analysis."
  },
  {
    icon: Code,
    title: "Developer API",
    description: "Integrate translation capabilities into your applications."
  },
  {
    icon: Mic,
    title: "Voice Input",
    description: "Speak your text and get instant translations with audio."
  },
  {
    icon: Copy,
    title: "One-Click Copy",
    description: "Copy translations and analysis with a single click."
  },
  {
    icon: History,
    title: "Translation History",
    description: "Access your previous translations and analysis anytime."
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Your translations are processed securely and never stored."
  },
  {
    icon: Smartphone,
    title: "Mobile Optimized",
    description: "Perfect experience across all devices and screen sizes."
  },
  {
    icon: Headphones,
    title: "Audio Pronunciation",
    description: "Listen to correct pronunciation in multiple accents."
  }
];

export default function Features() {
  return (
    <div className="py-20 px-4 space-y-20">
      {/* Header */}
      <section className="text-center max-w-4xl mx-auto">
        <Badge variant="secondary" className="glass-card border-primary/20 text-primary mb-6">
          <Brain className="w-4 h-4 mr-2" />
          Advanced Features
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Powerful Translation <span className="text-gradient">Features</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Discover the advanced capabilities that make TranslatePro the most comprehensive 
          translation tool for professionals, students, and developers.
        </p>
      </section>

      {/* Main Features */}
      <section className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {mainFeatures.map((feature, index) => (
            <Card key={index} className="glass-card border-white/20 hover:scale-105 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.features.map((item, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-gradient-primary rounded-full mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="max-w-4xl mx-auto">
        <Card className="glass-card border-primary/20 p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4">
              See It In <span className="text-gradient">Action</span>
            </h2>
            <p className="text-muted-foreground">
              Experience the power of advanced linguistic analysis with this interactive demo.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="font-semibold">Input Text:</h3>
              <div className="p-4 glass-card border-primary/20 rounded-lg">
                <p className="text-primary">"Break a leg at your performance tonight!"</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-semibold">Analysis Results:</h3>
              <div className="space-y-3">
                <div className="p-3 glass-card rounded-lg">
                  <div className="flex items-center mb-2">
                    <MessageSquare className="w-4 h-4 mr-2 text-primary" />
                    <span className="text-sm font-medium">Idiom Detected</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    "Break a leg" means "Good luck" in theater context
                  </p>
                </div>
                
                <div className="p-3 glass-card rounded-lg">
                  <div className="flex items-center mb-2">
                    <Brain className="w-4 h-4 mr-2 text-primary" />
                    <span className="text-sm font-medium">Grammar Analysis</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Imperative mood, informal register
                  </p>
                </div>
                
                <div className="p-3 glass-card rounded-lg">
                  <div className="flex items-center mb-2">
                    <Globe className="w-4 h-4 mr-2 text-primary" />
                    <span className="text-sm font-medium">Cultural Context</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    English theater tradition, informal encouragement
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <a href="https://translatort-frontend.onrender.com/" target="_blank" rel="noopener noreferrer">
              <Button className="bg-gradient-primary hover:opacity-90">
                Try Full Analysis
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </div>
        </Card>
      </section>

      {/* Additional Features Grid */}
      <section className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Everything You <span className="text-gradient">Need</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            A complete translation solution with all the features you need.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {additionalFeatures.map((feature, index) => (
            <Card key={index} className="glass-card border-white/20 hover:scale-105 transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-10 h-10 bg-gradient-secondary rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto">
        <Card className="glass-card border-primary/20 p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Experience <span className="text-gradient">Advanced Translation?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Start using TranslatePro today and discover the difference advanced analysis makes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://translatort-frontend.onrender.com/" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90">
                Start Translating
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
            <Link to="/pricing">
              <Button size="lg" variant="outline" className="glass-card border-primary/20">
                View Pricing
              </Button>
            </Link>
          </div>
        </Card>
      </section>
    </div>
  );
}