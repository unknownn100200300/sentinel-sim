import { Typography, Row, Col, Card, Tabs } from 'antd';

const { Title, Paragraph } = Typography;

const categories = [
  {
    key: 'defence',
    label: 'Defence Simulation',
    products: [
      { title: 'Anti-Drone Simulation', desc: 'Counter-UAS training with realistic threat scenarios.' },
      { title: 'Warship Simulator', desc: 'Full-mission naval warfare bridge simulation.' },
      { title: 'Tactical Combat Trainer', desc: 'Multi-role tactical decision training.' },
    ],
  },
  {
    key: 'marine',
    label: 'Marine Simulation',
    products: [
      { title: 'Ship Bridge Simulator', desc: 'DNV-certified full-mission bridge training.' },
      { title: 'Engine Room Simulator', desc: 'Complete propulsion and auxiliary systems.' },
      { title: 'Cargo Handling Simulator', desc: 'Liquid and dry cargo operations training.' },
    ],
  },
  {
    key: 'offshore',
    label: 'Offshore Simulation',
    products: [
      { title: 'Drilling Simulator', desc: 'Well control and drilling operations training.' },
      { title: 'ROV Simulator', desc: 'Subsea remotely operated vehicle training.' },
      { title: 'Dynamic Positioning', desc: 'DP operator training and certification.' },
    ],
  },
  {
    key: 'crane',
    label: 'Crane & Port',
    products: [
      { title: 'STS Crane Simulator', desc: 'Ship-to-shore container crane operations.' },
      { title: 'RTG Crane Simulator', desc: 'Rubber-tyred gantry crane training.' },
      { title: 'Mobile Crane Simulator', desc: 'Heavy lift and mobile crane operations.' },
    ],
  },
  {
    key: 'custom',
    label: 'Custom Systems',
    products: [
      { title: 'Bespoke Simulators', desc: 'Tailored to specific operational requirements.' },
      { title: 'Hardware-in-the-Loop', desc: 'Integration with actual equipment and controls.' },
    ],
  },
];

const Products = () => (
  <div className="section">
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 48px' }}>
      <Title level={2} style={{ marginBottom: 8 }}>Products</Title>
      <Paragraph type="secondary" style={{ marginBottom: 48, maxWidth: 600 }}>
        Comprehensive simulation solutions across defence, maritime, offshore, and industrial domains.
      </Paragraph>
      <Tabs
        defaultActiveKey="defence"
        items={categories.map(cat => ({
          key: cat.key,
          label: <span style={{ color: '#e5e7eb' }}>{cat.label}</span>,
          children: (
            <Row gutter={[24, 24]} style={{ marginTop: 24 }}>
              {cat.products.map(p => (
                <Col xs={24} sm={12} md={8} key={p.title}>
                  <Card hoverable>
                    <Title level={4}>{p.title}</Title>
                    <Paragraph type="secondary">{p.desc}</Paragraph>
                  </Card>
                </Col>
              ))}
            </Row>
          ),
        }))}
      />
    </div>
  </div>
);

export default Products;
