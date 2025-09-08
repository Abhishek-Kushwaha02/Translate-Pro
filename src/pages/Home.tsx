import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Languages, 
  Zap, 
  Brain, 
  Globe, 
  CheckCircle, 
  Star,
  ArrowRight,
  Play,
  Users,
  Code,
  MessageSquare
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Analysis",
    description: "Advanced linguistic analysis with grammar breakdown, tense detection, and idiom recognition."
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Get instant translations with comprehensive analysis in milliseconds."
  },
  {
    icon: Globe,
    title: "100+ Languages",
    description: "Support for over 100 languages with native speaker quality translations."
  },
  {
    icon: Code,
    title: "Developer API",
    description: "Integrate powerful translation capabilities into your applications with our RESTful API."
  }
];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Content Manager",
    company: "TechCorp",
    content: "TranslatePro has revolutionized our multilingual content strategy. The grammar analysis helps our team understand context better.",
    rating: 5,
    avatar: "SC"
  },
  {
    name: "Marcus Rodriguez",
    role: "Developer",
    company: "StartupXYZ",
    content: "The API is incredibly easy to integrate. We built our entire translation feature in just a few hours.",
    rating: 5,
    avatar: "MR"
  },
  {
    name: "Dr. Elena Vasquez",
    role: "Language Professor",
    company: "University of Languages",
    content: "The detailed linguistic analysis makes this perfect for language learning. My students love the synonym and antonym features.",
    rating: 5,
    avatar: "EV"
  }
];

const stats = [
  { label: "Active Users", value: "50K+" },
  { label: "Languages Supported", value: "100+" },
  { label: "Translations Daily", value: "1M+" },
  { label: "API Requests", value: "10M+" }
];

export default function Home() {
  const handleTranslatorClick = async () => {
    try {
      await fetch('https://rough-1-8qyx.onrender.com/', { mode: 'no-cors' });
    } catch (error) {
      console.log('API activation attempted');
    }
  };
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <Badge variant="secondary" className="glass-card border-primary/20 text-primary">
            <Zap className="w-4 h-4 mr-2" />
            New: Enhanced AI Analysis
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Professional Translation with
            <span className="block text-gradient">Advanced Analysis</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get accurate translations with comprehensive linguistic analysis. Perfect for 
            professionals, students, and developers who need more than just basic translation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="https://translatort-frontend.onrender.com/" target="_blank" rel="noopener noreferrer" onClick={handleTranslatorClick}>
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-lg px-8">
                Try Free Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
            <Link to="/api">
              <Button size="lg" variant="outline" className="glass-card border-primary/20 text-lg px-8">
                <Code className="w-5 h-5 mr-2" />
                Explore API
              </Button>
            </Link>
          </div>
          
          <div className="pt-8">
            <Button variant="ghost" className="glass-card border-white/20 group">
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Watch Demo (2 min)
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose <span className="text-gradient">TranslatePro</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              More than just translation - get deep linguistic insights that help you understand and learn.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="glass-card border-white/20 hover:scale-105 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Live Demo Widget */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Try It <span className="text-gradient">Right Now</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Experience the power of advanced translation analysis instantly.
            </p>
          </div>
          
          <Card className="glass-card border-white/20 p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-medium mb-2 block">Enter text to translate:</label>
                <textarea 
                  className="w-full h-32 p-4 glass-input resize-none" 
                  placeholder="Type something here..."
                  defaultValue="Hello, how are you today?"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Translation:</label>
                <div className="h-32 p-4 glass-card border-primary/20 rounded-lg">
                  <p className="text-primary font-medium">Hola, ¿cómo estás hoy?</p>
                  <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-success" />
                      Detected: Greeting + Question
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-success" />
                      Tense: Present Simple
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-6">
              <a href="https://translatort-frontend.onrender.com/" target="_blank" rel="noopener noreferrer" onClick={handleTranslatorClick}>
                <Button className="bg-gradient-primary hover:opacity-90">
                  Get Full Analysis
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </a>
            </div>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted by <span className="text-gradient">Thousands</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              See what our users have to say about TranslatePro.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="glass-card border-white/20">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-white font-medium mr-3">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-medium">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role} at {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="glass-card border-primary/20 p-12 text-center">
            <div className="max-w-2xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Ready to <span className="text-gradient">Get Started?</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Join thousands of users who rely on TranslatePro for accurate translations 
                and linguistic insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/auth/register">
                  <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-lg px-8">
                    <Users className="w-5 h-5 mr-2" />
                    Sign Up Free
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="glass-card border-primary/20 text-lg px-8">
                    <MessageSquare className="w-5 h-5 mr-2" />
                    Contact Sales
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}