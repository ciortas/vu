import { useState } from 'react';
import { layoutContent } from '@/content/layoutContent';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Facebook } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const { siteName, logoUrl, navLinks, cta } = layoutContent.header;

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm shadow-md"
    >
      <div className="container mx-auto px-4 flex justify-between items-center h-20">
        {/* Logo and Site Name */}
        <a href="#home" onClick={() => scrollToSection('home')} className="flex items-center gap-3">
          <img src={logoUrl} alt={`${siteName} Logotipas`} className="h-12 w-auto" />
          <span className="hidden sm:inline text-xl font-bold tracking-tight text-primary">
            {siteName}
          </span>
        </a>

        {/* Desktop Navigation & CTAs */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-1">
            {navLinks.map((link) => (
              <Button key={link.sectionId} variant="ghost" onClick={() => scrollToSection(link.sectionId)} className="text-base">
                {link.name}
              </Button>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild className="text-base font-semibold bg-amber-400 text-slate-900 hover:bg-amber-300">
              <a href={`tel:${cta.phone}`}>
                <Phone className="mr-2 h-4 w-4" />
                {cta.phone}
              </a>
            </Button>
            <Button asChild size="icon" variant="ghost">
              <a href={cta.facebookUrl} target="_blank" rel="noopener noreferrer" aria-label="Facebook puslapis">
                <Facebook className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm pb-4">
          <nav className="flex flex-col items-center">
            {navLinks.map((link) => (
              <Button
                key={link.sectionId}
                variant="ghost"
                className="w-full text-lg py-3 rounded-none"
                onClick={() => scrollToSection(link.sectionId)}
              >
                {link.name}
              </Button>
            ))}
            <div className="border-t border-border w-11/12 my-3" />
            <div className="flex flex-col items-center gap-3 w-full px-4">
               <Button asChild className="w-full text-base font-semibold bg-amber-400 text-slate-900 hover:bg-amber-300 py-3 h-auto">
                <a href={`tel:${cta.phone}`}>
                  <Phone className="mr-2 h-4 w-4" />
                  {cta.phone}
                </a>
              </Button>
              <Button asChild variant="outline" className="w-full text-base py-3 h-auto">
                <a href={cta.facebookUrl} target="_blank" rel="noopener noreferrer" aria-label="Facebook puslapis">
                  <Facebook className="mr-2 h-5 w-5" />
                  Aplankykite Facebook
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
