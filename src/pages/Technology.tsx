import { Typography, Row, Col, Card } from 'antd';
import { CodeOutlined, EyeOutlined, CloudOutlined, ThunderboltOutlined, ToolOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const techs = [
  { icon: <ThunderboltOutlined style={{ fontSize: 36, color: '#00b4d8' }} />, title: 'Physics Simulation Engines', desc: 'High-fidelity hydrodynamic, aerodynamic, and mechanical physics models.' },
  { icon: <EyeOutlined style={{ fontSize: 36, color: '#00b4d8' }} />, title: 'XR / VR Environments', desc: 'Immersive virtual and mixed reality training environments.' },
  { icon: <CloudOutlined style={{ fontSize: 36, color: '#00b4d8' }} />, title: 'Digital Twins', desc: 'Real-time digital replicas of physical systems and environments.' },
  { icon: <CodeOutlined style={{ fontSize: 36, color: '#00b4d8' }} />, title: 'Real-Time Visualization', desc: 'High-performance 3D rendering with real-time environmental effects.' },
  { icon: <ToolOutlined style={{ fontSize: 36, color: '#00b4d8' }} />, title: 'Hardware-in-the-Loop', desc: 'Integration with actual control panels, instruments, and equipment.' },
];

const Technology = () => (
  <div className="section">
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 48px' }}>
      <Title level={2} style={{ marginBottom: 8 }}>Technology</Title>
      <Paragraph type="secondary" style={{ marginBottom: 48, maxWidth: 600 }}>
        Proprietary technologies powering the next generation of simulation systems.
      </Paragraph>
      <Row gutter={[24, 24]}>
        {techs.map(t => (
          <Col xs={24} sm={12} md={8} key={t.title}>
            <Card hoverable style={{ minHeight: 200 }}>
              {t.icon}
              <Title level={4} style={{ marginTop: 16 }}>{t.title}</Title>
              <Paragraph type="secondary">{t.desc}</Paragraph>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  </div>
);

export default Technology;
