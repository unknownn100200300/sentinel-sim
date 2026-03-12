import { Typography, Row, Col, Card, Timeline } from 'antd';
import { TrophyOutlined, GlobalOutlined, SafetyCertificateOutlined, TeamOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const About = () => (
  <div>
    <div className="section">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 48px' }}>
        <Title level={2} style={{ marginBottom: 8 }}>About ARI Simulation</Title>
        <Paragraph type="secondary" style={{ maxWidth: 700, marginBottom: 48 }}>
          For over 25 years, ARI has designed and manufactured high-fidelity simulation systems for defence, maritime, and energy sectors worldwide.
        </Paragraph>

        <Row gutter={[24, 24]} style={{ marginBottom: 64 }}>
          {[
            { icon: <GlobalOutlined style={{ fontSize: 32, color: '#00b4d8' }} />, title: 'Global Presence', desc: 'Installations across 40+ countries on 6 continents.' },
            { icon: <SafetyCertificateOutlined style={{ fontSize: 32, color: '#00b4d8' }} />, title: 'Certifications', desc: 'DNV, ClassNK, and Lloyd's certified simulation systems.' },
            { icon: <TrophyOutlined style={{ fontSize: 32, color: '#00b4d8' }} />, title: 'Awards', desc: 'Recognized for innovation in simulation technology.' },
            { icon: <TeamOutlined style={{ fontSize: 32, color: '#00b4d8' }} />, title: 'Partners', desc: 'Collaborations with leading defence and maritime organizations.' },
          ].map(item => (
            <Col xs={24} sm={12} md={6} key={item.title}>
              <Card hoverable>
                {item.icon}
                <Title level={4} style={{ marginTop: 16 }}>{item.title}</Title>
                <Paragraph type="secondary">{item.desc}</Paragraph>
              </Card>
            </Col>
          ))}
        </Row>

        <Title level={3} style={{ marginBottom: 24 }}>Company Timeline</Title>
        <Timeline
          items={[
            { children: <><strong style={{ color: '#00b4d8' }}>1998</strong> — Founded in New Delhi, India</>, color: '#00b4d8' },
            { children: <><strong style={{ color: '#00b4d8' }}>2005</strong> — First international naval simulator delivery</>, color: '#00b4d8' },
            { children: <><strong style={{ color: '#00b4d8' }}>2012</strong> — Expanded to 20+ countries</>, color: '#00b4d8' },
            { children: <><strong style={{ color: '#00b4d8' }}>2018</strong> — Launched VR-based training platforms</>, color: '#00b4d8' },
            { children: <><strong style={{ color: '#00b4d8' }}>2024</strong> — 500+ simulators deployed globally</>, color: '#00b4d8' },
          ]}
        />
      </div>
    </div>
  </div>
);

export default About;
