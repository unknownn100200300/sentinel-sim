import { Typography, Row, Col, Card, Tabs } from 'antd';
import { Link } from 'react-router-dom';
import { productPath } from '@/data/products';
import { productCategories } from '@/data/productCatalog';

const { Title, Paragraph } = Typography;

const categories = productCategories;

/*
  {
    key: 'naval', label: 'Naval Simulators', image: defenceImg,
    intro: 'Designed and built for high integration and interoperability, enabling multi-force mission training. Delivered to numerous global armed forces.',
    products: [
      { title: 'Integrated Naval Simulation Complex', desc: 'Multi-simulator ecosystem integrating Bridge, Engine Room, Command & Control and Platform Management Simulators for joint training across naval, air, land, and subsurface forces.' },
      { title: 'Naval Bridge Operations Simulator', desc: 'Complete recreation of a naval vessel bridge with state-of-the-art visualisation and motion platform support for ship, convoy and fleet operations.' },
      { title: 'Radar / ARPA Simulator', desc: 'IMO-compliant radar training meeting Model Courses 1.07 and 1.08 with multiple OEM and emulated radar types.' },
      { title: 'ECDIS Simulator', desc: 'STCW 2010 compliant Electronic Chart Display and Information System training, standalone or integrated.' },
      { title: 'Submarine Simulator', desc: 'High-fidelity submarine operations & navigation simulator covering navigation, propulsion, sonar tracking and emergency procedures.' },
      { title: 'DSRV Simulator', desc: 'Deep Submergence Rescue Vehicle training with high-fidelity hydrodynamic modeling for underwater rescue operations.' },
      { title: 'Action Speed Tactical Trainer', desc: 'Multi-domain tactical training for ASW, AAW, Mine, Amphibious, and Electronic Warfare with realistic maritime environment.' },
      { title: 'CIC Simulator', desc: 'Combat Information Centre training with integrated Surface Radar, Sonar, EW Suite, and Fire Control System modules.' },
      { title: 'Fast Attack Craft Simulator', desc: 'Full-mission FAC training with 360° HFOV, weapon system simulation, 6-DOF motion platform, and combat readiness drills.' },
      { title: 'Machinery Operations Simulator', desc: 'Full mission naval machinery operations including engines, turbines, waterjet propulsors, and power management systems.' },
      { title: 'Cyber Warfare Simulator', desc: 'Training platform for naval cyber warfare operations and defence.' },
      { title: 'Maritime Domain Awareness', desc: 'Coastal security simulation covering anti-smuggling, anti-piracy, disaster management, and fleet maneuvers.' },
    ],
  },
  {
    key: 'marine', label: 'Marine & Logistics', image: marineImg,
    intro: 'Complete marine simulation portfolio covering Bridge, Engine, Cargo and Communication — DNV certified to the highest Class A Standards.',
    products: [
      { title: 'Navigation Simulator', desc: 'Full Mission Ship Maneuvering Simulator per IMO/STCW 2010, DNV Class A. Includes RADAR-ARPA, ECDIS, and configurations from tabletop to 360° field of view.' },
      { title: 'Tug Simulator', desc: 'Comprehensive tug handling training including ASD tugs with sophisticated behavioral models for complex maneuvers.' },
      { title: 'VTS Simulator', desc: 'Vessel Traffic Service training per IALA V-103 for real-world traffic management under normal and emergency conditions.' },
      { title: 'GMDSS Simulator', desc: 'Complete GMDSS operational training compliant with STCW and DNV Class A Standards.' },
      { title: 'Marine Operations Centre', desc: 'MOC simulator per IALA recommendations for vessel traffic management personnel training.' },
      { title: 'Engine Room Simulator', desc: 'Multi-functional training for Marine Engineers at all levels. Supports slow, medium & high-speed diesel, electric, azimuth, and waterjet propulsion.' },
      { title: 'Cargo Handling Simulator', desc: 'Real-time process flow control for Oil, LPG, LNG, Chemical tankers, and LNG Bunkering operations.' },
      { title: 'Feasibility Studies (SAFEPORT)', desc: 'Navigation and maneuvering simulation studies for port development — analyzing vessel operations, tug requirements, and berth approaches.' },
    ],
  },
  {
    key: 'offshore', label: 'Offshore Simulation', image: offshoreImg,
    intro: 'Complete offshore vessel bridge experience with high-fidelity visual systems supporting PSVs, AHTSVs, MPSVs, MSVs and more.',
    products: [
      { title: 'Offshore Bridge Simulator', desc: 'Immersive VR experience with fore and aft bridge stations, supporting conventional telegraphs, azimuth controls, Z-drives, and joystick controls.' },
      { title: 'DP Simulator', desc: 'Dynamic Positioning training certified by NI and DNV to Class A Standards, scalable from standalone to full bridge integration.' },
      { title: 'Anchor Handling Simulator', desc: 'Physics-based anchor handling simulation for deployment, retrieval, and multi-vessel mission operations.' },
      { title: 'Offshore Engine Room Simulator', desc: 'Complete offshore vessel machinery plant simulation supporting conventional and diesel electric azimuth propulsion.' },
      { title: 'Subsea / ROV Simulator', desc: 'DNV Class A certified ROV simulator for field visualization, mission planning, and pilot training with interactive manipulators.' },
    ],
  },
  {
    key: 'ports', label: 'Ports & Terminals', image: craneImg,
    intro: 'Broad range of crane simulators for container, offshore and bulk handling operations — from desktop to full mission solutions.',
    products: [
      { title: 'Quay Crane (QC) Simulator', desc: 'Ship-to-shore container crane operations training with realistic visual and motion systems.' },
      { title: 'RTG Crane Simulator', desc: 'Rubber Tired Gantry crane training for container terminal operations.' },
      { title: 'RMG Crane Simulator', desc: 'Rail Mounted Gantry crane simulation for automated terminal operations.' },
      { title: 'Mobile Crane Simulator', desc: 'Mobile telescopic boom crane and tower type construction crane training.' },
      { title: 'Offshore Pedestal Crane', desc: 'Pedestal crane and knuckle boom crane simulation for offshore operations.' },
      { title: 'Straddle Carrier Simulator', desc: 'Container straddle carrier operations with swappable replica control consoles.' },
    ],
  },
  {
    key: 'digital', label: 'Cloud & Digital', image: heroImg,
    intro: 'Digital suite complementing physical simulators — DNV approved cloud-based training with 75,000+ certificates generated.',
    products: [
      { title: 'Automated Assessment (ASBA)', desc: 'Smart, adaptive scenario-based assessment with engagement monitoring, dashboard analytics, and secure proctoring.' },
      { title: 'Cloud-Based Simulation Training', desc: 'Fully online simulation training approved by IADC & IWCF for drilling & well control. DNV approved marine modules. Hybrid and centre-based options available.' },
      { title: 'Custom Simulation Systems', desc: 'Bespoke simulators tailored to specific operational requirements with hardware-in-the-loop integration.' },
      { title: 'Visualization Solutions', desc: 'Advanced real-time 3D visualization with dynamic environmental effects for simulation and training.' },
    ],
  },
];
*/

