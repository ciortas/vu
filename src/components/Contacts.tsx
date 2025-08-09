import { Phone, Mail, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { contactsContent } from "@/content/contactsContent";

const Contacts = () => {
  const { header, cards, address } = contactsContent;
  const OwnersIcon = cards.owners.icon;
  const TeamIcon = cards.team.icon;

  return (
    <section id="contacts" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {header.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {header.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Owners */}
          <Card className="bg-card shadow-card border-0">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <OwnersIcon className="w-5 h-5 text-primary" />
                <span>{cards.owners.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {cards.owners.list.map((owner, index) => (
                <div key={index} className="border-b border-border last:border-0 pb-4 last:pb-0">
                  <h3 className="font-semibold text-foreground mb-2">{owner.name}</h3>
                  <div className="space-y-1">
                    <a href={`tel:${owner.phone}`} className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
                      <Phone className="w-4 h-4" />
                      <span>{owner.phone}</span>
                    </a>
                    {owner.email && (
                      <a href={`mailto:${owner.email}`} className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
                        <Mail className="w-4 h-4" />
                        <span>{owner.email}</span>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Team */}
          <Card className="bg-card shadow-card border-0">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TeamIcon className="w-5 h-5 text-primary" />
                <span>{cards.team.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {cards.team.list.map((member, index) => (
                <div key={index} className="border-b border-border last:border-0 pb-4 last:pb-0">
                  <h3 className="font-semibold text-foreground">{member.name}</h3>
                  {member.role && <p className="text-sm text-muted-foreground mb-2">{member.role}</p>}
                  <div className="space-y-1">
                    <a href={`tel:${member.phone}`} className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
                      <Phone className="w-4 h-4" />
                      <span>{member.phone}</span>
                    </a>
                    {member.email && (
                      <a href={`mailto:${member.email}`} className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
                        <Mail className="w-4 h-4" />
                        <span>{member.email}</span>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Address */}
        <Card className="bg-gradient-accent border-0 text-center">
          <CardContent className="p-8">
            <MapPin className="w-8 h-8 text-accent-foreground mx-auto mb-4" />
            <h3 className="font-heading text-xl font-semibold text-accent-foreground mb-2">
              {address.title}
            </h3>
            <p className="text-accent-foreground/90">
              {address.lines[0]}<br />
              {address.lines[1]}
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contacts;
