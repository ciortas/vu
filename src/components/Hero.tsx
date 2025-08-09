import { ArrowRight, Phone, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { heroContent } from "@/content/heroContent";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  const { badge, title, highlightedTitle, subtitle, italicSubtitle, features, cta, backgroundImage } = heroContent;
  const BadgeIcon = badge.icon;

  return (
    <section id="home" className="relative min-h-[calc(100vh-5rem)] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${backgroundImage})` }} />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 backdrop-blur-sm text-accent-foreground px-4 py-2 rounded-full text-sm font-medium mb-6 bg-amber-300">
            <BadgeIcon className="w-4 h-4" />
            <span>{badge.text}</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            {title}{" "}
            <span className="text-accent">{highlightedTitle}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl leading-relaxed">
            {subtitle}{" "}
            <span className="text-accent font-medium italic">{italicSubtitle}</span>
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-6 mb-10">
            {features.map((feature, index) => {
              const FeatureIcon = feature.icon;
              return (
                <div key={index} className="flex items-center space-x-2 text-white/90">
                  <FeatureIcon className="w-5 h-5 text-accent" />
                  <span>{feature.text}</span>
                </div>
              );
            })}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            {/* Main CTA: Phone Call */}
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-hero text-lg px-8 py-4 h-auto">
              <a href={`tel:${cta.phone}`}>
                <Phone className="mr-2 w-5 h-5" />
                {cta.phone}
              </a>
            </Button>
            
            <div className="flex items-center gap-3">
              {/* Secondary CTA: View Products */}
              <Button size="lg" onClick={() => scrollToSection(cta.primary.sectionId)} variant="outline" className="border-white/30 backdrop-blur-sm text-lg px-8 py-4 h-auto text-slate-950 font-normal bg-amber-400 hover:bg-amber-300">
                {cta.primary.text}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              {/* Facebook Icon Button */}
              <Button asChild size="icon" className="bg-accent hover:bg-accent/90 text-accent-foreground h-14 w-14">
                <a href={cta.facebookUrl} target="_blank" rel="noopener noreferrer" aria-label="Facebook puslapis">
                  <Facebook className="w-6 h-6" />
                </a>
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
export default Hero;
