import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Link } from "react-router-dom";
import { Check, Zap, Crown, Building, ArrowRight, Star } from "lucide-react";

const plans = [
  {
    name: "Free",
    icon: Zap,
    description: "Perfect for personal use and trying out TranslatePro",
    monthlyPrice: 0,
    yearlyPrice: 0,
    badge: null,
    features: [
      "50 translations per month",
      "Basic linguistic analysis",
      "10 languages supported",
      "Standard translation speed",
      "Email support",
      "Mobile app access"
    ],
    limitations: [
      "Limited daily usage",
      "No API access",
      "Basic analysis only"
    ],
    cta: "Get Started Free",
    popular: false
  },
  {
    name: "Pro",
    icon: Star,
    description: "For professionals and language learners who need more",
    monthlyPrice: 7,
    yearlyPrice: 70,
    badge: "Most Popular",
    features: [
      "Unlimited translations",
      "Advanced linguistic analysis",
      "100+ languages supported",
      "Priority translation speed",
      "Grammar breakdown & insights",
      "Idiom & phrase detection",
      "Pronunciation guides",
      "Translation history",
      "Export capabilities",
      "Priority email support",
      "Mobile & desktop apps"
    ],
    limitations: [],
    cta: "Start Pro Trial",
    popular: true
  },
  {
    name: "Enterprise",
    icon: Building,
    description: "For teams and businesses with advanced needs",
    monthlyPrice: 49,
    yearlyPrice: 488,
    badge: "Best Value",
    features: [
      "Everything in Pro",
      "Full API access",
      "Custom integrations",
      "Team collaboration tools",
      "Advanced analytics",
      "Custom language models",
      "SSO integration",
      "Dedicated account manager",
      "24/7 phone support",
      "SLA guarantee",
      "Custom contracts available"
    ],
    limitations: [],
    cta: "Contact Sales",
    popular: false
  }
];

