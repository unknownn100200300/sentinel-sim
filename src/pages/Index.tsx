import { Typography, Button, Row, Col, Card, Space } from 'antd';
import { ArrowRightOutlined, GlobalOutlined, SafetyCertificateOutlined, ExperimentOutlined, TeamOutlined, AimOutlined, RocketOutlined, CloudOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import heroImg from '@/assets/hero-simulation.jpg';
import defenceImg from '@/assets/defence-sim.jpg';
import marineImg from '@/assets/marine-sim.jpg';
import offshoreImg from '@/assets/offshore-sim.jpg';
import craneImg from '@/assets/crane-sim.jpg';
import portfolioImg from '@/assets/portfolio.jpg';
import mapImg from '@/assets/global-map.jpg';
import certsImg from '@/assets/certifications.jpg';

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
            <div className="animate-fade-up">
              <Paragraph style={{ color: '#B8FF57', letterSpacing: 4, fontSize: 12, fontWeight: 600, marginBottom: 20 }}>
                A SUBSIDIARY OF ZEN TECHNOLOGIES
              </Paragraph>
            </div>
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
        <div style={{ marginBottom: 48, borderRadius: 12, overflow: 'hidden' }}>
          <img src={portfolioImg} alt="ARI Simulation Portfolio" style={{ width: '100%', borderRadius: 12 }} />
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

    {/* Industries */}
    <div className="section section-alt">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 48px' }}>
        <Paragraph className="accent" style={{ letterSpacing: 3, fontSize: 12, marginBottom: 8 }}>SECTORS</Paragraph>
        <Title level={2} style={{ marginBottom: 48, fontWeight: 700 }}>Industries We Serve</Title>
        <Row gutter={[24, 24]}>
          {industries.map(ind => (
            <Col xs={24} sm={12} md={6} key={ind.title}>
              <Card hoverable style={{ height: '100%' }}>
                <div style={{ marginBottom: 16 }}>{ind.icon}</div>
                <Title level={4} style={{ marginBottom: 8 }}>{ind.title}</Title>
                <Paragraph type="secondary" style={{ fontSize: 13, marginBottom: 0 }}>{ind.desc}</Paragraph>
              </Card>
            </Col>
          ))}
        </Row>
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

    {/* Certifications */}
    <div className="section section-alt">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 48px', textAlign: 'center' }}>
        <Paragraph className="accent" style={{ letterSpacing: 3, fontSize: 12, marginBottom: 8 }}>APPROVALS & ACCREDITATIONS</Paragraph>
        <Title level={2} style={{ marginBottom: 24, fontWeight: 700 }}>Globally Certified</Title>
        <Paragraph type="secondary" style={{ maxWidth: 600, margin: '0 auto 48px', fontSize: 15 }}>
          DNV approval for the entire range of marine & offshore simulation products. Quality certifications including ABS, LRQA, ISO 9001, ISO 14001, OHSAS, and ISMS.
        </Paragraph>
        <Row gutter={[16, 16]} justify="center">
          {certifications.map(cert => (
            <Col key={cert}>
              <div className="animate-glow" style={{ padding: '16px 28px', border: '1px solid #2D3B2F', borderRadius: 8, background: 'rgba(26,43,30,0.5)' }}>
                <Text strong style={{ letterSpacing: 2, fontSize: 12 }}>{cert}</Text>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>

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
