import { Typography, Row, Col, Card } from 'antd';
import { SafetyCertificateOutlined, GlobalOutlined, ExperimentOutlined, BookOutlined, BulbOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const sectors = [
  { icon: <SafetyCertificateOutlined style={{ fontSize: 36, color: '#00b4d8' }} />, title: 'Naval Forces', desc: 'Warship bridge, CMS, and tactical trainers for navies worldwide.' },
  { icon: <GlobalOutlined style={{ fontSize: 36, color: '#00b4d8' }} />, title: 'Port Authorities', desc: 'Crane and vessel traffic simulation for port efficiency and safety.' },
  { icon: <ExperimentOutlined style={{ fontSize: 36, color: '#00b4d8' }} />, title: 'Oil & Gas', desc: 'Drilling, well control, and offshore operations training.' },
  { icon: <BookOutlined style={{ fontSize: 36, color: '#00b4d8' }} />, title: 'Maritime Academies', desc: 'STCW-compliant training systems for maritime education.' },
  { icon: <BulbOutlined style={{ fontSize: 36, color: '#00b4d8' }} />, title: 'Defence Research', desc: 'R&D simulation platforms for defence laboratories and agencies.' },
];

const Industries = () => (
  <div className="section">
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 48px' }}>
      <Title level={2} style={{ marginBottom: 8 }}>Industry Solutions</Title>
      <Paragraph type="secondary" style={{ marginBottom: 48, maxWidth: 600 }}>
        Purpose-built simulation for the world's most demanding operational environments.
      </Paragraph>
      <Row gutter={[24, 24]}>
        {sectors.map(s => (
          <Col xs={24} sm={12} md={8} key={s.title}>
            <Card hoverable style={{ minHeight: 200 }}>
              {s.icon}
              <Title level={4} style={{ marginTop: 16 }}>{s.title}</Title>
              <Paragraph type="secondary">{s.desc}</Paragraph>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  </div>
);

export default Industries;
