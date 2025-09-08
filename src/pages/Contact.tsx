import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Clock, MessageSquare } from "lucide-react";

export default function Contact() {
  return (
    <div className="py-20 px-4 space-y-20">
      <section className="text-center max-w-4xl mx-auto">
        <Badge variant="secondary" className="glass-card border-primary/20 text-primary mb-6">
          <MessageSquare className="w-4 h-4 mr-2" />
          Get In Touch
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Contact <span className="text-gradient">Our Team</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Have questions about TranslatePro? We're here to help you get the most out of our platform.
        </p>
      </section>

      <section className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="glass-card border-white/20">
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">First Name</label>
                  <Input className="glass-input" placeholder="John" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Last Name</label>
                  <Input className="glass-input" placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Email</label>
                <Input className="glass-input" type="email" placeholder="john@example.com" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Subject</label>
                <Input className="glass-input" placeholder="How can we help?" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Message</label>
                <Textarea className="glass-input min-h-32" placeholder="Tell us more about your needs..." />
              </div>
              <Button className="w-full bg-gradient-primary hover:opacity-90">
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="glass-card border-white/20">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Mail className="w-5 h-5 text-primary mr-3" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-muted-foreground">hello@translatepro.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="glass-card border-white/20">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Phone className="w-5 h-5 text-primary mr-3" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}