import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { 
  Code, 
  Zap, 
  Shield, 
  Globe, 
  Copy, 
  ExternalLink,
  ArrowRight,
  CheckCircle,
  Terminal,
  Book,
  Key
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Sub-second response times with global CDN distribution."
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "SOC2 compliant with end-to-end encryption."
  },
  {
    icon: Globe,
    title: "100+ Languages",
    description: "Support for all major languages with high accuracy."
  },
  {
    icon: Code,
    title: "RESTful API",
    description: "Simple, well-documented REST API with JSON responses."
  }
];

const endpoints = [
  {
    method: "POST",
    path: "/v1/translate",
    description: "Translate text with advanced analysis",
    params: ["text", "from", "to", "analysis"]
  },
  {
    method: "GET",
    path: "/v1/languages",
    description: "Get list of supported languages",
    params: ["supported"]
  },
  {
    method: "POST",
    path: "/v1/detect",
    description: "Detect language of input text", 
    params: ["text"]
  },
  {
    method: "POST",
    path: "/v1/analyze",
    description: "Get linguistic analysis only",
    params: ["text", "language", "type"]
  }
];

const codeExamples = {
  javascript: `// JavaScript Example
const response = await fetch('https://api.translatepro.com/v1/translate', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    text: "Hello, how are you?",
    from: "en",
    to: "es",
    analysis: true
  })
});

const data = await response.json();
console.log(data.translation); // "Hola, ¿cómo estás?"
console.log(data.analysis);    // Grammar, tense, idioms etc.`,

  python: `# Python Example
import requests

url = "https://api.translatepro.com/v1/translate"
headers = {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
}
data = {
    "text": "Hello, how are you?",
    "from": "en", 
    "to": "es",
    "analysis": True
}

response = requests.post(url, headers=headers, json=data)
result = response.json()

print(result["translation"])  # "Hola, ¿cómo estás?"
print(result["analysis"])     # Grammar, tense, idioms etc.`,

  curl: `# cURL Example
curl -X POST https://api.translatepro.com/v1/translate \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "text": "Hello, how are you?",
    "from": "en",
    "to": "es", 
    "analysis": true
  }'`
};

const pricingTiers = [
  {
    name: "Free",
    requests: "1,000",
    price: "$0",
    features: ["Basic translation", "10 languages", "Email support"]
  },
  {
    name: "Pro", 
    requests: "100,000",
    price: "$19",
    features: ["Advanced analysis", "100+ languages", "Priority support"]
  },
  {
    name: "Enterprise",
    requests: "Unlimited",
    price: "Custom",
    features: ["Custom models", "SLA guarantee", "Dedicated support"]
  }
];

