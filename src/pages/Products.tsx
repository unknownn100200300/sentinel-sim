import { Typography, Row, Col, Card, Tabs } from 'antd';
import defenceImg from '@/assets/defence-sim.jpg';
import marineImg from '@/assets/marine-sim.jpg';
import offshoreImg from '@/assets/offshore-sim.jpg';
import craneImg from '@/assets/crane-sim.jpg';

const { Title, Paragraph } = Typography;

const categories = [
  {
    key: 'defence', label: 'Defence Simulation', image: defenceImg,
    products: [
      { title: 'Anti-Drone Simulation', desc: 'Counter-UAS training with realistic threat scenarios.' },
      { title: 'Warship Simulator', desc: 'Full-mission naval warfare bridge simulation.' },
      { title: 'Tactical Combat Trainer', desc: 'Multi-role tactical decision training.' },
    ],
  },
  {
    key: 'marine', label: 'Marine Simulation', image: marineImg,
    products: [
      { title: 'Ship Bridge Simulator', desc: 'DNV-certified full-mission bridge training.' },
      { title: 'Engine Room Simulator', desc: 'Complete propulsion and auxiliary systems.' },
      { title: 'Cargo Handling Simulator', desc: 'Liquid and dry cargo operations training.' },
    ],
  },
  {
    key: 'offshore', label: 'Offshore Simulation', image: offshoreImg,
    products: [
      { title: 'Drilling Simulator', desc: 'Well control and drilling operations.' },
      { title: 'ROV Simulator', desc: 'Subsea remotely operated vehicle training.' },
      { title: 'Dynamic Positioning', desc: 'DP operator training and certification.' },
    ],
  },
  {
    key: 'crane', label: 'Crane & Port', image: craneImg,
    products: [
      { title: 'STS Crane Simulator', desc: 'Ship-to-shore container crane operations.' },
      { title: 'RTG Crane Simulator', desc: 'Rubber-tyred gantry crane training.' },
      { title: 'Mobile Crane Simulator', desc: 'Heavy lift and mobile crane operations.' },
    ],
  },
  {
    key: 'custom', label: 'Custom Systems', image: offshoreImg,
    products: [
      { title: 'Bespoke Simulators', desc: 'Tailored to specific operational requirements.' },
      { title: 'Hardware-in-the-Loop', desc: 'Integration with actual equipment and controls.' },
    ],
  },
];

const Products = () => (
  <div className="section">
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 48px' }}>
      <Paragraph className="accent" style={{ letterSpacing: 3, fontSize: 12, marginBottom: 8 }}>PRODUCTS</Paragraph>
      <Title level={2} style={{ marginBottom: 8, fontWeight: 700 }}>Simulation Systems</Title>
      <Paragraph type="secondary" style={{ marginBottom: 48, maxWidth: 600 }}>
        Comprehensive simulation solutions across defence, maritime, offshore, and industrial domains.
      </Paragraph>
      <Tabs
        defaultActiveKey="defence"
        items={categories.map(cat => ({
          key: cat.key,
          label: <span style={{ color: '#e5e7eb' }}>{cat.label}</span>,
          children: (
            <div>
              <div className="product-image-card" style={{ marginBottom: 32, borderRadius: 12, overflow: 'hidden' }}>
                <img src={cat.image} alt={cat.label} style={{ width: '100%', height: 300, objectFit: 'cover' }} />
              </div>
              <Row gutter={[24, 24]}>
                {cat.products.map(p => (
                  <Col xs={24} sm={12} md={8} key={p.title}>
                    <Card hoverable>
                      <Title level={4}>{p.title}</Title>
                      <Paragraph type="secondary" style={{ fontSize: 13 }}>{p.desc}</Paragraph>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          ),
        }))}
      />
    </div>
  </div>
);

export default Products;
