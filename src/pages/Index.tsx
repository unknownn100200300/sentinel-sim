import { Typography, Button, Row, Col, Card, Space } from 'antd';
import { ArrowRightOutlined, GlobalOutlined, SafetyCertificateOutlined, ExperimentOutlined, TeamOutlined, AimOutlined, RocketOutlined, CloudOutlined, CodeOutlined, ToolOutlined, DatabaseOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import heroImg from '@/assets/hero-simulation.jpg';
import defenceImg from '@/assets/DefenceBridge.jpg';
import marineImg from '@/assets/Navigation Simulator.jpg';
import offshoreImg from '@/assets/Offshore Simulator.jpg';
import craneImg from '@/assets/PortsTerminals.jpg';
import portfolioImg from '@/assets/heroSectionImg.jpg';
import mapImg from '@/assets/global-map.jpg';
import certsImg from '@/assets/certifications.jpg';
import OurClientsSection from '@/components/OurClientsSection';

const { Title, Paragraph, Text } = Typography;

const stats = [
  { value: '1300+', label: 'Installations Worldwide' },
  { value: '26+', label: 'Years of Expertise' },
  { value: '55+', label: 'Copyrights & Patents' },
  { value: '75K+', label: 'Certificates Generated' },
];

const industries = [
  { icon: <AimOutlined style={{ fontSize: 28, color: '#B8FF57' }} />, title: 'Defence', desc: 'Naval warfare, anti-drone, submarine, and tactical combat training systems.' },
  { icon: <GlobalOutlined style={{ fontSize: 28, color: '#B8FF57' }} />, title: 'Maritime', desc: 'Navigation, engine room, cargo handling, and GMDSS simulation.' },
  { icon: <ExperimentOutlined style={{ fontSize: 28, color: '#B8FF57' }} />, title: 'Offshore', desc: 'DP, anchor handling, ROV, and offshore bridge simulation.' },
  { icon: <TeamOutlined style={{ fontSize: 28, color: '#B8FF57' }} />, title: 'Ports & Cranes', desc: 'QC, RTG, RMG, mobile crane, and terminal operations training.' },
];

const productCards = [
  { img: defenceImg, title: 'Defence Simulation', tag: 'DEFENCE', desc: 'Naval bridge, submarine, CIC, ASTT, FAC & cyber warfare simulators.' },
  { img: marineImg, title: 'Marine & Logistics', tag: 'MARITIME', desc: 'Navigation, engine room, cargo handling & VTS simulators.' },
  { img: offshoreImg, title: 'Offshore Simulation', tag: 'OFFSHORE', desc: 'DP, anchor handling, offshore bridge & ROV simulators.' },
  { img: craneImg, title: 'Ports & Terminals', tag: 'INDUSTRIAL', desc: 'QC, RTG, RMG, pedestal, straddle carrier & mobile crane simulators.' },
];

const techHighlights = [
  { icon: <RocketOutlined style={{ fontSize: 24, color: '#B8FF57' }} />, title: 'Physics Engines', desc: 'High-fidelity hydrodynamic, aerodynamic, and mechanical models.' },
  { icon: <SafetyCertificateOutlined style={{ fontSize: 24, color: '#B8FF57' }} />, title: 'XR / VR Training', desc: 'Immersive virtual and mixed reality training environments.' },
  { icon: <CloudOutlined style={{ fontSize: 24, color: '#B8FF57' }} />, title: 'Cloud Simulation', desc: 'DNV-approved cloud-based simulation training and assessment.' },
  { icon: <CodeOutlined style={{ fontSize: 24, color: '#B8FF57' }} />, title: 'Real-Time Visualization', desc: 'State-of-the-art 3D rendering with dynamic environmental effects, accurate coastlines, depth contours, and seabed profiles.' },
  { icon: <ToolOutlined style={{ fontSize: 24, color: '#B8FF57' }} />, title: 'Hardware-in-the-Loop', desc: 'Integration with actual control panels, OEM equipment, swappable replica consoles, and 6-DOF motion platforms for authentic operator interaction.' },
  { icon: <DatabaseOutlined style={{ fontSize: 24, color: '#B8FF57' }} />, title: 'HLA & Interoperability', desc: 'Defence-grade distributed simulation supporting multi-simulator interoperability with recording and playback and comprehensive debrief tools.' },
];

const certifications = ['DNV GL', 'ABS', 'LRQA', 'IMO STCW', 'IADC', 'IWCF', 'ISO 9001', 'ISO 14001'];

const Index = () => (
  <div>
    {/* Hero */}
    <div className="hero-section">
      <div className="hero-bg" style={{ backgroundImage: `url(${heroImg})` }} />
      <div className="hero-overlay" />
      <div className="hero-scanline" />
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 48px', position: 'relative', zIndex: 1, width: '100%' }}>
        <Row align="middle">
          <Col xs={24} md={16}>
            <div className="animate-fade-up-delay-1">
              <Title style={{ fontSize: 52, lineHeight: 1.08, marginBottom: 24, fontWeight: 800, letterSpacing: -1 }}>
                High-Fidelity Simulation<br />
                for <span className="accent">Mission-Critical</span> Training
              </Title>
            </div>
            <div className="animate-fade-up-delay-2">
              <Paragraph style={{ fontSize: 17, color: '#9CA3AF', maxWidth: 560, marginBottom: 40, lineHeight: 1.7 }}>
                Global leader in sophisticated simulation and virtual reality training solutions for defence, marine & offshore industries. Over 26 years of expertise with 1300+ installations worldwide.
              </Paragraph>
            </div>
            <div className="animate-fade-up-delay-3">
              <Space size="middle">
                <Link to="/contact"><Button type="primary" size="large" style={{ height: 48, paddingInline: 32 }}>Request Demo <ArrowRightOutlined /></Button></Link>
                <Link to="/products"><Button size="large" style={{ height: 48, paddingInline: 32 }}>Explore Products</Button></Link>
              </Space>
            </div>
          </Col>
        </Row>
      </div>
    </div>
{/* About ARI */}
<div className="section">
  <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 48px' }}>
    <Title level={2} style={{ marginBottom: 24, fontWeight: 700 }}>
      About ARI Simulation
    </Title>

    <Paragraph
      type="secondary"
      style={{
        fontSize: 16,
        lineHeight: 1.8,
        maxWidth: 900
      }}
    >
      Applied Research International (ARI), the naval and marine simulation arm of 
      Zen Technologies Limited, is a global leader in sophisticated simulation and 
      virtual reality training solutions for the defence, marine & offshore industries. 
      With over 26 years of expertise in advanced simulation — including real-time 
      graphics, virtual/augmented reality, and dynamic modeling — ARI serves millions 
      of users across 1300+ physical installations and cloud-based solutions.
    </Paragraph>

  </div>
</div>
    {/* Stats */}
    <div className="section section-alt">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 48px' }}>
        <Row gutter={[32, 48]}>
          {stats.map((s, i) => (
            <Col xs={12} md={6} key={s.label}>
              <div style={{ textAlign: 'center' }} className={`animate-fade-up-delay-${i % 4}`}>
                <div className="stat-value">{s.value}</div>
                <Paragraph type="secondary" style={{ marginTop: 8, fontSize: 13, letterSpacing: 1 }}>{s.label.toUpperCase()}</Paragraph>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>

    {/* Portfolio */}
    <div className="section grid-bg">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 48px' }}>
        <Paragraph className="accent" style={{ letterSpacing: 3, fontSize: 12, marginBottom: 8 }}>PORTFOLIO</Paragraph>
        <Title level={2} style={{ marginBottom: 16, fontWeight: 700 }}>Simulation Suites</Title>
        <Paragraph type="secondary" style={{ maxWidth: 700, marginBottom: 48, fontSize: 15 }}>
          Comprehensive simulation products across defence, marine & offshore domains — from standalone trainers to fully integrated multi-simulator complexes.
        </Paragraph>
<div style={{ marginBottom: 38, borderRadius: 12, overflow: "hidden" }}>
  <img
    src={portfolioImg}
    alt="ARI Simulation Portfolio"
    style={{
      width: "100%",
      height: "auto",   // important
      display: "block",
      borderRadius: 12
    }}
  />
</div>
        <Row gutter={[24, 24]}>
          {productCards.map(p => (
            <Col xs={24} sm={12} md={6} key={p.title}>
              <div className="product-image-card">
                <img src={p.img} alt={p.title} />
                <div className="overlay">
                  <Paragraph className="accent" style={{ fontSize: 11, letterSpacing: 2, marginBottom: 4 }}>{p.tag}</Paragraph>
                  <Title level={5} style={{ margin: 0, fontSize: 14 }}>{p.title}</Title>
                  <Paragraph type="secondary" style={{ fontSize: 12, marginBottom: 0, marginTop: 4 }}>{p.desc}</Paragraph>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <Link to="/products"><Button type="primary" size="large">View All Products <ArrowRightOutlined /></Button></Link>
        </div>
      </div>
    </div>

    {/* Technology */}
    <div className="section">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 48px' }}>
        <Paragraph className="accent" style={{ letterSpacing: 3, fontSize: 12, marginBottom: 8 }}>TECHNOLOGY</Paragraph>
        <Title level={2} style={{ marginBottom: 48, fontWeight: 700 }}>Core Technologies</Title>
        <Row gutter={[24, 24]}>
          {techHighlights.map(t => (
            <Col xs={24} md={8} key={t.title}>
              <Card hoverable>
                <div style={{ marginBottom: 12 }}>{t.icon}</div>
                <Title level={4}>{t.title}</Title>
                <Paragraph type="secondary" style={{ fontSize: 13 }}>{t.desc}</Paragraph>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>

    {/* Global Deployments */}
    <div className="section">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 48px', textAlign: 'center' }}>
        <Paragraph className="accent" style={{ letterSpacing: 3, fontSize: 12, marginBottom: 8 }}>GLOBAL PRESENCE</Paragraph>
        <Title level={2} style={{ marginBottom: 24, fontWeight: 700 }}>Worldwide Deployments</Title>
        <Paragraph type="secondary" style={{ maxWidth: 600, margin: '0 auto 48px', fontSize: 15 }}>
          1300+ installations across 60+ countries.
        </Paragraph>
        <div style={{ borderRadius: 12, overflow: 'hidden', marginBottom: 48 }}>
          <img src={mapImg} alt="ARI Global Deployments Map" style={{ width: '100%', borderRadius: 12 }} />
        </div>
      </div>
    </div>

    {/* Certifications */}
    <div className="section section-alt">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 48px', textAlign: 'center' }}>
        <Paragraph className="accent" style={{ letterSpacing: 3, fontSize: 12, marginBottom: 8 }}>APPROVALS & ACCREDITATIONS</Paragraph>
        <Title level={2} style={{ marginBottom: 24, fontWeight: 700 }}>Globally Certified</Title>
        <Paragraph type="secondary" style={{ maxWidth: 600, margin: '0 auto 48px', fontSize: 15 }}>
          DNV approval for the entire range of marine & offshore simulation products. Quality certifications including ABS, LRQA, ISO 9001, ISO 14001, OHSAS, and ISMS.
        </Paragraph>
        <div style={{ borderRadius: 12, overflow: 'hidden', marginBottom: 48 }}>
          <img src={certsImg} alt="ARI Certifications and Accreditations" style={{ width: '100%', borderRadius: 12 }} />
        </div>

      </div>
    </div>

    <OurClientsSection />

    {/* CTA */}
    <div className="section" style={{ textAlign: 'center' }}>
      <div style={{ maxWidth: 600, margin: '0 auto', padding: '0 48px' }}>
        <Title level={2} style={{ fontWeight: 700 }}>Ready to Elevate Your Training?</Title>
        <Paragraph type="secondary" style={{ fontSize: 16, marginBottom: 32 }}>
          Contact us for a customized demonstration of our simulation systems.
        </Paragraph>
        <Link to="/contact"><Button type="primary" size="large" style={{ height: 48, paddingInline: 40 }}>Request a Demo</Button></Link>
      </div>
    </div>
  </div>
);

export default Index;
