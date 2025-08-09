import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Wheat, Phone } from "lucide-react";
import { productsContent } from "@/content/productsContent";

const Products = () => {
  const { header, features, tabs, potatoes, otherCrops } = productsContent;

  const scrollToContacts = () => {
    const element = document.getElementById('contacts');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="products" className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {header.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {header.subtitle}
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="bg-card shadow-soft border-0 text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Products Tabs */}
        <Tabs defaultValue="potatoes" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="potatoes" className="flex items-center space-x-2">
              <span>🥔</span>
              <span>{tabs.potatoes}</span>
            </TabsTrigger>
            <TabsTrigger value="crops" className="flex items-center space-x-2">
              <Wheat className="w-4 h-4" />
              <span>{tabs.crops}</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="potatoes">
            <div className="mb-8">
              <Card className="bg-card shadow-card border-0 overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img 
                      src={potatoes.card.image}
                      alt={potatoes.card.alt}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-8">
                    <h3 className="font-heading text-2xl font-semibold text-foreground mb-4">
                      {potatoes.card.title}
                    </h3>
                    <div className="space-y-3 text-muted-foreground">
                      {potatoes.card.paragraphs.map((p, i) => (
                        <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
                      ))}
                    </div>
                    <Button 
                      className="mt-6" 
                      onClick={scrollToContacts}
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      {potatoes.card.buttonText}
                    </Button>
                  </div>
                </div>
              </Card>
            </div>

            {/* Potato Varieties Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {potatoes.varieties.map((variety, index) => (
                <Card key={index} className="bg-card shadow-soft border-0 hover:shadow-card transition-all duration-300">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg font-semibold text-foreground">
                        {variety.name}
                      </CardTitle>
                      <div className="flex flex-col gap-1">
                        <Badge variant="secondary" className="text-xs">
                          {variety.color}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {variety.type}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {variety.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="crops">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherCrops.list.map((crop, index) => (
                <Card key={index} className="bg-card shadow-soft border-0 hover:shadow-card transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-earth rounded-full flex items-center justify-center mx-auto mb-4">
                      <Wheat className="w-8 h-8 text-accent-foreground" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {crop.name}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {crop.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <Card className="mt-8 bg-gradient-accent border-0">
              <CardContent className="p-8 text-center">
                <h3 className="font-heading text-xl font-semibold text-accent-foreground mb-4">
                  {otherCrops.cta.title}
                </h3>
                <p className="text-accent-foreground/90 mb-6">
                  {otherCrops.cta.text}
                </p>
                <Button 
                  variant="outline"
                  onClick={scrollToContacts}
                  className="border-accent-foreground/30 text-accent-foreground hover:bg-accent-foreground/10"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  {otherCrops.cta.buttonText}
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Products;
