import { Typography, Button, Row, Col, Card, Space } from 'antd';
import { ArrowRightOutlined, GlobalOutlined, SafetyCertificateOutlined, ExperimentOutlined, TeamOutlined, AimOutlined, RocketOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import heroImg from '@/assets/hero-simulation.jpg';
import defenceImg from '@/assets/defence-sim.jpg';
import marineImg from '@/assets/marine-sim.jpg';
import offshoreImg from '@/assets/offshore-sim.jpg';
import craneImg from '@/assets/crane-sim.jpg';

const { Title, Paragraph } = Typography;

const stats = [
  { value: '500+', label: 'Simulators Deployed' },
  { value: '40+', label: 'Countries' },
  { value: '25+', label: 'Years Experience' },
  { value: '100%', label: 'Custom Built' },
];

const industries = [
  { icon: <AimOutlined style={{ fontSize: 28, color: '#B8FF57' }} />, title: 'Defence', desc: 'Anti-drone, naval warfare, and tactical training.' },
  { icon: <GlobalOutlined style={{ fontSize: 28, color: '#B8FF57' }} />, title: 'Maritime', desc: 'Bridge, engine room, and cargo handling.' },
  { icon: <ExperimentOutlined style={{ fontSize: 28, color: '#B8FF57' }} />, title: 'Oil & Gas', desc: 'Offshore drilling and subsea ROV training.' },
  { icon: <TeamOutlined style={{ fontSize: 28, color: '#B8FF57' }} />, title: 'Port & Crane', desc: 'Container crane and port operations.' },
];

const productCards = [
  { img: defenceImg, title: 'Defence Simulation', tag: 'DEFENCE' },
  { img: marineImg, title: 'Marine Simulation', tag: 'MARITIME' },
  { img: offshoreImg, title: 'Offshore Simulation', tag: 'OFFSHORE' },
  { img: craneImg, title: 'Crane & Port Simulation', tag: 'INDUSTRIAL' },
];

const techHighlights = [
  { icon: <RocketOutlined style={{ fontSize: 24, color: '#B8FF57' }} />, title: 'Physics Engines', desc: 'High-fidelity hydrodynamic and aerodynamic models.' },
  { icon: <SafetyCertificateOutlined style={{ fontSize: 24, color: '#B8FF57' }} />, title: 'XR / VR Training', desc: 'Immersive virtual reality environments.' },
  { icon: <GlobalOutlined style={{ fontSize: 24, color: '#B8FF57' }} />, title: 'Digital Twins', desc: 'Real-time digital replicas of physical systems.' },
];

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
                SIMULATION · TRAINING · READINESS
              </Paragraph>
            </div>
            <div className="animate-fade-up-delay-1">
              <Title style={{ fontSize: 52, lineHeight: 1.08, marginBottom: 24, fontWeight: 800, letterSpacing: -1 }}>
                High-Fidelity Simulation<br />
                for <span className="accent">Mission-Critical</span> Training
              </Title>
            </div>
            <div className="animate-fade-up-delay-2">
              <Paragraph style={{ fontSize: 17, color: '#9CA3AF', maxWidth: 520, marginBottom: 40, lineHeight: 1.7 }}>
                Trusted by defense forces, navies, and energy companies across 40+ nations for advanced simulation and training systems.
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

    {/* Industries */}
    <div className="section grid-bg">
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

    {/* Products */}
    <div className="section section-alt">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 48px' }}>
        <Paragraph className="accent" style={{ letterSpacing: 3, fontSize: 12, marginBottom: 8 }}>PRODUCTS</Paragraph>
        <Title level={2} style={{ marginBottom: 48, fontWeight: 700 }}>Simulation Systems</Title>
        <Row gutter={[24, 24]}>
          {productCards.map(p => (
            <Col xs={24} sm={12} md={6} key={p.title}>
              <div className="product-image-card">
                <img src={p.img} alt={p.title} />
                <div className="overlay">
                  <Paragraph className="accent" style={{ fontSize: 11, letterSpacing: 2, marginBottom: 4 }}>{p.tag}</Paragraph>
                  <Title level={5} style={{ margin: 0, fontSize: 14 }}>{p.title}</Title>
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

    {/* Certifications */}
    <div className="section section-alt">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 48px', textAlign: 'center' }}>
        <Paragraph className="accent" style={{ letterSpacing: 3, fontSize: 12, marginBottom: 8 }}>CERTIFICATIONS</Paragraph>
        <Title level={2} style={{ marginBottom: 24, fontWeight: 700 }}>Globally Certified</Title>
        <Paragraph type="secondary" style={{ maxWidth: 500, margin: '0 auto 48px', fontSize: 15 }}>
          DNV, ClassNK, and Lloyd's certified simulation systems meeting international maritime and defense standards.
        </Paragraph>
        <Row gutter={[32, 32]} justify="center">
          {['DNV GL', 'ClassNK', "Lloyd's Register", 'IMO STCW'].map(cert => (
            <Col key={cert}>
              <div className="animate-glow" style={{ padding: '20px 32px', border: '1px solid #2D3B2F', borderRadius: 8, background: 'rgba(26,43,30,0.5)' }}>
                <Text strong style={{ letterSpacing: 2, fontSize: 13 }}>{cert}</Text>
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
          Contact us for a customized demonstration.
        </Paragraph>
        <Link to="/contact"><Button type="primary" size="large" style={{ height: 48, paddingInline: 40 }}>Request a Demo</Button></Link>
      </div>
    </div>
  </div>
);

export default Index;