const faqs = [
  {
    question: "Can I change my plan anytime?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and we'll prorate any billing differences."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, MasterCard, American Express) and PayPal. Enterprise customers can also pay by invoice."
  },
  {
    question: "Is there a free trial for paid plans?",
    answer: "Yes! All paid plans come with a 14-day free trial. No credit card required to start your trial."
  },
  {
    question: "Do you offer discounts for students or nonprofits?",
    answer: "Yes, we offer 50% discounts for students and qualified nonprofit organizations. Contact our support team for details."
  },
  {
    question: "What happens if I exceed my usage limits?",
    answer: "For Free users, translation will be temporarily limited. Pro and Enterprise users get unlimited usage, but API rate limits may apply."
  }
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  const formatPrice = (monthly: number, yearly: number) => {
    if (monthly === 0) return "Free";
    const price = isYearly ? Math.round(yearly / 12) : monthly;
    return `$${price}`;
  };

  const getYearlySavings = (monthly: number, yearly: number) => {
    if (monthly === 0) return 0;
    return Math.round(((monthly * 12 - yearly) / (monthly * 12)) * 100);
  };

  return (
    <div className="py-20 px-4 space-y-20">
      {/* Header */}
      <section className="text-center max-w-4xl mx-auto">
        <Badge variant="secondary" className="glass-card border-primary/20 text-primary mb-6">
          <Crown className="w-4 h-4 mr-2" />
          Simple Pricing
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Choose Your <span className="text-gradient">Perfect Plan</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Start free and scale as you grow. All plans include our core translation features 
          with varying levels of advanced analysis and support.
        </p>
        
        {/* Billing Toggle */}
        <div className="flex items-center justify-center gap-4 p-4 glass-card border-white/20 rounded-lg max-w-sm mx-auto">
          <span className={`text-sm ${!isYearly ? 'text-primary font-medium' : 'text-muted-foreground'}`}>
            Monthly
          </span>
          <Switch
            checked={isYearly}
            onCheckedChange={setIsYearly}
          />
          <span className={`text-sm ${isYearly ? 'text-primary font-medium' : 'text-muted-foreground'}`}>
            Yearly
          </span>
          {isYearly && (
            <Badge variant="secondary" className="text-xs">
              Save up to 20%
            </Badge>
          )}
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`glass-card ${plan.popular ? 'border-primary/40 scale-105' : 'border-white/20'} 
                         hover:scale-105 transition-all duration-300 relative`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-primary text-white border-0">
                    {plan.badge}
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <plan.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <p className="text-muted-foreground text-sm">{plan.description}</p>
                
                <div className="py-6">
                  <div className="text-4xl font-bold text-gradient">
                    {formatPrice(plan.monthlyPrice, plan.yearlyPrice)}
                  </div>
                  {plan.monthlyPrice > 0 && (
                    <div className="text-sm text-muted-foreground">
                      per month {isYearly && `(${getYearlySavings(plan.monthlyPrice, plan.yearlyPrice)}% off)`}
                    </div>
                  )}
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <Check className="w-4 h-4 text-success mr-3 mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="pt-4">
                  {plan.name === "Enterprise" ? (
                    <Link to="/contact">
                      <Button 
                        className={`w-full ${plan.popular ? 'bg-gradient-primary hover:opacity-90' : ''}`}
                        variant={plan.popular ? "default" : "outline"}
                      >
                        {plan.cta}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  ) : (
                    <Link to="/auth/register">
                      <Button 
                        className={`w-full ${plan.popular ? 'bg-gradient-primary hover:opacity-90' : ''}`}
                        variant={plan.popular ? "default" : "outline"}
                      >
                        {plan.cta}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  )}
                </div>
                
                {plan.name === "Pro" && (
                  <p className="text-xs text-center text-muted-foreground">
                    14-day free trial • No credit card required
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="max-w-4xl mx-auto">
        <Card className="glass-card border-white/20">
          <CardHeader>
            <CardTitle className="text-2xl text-center">
              Detailed Feature <span className="text-gradient">Comparison</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 font-medium">Feature</th>
                    <th className="text-center py-3 font-medium">Free</th>
                    <th className="text-center py-3 font-medium">Pro</th>
                    <th className="text-center py-3 font-medium">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="space-y-2">
                  <tr className="border-b border-white/5">
                    <td className="py-3">Monthly Translations</td>
                    <td className="text-center py-3">50</td>
                    <td className="text-center py-3">Unlimited</td>
                    <td className="text-center py-3">Unlimited</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3">Languages Supported</td>
                    <td className="text-center py-3">10</td>
                    <td className="text-center py-3">100+</td>
                    <td className="text-center py-3">100+</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3">Advanced Analysis</td>
                    <td className="text-center py-3">Basic</td>
                    <td className="text-center py-3"><Check className="w-4 h-4 text-success mx-auto" /></td>
                    <td className="text-center py-3"><Check className="w-4 h-4 text-success mx-auto" /></td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3">API Access</td>
                    <td className="text-center py-3">-</td>
                    <td className="text-center py-3">Limited</td>
                    <td className="text-center py-3">Full</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3">Team Collaboration</td>
                    <td className="text-center py-3">-</td>
                    <td className="text-center py-3">-</td>
                    <td className="text-center py-3"><Check className="w-4 h-4 text-success mx-auto" /></td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3">Support</td>
                    <td className="text-center py-3">Email</td>
                    <td className="text-center py-3">Priority Email</td>
                    <td className="text-center py-3">24/7 Phone</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about our pricing and plans.
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="glass-card border-white/20">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <p className="text-muted-foreground mb-4">
            Still have questions? We're here to help.
          </p>
          <Link to="/contact">
            <Button variant="outline" className="glass-card border-primary/20">
              Contact Support
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto">
        <Card className="glass-card border-primary/20 p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Get <span className="text-gradient">Started?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of users who trust TranslatePro for their translation needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://translatort-frontend.onrender.com/" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90">
                Try Free Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="glass-card border-primary/20">
                Talk to Sales
              </Button>
            </Link>
          </div>
        </Card>
      </section>
    </div>
  );
}