import { Col, Row, Typography } from 'antd';
import type { CSSProperties } from 'react';

import navalBridgeImg from '@/assets/Naval Bridge.jpg';
import radarArpaImg from '@/assets/Radar2.jpg';
import ecdisImg from '@/assets/Ecdis3 copy.jpg';
import gmdssImg from '@/assets/Gmdss-Communiation.jpg';

const { Title, Paragraph } = Typography;

const sectionStyle: CSSProperties = {
  marginTop: 60,
};

const imgWrapper: CSSProperties = {
  borderRadius: 14,
  overflow: 'hidden',
  border: '1px solid var(--mil-border)',
  background: '#fff',
};

const imgStyle: CSSProperties = {
  width: '100%',
  height: 340,
  objectFit: 'cover',
  display: 'block',
};

const textStyle: CSSProperties = {
  fontSize: 15,
  lineHeight: 1.8,
};

const NavalBridgeOperationsDetail = () => (
  <div style={{ maxWidth: 1100, margin: '0 auto' }}>

    {/* HERO SECTION */}
    <Row gutter={[40, 40]} align="middle">
      <Col xs={24} md={12}>

        <Paragraph type="secondary" style={textStyle}>
          The ARI vessel bridge simulator recreates the complete operational
          environment of a naval ship bridge. Integrated with advanced
          visualisation systems and motion platforms, the simulator delivers a
          fully immersive and realistic training experience.
        </Paragraph>

        <Paragraph type="secondary" style={textStyle}>
          It enables officers to practice ship navigation, convoy coordination,
          and fleet operations management within a safe and controlled training
          environment.
        </Paragraph>
      </Col>

      <Col xs={24} md={12}>
        <div style={imgWrapper}>
          <img src={navalBridgeImg} alt="Naval Bridge Simulator" style={imgStyle} />
        </div>
      </Col>
    </Row>

    {/* RADAR SECTION */}
    <Row gutter={[40, 40]} align="middle" style={sectionStyle}>
      <Col xs={24} md={12}>
        <div style={imgWrapper}>
          <img src={radarArpaImg} alt="Radar ARPA Simulator" style={{ ...imgStyle, objectFit: 'contain' }} />
        </div>
      </Col>

      <Col xs={24} md={12}>
        <Title level={3} style={{ fontWeight: 700 }}>
          Radar / ARPA Simulator
        </Title>

        <Paragraph type="secondary" style={textStyle}>
          The Radar and ARPA simulator complies with IMO performance standards
          for radar equipment used on seagoing vessels. It supports the training
          requirements defined in IMO Model Courses 1.07 and 1.08.
        </Paragraph>

        <Paragraph type="secondary" style={textStyle}>
          The system enables realistic radar operation training and includes
          multiple radar types, including real OEM equipment and advanced
          radar emulation systems.
        </Paragraph>
      </Col>
    </Row>

    {/* ECDIS SECTION */}
    <Row gutter={[40, 40]} align="middle" style={sectionStyle}>
      <Col xs={24} md={12}>
        <Title level={3} style={{ fontWeight: 700 }}>
          ECDIS Simulator
        </Title>

        <Paragraph type="secondary" style={textStyle}>
          The ARI Electronic Chart Display and Information System (ECDIS)
          simulator is designed according to the latest STCW Manila
          Amendments and supports training requirements defined in
          IMO Model Course 1.27.
        </Paragraph>

        <Paragraph type="secondary" style={textStyle}>
          It can operate as a standalone training system or integrate with
          additional navigation aids to simulate a fully functional bridge
          navigation environment.
        </Paragraph>
      </Col>

      <Col xs={24} md={12}>
        <div style={imgWrapper}>
          <img src={ecdisImg} alt="ECDIS Simulator" style={{ ...imgStyle, objectFit: 'contain' }} />
        </div>
      </Col>
    </Row>

    {/* GMDSS SECTION */}
    <Row gutter={[40, 40]} align="middle" style={sectionStyle}>
      <Col xs={24} md={12}>
        <div style={imgWrapper}>
          <img src={gmdssImg} alt="GMDSS Simulator" style={{ ...imgStyle, objectFit: 'contain' }} />
        </div>
      </Col>

      <Col xs={24} md={12}>
        <Title level={3} style={{ fontWeight: 700 }}>
          GMDSS & Communications Simulator
        </Title>

        <Paragraph type="secondary" style={textStyle}>
          The ARI communications simulator provides complete operational
          training for maritime communication systems used on modern ships.
        </Paragraph>

        <Paragraph type="secondary" style={textStyle}>
          The simulator allows trainees to practice distress and routine
          communication procedures using satellite and terrestrial systems
          in a highly realistic operating environment.
        </Paragraph>
      </Col>
    </Row>

  </div>
);

export default NavalBridgeOperationsDetail;