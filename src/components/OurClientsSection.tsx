import { Card, Col, Row, Typography } from 'antd';

import clientsDefenceImg from '@/assets/Clients - 1 Defence Establishments & Govt. Bodies.jpg';
import clientsOemImg from '@/assets/Clients - 2 - OEM.jpg';
import clientsMarineImg from '@/assets/Clients - 3 - Marine.jpg';

const { Title, Paragraph } = Typography;

const clientGroups = [
  {
    title: 'Defence Establishments & Govt. Bodies',
    img: clientsDefenceImg,
  },
  {
    title: 'OME',
    img: clientsOemImg,
  },
  {
    title: 'Marine',
    img: clientsMarineImg,
  },
] as const;

type OurClientsSectionProps = {
  variant?: 'default' | 'alt';
};

const OurClientsSection = ({ variant = 'default' }: OurClientsSectionProps) => (
  <div className={`section ${variant === 'alt' ? 'section-alt' : ''}`}>
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 48px' }}>
      <Paragraph className="accent" style={{ letterSpacing: 3, fontSize: 12, marginBottom: 8 }}>
        OUR CLIENTS
      </Paragraph>
      <Title level={2} style={{ marginBottom: 24, fontWeight: 700 }}>
        Our Clients
      </Title>
      <Row gutter={[24, 24]}>
        {clientGroups.map((group) => (
          <Col xs={24} md={8} key={group.title}>
            <Card hoverable style={{ height: '100%' }}>
              <Title level={4} style={{ marginBottom: 16 }}>
                {group.title}
              </Title>
              <div
                style={{
                  borderRadius: 10,
                  overflow: 'hidden',
                  border: '1px solid #2D3B2F',
                  background: '#ffffff',
                }}
              >
                <img
                  src={group.img}
                  alt={group.title}
                  style={{
                    width: '100%',
                    height: 240,
                    objectFit: 'contain',
                    display: 'block',
                    padding: 12,
                  }}
                />
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  </div>
);

export default OurClientsSection;
