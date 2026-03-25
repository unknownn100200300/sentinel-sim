import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-simulation.jpg";
import defenceImg from "@/assets/DefenceBridge.jpg";
import marineImg from "@/assets/Navigation Simulator.jpg";
import offshoreImg from "@/assets/Offshore Simulator.jpg";
import craneImg from "@/assets/PortsTerminals.jpg";
import portfolioImg from "@/assets/heroSectionImg.jpg";

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
  </div>
);

export default Index;
