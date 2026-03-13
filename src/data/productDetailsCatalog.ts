import defenceImg from "@/assets/NavalSimulation.jpg";
import marineImg from "@/assets/MarineLogistic.jpeg";
import offshoreImg from "@/assets/Offshore Simulator-1.jpg";
import craneImg from "@/assets/PortsTerminals.jpg";
import heroImg from "@/assets/Cloud.jpg";
import { slugify } from "./products";

export type ProductDetail = {
  categoryKey: string;
  categoryLabel: string;
  title: string;
  slug: string;
  image: string;
  description: string;
};

const navalLabel = "Naval Simulators";
const marineLabel = "Marine & Logistics";
const offshoreLabel = "Offshore Simulation";
const portsLabel = "Ports & Terminals";
const digitalLabel = "Cloud & Digital";

export const productDetails: ProductDetail[] = [
  {
    categoryKey: "naval",
    categoryLabel: navalLabel,
    title: "Integrated Naval Simulation Complex",
    slug: slugify("Integrated Naval Simulation Complex"),
    image: defenceImg,
    description:
      "Multi-simulator ecosystem integrating Bridge, Engine Room, Command & Control and Platform Management Simulators for joint training across naval, air, land, and subsurface forces.",
  },
  {
    categoryKey: "naval",
    categoryLabel: navalLabel,
    title: "Naval Bridge Operations Simulator",
    slug: slugify("Naval Bridge Operations Simulator"),
    image: defenceImg,
    description: `The ARI vessel bridge simulator completely recreates the environment of a naval vessel bridge down to the last detail. Combined with our state-of-the-art visualisation systems and capable of being mounted on a motion platform, these simulators offer a completely realistic training environment for ship, convoy and fleet operations management.

Radar / ARPA Simulator

The Radio Detecting and Ranging (Radar) / Automatic Radar Plotting Aids (ARPA) simulator is built to comply with the IMO performance standards for Radar equipment to be used on board seagoing vessels. The simulator is designed to meet the requirements of IMO Model Courses 1.07 and 1.08. It is suitable for competence training and assessment in the operation and use of Radar equipment in accordance with STCW '2010 simulator-based training requirements.

Multiple Radar / ARPA types – either real OEM equipment or emulated Radars - are available to choose from.

ECDIS Simulator

ARI Electronic Chart Display and Information System (ECDIS) Simulator is a comprehensive training solution designed to comply with the relevant requirements of latest STCW amendments (2010 Manila amendments), under section(s) A-I/12, A-II/1 and A-II/2. Requirements of IMO Model Course 1.27 related to the use of simulation are fulfilled.

The ECDIS can be operated in either a standalone training mode or in conjunction with other necessary navigation aids and equipment.

GMDSS & Communications Simulator

The ARI Communications Simulator provides complete operational training in communication using equipment as found on sea-going vessels. The simulator complies with the Performance Standards for Simulators as defined by STCW and by DNV to the highest Class A Standard. Specific configurations are AMERC approved.

The ARI Communications Simulator provides an operating environment for the trainee similar to that of operating a communications station on a modern ship. It is suitable for the purpose of training personnel at all levels for handling distress and routine communication at sea using satellite and terrestrial communication equipment.`,
  },
  {
    categoryKey: "naval",
    categoryLabel: navalLabel,
    title: "Radar / ARPA Simulator",
    slug: slugify("Radar / ARPA Simulator"),
    image: defenceImg,
    description:
      "IMO-compliant radar training meeting Model Courses 1.07 and 1.08 with multiple OEM and emulated radar types.",
  },
  {
    categoryKey: "naval",
    categoryLabel: navalLabel,
    title: "ECDIS Simulator",
    slug: slugify("ECDIS Simulator"),
    image: defenceImg,
    description:
      "STCW 2010 compliant Electronic Chart Display and Information System training, standalone or integrated.",
  },
  {
    categoryKey: "naval",
    categoryLabel: navalLabel,
    title: "Submarine Simulator",
    slug: slugify("Submarine Simulator"),
    image: defenceImg,
    description:
      "High-fidelity submarine operations & navigation simulator covering navigation, propulsion, sonar tracking and emergency procedures.",
  },
  {
    categoryKey: "naval",
    categoryLabel: navalLabel,
    title: "DSRV Simulator",
    slug: slugify("DSRV Simulator"),
    image: defenceImg,
    description:
      "Deep Submergence Rescue Vehicle training with high-fidelity hydrodynamic modeling for underwater rescue operations.",
  },
  {
    categoryKey: "naval",
    categoryLabel: navalLabel,
    title: "Action Speed Tactical Trainer",
    slug: slugify("Action Speed Tactical Trainer"),
    image: defenceImg,
    description:
      "Multi-domain tactical training for ASW, AAW, Mine, Amphibious, and Electronic Warfare with realistic maritime environment.",
  },
  {
    categoryKey: "naval",
    categoryLabel: navalLabel,
    title: "CIC Simulator",
    slug: slugify("CIC Simulator"),
    image: defenceImg,
    description:
      "Combat Information Centre training with integrated Surface Radar, Sonar, EW Suite, and Fire Control System modules.",
  },
  {
    categoryKey: "naval",
    categoryLabel: navalLabel,
    title: "Fast Attack Craft Simulator",
    slug: slugify("Fast Attack Craft Simulator"),
    image: defenceImg,
    description:
      "Full-mission FAC training with 360° HFOV, weapon system simulation, 6-DOF motion platform, and combat readiness drills.",
  },
  {
    categoryKey: "naval",
    categoryLabel: navalLabel,
    title: "Machinery Operations Simulator",
    slug: slugify("Machinery Operations Simulator"),
    image: defenceImg,
    description:
      "Full mission naval machinery operations including engines, turbines, waterjet propulsors, and power management systems.",
  },
  {
    categoryKey: "naval",
    categoryLabel: navalLabel,
    title: "Cyber Warfare Simulator",
    slug: slugify("Cyber Warfare Simulator"),
    image: defenceImg,
    description: "Training platform for naval cyber warfare operations and defence.",
  },
  {
    categoryKey: "naval",
    categoryLabel: navalLabel,
    title: "Maritime Domain Awareness",
    slug: slugify("Maritime Domain Awareness"),
    image: defenceImg,
    description:
      "Coastal security simulation covering anti-smuggling, anti-piracy, disaster management, and fleet maneuvers.",
  },

  {
    categoryKey: "marine",
    categoryLabel: marineLabel,
    title: "Navigation Simulator",
    slug: slugify("Navigation Simulator"),
    image: marineImg,
    description:
      "Full Mission Ship Maneuvering Simulator per IMO/STCW 2010, DNV Class A. Includes RADAR-ARPA, ECDIS, and configurations from tabletop to 360° field of view.",
  },
  {
    categoryKey: "marine",
    categoryLabel: marineLabel,
    title: "Tug Simulator",
    slug: slugify("Tug Simulator"),
    image: marineImg,
    description:
      "Comprehensive tug handling training including ASD tugs with sophisticated behavioral models for complex maneuvers.",
  },
  {
    categoryKey: "marine",
    categoryLabel: marineLabel,
    title: "VTS Simulator",
    slug: slugify("VTS Simulator"),
    image: marineImg,
    description:
      "Vessel Traffic Service training per IALA V-103 for real-world traffic management under normal and emergency conditions.",
  },
  {
    categoryKey: "marine",
    categoryLabel: marineLabel,
    title: "GMDSS Simulator",
    slug: slugify("GMDSS Simulator"),
    image: marineImg,
    description:
      "Complete GMDSS operational training compliant with STCW and DNV Class A Standards.",
  },
  {
    categoryKey: "marine",
    categoryLabel: marineLabel,
    title: "Marine Operations Centre",
    slug: slugify("Marine Operations Centre"),
    image: marineImg,
    description:
      "MOC simulator per IALA recommendations for vessel traffic management personnel training.",
  },
  {
    categoryKey: "marine",
    categoryLabel: marineLabel,
    title: "Engine Room Simulator",
    slug: slugify("Engine Room Simulator"),
    image: marineImg,
    description:
      "Multi-functional training for Marine Engineers at all levels. Supports slow, medium & high-speed diesel, electric, azimuth, and waterjet propulsion.",
  },
  {
    categoryKey: "marine",
    categoryLabel: marineLabel,
    title: "Cargo Handling Simulator",
    slug: slugify("Cargo Handling Simulator"),
    image: marineImg,
    description:
      "Real-time process flow control for Oil, LPG, LNG, Chemical tankers, and LNG Bunkering operations.",
  },
  {
    categoryKey: "marine",
    categoryLabel: marineLabel,
    title: "Feasibility Studies (SAFEPORT)",
    slug: slugify("Feasibility Studies (SAFEPORT)"),
    image: marineImg,
    description:
      "Navigation and maneuvering simulation studies for port development — analyzing vessel operations, tug requirements, and berth approaches.",
  },

  {
    categoryKey: "offshore",
    categoryLabel: offshoreLabel,
    title: "Offshore Bridge Simulator",
    slug: slugify("Offshore Bridge Simulator"),
    image: offshoreImg,
    description:
      "Immersive VR experience with fore and aft bridge stations, supporting conventional telegraphs, azimuth controls, Z-drives, and joystick controls.",
  },
  {
    categoryKey: "offshore",
    categoryLabel: offshoreLabel,
    title: "DP Simulator",
    slug: slugify("DP Simulator"),
    image: offshoreImg,
    description:
      "Dynamic Positioning training certified by NI and DNV to Class A Standards, scalable from standalone to full bridge integration.",
  },
  {
    categoryKey: "offshore",
    categoryLabel: offshoreLabel,
    title: "Anchor Handling Simulator",
    slug: slugify("Anchor Handling Simulator"),
    image: offshoreImg,
    description:
      "Physics-based anchor handling simulation for deployment, retrieval, and multi-vessel mission operations.",
  },
  {
    categoryKey: "offshore",
    categoryLabel: offshoreLabel,
    title: "Offshore Engine Room Simulator",
    slug: slugify("Offshore Engine Room Simulator"),
    image: offshoreImg,
    description:
      "Complete offshore vessel machinery plant simulation supporting conventional and diesel electric azimuth propulsion.",
  },
  {
    categoryKey: "offshore",
    categoryLabel: offshoreLabel,
    title: "Subsea / ROV Simulator",
    slug: slugify("Subsea / ROV Simulator"),
    image: offshoreImg,
    description:
      "DNV Class A certified ROV simulator for field visualization, mission planning, and pilot training with interactive manipulators.",
  },

  {
    categoryKey: "ports",
    categoryLabel: portsLabel,
    title: "Quay Crane (QC) Simulator",
    slug: slugify("Quay Crane (QC) Simulator"),
    image: craneImg,
    description:
      "Ship-to-shore container crane operations training with realistic visual and motion systems.",
  },
  {
    categoryKey: "ports",
    categoryLabel: portsLabel,
    title: "RTG Crane Simulator",
    slug: slugify("RTG Crane Simulator"),
    image: craneImg,
    description: "Rubber Tired Gantry crane training for container terminal operations.",
  },
  {
    categoryKey: "ports",
    categoryLabel: portsLabel,
    title: "RMG Crane Simulator",
    slug: slugify("RMG Crane Simulator"),
    image: craneImg,
    description: "Rail Mounted Gantry crane simulation for automated terminal operations.",
  },
  {
    categoryKey: "ports",
    categoryLabel: portsLabel,
    title: "Mobile Crane Simulator",
    slug: slugify("Mobile Crane Simulator"),
    image: craneImg,
    description: "Mobile telescopic boom crane and tower type construction crane training.",
  },
  {
    categoryKey: "ports",
    categoryLabel: portsLabel,
    title: "Offshore Pedestal Crane",
    slug: slugify("Offshore Pedestal Crane"),
    image: craneImg,
    description: "Pedestal crane and knuckle boom crane simulation for offshore operations.",
  },
  {
    categoryKey: "ports",
    categoryLabel: portsLabel,
    title: "Straddle Carrier Simulator",
    slug: slugify("Straddle Carrier Simulator"),
    image: craneImg,
    description:
      "Container straddle carrier operations with swappable replica control consoles.",
  },

  {
    categoryKey: "digital",
    categoryLabel: digitalLabel,
    title: "Automated Assessment (ASBA)",
    slug: slugify("Automated Assessment (ASBA)"),
    image: heroImg,
    description:
      "Smart, adaptive scenario-based assessment with engagement monitoring, dashboard analytics, and secure proctoring.",
  },
  {
    categoryKey: "digital",
    categoryLabel: digitalLabel,
    title: "Cloud-Based Simulation Training",
    slug: slugify("Cloud-Based Simulation Training"),
    image: heroImg,
    description:
      "Fully online simulation training approved by IADC & IWCF for drilling & well control. DNV approved marine modules. Hybrid and centre-based options available.",
  },
  {
    categoryKey: "digital",
    categoryLabel: digitalLabel,
    title: "Custom Simulation Systems",
    slug: slugify("Custom Simulation Systems"),
    image: heroImg,
    description:
      "Bespoke simulators tailored to specific operational requirements with hardware-in-the-loop integration.",
  },
  {
    categoryKey: "digital",
    categoryLabel: digitalLabel,
    title: "Visualization Solutions",
    slug: slugify("Visualization Solutions"),
    image: heroImg,
    description:
      "Advanced real-time 3D visualization with dynamic environmental effects for simulation and training.",
  },
];

const keyOf = (categoryKey: string, slug: string) => `${categoryKey}:${slug}`;

const detailsByKey = new Map<string, ProductDetail>(
  productDetails.map((p) => [keyOf(p.categoryKey, p.slug), p])
);

export const getProductDetailByRoute = (
  categoryKey: string | undefined,
  productSlug: string | undefined
) => {
  if (!categoryKey || !productSlug) return null;
  return detailsByKey.get(keyOf(categoryKey, productSlug)) ?? null;
};
