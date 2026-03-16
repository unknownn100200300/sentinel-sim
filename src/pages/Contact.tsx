import { Typography, Row, Col, Card, Form, Input, Select, Button } from 'antd';
import { EnvironmentOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;
const { TextArea } = Input;

const Contact = () => (
  <div className="section">
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 48px' }}>
      <Paragraph className="accent" style={{ letterSpacing: 3, fontSize: 12, marginBottom: 8 }}>CONTACT</Paragraph>
      <Title level={2} style={{ marginBottom: 8, fontWeight: 700 }}>Get in Touch</Title>
      <Paragraph type="secondary" style={{ marginBottom: 48, maxWidth: 600 }}>
        Request a demo or discuss your simulation requirements with our team.
      </Paragraph>

      <Row gutter={[48, 48]}>
        <Col xs={24} md={14}>
          <Card>
            <Title level={4} style={{ marginBottom: 24 }}>Request a Demo</Title>
            <Form layout="vertical">
              <Row gutter={16}>
                <Col span={12}><Form.Item label={<Text>Name</Text>}><Input placeholder="Full name" /></Form.Item></Col>
                <Col span={12}><Form.Item label={<Text>Organization</Text>}><Input placeholder="Company / Agency" /></Form.Item></Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}><Form.Item label={<Text>Email</Text>}><Input placeholder="email@example.com" /></Form.Item></Col>
                <Col span={12}><Form.Item label={<Text>Phone</Text>}><Input placeholder="+1 234 567 890" /></Form.Item></Col>
              </Row>
              <Form.Item label={<Text>Industry</Text>}>
                <Select placeholder="Select industry" options={[
                  { value: 'defence', label: 'Defence / Naval Forces' },
                  { value: 'maritime', label: 'Maritime Academies' },
                  { value: 'offshore', label: 'Oil & Gas / Offshore' },
                  { value: 'port', label: 'Ports & Terminals' },
                  { value: 'government', label: 'Government / Administration' },
                  { value: 'other', label: 'Other' },
                ]} />
              </Form.Item>
              <Form.Item label={<Text>Message</Text>}>
                <TextArea rows={4} placeholder="Describe your simulation requirements..." />
              </Form.Item>
              <Button type="primary" size="large" block style={{ height: 48 }}>Submit Request</Button>
            </Form>
          </Card>
        </Col>
        <Col xs={24} md={10}>
          <Card style={{ marginBottom: 24 }}>
            <Title level={4}>Headquarters</Title>
            <Paragraph type="secondary"><EnvironmentOutlined /> New Delhi, India</Paragraph>
            <Paragraph type="secondary"><PhoneOutlined /> +91 11 41326882</Paragraph>
            <Paragraph type="secondary"><MailOutlined /> info@arisimulation.com</Paragraph>

            <Paragraph style={{ marginTop: 16, marginBottom: 8 }}>
              <Text strong>MUMBAI - Branch Office</Text>
            </Paragraph>
            <Paragraph type="secondary">
              <EnvironmentOutlined /> B-510, BSELTECH Park (5th Floor), Sector-30-A,
              <br />
              Vashi, Navi Mumbai-400705
            </Paragraph>
          </Card>
          <Card>
            <Title level={4}>Global Offices</Title>

            <Paragraph style={{ marginBottom: 8 }}><Text strong>USA</Text></Paragraph>
            <Paragraph type="secondary" style={{ marginBottom: 4 }}>
              <EnvironmentOutlined /> Bishop Ranch 3, 2603 Camino Ramon, Suite 200, San Ramon, California, 94583, USA.
            </Paragraph>
            <Paragraph type="secondary" style={{ marginBottom: 4 }}><PhoneOutlined /> +1 408 338 6093</Paragraph>
            <Paragraph type="secondary"><MailOutlined /> ariusa@arisimulation.com</Paragraph>

            <Paragraph style={{ marginTop: 16, marginBottom: 8 }}><Text strong>Singapore</Text></Paragraph>
            <Paragraph type="secondary" style={{ marginBottom: 4 }}>
              <EnvironmentOutlined /> 14 Robinson Road, #08-01A, Far East Finance Building, Singapore 048545
            </Paragraph>
            <Paragraph type="secondary"><MailOutlined /> arisingapore@arisimulation.com</Paragraph>
          </Card>
        </Col>
      </Row>
    </div>
  </div>
);

export default Contact;
