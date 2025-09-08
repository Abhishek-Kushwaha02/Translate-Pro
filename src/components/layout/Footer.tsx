import { Link } from "react-router-dom";
import { Languages, Twitter, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const footerLinks = {
  Product: [
    { name: "Features", path: "/features" },
    { name: "Pricing", path: "/pricing" },
    { name: "API", path: "/api" },
    { name: "Translator", path: "https://translatort-frontend.onrender.com/", external: true },
  ],
  Company: [
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ],
  Resources: [
    { name: "How It Works", path: "/workflow" },
    { name: "For Business", path: "/business" },
    { name: "Documentation", path: "/docs" },
    { name: "Support", path: "/support" },
  ],
  Legal: [
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms of Service", path: "/terms" },
    { name: "Cookie Policy", path: "/cookies" },
    { name: "GDPR", path: "/gdpr" },
  ],
};

const socialLinks = [
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Mail, href: "mailto:hello@translatepro.com", label: "Email" },
];

export const Footer = () => {
  const handleTranslatorClick = async () => {
    try {
      await fetch('https://rough-1-8qyx.onrender.com/', { mode: 'no-cors' });
    } catch (error) {
      console.log('API activation attempted');
    }
  };
  return (
    <footer className="glass-card border-0 border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Newsletter Section */}
        <div className="glass-card p-8 mb-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gradient mb-4">
              Stay Updated with TranslatePro
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Get the latest updates on new features, language support, and translation insights.
              Join thousands of users who trust TranslatePro for their translation needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Enter your email" 
                className="flex-1 glass-input"
              />
              <Button className="bg-gradient-primary hover:opacity-90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Languages className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gradient">TranslatePro</span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Professional translation with advanced linguistic analysis. 
              Perfect for individuals, businesses, and developers.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-foreground mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    {link.external ? (
                      <a
                        href={link.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        onClick={link.name === "Translator" ? handleTranslatorClick : undefined}
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        to={link.path}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 TranslatePro. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Terms
            </Link>
            <Link to="/cookies" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};