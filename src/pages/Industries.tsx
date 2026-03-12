import { Typography, Row, Col, Card } from 'antd';
import { AimOutlined, GlobalOutlined, ExperimentOutlined, BookOutlined, BulbOutlined } from '@ant-design/icons';
import navalImg from '@/assets/naval-forces.jpg';

const { Title, Paragraph } = Typography;

const sectors = [
  { icon: <AimOutlined style={{ fontSize: 32, color: '#B8FF57' }} />, title: 'Naval Forces', desc: 'Warship bridge, CMS, and tactical trainers for navies worldwide.' },
  { icon: <GlobalOutlined style={{ fontSize: 32, color: '#B8FF57' }} />, title: 'Port Authorities', desc: 'Crane and vessel traffic simulation for port operations.' },
  { icon: <ExperimentOutlined style={{ fontSize: 32, color: '#B8FF57' }} />, title: 'Oil & Gas', desc: 'Drilling, well control, and offshore operations training.' },
  { icon: <BookOutlined style={{ fontSize: 32, color: '#B8FF57' }} />, title: 'Maritime Academies', desc: 'STCW-compliant training for maritime education.' },
  { icon: <BulbOutlined style={{ fontSize: 32, color: '#B8FF57' }} />, title: 'Defence Research', desc: 'R&D simulation for defence laboratories and agencies.' },
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
