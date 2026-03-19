import { BookOpen, Crosshair, FlaskConical, Globe, Lightbulb, ShieldCheck } from "lucide-react";

import navalImg from "@/assets/naval-forces.jpg";
import { Card, CardContent } from "@/components/ui/card";

const sectors = [
  {
    icon: Crosshair,
    title: "Naval Forces",
    desc: "Integrated naval simulation complexes, bridge operations, submarine, CIC, ASTT, and FAC simulators for navies worldwide. Multi-force joint training with HLA interoperability.",
  },
  {
    icon: Globe,
    title: "Port Authorities",
    desc: "QC, RTG, RMG, pedestal, straddle carrier, and mobile crane simulators. SAFEPORT feasibility studies for port development and vessel navigation analysis.",
  },
  {
    icon: BookOpen,
    title: "Maritime Academies",
    desc: "DNV Class A certified navigation, engine room, cargo handling, GMDSS, and VTS simulators. STCW-compliant training and assessment solutions.",
  },
  {
    icon: Lightbulb,
    title: "Defence Research",
    desc: "Cyber warfare simulation, maritime domain awareness, coastal security, and joint military operations. Defence-grade network compatible distributed simulation.",
  },
  {
    icon: ShieldCheck,
    title: "Government Agencies",
    desc: "Proven supplier to defence establishments and government maritime administrations globally. ISO 9001 & ISO 14001 certified with confidential data protection.",
  },
  {
    icon: FlaskConical,
    title: "Offshore Operators",
    desc: "DP, anchor handling, ROV, and offshore bridge simulation for mission-critical offshore training and assessment.",
  },
];

const Industries = () => (
  <div className="section">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="product-image-card mb-12 rounded-xl overflow-hidden ring-1 ring-border/60">
        <img src={navalImg} alt="Naval operations" className="h-[340px] w-full object-cover" />
        <div className="overlay p-8">
          <p className="accent text-xs tracking-[0.35em] mb-2">INDUSTRIES</p>
          <h1 className="heading-balance text-3xl md:text-4xl font-bold tracking-tight m-0">Industry Solutions</h1>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sectors.map((sector) => {
          const Icon = sector.icon;
          return (
            <Card key={sector.title} className="h-full border-border/60 bg-card/60 transition-all hover:-translate-y-1 hover:shadow-lg">
              <CardContent className="p-7">
                <Icon className="h-8 w-8 text-accent mb-4" />
                <h2 className="text-lg font-semibold tracking-tight mb-2">{sector.title}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">{sector.desc}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  </div>
);

export default Industries;
