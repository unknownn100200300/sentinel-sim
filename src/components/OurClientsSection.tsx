import { Card, Col, Row, Tabs, Typography } from 'antd';
import { useMemo } from 'react';

import clientsDefenceImg from '@/assets/Clients - 1 Defence Establishments & Govt. Bodies.jpg';
import clientsOemImg from '@/assets/Clients - 2 - OEM.jpg';
import clientsMarineImg from '@/assets/Clients - 3 - Marine.jpg';

const { Title, Paragraph, Text } = Typography;

type OurClientsSectionProps = {
  variant?: 'default' | 'alt';
};

type ClientGroup = {
  key: string;
  label: string;
  title: string;
  description: string;
  img: string;
};

const OurClientsSection = ({ variant = 'default' }: OurClientsSectionProps) => {
  const clientGroups = useMemo<ClientGroup[]>(
    () => [
      {
        key: 'defence',
        label: 'Defence & Govt.',
        title: 'Defence Establishments & Government Bodies',
        description:
          'Trusted by defence organizations and government institutions for mission-ready training systems.',
        img: clientsDefenceImg,
      },
      {
        key: 'oem',
        label: 'OEM Partners',
        title: 'OEM Partners',
        description:
          'Collaborating with leading OEMs to deliver integrated simulation solutions for modern training needs.',
        img: clientsOemImg,
      },
      {
        key: 'marine',
        label: 'Marine',
        title: 'Marine',
        description:
          'Supporting marine academies and operators with high-fidelity simulators that improve safety and proficiency.',
        img: clientsMarineImg,
      },
    ],
    [],
  );

  return (
    <div className={`section ${variant === 'alt' ? 'section-alt' : ''}`}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 48px' }}>
        <div style={{ textAlign: 'center', marginBottom: 28 }}>
          <Paragraph className="accent" style={{ letterSpacing: 3, fontSize: 12, marginBottom: 8 }}>
            OUR CLIENTS
          </Paragraph>
          <Title level={2} style={{ marginBottom: 12, fontWeight: 700 }}>
            Trusted Worldwide
          </Title>
          <Paragraph type="secondary" style={{ maxWidth: 720, margin: '0 auto', fontSize: 15 }}>
            Across defence, OEM partners, and marine training organizations, ARI Simulation supports teams with
            dependable, high-fidelity systems.
          </Paragraph>
        </div>

        <Card
          style={{
            borderRadius: 16,
            overflow: 'hidden',
            borderColor: 'var(--mil-border)',
            background: 'rgba(15,20,18,0.3)',
          }}
          bodyStyle={{ padding: 0 }}
        >
          <Tabs
            defaultActiveKey={clientGroups[0].key}
            centered
            items={clientGroups.map((group) => ({
              key: group.key,
              label: group.label,
              children: (
                <div style={{ padding: 24 }}>
                  <Row gutter={[24, 24]} align="middle">
                    <Col xs={24} md={14}>
                      <div
                        style={{
                          borderRadius: 14,
                          overflow: 'hidden',
                          border: '1px solid var(--mil-border)',
                          background: '#ffffff',
                        }}
                      >
                        <img
                          src={group.img}
                          alt={group.title}
                          style={{
                            width: '100%',
                            height: 320,
                            objectFit: 'contain',
                            display: 'block',
                            padding: 16,
                          }}
                        />
                      </div>
                    </Col>
                    <Col xs={24} md={10}>
                      <Title level={3} style={{ marginTop: 0, marginBottom: 8, fontWeight: 700 }}>
                        {group.title}
                      </Title>
                      <Paragraph type="secondary" style={{ marginBottom: 16, fontSize: 15 }}>
                        {group.description}
                      </Paragraph>
                      <Paragraph style={{ marginBottom: 0 }}>
                        <Text type="secondary">
                          Want to see relevant deployments and case studies?
                        </Text>
                      </Paragraph>
                      <Paragraph style={{ marginTop: 4, marginBottom: 0 }}>
                        <Text className="accent">Contact us</Text>
                        <Text type="secondary"> for a tailored walkthrough.</Text>
                      </Paragraph>
                    </Col>
                  </Row>
                </div>
              ),
            }))}
          />
        </Card>
      </div>
    </div>
  );
};

export default OurClientsSection;
