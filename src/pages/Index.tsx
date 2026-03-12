import { Typography, Button, Row, Col, Card, Space } from 'antd';
import { ArrowRightOutlined, GlobalOutlined, SafetyCertificateOutlined, ExperimentOutlined, TeamOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Title, Paragraph } = Typography;

const stats = [
  { value: '500+', label: 'Simulators Deployed' },
  { value: '40+', label: 'Countries' },
  { value: '25+', label: 'Years Experience' },
  { value: '100%', label: 'Custom Solutions' },
];

const industries = [
  { icon: <SafetyCertificateOutlined style={{ fontSize: 32, color: '#00b4d8' }} />, title: 'Defence', desc: 'Anti-drone, naval warfare, and tactical training systems.' },
  { icon: <GlobalOutlined style={{ fontSize: 32, color: '#00b4d8' }} />, title: 'Maritime', desc: 'Ship bridge, engine room, and cargo handling simulators.' },
  { icon: <ExperimentOutlined style={{ fontSize: 32, color: '#00b4d8' }} />, title: 'Oil & Gas', desc: 'Offshore drilling and subsea ROV training platforms.' },
  { icon: <TeamOutlined style={{ fontSize: 32, color: '#00b4d8' }} />, title: 'Port & Crane', desc: 'Container crane and port operations simulation.' },
];

const products = [
  { title: 'Anti-Drone Simulation', category: 'Defence' },
  { title: 'Warship Simulator', category: 'Defence' },
  { title: 'Ship Bridge Simulator', category: 'Maritime' },
  { title: 'Crane Simulator', category: 'Port' },
  { title: 'Drilling Simulator', category: 'Oil & Gas' },
  { title: 'ROV Simulator', category: 'Offshore' },
];

const Index = () => (
  <div>
    {/* Hero */}
    <div className="hero-section">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 48px', position: 'relative', zIndex: 1 }}>
        <Row align="middle">
          <Col xs={24} md={14}>
            <Paragraph style={{ color: '#00b4d8', letterSpacing: 3, fontSize: 13, fontWeight: 600, marginBottom: 16 }}>
              SIMULATION · TRAINING · READINESS
            </Paragraph>
            <Title style={{ fontSize: 48, lineHeight: 1.1, marginBottom: 24, fontWeight: 700 }}>
              High-Fidelity Simulation for Mission-Critical Training
            </Title>
            <Paragraph style={{ fontSize: 18, color: '#9ca3af', maxWidth: 500, marginBottom: 40 }}>
              Trusted by defense forces, navies, and energy companies across 40+ nations.
            </Paragraph>
            <Space size="middle">
              <Link to="/contact"><Button type="primary" size="large">Request Demo <ArrowRightOutlined /></Button></Link>
              <Link to="/products"><Button size="large">Explore Products</Button></Link>
            </Space>
          </Col>
        </Row>
      </div>
    </div>

    {/* Stats */}
    <div className="section section-dark">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 48px' }}>
        <Row gutter={[32, 32]}>
          {stats.map(s => (
            <Col xs={12} md={6} key={s.label}>
              <div className="stat-card">
                <h2>{s.value}</h2>
                <Paragraph type="secondary">{s.label}</Paragraph>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>

    {/* Industries */}
    <div className="section">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 48px' }}>
        <Title level={2} style={{ marginBottom: 48 }}>Industries We Serve</Title>
        <Row gutter={[24, 24]}>
          {industries.map(ind => (
            <Col xs={24} sm={12} md={6} key={ind.title}>
              <Card hoverable>
                {ind.icon}
                <Title level={4} style={{ marginTop: 16 }}>{ind.title}</Title>
                <Paragraph type="secondary">{ind.desc}</Paragraph>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>

    {/* Products */}
    <div className="section section-dark">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 48px' }}>
        <Title level={2} style={{ marginBottom: 48 }}>Product Highlights</Title>
        <Row gutter={[24, 24]}>
          {products.map(p => (
            <Col xs={24} sm={12} md={8} key={p.title}>
              <Card hoverable>
                <Paragraph className="accent-text" style={{ fontSize: 12, letterSpacing: 2, marginBottom: 8 }}>{p.category.toUpperCase()}</Paragraph>
                <Title level={4}>{p.title}</Title>
              </Card>
            </Col>
          ))}
        </Row>
        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <Link to="/products"><Button type="primary" size="large">View All Products <ArrowRightOutlined /></Button></Link>
        </div>
      </div>
    </div>

    {/* CTA */}
    <div className="section" style={{ textAlign: 'center' }}>
      <div style={{ maxWidth: 600, margin: '0 auto', padding: '0 48px' }}>
        <Title level={2}>Ready to Elevate Your Training?</Title>
        <Paragraph type="secondary" style={{ fontSize: 16, marginBottom: 32 }}>
          Contact us for a customized demonstration of our simulation platforms.
        </Paragraph>
        <Link to="/contact"><Button type="primary" size="large">Request a Demo</Button></Link>
      </div>
    </div>
  </div>
);

export default Index;
