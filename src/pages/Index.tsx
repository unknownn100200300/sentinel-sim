import {
  ArrowRight,
  Cloud,
  Code,
  Crosshair,
  Database,
  FlaskConical,
  Globe,
  Rocket,
  ShieldCheck,
  Users,
  Wrench,
} from "lucide-react";
import { Link } from "react-router-dom";

import OurClientsSection from "@/components/OurClientsSection";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImg from "@/assets/hero-simulation.jpg";
import defenceImg from "@/assets/DefenceBridge.jpg";
import marineImg from "@/assets/Navigation Simulator.jpg";
import offshoreImg from "@/assets/Offshore Simulator.jpg";
import craneImg from "@/assets/PortsTerminals.jpg";
import portfolioImg from "@/assets/heroSectionImg.jpg";
import mapImg from "@/assets/global-map.jpg";
import certsImg from "@/assets/certifications.jpg";

const stats = [
  { value: "1300+", label: "Installations Worldwide" },
  { value: "26+", label: "Years of Expertise" },
  { value: "55+", label: "Copyrights & Patents" },
  { value: "75K+", label: "Certificates Generated" },
];

const industries = [
  {
    icon: Crosshair,
    title: "Defence",
    desc: "Naval warfare, anti-drone, submarine, and tactical combat training systems.",
  },
  {
    icon: Globe,
    title: "Maritime",
    desc: "Navigation, engine room, cargo handling, and GMDSS simulation.",
  },
  {
    icon: FlaskConical,
    title: "Offshore",
    desc: "DP, anchor handling, ROV, and offshore bridge simulation.",
  },
  {
    icon: Users,
    title: "Ports & Cranes",
    desc: "QC, RTG, RMG, mobile crane, and terminal operations training.",
  },
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

const techHighlights = [
  {
    icon: Rocket,
    title: "Physics Engines",
    desc: "High-fidelity hydrodynamic, aerodynamic, and mechanical models.",
  },
  {
    icon: ShieldCheck,
    title: "XR / VR Training",
    desc: "Immersive virtual and mixed reality training environments.",
  },
  {
    icon: Cloud,
    title: "Cloud Simulation",
    desc: "DNV-approved cloud-based simulation training and assessment.",
  },
  {
    icon: Code,
    title: "Real-Time Visualization",
    desc: "State-of-the-art 3D rendering with dynamic environmental effects, accurate coastlines, depth contours, and seabed profiles.",
  },
  {
    icon: Wrench,
    title: "Hardware-in-the-Loop",
    desc: "Integration with actual control panels, OEM equipment, swappable replica consoles, and 6-DOF motion platforms for authentic operator interaction.",
  },
  {
    icon: Database,
    title: "HLA & Interoperability",
    desc: "Defence-grade distributed simulation supporting multi-simulator interoperability with recording and playback and comprehensive debrief tools.",
  },
];


const Index = () => (
  <div>
    <section className="hero-section">
      <div className="hero-bg" style={{ backgroundImage: `url(${heroImg})` }} />
      <div className="hero-overlay" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <div className="animate-fade-up-delay-1">
              <h1 className="heading-balance text-4xl md:text-[54px] leading-[1.05] font-extrabold tracking-[-0.03em] mb-6">
                High-Fidelity Simulation
                <br />
                for <span className="accent">Mission-Critical</span> Training
              </h1>
            </div>

            <div className="animate-fade-up-delay-2">
              <p className="text-sm md:text-base text-muted-foreground max-w-[560px] mb-10 leading-relaxed ">
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
              <Link to="/products">
                <Button variant="outline" className="h-12 px-8">
                  Explore Products
                </Button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section className="section">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="heading-balance text-3xl md:text-4xl font-bold tracking-tight mb-6">About ARI Simulation</h2>
        <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-3xl">
          Applied Research International (ARI), the naval and marine simulation arm of Zen Technologies Limited, is a
          global leader in sophisticated simulation and virtual reality training solutions for the defence, marine &
          offshore industries. With over 26 years of expertise in advanced simulation — including real-time graphics,
          virtual/augmented reality, and dynamic modeling — ARI serves millions of users across 1300+ physical
          installations and cloud-based solutions.
        </p>
      </div>
    </section>

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

    <section className="section">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="accent text-xs tracking-[0.35em] mb-2">INDUSTRIES</p>
        <h2 className="heading-balance text-3xl md:text-4xl font-bold tracking-tight mb-10">Where We Deliver</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <Card
                key={industry.title}
                className="border-border/60 bg-card/60 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <CardContent className="p-6">
                  <Icon className="h-7 w-7 text-accent mb-4" />
                  <h3 className="text-base font-semibold mb-2">{industry.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{industry.desc}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-8">
          <Link to="/industries">
            <Button variant="outline">Explore Industries</Button>
          </Link>
        </div>
      </div>
    </section>

    <section className="section grid-bg">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="accent text-xs tracking-[0.35em] mb-2">PORTFOLIO</p>
        <h2 className="heading-balance text-3xl md:text-4xl font-bold tracking-tight mb-4">Simulation Suites</h2>
        <p className="text-sm md:text-base text-muted-foreground max-w-2xl mb-10 leading-relaxed">
          Comprehensive simulation products across defence, marine & offshore domains — from standalone trainers to fully
          integrated multi-simulator complexes.
        </p>

        <div className="mb-10 overflow-hidden rounded-xl border border-border/60">
          <img src={portfolioImg} alt="ARI Simulation Portfolio" className="block h-auto w-full" />
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

        <div className="mt-12 text-center">
          <Link to="/products">
            <Button className="h-11 px-6">
              View All Products <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="accent text-xs tracking-[0.35em] mb-2">TECHNOLOGY</p>
        <h2 className="heading-balance text-3xl md:text-4xl font-bold tracking-tight mb-10">Core Technologies</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {techHighlights.map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.title} className="border-border/60 bg-card/60 transition-all hover:-translate-y-1 hover:shadow-lg">
                <CardContent className="p-6">
                  <Icon className="h-6 w-6 text-accent mb-3" />
                  <h3 className="text-base font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>

    <section className="section">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <p className="accent text-xs tracking-[0.35em] mb-2">GLOBAL PRESENCE</p>
        <h2 className="heading-balance text-3xl md:text-4xl font-bold tracking-tight mb-4">Worldwide Deployments</h2>
        <p className="mx-auto max-w-xl text-sm md:text-base text-muted-foreground mb-10 leading-relaxed">
          1300+ installations across 60+ countries.
        </p>
        <div className="overflow-hidden rounded-xl border border-border/60">
          <img src={mapImg} alt="ARI Global Deployments Map" className="w-full" />
        </div>
      </div>
    </section>

    <section className="section section-alt">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <p className="accent text-xs tracking-[0.35em] mb-2">APPROVALS & ACCREDITATIONS</p>
        <h2 className="heading-balance text-3xl md:text-4xl font-bold tracking-tight mb-4">Globally Certified</h2>
        <p className="mx-auto max-w-2xl text-sm md:text-base text-muted-foreground mb-10 leading-relaxed">
          DNV approval for the entire range of marine & offshore simulation products. Quality certifications including
          ABS, LRQA, ISO 9001, ISO 14001, OHSAS, and ISMS.
        </p>

        <div className="mb-10 overflow-hidden rounded-xl border border-border/60">
          <img src={certsImg} alt="ARI Certifications and Accreditations" className="w-full" />
        </div>
      </div>
    </section>

    <OurClientsSection />

    <section className="section text-center">
      <div className="mx-auto max-w-2xl px-6 lg:px-8">
        <h2 className="heading-balance text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Ready to Elevate Your Training?
        </h2>
        <p className="text-sm md:text-base text-muted-foreground mb-8 leading-relaxed">
          Contact us for a customized demonstration of our simulation systems.
        </p>
        <Link to="/contact">
          <Button className="h-12 px-10">Request a Demo</Button>
        </Link>
      </div>
    </section>
  </div>
);

export default Index;
