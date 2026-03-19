import { useMemo } from "react";
import { Link } from "react-router-dom";

import clientsDefenceImg from "@/assets/Clients - 1 Defence Establishments & Govt. Bodies.jpg";
import clientsOemImg from "@/assets/Clients - 2 - OEM.jpg";
import clientsMarineImg from "@/assets/Clients - 3 - Marine.jpg";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

type OurClientsSectionProps = {
  variant?: "default" | "alt";
};

type ClientGroup = {
  key: string;
  label: string;
  title: string;
  description: string;
  img: string;
};

const OurClientsSection = ({ variant = "default" }: OurClientsSectionProps) => {
  const clientGroups = useMemo<ClientGroup[]>(
    () => [
      {
        key: "defence",
        label: "Defence & Govt.",
        title: "Defence Establishments & Government Bodies",
        description: "Trusted by defence organizations and government institutions for mission-ready training systems.",
        img: clientsDefenceImg,
      },
      {
        key: "oem",
        label: "OEM Partners",
        title: "OEM Partners",
        description: "Collaborating with leading OEMs to deliver integrated simulation solutions for modern training needs.",
        img: clientsOemImg,
      },
      {
        key: "marine",
        label: "Marine",
        title: "Marine",
        description: "Supporting marine academies and operators with high-fidelity simulators that improve safety and proficiency.",
        img: clientsMarineImg,
      },
    ],
    [],
  );

  const defaultValue = clientGroups[0]?.key;

  return (
    <section className={cn("section", variant === "alt" && "section-alt")}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="accent text-xs tracking-[0.35em] mb-2">OUR CLIENTS</p>
          <h2 className="heading-balance text-3xl md:text-4xl font-bold tracking-tight mb-3">Trusted Worldwide</h2>
          <p className="mx-auto max-w-2xl text-sm md:text-base text-muted-foreground leading-relaxed">
            Across defence, OEM partners, and marine training organizations, ARI Simulation supports teams with dependable,
            high-fidelity systems.
          </p>
        </div>

        <Card className="overflow-hidden rounded-2xl border-border/60 bg-card/35 backdrop-blur">
          <CardContent className="p-0">
            <Tabs defaultValue={defaultValue} className="w-full">
              <div className="border-b border-border bg-muted/10 px-4 py-4 md:px-6">
                <TabsList className="mx-auto h-auto flex flex-wrap justify-center gap-2 bg-transparent p-0">
                  {clientGroups.map((group) => (
                    <TabsTrigger
                      key={group.key}
                      value={group.key}
                      className="data-[state=active]:bg-accent/20 data-[state=active]:text-accent"
                    >
                      {group.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              {clientGroups.map((group) => (
                <TabsContent key={group.key} value={group.key} className="m-0">
                  <div className="p-6">
                    <div className="grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-center">
                      <div className="rounded-xl border border-border/60 bg-background/20 overflow-hidden">
                        <img src={group.img} alt={group.title} className="h-[320px] w-full object-contain p-4" />
                      </div>

                      <div>
                        <h3 className="heading-balance text-xl md:text-2xl font-bold tracking-tight mb-2">{group.title}</h3>
                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-5">
                          {group.description}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Want to see relevant deployments and case studies?{" "}
                          <Link to="/contact" className="text-accent hover:underline">
                            Contact us
                          </Link>{" "}
                          for a tailored walkthrough.
                        </p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default OurClientsSection;
