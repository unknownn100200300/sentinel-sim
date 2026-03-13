import { Layout, Menu, Typography, Row, Col, Space, Drawer, Button } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { MailOutlined, PhoneOutlined, MenuOutlined } from '@ant-design/icons';
import { useState } from 'react';
import ariLogo from '@/assets/ari-logo-light.png';

const { Header, Footer, Content } = Layout;
const { Text } = Typography;

const navItems = [
  { key: '/', label: 'Home' },
  { key: '/products', label: 'Products' },
  { key: '/industries', label: 'Industries' },
  { key: '/technology', label: 'Technology' },
  { key: '/about', label: 'About' },
  { key: '/contact', label: 'Contact' },
];

const menuItems = navItems.map(item => ({
  key: item.key,
  label: <Link to={item.key}>{item.label}</Link>,
}));

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ position: 'fixed', zIndex: 100, width: '100%', padding: '0 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <img src={ariLogo} alt="ARI Simulation" style={{ height: 36 }} />
        </Link>
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[location.pathname]}
          items={menuItems}
          style={{ flex: 1, justifyContent: 'flex-end', borderBottom: 'none', background: 'transparent' }}
          className="desktop-menu"
        />
        <Button
          type="text"
          icon={<MenuOutlined style={{ color: '#B8FF57', fontSize: 20 }} />}
          onClick={() => setDrawerOpen(true)}
          className="mobile-menu-btn"
          style={{ display: 'none' }}
        />
      </Header>

      <Drawer
        placement="right"
        onClose={() => setDrawerOpen(false)}
        open={drawerOpen}
        styles={{ body: { background: '#0F1412', padding: 0 }, header: { background: '#0F1412', borderBottom: '1px solid #2D3B2F' } }}
      >
        <Menu
          theme="dark"
          mode="vertical"
          selectedKeys={[location.pathname]}
          items={menuItems}
          onClick={() => setDrawerOpen(false)}
          style={{ background: 'transparent', borderRight: 'none' }}
        />
      </Drawer>

      <Content style={{ marginTop: 64 }}>{children}</Content>

      <Footer style={{ padding: '64px 48px 32px' }}>
        <Row gutter={[48, 32]}>
          <Col xs={24} md={8}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
              <img src={ariLogo} alt="ARI Simulation" style={{ height: 28 }} />
            </div>
            <Text type="secondary" style={{ fontSize: 13, lineHeight: 1.8, display: 'block' }}>
              Applied Research International Pvt. Ltd.<br />
              High-fidelity simulation for mission-critical training.
            </Text>
          </Col>
          <Col xs={24} md={8}>
            <Text strong style={{ marginBottom: 16, display: 'block', letterSpacing: 1 }}>NAVIGATION</Text>
            <Space direction="vertical" size={8}>
              {navItems.map(item => (
                <Link key={item.key} to={item.key} style={{ color: '#9CA3AF', fontSize: 13, transition: 'color 0.2s' }}>
                  {item.label}
                </Link>
              ))}
            </Space>
          </Col>
          <Col xs={24} md={8}>
            <Text strong style={{ marginBottom: 16, display: 'block', letterSpacing: 1 }}>CONTACT</Text>
            <Space direction="vertical" size={8}>
              <Text type="secondary" style={{ fontSize: 13 }}><PhoneOutlined /> +91 11 41326882</Text>
              <Text type="secondary" style={{ fontSize: 13 }}><MailOutlined /> info@arisimulation.com</Text>
            </Space>
          </Col>
        </Row>
        <div style={{ borderTop: '1px solid #2D3B2F', marginTop: 48, paddingTop: 24, textAlign: 'center' }}>
          <Text type="secondary" style={{ fontSize: 12 }}>© {new Date().getFullYear()} ARI Simulation. All rights reserved.</Text>
        </div>
      </Footer>
    </Layout>
  );
};

export default AppLayout;
