import { Building2, Users, Globe, Shield, ArrowRight, CheckCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const useCases = [
  {
    icon: Building2,
    title: "E-Learning Platforms",
    description: "Translate courses, assignments, and learning materials to reach global audiences",
    benefits: ["Automated content translation", "Maintain educational context", "Support 100+ languages", "Bulk processing"]
  },
  {
    icon: Users,
    title: "Customer Support",
    description: "Provide multilingual customer service with real-time translation capabilities",
    benefits: ["Real-time chat translation", "Email automation", "Knowledge base translation", "Cultural adaptation"]
  },
  {
    icon: Globe,
    title: "Global Websites",
    description: "Localize your website content for international markets with precision",
    benefits: ["SEO-optimized translations", "Cultural localization", "Dynamic content updates", "Performance optimization"]
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Secure, compliant translation solutions for sensitive business content",
    benefits: ["Data encryption", "GDPR compliance", "On-premise deployment", "Audit trails"]
  }
];

const features = [
  "White-label solutions",
  "Custom integrations",
  "Dedicated support",
  "SLA guarantees",
  "Volume discounts",
  "Advanced analytics",
  "Team management",
  "Priority processing"
];

const testimonials = [
  {
    company: "TechCorp International",
    industry: "Technology",
    quote: "TranslatePro helped us localize our platform for 15 markets in just 3 months.",
    author: "Sarah Johnson, VP of Global Operations",
    rating: 5
  },
  {
    company: "EduLearn Global",
    industry: "Education",
    quote: "The accuracy and context preservation is incredible. Our course completion rates increased by 40%.",
    author: "Dr. Michael Chen, Head of Content",
    rating: 5
  },
  {
    company: "RetailPlus",
    industry: "E-commerce",
    quote: "API integration was seamless. We now serve customers in 50+ countries with real-time translations.",
    author: "Emma Rodriguez, CTO",
    rating: 5
  }
];

export default function Business() {
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
        <Badge variant="outline" className="mb-4">Enterprise Solutions</Badge>
        <h1 className="text-4xl md:text-6xl font-bold text-gradient">
          TranslatePro for Business
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Scale your global operations with enterprise-grade translation solutions. 
          From small teams to Fortune 500 companies, we power international growth.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-gradient-primary hover:opacity-90">
            Contact Sales
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <a href="https://translatort-frontend.onrender.com/" target="_blank" rel="noopener noreferrer" onClick={handleTranslatorClick}>
            <Button size="lg" variant="outline">
              Try Enterprise Demo
            </Button>
          </a>
        </div>
      </section>

      {/* Use Cases */}
      <section className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">Business Use Cases</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover how leading companies use TranslatePro to break language barriers
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <Card key={index} className="glass-card p-6 hover:scale-105 transition-transform">
              <CardHeader className="p-0 mb-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{useCase.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-0 space-y-4">
                <p className="text-muted-foreground">{useCase.description}</p>
                <div className="grid grid-cols-2 gap-2">
                  {useCase.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Enterprise Features */}
      <section className="glass-card p-12 space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">Enterprise Features</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Advanced features designed for enterprise-scale translation needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-2 p-3 bg-background/50 rounded-lg">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">What Our Clients Say</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real results from companies that trust TranslatePro
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glass-card p-6">
              <CardContent className="p-0 space-y-4">
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <blockquote className="text-muted-foreground italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="space-y-1">
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company} • {testimonial.industry}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="glass-card p-12 text-center space-y-6">
        <h2 className="text-3xl font-bold text-gradient">Ready to Scale Globally?</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Get a custom quote based on your specific needs. Volume discounts and enterprise features available.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-gradient-primary hover:opacity-90">
            Contact Sales Team
          </Button>
          <Button size="lg" variant="outline">
            Schedule Demo
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">
          No commitment required • Free consultation • Custom pricing available
        </p>
      </section>
    </div>
  );
}