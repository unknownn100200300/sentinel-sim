import { Typography, Row, Col, Card, Timeline } from 'antd';
import { TrophyOutlined, GlobalOutlined, SafetyCertificateOutlined, TeamOutlined } from '@ant-design/icons';
import mapImg from '@/assets/global-map.jpg';

const { Title, Paragraph, Text } = Typography;

const pillars = [
  { icon: <GlobalOutlined style={{ fontSize: 28, color: '#B8FF57' }} />, title: 'Global Presence', desc: 'Headquartered in New Delhi, India with offices in the US & Singapore. 1300+ installations worldwide.' },
  { icon: <SafetyCertificateOutlined style={{ fontSize: 28, color: '#B8FF57' }} />, title: 'Certifications', desc: 'DNV, ABS, LRQA certified. ISO 9001, ISO 14001, OHSAS, ISMS. 55+ copyrights globally recognized.' },
  { icon: <TrophyOutlined style={{ fontSize: 28, color: '#B8FF57' }} />, title: 'Industry Leadership', desc: 'Among only 3 globally certified companies approved by IADC & IWCF for cloud-based drilling assessment.' },
  { icon: <TeamOutlined style={{ fontSize: 28, color: '#B8FF57' }} />, title: 'Zen Technologies', desc: 'A subsidiary of Zen Technologies Limited — combining defence technology expertise with simulation innovation.' },
];

const timeline = [
  { year: '1998', event: 'Founded in New Delhi as Applied Research International (ARI)' },
  { year: '2005', event: 'First international naval simulator delivery' },
  { year: '2012', event: 'Expanded to 20+ countries with DNV certification' },
  { year: '2018', event: 'Launched VR-based training and cloud simulation platforms' },
  { year: '2024', event: '1300+ installations, 75,000+ cloud certificates generated' },
];

const About = () => (
  <div>
    <div className="section">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 48px' }}>
        <Paragraph className="accent" style={{ letterSpacing: 3, fontSize: 12, marginBottom: 8 }}>ABOUT</Paragraph>
        <Title level={2} style={{ marginBottom: 8, fontWeight: 700 }}>About ARI Simulation</Title>
        <Paragraph type="secondary" style={{ maxWidth: 800, marginBottom: 48 }}>
          Applied Research International (ARI), the naval and marine simulation arm of Zen Technologies Limited, is a global leader in sophisticated simulation and virtual reality training solutions for the defence, marine & offshore industries. With over 26 years of expertise in advanced simulation — including real-time graphics, virtual/augmented reality, and dynamic modeling — ARI serves millions of users across 1300+ physical installations and cloud-based solutions.
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
