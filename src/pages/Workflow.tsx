import { ArrowRight, Upload, Zap, Download, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    icon: Upload,
    title: "1. Input Your Text",
    description: "Simply paste or type the text you want to translate. Supports multiple file formats and bulk text processing.",
    features: ["Text input", "File upload", "Bulk processing", "Auto-detection"]
  },
  {
    icon: Zap,
    title: "2. AI Analysis",
    description: "Our advanced AI analyzes grammar, context, idioms, and linguistic nuances for accurate translation.",
    features: ["Grammar analysis", "Context understanding", "Idiom detection", "Tone preservation"]
  },
  {
    icon: CheckCircle,
    title: "3. Smart Translation",
    description: "Get professional-quality translations with detailed analysis and suggestions for improvement.",
    features: ["Professional translation", "Multiple suggestions", "Confidence scores", "Cultural adaptation"]
  },
  {
    icon: Download,
    title: "4. Export Results",
    description: "Download your translations in various formats or integrate directly into your workflow via API.",
    features: ["Multiple formats", "API integration", "Batch export", "Cloud storage"]
  }
];

const integrations = [
  { name: "Websites", description: "Embed translation widget" },
  { name: "Mobile Apps", description: "SDK for iOS & Android" },
  { name: "Content Management", description: "WordPress, Drupal plugins" },
  { name: "Business Tools", description: "Slack, Microsoft Teams" },
];

export default function Workflow() {
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
      <section className="text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold text-gradient">
          How TranslatePro Works
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          From input to output in 4 simple steps. Our AI-powered translation engine 
          ensures accuracy, context, and cultural nuance in every translation.
        </p>
        <a href="https://translatort-frontend.onrender.com/" target="_blank" rel="noopener noreferrer" onClick={handleTranslatorClick}>
          <Button size="lg" className="bg-gradient-primary hover:opacity-90">
            Try It Now
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </a>
      </section>

      {/* Process Steps */}
      <section className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">Translation Process</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our streamlined workflow ensures fast, accurate, and contextually aware translations
          </p>
        </div>
        
        <div className="grid gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="glass-card p-8">
              <CardContent className="grid md:grid-cols-2 gap-8 items-center p-0">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-lg">{step.description}</p>
                  <div className="grid grid-cols-2 gap-3">
                    {step.features.map((feature, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-gradient-primary/10 rounded-lg h-48 flex items-center justify-center">
                  <step.icon className="w-24 h-24 text-primary/50" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Integration Options */}
      <section className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">Easy Integration</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Integrate TranslatePro into your existing workflow with our flexible APIs and SDKs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {integrations.map((integration, index) => (
            <Card key={index} className="glass-card p-6 text-center hover:scale-105 transition-transform">
              <CardContent className="space-y-4 p-0">
                <div className="w-16 h-16 bg-gradient-primary rounded-lg mx-auto flex items-center justify-center">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold">{integration.name}</h3>
                <p className="text-sm text-muted-foreground">{integration.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="glass-card p-12 text-center space-y-6">
        <h2 className="text-3xl font-bold text-gradient">Ready to Get Started?</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Join thousands of users who trust TranslatePro for accurate, context-aware translations
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://translatort-frontend.onrender.com/" target="_blank" rel="noopener noreferrer" onClick={handleTranslatorClick}>
            <Button size="lg" className="bg-gradient-primary hover:opacity-90">
              Start Translating Free
            </Button>
          </a>
          <Button size="lg" variant="outline">
            View API Documentation
          </Button>
        </div>
      </section>
    </div>
  );
}