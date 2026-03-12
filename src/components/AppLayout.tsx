import { Layout, Menu, Typography, Row, Col, Space } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { MailOutlined, PhoneOutlined } from '@ant-design/icons';

const { Header, Footer, Content } = Layout;
const { Text } = Typography;

const menuItems = [
  { key: '/', label: <Link to="/">Home</Link> },
  { key: '/products', label: <Link to="/products">Products</Link> },
  { key: '/industries', label: <Link to="/industries">Industries</Link> },
  { key: '/technology', label: <Link to="/technology">Technology</Link> },
  { key: '/about', label: <Link to="/about">About</Link> },
  { key: '/contact', label: <Link to="/contact">Contact</Link> },
];

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ position: 'fixed', zIndex: 100, width: '100%', padding: '0 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Text strong style={{ fontSize: 18, color: '#00b4d8', letterSpacing: 2 }}>ARI SIMULATION</Text>
        </Link>
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[location.pathname]}
          items={menuItems}
          style={{ flex: 1, justifyContent: 'flex-end', borderBottom: 'none' }}
        />
      </Header>
      <Content style={{ marginTop: 64 }}>{children}</Content>
      <Footer style={{ padding: '48px' }}>
        <Row gutter={[48, 32]}>
          <Col xs={24} md={8}>
            <Text strong style={{ fontSize: 16, color: '#00b4d8' }}>ARI SIMULATION</Text>
            <br /><br />
            <Text type="secondary">Applied Research International Pvt. Ltd.</Text>
            <br />
            <Text type="secondary">High-fidelity simulation for mission-critical training.</Text>
          </Col>
          <Col xs={24} md={8}>
            <Text strong>Quick Links</Text>
            <br /><br />
            <Space direction="vertical">
              {menuItems.map(item => <span key={item.key}>{item.label}</span>)}
            </Space>
          </Col>
          <Col xs={24} md={8}>
            <Text strong>Contact</Text>
            <br /><br />
            <Space direction="vertical">
              <Text type="secondary"><PhoneOutlined /> +91 11 41326882</Text>
              <Text type="secondary"><MailOutlined /> info@arisimulation.com</Text>
            </Space>
          </Col>
        </Row>
        <div style={{ borderTop: '1px solid #1f2937', marginTop: 32, paddingTop: 24, textAlign: 'center' }}>
          <Text type="secondary">© {new Date().getFullYear()} ARI Simulation. All rights reserved.</Text>
        </div>
      </Footer>
    </Layout>
  );
};

export default AppLayout;
