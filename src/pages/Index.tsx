import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImg from "@/assets/hero-simulation.jpg";
import defenceImg from "@/assets/DefenceBridge.jpg";
import marineImg from "@/assets/Navigation Simulator.jpg";
import offshoreImg from "@/assets/Offshore Simulator.jpg";
import craneImg from "@/assets/PortsTerminals.jpg";
import portfolioImg from "@/assets/heroSectionImg.jpg";
import clientsCollageImg from "@/assets/clients-collage.png";
import oemPartnersCollageImg from "@/assets/oem-partners-collage.png";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const stats = [
  { value: "1300+", label: "Installations Worldwide" },
  { value: "26+", label: "Years of Expertise" },
  { value: "55+", label: "Copyrights & Patents" },
  { value: "60+", label: "Number of Countries" },
];

const productCards = [
  {
    img: defenceImg,
    title: "Defence Simulation",
    tag: "DEFENCE",
    desc: "Naval bridge, submarine, CIC, ASTT, FAC & cyber warfare simulators.",
  },
  {
    img: marineImg,
    title: "Marine & Logistics",
    tag: "MARITIME",
    desc: "Navigation, engine room, cargo handling & VTS simulators.",
  },
  {
    img: offshoreImg,
    title: "Offshore Simulation",
    tag: "OFFSHORE",
    desc: "DP, anchor handling, offshore bridge & ROV simulators.",
  },
  {
    img: craneImg,
    title: "Ports & Terminals",
    tag: "INDUSTRIAL",
    desc: "QC, RTG, RMG, pedestal, straddle carrier & mobile crane simulators.",
  },
];

const industries = [
  { value: "defence", label: "Defence / Naval Forces" },
  { value: "maritime", label: "Maritime Academies" },
  { value: "offshore", label: "Oil & Gas / Offshore" },
  { value: "port", label: "Ports & Terminals" },
  { value: "government", label: "Government / Administration" },
  { value: "other", label: "Other" },
];

const Index = () => (
  <div>
    {/* Hero */}
    <section className="hero-section">
      <div className="hero-bg" style={{ backgroundImage: `url(${heroImg})` }} />
      <div className="hero-overlay" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <div className="animate-fade-up-delay-1">
              <h1 className="heading-balance text-4xl md:text-[54px] leading-[1.05] font-extrabold tracking-[-0.03em] mb-6">
                Solution for
                <br />
                <span className="accent">Mission-Critical Operations</span>
              </h1>
            </div>

            <div className="animate-fade-up-delay-2">
              <p className="text-sm md:text-base text-muted-foreground max-w-[560px] mb-10 leading-relaxed">
                Global leader in sophisticated simulation and virtual reality training solutions for defence, marine &
                offshore industries. Over 26 years of expertise with 1300+ installations worldwide.
              </p>
            </div>

            <div className="animate-fade-up-delay-3 flex flex-wrap gap-3">
              <Link to="/contact">
                <Button className="h-12 px-8">
                  Request Demo <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Button variant="outline" className="h-12 px-8" disabled>
                Explore Products
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="section section-alt">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={stat.label} className={`text-center animate-fade-up-delay-${index % 4}`}>
              <div className="stat-value">{stat.value}</div>
              <p className="mt-2 text-xs tracking-wide text-muted-foreground">{stat.label.toUpperCase()}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Portfolio / Simulation Suites */}
    <section className="section grid-bg">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-4xl text-center">
          <p className="accent mb-3 text-xs tracking-[0.35em]">OUR DOMAINS</p>
          <h2 className="heading-balance text-3xl font-bold tracking-tight md:text-5xl">
            From naval commands to offshore platform
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-xl">
            ARI delivers purpose-built simulation for the world's most demanding operational environments.
          </p>
        </div>

        <div className="mb-10 overflow-hidden rounded-xl border border-border/60">
          <img src={portfolioImg} alt="ARI Simulation Portfolio" className="block h-auto w-full" />
        </div>

        <div className="mt-14 mb-12 rounded-2xl border border-border/60 bg-white px-6 py-8 shadow-sm md:px-8">
          <div className="mb-4">
            <p className="accent mb-3 text-xs tracking-[0.35em]">CLIENTS</p>
          </div>

          <div className="mt-8 overflow-hidden rounded-xl border border-border/60 bg-white p-2 md:p-4">
            <img src={clientsCollageImg} alt="ARI Simulation clients" className="block h-auto w-full" />
          </div>
        </div>

        <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="accent mb-3 text-xs tracking-[0.35em]">OUR DOMAINS</p>
            <h2 className="heading-balance text-3xl font-bold tracking-tight md:text-4xl">Our Simulation Suites</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              Standalone trainers to fully integrated multi-station complexes - every system purpose-built, every detail
              certified.
            </p>
          </div>

        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          {productCards.map((product) => (
            <div key={product.title} className="product-image-card ring-1 ring-border/60">
              <img src={product.img} alt={product.title} />
              <div className="overlay">
                <p className="accent text-[11px] tracking-[0.25em] mb-1">{product.tag}</p>
                <p className="text-sm font-semibold m-0">{product.title}</p>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{product.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button className="h-11 px-6" disabled>
            Explore All Products <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>

    <section className="section pt-8 md:pt-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 rounded-2xl border border-border/60 bg-white px-6 py-8 shadow-sm md:px-8">
          <div className="mb-4">
            <p className="accent mb-3 text-xs tracking-[0.35em]">OUR OEM PARTNERS</p>
          </div>

          <div className="mt-8 overflow-hidden rounded-xl border border-border/60 bg-white p-2 md:p-4">
            <img src={oemPartnersCollageImg} alt="ARI Simulation OEM partners" className="block h-auto w-full" />
          </div>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="accent mb-2 text-xs tracking-[0.35em]">CONTACT</p>
        <h2 className="heading-balance mb-2 text-3xl font-bold tracking-tight md:text-4xl">Get in Touch</h2>
        <p className="mb-10 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
          Request a demo or discuss your simulation requirements with our team.
        </p>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.4fr_1fr]">
          <Card className="border-border/60 bg-card/60">
            <CardContent className="p-7">
              <h3 className="mb-6 text-xl font-semibold tracking-tight">Request a Demo</h3>

              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="home-name">Name</Label>
                    <Input id="home-name" placeholder="Full name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="home-org">Organization</Label>
                    <Input id="home-org" placeholder="Company / Agency" />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="home-email">Email</Label>
                    <Input id="home-email" type="email" placeholder="email@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="home-phone">Phone</Label>
                    <Input id="home-phone" placeholder="+1 234 567 890" />
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
                  <Label htmlFor="home-message">Message</Label>
                  <Textarea id="home-message" rows={5} placeholder="Describe your simulation requirements..." />
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
                <h3 className="mb-4 text-xl font-semibold tracking-tight">Headquarters</h3>
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
                <h3 className="mb-4 text-xl font-semibold tracking-tight">Global Offices</h3>

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
    </section>
  </div>
);

export default Index;
