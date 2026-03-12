import { Typography, Row, Col, Card } from 'antd';
import { CodeOutlined, EyeOutlined, CloudOutlined, ThunderboltOutlined, ToolOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const techs = [
  { icon: <ThunderboltOutlined style={{ fontSize: 32, color: '#B8FF57' }} />, title: 'Physics Simulation Engines', desc: 'High-fidelity hydrodynamic, aerodynamic, and mechanical physics models powering realistic training scenarios.' },
  { icon: <EyeOutlined style={{ fontSize: 32, color: '#B8FF57' }} />, title: 'XR / VR Environments', desc: 'Immersive virtual and mixed reality training environments with real-time interaction.' },
  { icon: <CloudOutlined style={{ fontSize: 32, color: '#B8FF57' }} />, title: 'Digital Twins', desc: 'Real-time digital replicas of physical systems for monitoring and training.' },
  { icon: <CodeOutlined style={{ fontSize: 32, color: '#B8FF57' }} />, title: 'Real-Time Visualization', desc: 'High-performance 3D rendering with dynamic environmental effects.' },
  { icon: <ToolOutlined style={{ fontSize: 32, color: '#B8FF57' }} />, title: 'Hardware-in-the-Loop', desc: 'Integration with actual control panels, instruments, and operational equipment.' },
];

const Technology = () => (
  <div className="section grid-bg">
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 48px' }}>
      <Paragraph className="accent" style={{ letterSpacing: 3, fontSize: 12, marginBottom: 8 }}>TECHNOLOGY</Paragraph>
      <Title level={2} style={{ marginBottom: 8, fontWeight: 700 }}>Core Technologies</Title>
      <Paragraph type="secondary" style={{ marginBottom: 48, maxWidth: 600 }}>
        Proprietary technologies powering the next generation of simulation systems.
      </Paragraph>
      <Row gutter={[24, 24]}>
        {techs.map(t => (
          <Col xs={24} sm={12} md={8} key={t.title}>
            <Card hoverable style={{ height: '100%' }}>
              <div style={{ marginBottom: 16 }}>{t.icon}</div>
              <Title level={4} style={{ marginBottom: 8 }}>{t.title}</Title>
              <Paragraph type="secondary" style={{ fontSize: 13, lineHeight: 1.7 }}>{t.desc}</Paragraph>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  </div>
);

export default Technology;
