import { Mail, MapPin, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const industries = [
  { value: "defence", label: "Defence / Naval Forces" },
  { value: "maritime", label: "Maritime Academies" },
  { value: "offshore", label: "Oil & Gas / Offshore" },
  { value: "port", label: "Ports & Terminals" },
  { value: "government", label: "Government / Administration" },
  { value: "other", label: "Other" },
];

const Contact = () => (
  <div className="section">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <p className="accent text-xs tracking-[0.35em] mb-2">CONTACT</p>
      <h1 className="heading-balance text-3xl md:text-4xl font-bold tracking-tight mb-2">Get in Touch</h1>
      <p className="text-muted-foreground mb-10 max-w-xl text-sm md:text-base leading-relaxed">
        Request a demo or discuss your simulation requirements with our team.
      </p>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.4fr_1fr]">
        <Card className="border-border/60 bg-card/60">
          <CardContent className="p-7">
            <h2 className="text-xl font-semibold tracking-tight mb-6">Request a Demo</h2>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Full name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="org">Organization</Label>
                  <Input id="org" placeholder="Company / Agency" />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="email@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" placeholder="+1 234 567 890" />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Industry</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select industry" />
                  </SelectTrigger>
                  <SelectContent>
                    {industries.map((item) => (
                      <SelectItem key={item.value} value={item.value}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" rows={5} placeholder="Describe your simulation requirements..." />
              </div>

              <Button type="submit" className="h-12 w-full">
                Submit Request
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card className="border-border/60 bg-card/60">
            <CardContent className="p-7">
              <h2 className="text-xl font-semibold tracking-tight mb-4">Headquarters</h2>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 text-accent" />
                  <span>New Delhi, India</span>
                </div>
                <div className="flex items-start gap-2">
                  <Phone className="mt-0.5 h-4 w-4 text-accent" />
                  <span>+91 11 41326882</span>
                </div>
                <div className="flex items-start gap-2">
                  <Mail className="mt-0.5 h-4 w-4 text-accent" />
                  <span>info@arisimulation.com</span>
                </div>
              </div>

              <div className="mt-6">
                <p className="text-sm font-semibold">MUMBAI - Branch Office</p>
                <div className="mt-2 flex items-start gap-2 text-sm text-muted-foreground">
                  <MapPin className="mt-0.5 h-4 w-4 text-accent" />
                  <span>
                    B-510, BSELTECH Park (5th Floor), Sector-30-A,
                    <br />
                    Vashi, Navi Mumbai-400705
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/60 bg-card/60">
            <CardContent className="p-7">
              <h2 className="text-xl font-semibold tracking-tight mb-4">Global Offices</h2>

              <div className="space-y-2">
                <p className="text-sm font-semibold">USA</p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-start gap-2">
                    <MapPin className="mt-0.5 h-4 w-4 text-accent" />
                    <span>
                      Bishop Ranch 3, 2603 Camino Ramon, Suite 200, San Ramon, California, 94583, USA.
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Phone className="mt-0.5 h-4 w-4 text-accent" />
                    <span>+1 408 338 6093</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Mail className="mt-0.5 h-4 w-4 text-accent" />
                    <span>ariusa@arisimulation.com</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-2">
                <p className="text-sm font-semibold">Singapore</p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-start gap-2">
                    <MapPin className="mt-0.5 h-4 w-4 text-accent" />
                    <span>14 Robinson Road, #08-01A, Far East Finance Building, Singapore 048545</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Mail className="mt-0.5 h-4 w-4 text-accent" />
                    <span>arisingapore@arisimulation.com</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
