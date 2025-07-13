import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { 
  FaDownload, 
  FaEnvelope, 
  FaCheckCircle,
  FaUsers,
  FaRocket,
  FaCog,
  FaShieldAlt,
  FaCloud,
  FaCode,
  FaDatabase,
  FaPalette,
  FaChartLine,
  FaStar,
  FaQuoteLeft
} from 'react-icons/fa';

export default function StratoLandingPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    package: '',
    message: ''
  });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Request Submitted Successfully!",
      description: "We'll get back to you within 24 hours via email.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      package: '',
      message: ''
    });
  };

  const handleDownload = () => {
    toast({
      title: "Download Started",
      description: "Your Architecture Toolkit download will begin shortly.",
    });
    // In a real app, this would trigger an actual download
  };

  const features = [
    { icon: FaCode, text: "Full-stack architecture diagrams (Microservices / Monolith)" },
    { icon: FaCog, text: "API layer & integration structure" },
    { icon: FaDatabase, text: "Database schema templates (PostgreSQL, MongoDB)" },
    { icon: FaPalette, text: "UI/UX component library (Figma + HTML)" },
    { icon: FaCloud, text: "Deployment structure: AWS / Azure / Docker" },
    { icon: FaShieldAlt, text: "Editable docs: PDF, DOCX, CSV, Lucidchart, Draw.io" },
    { icon: FaEnvelope, text: "Email-based expert advisory (optional, 5–10h)" }
  ];

  const perfectFor = [
    "SaaS startups",
    "CTOs launching MVPs", 
    "Dev teams needing clarity",
    "Tech consultants",
    "Enterprise innovation teams"
  ];

  const packages = [
    {
      title: "Core Toolkit",
      description: "Digital files only",
      price: "$1,490",
      features: ["Architecture diagrams", "Database schemas", "API structure", "UI components"]
    },
    {
      title: "Pro Guidance Pack",
      description: "Toolkit + 5h expert email guidance",
      price: "$3,490",
      features: ["Everything in Core", "5 hours email consulting", "Implementation guidance", "Best practices"]
    },
    {
      title: "Enterprise Edition", 
      description: "Toolkit + 10h consulting + customization",
      price: "$7,900 – $12,900",
      features: ["Everything in Pro", "10 hours consulting", "Custom modifications", "Priority support"]
    }
  ];

  const testimonials = [
    {
      quote: "Strato gave our dev team a plug-and-play backend design. We delivered in half the expected time.",
      author: "CTO, FinCore.io",
      rating: 5
    },
    {
      quote: "We were skeptical about email-only consulting – turns out it was fast, efficient, and extremely clear.",
      author: "Product Lead, OptiServe Tech", 
      rating: 5
    }
  ];

  return (
    <div className="font-sans text-foreground bg-background">
      
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 shadow-sm border-b sticky top-0 bg-background/95 backdrop-blur-sm z-50">
        <h1 className="text-xl font-bold text-strato-navy">Strato Systems</h1>
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          <button onClick={() => scrollToSection('home')} className="hover:text-primary transition-colors">Home</button>
          <button onClick={() => scrollToSection('toolkit')} className="hover:text-primary transition-colors">Architecture Toolkit</button>
          <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">About Us</button>
          <button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors">Contact</button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground" id="home">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Architect Your Software the Right Way.</h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Strato Systems provides scalable, pre-designed digital blueprints for SaaS & enterprise platforms — with optional expert support via email only.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              variant="hero" 
              size="lg" 
              onClick={handleDownload}
              className="shadow-lg"
            >
              <FaDownload className="mr-2" />
              Download Architecture Toolkit
            </Button>
            <Button 
              variant="hero-outline" 
              size="lg" 
              onClick={() => scrollToSection('contact')}
            >
              <FaRocket className="mr-2" />
              Request Tailored Blueprint
            </Button>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-16 px-6" id="toolkit">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">What You Get</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-l-4 border-l-primary hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-3">
                    <feature.icon className="text-primary text-xl mt-1 flex-shrink-0" />
                    <p className="text-sm leading-relaxed">{feature.text}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Perfect For */}
      <section className="bg-strato-light py-12 px-6" id="about">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-8">Perfect For</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {perfectFor.map((item, index) => (
              <Card key={index} className="bg-background hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-center space-x-2">
                    <FaUsers className="text-primary" />
                    <span className="font-medium">{item}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-6" id="pricing">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Pricing Options</h3>
          <div className="grid gap-8 md:grid-cols-3">
            {packages.map((pkg, index) => (
              <Card key={index} className={`relative ${index === 1 ? 'border-primary shadow-lg scale-105' : ''}`}>
                {index === 1 && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{pkg.title}</CardTitle>
                  <CardDescription>{pkg.description}</CardDescription>
                  <div className="text-3xl font-bold text-primary mt-4">{pkg.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <FaCheckCircle className="text-green-500 text-sm" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full mt-6" 
                    variant={index === 1 ? "default" : "outline"}
                    onClick={() => scrollToSection('contact')}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center text-sm mt-8 text-muted-foreground">
            <FaCheckCircle className="inline mr-2 text-green-500" />
            One-time payment • Digital delivery via email • Email-only support
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-strato-gray py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-center mb-8">Client Testimonials</h3>
          <div className="grid gap-8 md:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-background">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="relative">
                    <FaQuoteLeft className="absolute -top-2 -left-2 text-primary/20 text-2xl" />
                    <p className="italic mb-4 pl-6">"{testimonial.quote}"</p>
                    <footer className="text-sm font-medium text-muted-foreground">
                      — {testimonial.author}
                    </footer>
                  </blockquote>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-6" id="contact">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Let's Architect Your System the Smart Way</h3>
            <p className="text-muted-foreground">Fill in your project details below. We'll reply via email within 24 hours.</p>
          </div>
          
          <Card>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <Input 
                      placeholder="Full Name" 
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                    />
                  </div>
                  <div>
                    <Input 
                      placeholder="Email Address *" 
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                    />
                  </div>
                </div>
                
                <Input 
                  placeholder="Company / Startup Name (optional)" 
                  value={formData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                />
                
                <Select value={formData.package} onValueChange={(value) => handleInputChange('package', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Package" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="core">Core Toolkit</SelectItem>
                    <SelectItem value="pro">Pro Guidance Pack</SelectItem>
                    <SelectItem value="enterprise">Enterprise Edition</SelectItem>
                  </SelectContent>
                </Select>
                
                <Textarea 
                  placeholder="Message / Project Description *" 
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                />
                
                <Button type="submit" className="w-full" size="lg">
                  <FaEnvelope className="mr-2" />
                  Submit Request
                </Button>
                
                <p className="text-sm text-center text-muted-foreground mt-4">
                  ⚠ Strato Systems operates strictly via email. No phone or live calls.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 border-t bg-strato-light">
        <div className="max-w-4xl mx-auto px-6">
          <p className="font-medium mb-2">© Strato Systems LLC-FZ – Dubai, UAE</p>
          <p className="text-sm text-muted-foreground mb-4">
            Email: <a href="mailto:support@stratosystems.io" className="text-primary hover:underline">support@stratosystems.io</a>
          </p>
          <div className="flex justify-center space-x-4 text-sm">
            <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>
            <span className="text-muted-foreground">|</span>
            <a href="/terms" className="text-primary hover:underline">Terms of Use</a>
          </div>
        </div>
      </footer>

    </div>
  );
}