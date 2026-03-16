import { Typography, Row, Col, Card } from 'antd';
import { AimOutlined, GlobalOutlined, ExperimentOutlined, BookOutlined, BulbOutlined, SafetyCertificateOutlined } from '@ant-design/icons';
import navalImg from '@/assets/naval-forces.jpg';

const { Title, Paragraph } = Typography;

const sectors = [
  { icon: <AimOutlined style={{ fontSize: 32, color: '#B8FF57' }} />, title: 'Naval Forces', desc: 'Integrated naval simulation complexes, bridge operations, submarine, CIC, ASTT, and FAC simulators for navies worldwide. Multi-force joint training with HLA interoperability.' },
  { icon: <GlobalOutlined style={{ fontSize: 32, color: '#B8FF57' }} />, title: 'Port Authorities', desc: 'QC, RTG, RMG, pedestal, straddle carrier, and mobile crane simulators. SAFEPORT feasibility studies for port development and vessel navigation analysis.' },
  { icon: <BookOutlined style={{ fontSize: 32, color: '#B8FF57' }} />, title: 'Maritime Academies', desc: 'DNV Class A certified navigation, engine room, cargo handling, GMDSS, and VTS simulators. STCW-compliant training and assessment solutions.' },
  { icon: <BulbOutlined style={{ fontSize: 32, color: '#B8FF57' }} />, title: 'Defence Research', desc: 'Cyber warfare simulation, maritime domain awareness, coastal security, and joint military operations. Defence-grade network compatible distributed simulation.' },
  { icon: <SafetyCertificateOutlined style={{ fontSize: 32, color: '#B8FF57' }} />, title: 'Government Agencies', desc: 'Proven supplier to defence establishments and government maritime administrations globally. ISO 9001 & ISO 14001 certified with confidential data protection.' },
];

const Industries = () => (
  <div className="section">
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 48px' }}>
      <div className="product-image-card" style={{ marginBottom: 64, borderRadius: 12, overflow: 'hidden' }}>
        <img src={navalImg} alt="Naval operations" style={{ width: '100%', height: 320, objectFit: 'cover' }} />
        <div className="overlay" style={{ padding: 32 }}>
          <Paragraph className="accent" style={{ letterSpacing: 3, fontSize: 12, marginBottom: 8 }}>INDUSTRIES</Paragraph>
          <Title level={2} style={{ margin: 0, fontWeight: 700 }}>Industry Solutions</Title>
        </div>
      </div>
      <Row gutter={[24, 24]}>
        {sectors.map(s => (
          <Col xs={24} sm={12} md={8} key={s.title}>
            <Card hoverable style={{ height: '100%' }}>
              <div style={{ marginBottom: 16 }}>{s.icon}</div>
              <Title level={4} style={{ marginBottom: 8 }}>{s.title}</Title>
              <Paragraph type="secondary" style={{ fontSize: 13 }}>{s.desc}</Paragraph>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  </div>
);

export default Industries;
