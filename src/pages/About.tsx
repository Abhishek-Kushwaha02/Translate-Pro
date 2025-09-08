import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Brain, 
  Globe, 
  Users, 
  Zap, 
  Target, 
  Heart,
  Award,
  ArrowRight,
  Linkedin,
  Twitter
} from "lucide-react";

const values = [
  {
    icon: Brain,
    title: "Innovation",
    description: "We leverage cutting-edge AI to provide the most accurate and insightful translations."
  },
  {
    icon: Globe,
    title: "Accessibility",
    description: "Breaking down language barriers to make communication accessible to everyone worldwide."
  },
  {
    icon: Users,
    title: "Community",
    description: "Building a global community of learners, professionals, and language enthusiasts."
  },
  {
    icon: Heart,
    title: "Quality",
    description: "Committed to delivering the highest quality translations with comprehensive analysis."
  }
];

const team = [
  {
    name: "Dr. Sarah Chen",
    role: "CEO & Co-Founder",
    bio: "Former Google Translate engineer with a PhD in Computational Linguistics from Stanford.",
    avatar: "SC",
    social: { linkedin: "#", twitter: "#" }
  },
  {
    name: "Marcus Rodriguez",
    role: "CTO & Co-Founder", 
    bio: "Ex-Microsoft Azure architect specializing in scalable AI systems and natural language processing.",
    avatar: "MR",
    social: { linkedin: "#", twitter: "#" }
  },
  {
    name: "Dr. Elena Vasquez",
    role: "Head of Linguistics",
    bio: "Polyglot linguist with 15+ years experience in morphological analysis and syntax parsing.",
    avatar: "EV",
    social: { linkedin: "#", twitter: "#" }
  },
  {
    name: "James Thompson",
    role: "VP of Product",
    bio: "Product strategist focused on user experience and language learning technologies.",
    avatar: "JT",
    social: { linkedin: "#", twitter: "#" }
  }
];

const milestones = [
  {
    year: "2020",
    title: "Founded",
    description: "TranslatePro was founded with a vision to revolutionize translation technology."
  },
  {
    year: "2021",
    title: "AI Engine Launch",
    description: "Launched our proprietary AI engine with advanced linguistic analysis capabilities."
  },
  {
    year: "2022",
    title: "100K Users",
    description: "Reached 100,000 active users and expanded to support 50+ languages."
  },
  {
    year: "2023",
    title: "API Release",
    description: "Released developer API, enabling integration into hundreds of applications."
  },
  {
    year: "2024",
    title: "Global Scale",
    description: "Serving 500K+ users with 100+ languages and advanced enterprise features."
  }
];

export default function About() {
  return (
    <div className="py-20 px-4 space-y-20">
      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto">
        <Badge variant="secondary" className="glass-card border-primary/20 text-primary mb-6">
          <Heart className="w-4 h-4 mr-2" />
          Our Story
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Building the Future of <span className="text-gradient">Translation</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          We're on a mission to break down language barriers and make high-quality, 
          intelligent translation accessible to everyone, everywhere.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="glass-card border-white/20 p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mr-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold">Our Mission</h2>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed">
              To democratize global communication by providing the most advanced, 
              accurate, and insightful translation technology. We believe that language 
              should never be a barrier to understanding, learning, or connecting with others.
            </p>
          </Card>
          
          <Card className="glass-card border-white/20 p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-secondary rounded-xl flex items-center justify-center mr-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold">Our Vision</h2>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed">
              A world where every person can communicate seamlessly across languages, 
              where cultural nuances are preserved and understood, and where technology 
              enhances rather than replaces human connection.
            </p>
          </Card>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            How Our <span className="text-gradient">Technology</span> Works
          </h2>
          <p className="text-xl text-muted-foreground">
            A sophisticated blend of AI, linguistics, and cultural understanding.
          </p>
        </div>
        
        <Card className="glass-card border-white/20 p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">1</span>
              </div>
              <h3 className="font-semibold mb-2">Intelligent Analysis</h3>
              <p className="text-sm text-muted-foreground">
                Our AI engine analyzes text structure, context, and linguistic patterns 
                to understand meaning beyond words.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">2</span>
              </div>
              <h3 className="font-semibold mb-2">Cultural Context</h3>
              <p className="text-sm text-muted-foreground">
                We preserve cultural nuances, idioms, and expressions while providing 
                explanations for better understanding.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">3</span>
              </div>
              <h3 className="font-semibold mb-2">Comprehensive Output</h3>
              <p className="text-sm text-muted-foreground">
                Deliver accurate translations with grammar insights, pronunciation guides, 
                and usage examples.
              </p>
            </div>
          </div>
        </Card>
      </section>

      {/* Our Values */}
      <section className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Our <span className="text-gradient">Values</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            The principles that guide everything we do.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="glass-card border-white/20 hover:scale-105 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Meet Our <span className="text-gradient">Team</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Passionate experts in AI, linguistics, and user experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <Card key={index} className="glass-card border-white/20 hover:scale-105 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl font-bold">{member.avatar}</span>
                </div>
                <h3 className="font-semibold mb-1">{member.name}</h3>
                <p className="text-primary text-sm mb-3">{member.role}</p>
                <p className="text-muted-foreground text-xs mb-4">{member.bio}</p>
                <div className="flex justify-center space-x-2">
                  <a href={member.social.linkedin} className="text-muted-foreground hover:text-primary">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href={member.social.twitter} className="text-muted-foreground hover:text-primary">
                    <Twitter className="w-4 h-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Our <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Key milestones in our mission to revolutionize translation.
          </p>
        </div>
        
        <div className="space-y-8">
          {milestones.map((milestone, index) => (
            <div key={index} className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
              </div>
              <Card className="glass-card border-white/20 flex-1">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-2">
                    <Badge variant="secondary" className="text-primary">
                      {milestone.year}
                    </Badge>
                    <h3 className="font-semibold">{milestone.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto">
        <Card className="glass-card border-primary/20 p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Join Our <span className="text-gradient">Mission</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Be part of the translation revolution. Start using TranslatePro today 
            and experience the difference intelligent analysis makes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://translatort-frontend.onrender.com/" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90">
                Try TranslatePro
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="glass-card border-primary/20">
                Get In Touch
              </Button>
            </Link>
          </div>
        </Card>
      </section>
    </div>
  );
}