export default function API() {
  const [activeTab, setActiveTab] = useState("javascript");
  const [copiedCode, setCopiedCode] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText(codeExamples[activeTab as keyof typeof codeExamples]);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="py-20 px-4 space-y-20">
      {/* Header */}
      <section className="text-center max-w-4xl mx-auto">
        <Badge variant="secondary" className="glass-card border-primary/20 text-primary mb-6">
          <Code className="w-4 h-4 mr-2" />
          Developer API
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Powerful Translation <span className="text-gradient">API</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Integrate advanced translation and linguistic analysis into your applications 
          with our simple, fast, and reliable REST API.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/auth/register">
            <Button size="lg" className="bg-gradient-primary hover:opacity-90">
              <Key className="w-5 h-5 mr-2" />
              Get API Key
            </Button>
          </Link>
          <Button size="lg" variant="outline" className="glass-card border-primary/20">
            <Book className="w-5 h-5 mr-2" />
            View Documentation
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Why Choose Our <span className="text-gradient">API</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Built for developers who need reliable, fast, and intelligent translation.
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
      </section>

      {/* Code Examples */}
      <section className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Quick <span className="text-gradient">Start</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Get up and running in minutes with our simple API.
          </p>
        </div>
        
        <Card className="glass-card border-white/20">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center">
                <Terminal className="w-5 h-5 mr-2" />
                Code Examples
              </CardTitle>
              <Button
                variant="outline"
                size="sm"
                onClick={copyCode}
                className="glass-card border-white/20"
              >
                {copiedCode ? (
                  <CheckCircle className="w-4 h-4 mr-2" />
                ) : (
                  <Copy className="w-4 h-4 mr-2" />
                )}
                {copiedCode ? "Copied!" : "Copy"}
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="javascript">JavaScript</TabsTrigger>
                <TabsTrigger value="python">Python</TabsTrigger>
                <TabsTrigger value="curl">cURL</TabsTrigger>
              </TabsList>
              
              {Object.entries(codeExamples).map(([lang, code]) => (
                <TabsContent key={lang} value={lang}>
                  <pre className="glass-card p-4 overflow-x-auto text-sm rounded-lg">
                    <code>{code}</code>
                  </pre>
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>
      </section>

      {/* API Response Example */}
      <section className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">
            API <span className="text-gradient">Response</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Rich, structured responses with comprehensive analysis.
          </p>
        </div>
        
        <Card className="glass-card border-white/20">
          <CardHeader>
            <CardTitle>Example Response</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="glass-card p-4 overflow-x-auto text-sm rounded-lg">
              <code>{`{
  "success": true,
  "translation": "Hola, ¿cómo estás?",
  "from": "en",
  "to": "es",
  "confidence": 0.99,
  "analysis": {
    "type": "sentence",
    "tense": "present_simple",
    "grammar": {
      "subject": "implied_you",
      "verb": "are",
      "modifiers": ["how"]
    },
    "idioms": [],
    "formality": "informal",
    "pronunciation": "ˈhola ˈkomo esˈtas"
  },
  "alternatives": [
    "Hola, ¿qué tal?",
    "Hola, ¿cómo te encuentras?"
  ],
  "usage_count": 1,
  "request_id": "req_abc123"
}`}</code>
            </pre>
          </CardContent>
        </Card>
      </section>

      {/* Endpoints */}
      <section className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            API <span className="text-gradient">Endpoints</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Simple, powerful endpoints for all your translation needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {endpoints.map((endpoint, index) => (
            <Card key={index} className="glass-card border-white/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Badge 
                    variant="secondary" 
                    className={`${endpoint.method === 'POST' ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'}`}
                  >
                    {endpoint.method}
                  </Badge>
                  <code className="text-primary font-mono text-sm">{endpoint.path}</code>
                </div>
                <p className="text-muted-foreground mb-3">{endpoint.description}</p>
                <div className="flex flex-wrap gap-2">
                  {endpoint.params.map((param, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {param}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            API <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Transparent, usage-based pricing that scales with your needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricingTiers.map((tier, index) => (
            <Card key={index} className="glass-card border-white/20 hover:scale-105 transition-all duration-300">
              <CardHeader className="text-center">
                <CardTitle className="text-xl">{tier.name}</CardTitle>
                <div className="text-3xl font-bold text-gradient">{tier.price}</div>
                <p className="text-sm text-muted-foreground">
                  {tier.requests} requests/month
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-success mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Link to={tier.name === "Enterprise" ? "/contact" : "/auth/register"}>
                    <Button className="w-full" variant={index === 1 ? "default" : "outline"}>
                      {tier.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Authentication */}
      <section className="max-w-4xl mx-auto">
        <Card className="glass-card border-white/20">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Shield className="w-5 h-5 mr-2" />
              Authentication
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              All API requests require authentication using API keys. Include your API key 
              in the Authorization header of each request.
            </p>
            
            <div className="glass-card p-4 rounded-lg">
              <code className="text-sm">
                Authorization: Bearer YOUR_API_KEY
              </code>
            </div>
            
            <div className="flex items-start gap-3 p-4 glass-card rounded-lg border-yellow-500/20">
              <Shield className="w-5 h-5 text-yellow-500 mt-0.5" />
              <div>
                <p className="font-medium text-yellow-500">Security Best Practices</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Never expose your API key in client-side code. Always use it from your backend server.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto">
        <Card className="glass-card border-primary/20 p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to <span className="text-gradient">Build?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Get your API key and start integrating powerful translation capabilities today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/auth/register">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90">
                <Key className="w-5 h-5 mr-2" />
                Get Your API Key
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="glass-card border-primary/20">
                Talk to Our Team
              </Button>
            </Link>
          </div>
        </Card>
      </section>
    </div>
  );
}