const Products = () => (
  <div className="section">
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 48px' }}>
      <Paragraph className="accent" style={{ letterSpacing: 3, fontSize: 12, marginBottom: 8 }}>PRODUCTS</Paragraph>
      <Title level={2} style={{ marginBottom: 8, fontWeight: 700 }}>Simulation Systems</Title>
      <Paragraph type="secondary" style={{ marginBottom: 48, maxWidth: 700 }}>
        ARI offers sophisticated simulator products for armed forces, maritime academies, offshore operators, and port authorities — covering training, tactical proving, mission rehearsal, and assessment.
      </Paragraph>
      <Tabs
        defaultActiveKey="naval"
        items={categories.map(cat => ({
          key: cat.key,
          label: <span style={{ color: '#e5e7eb' }}>{cat.label}</span>,
          children: (
            <div>
              <div className="product-image-card" style={{ marginBottom: 24, borderRadius: 12, overflow: 'hidden' }}>
                <img src={cat.image} alt={cat.label} style={{ width: '100%', height: 480, objectFit: 'cover' }} />
              </div>
              <Paragraph type="secondary" style={{ fontSize: 14, marginBottom: 24, maxWidth: 800 }}>{cat.intro}</Paragraph>
              <Row gutter={[24, 24]}>
                {cat.products.map(p => (
                  <Col xs={24} sm={12} md={8} key={p.title}>
                    <Link to={productPath(cat.key, p.title)} style={{ display: 'block' }}>
                      <Card hoverable style={{ height: '100%' }}>
                        <Title level={5} style={{ marginBottom: 8 }}>{p.title}</Title>
                        <Paragraph type="secondary" style={{ fontSize: 13 }}>{p.desc}</Paragraph>
                      </Card>
                    </Link>
                  </Col>
                ))}
              </Row>
            </div>
          ),
        }))}
      />
    </div>
  </div>
);

export default Products;
