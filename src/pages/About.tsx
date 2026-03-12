import { Typography, Row, Col, Card, Timeline } from 'antd';
import { TrophyOutlined, GlobalOutlined, SafetyCertificateOutlined, TeamOutlined } from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

const pillars = [
  { icon: <GlobalOutlined style={{ fontSize: 28, color: '#B8FF57' }} />, title: 'Global Presence', desc: 'Installations across 40+ countries on 6 continents.' },
  { icon: <SafetyCertificateOutlined style={{ fontSize: 28, color: '#B8FF57' }} />, title: 'Certifications', desc: "DNV, ClassNK, and Lloyd's certified simulation systems." },
  { icon: <TrophyOutlined style={{ fontSize: 28, color: '#B8FF57' }} />, title: 'Awards', desc: 'Recognized for innovation in simulation technology.' },
  { icon: <TeamOutlined style={{ fontSize: 28, color: '#B8FF57' }} />, title: 'Partners', desc: 'Collaborations with leading defence and maritime organizations.' },
];

const timeline = [
  { year: '1998', event: 'Founded in New Delhi, India' },
  { year: '2005', event: 'First international naval simulator delivery' },
  { year: '2012', event: 'Expanded to 20+ countries' },
  { year: '2018', event: 'Launched VR-based training platforms' },
  { year: '2024', event: '500+ simulators deployed globally' },
];

const About = () => (
  <div>
    <div className="section">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 48px' }}>
        <Paragraph className="accent" style={{ letterSpacing: 3, fontSize: 12, marginBottom: 8 }}>ABOUT</Paragraph>
        <Title level={2} style={{ marginBottom: 8, fontWeight: 700 }}>About ARI Simulation</Title>
        <Paragraph type="secondary" style={{ maxWidth: 700, marginBottom: 48 }}>
          For over 25 years, ARI has designed and manufactured high-fidelity simulation systems for defence, maritime, and energy sectors worldwide.
        </Paragraph>

        <Row gutter={[24, 24]} style={{ marginBottom: 80 }}>
          {pillars.map(item => (
            <Col xs={24} sm={12} md={6} key={item.title}>
              <Card hoverable style={{ height: '100%' }}>
                <div style={{ marginBottom: 12 }}>{item.icon}</div>
                <Title level={4} style={{ marginBottom: 8 }}>{item.title}</Title>
                <Paragraph type="secondary" style={{ fontSize: 13 }}>{item.desc}</Paragraph>
              </Card>
            </Col>
          ))}
        </Row>

        <Paragraph className="accent" style={{ letterSpacing: 3, fontSize: 12, marginBottom: 8 }}>TIMELINE</Paragraph>
        <Title level={3} style={{ marginBottom: 32, fontWeight: 700 }}>Company History</Title>
        <Timeline
          items={timeline.map(t => ({
            color: '#B8FF57',
            children: (
              <div style={{ paddingBottom: 8 }}>
                <Text strong className="accent" style={{ fontSize: 15 }}>{t.year}</Text>
                <Paragraph type="secondary" style={{ marginTop: 4, marginBottom: 0, fontSize: 14 }}>{t.event}</Paragraph>
              </div>
            ),
          }))}
        />
      </div>
    </div>
  </div>
);

export default About;
