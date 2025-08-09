import { Card, CardContent } from "@/components/ui/card";
import { aboutContent } from "@/content/aboutContent";

const About = () => {
  const { header, milestones, achievements, description } = aboutContent;
  const DescriptionIcon = description.icon;

  return (
    <section id="about" className="py-20 bg-secondary/30">
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

        {/* Timeline */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {milestones.map((milestone, index) => {
            const IconComponent = milestone.icon;
            return (
              <Card key={index} className="bg-card shadow-card border-0 hover:shadow-hero transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div className="text-accent text-sm font-semibold mb-2 tracking-wide uppercase">
                    {milestone.year}
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    {milestone.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {milestone.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {achievements.map((stat, index) => (
            <Card key={index} className="bg-gradient-accent border-0 text-center">
              <CardContent className="p-6">
                <div className="text-3xl md:text-4xl font-bold text-accent-foreground mb-2">
                  {stat.number}
                  {stat.suffix}
                </div>
                <div className="text-accent-foreground/80 font-medium">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Description */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-card shadow-card border-0">
            <CardContent className="p-8">
              <div className="flex items-center space-x-3 mb-6">
                <DescriptionIcon className="w-6 h-6 text-primary" />
                <h3 className="font-heading text-2xl font-semibold text-foreground">
                  {description.title}
                </h3>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                {description.paragraphs.map((p, i) => (
                  <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
