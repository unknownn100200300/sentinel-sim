import { Typography } from "antd";
import { Link, useParams } from "react-router-dom";
import NavalBridgeOperationsDetail from "@/components/NavalBridgeOperationsDetail";
import { getProductDetailByRoute } from "@/data/productDetailsCatalog";
import NotFound from "./NotFound";

const { Title, Paragraph, Text } = Typography;

const ProductDetails = () => {
  const { categoryKey, productSlug } = useParams();
  const product = getProductDetailByRoute(categoryKey, productSlug);

  if (!product) return <NotFound />;

  const isNavalBridgeOperations = product.title === "Naval Bridge Operations Simulator";

  return (
    <div className="section">
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px" }}>
        <div style={{ marginBottom: 16 }}>
          <Link to="/products" style={{ color: "#9CA3AF" }}>
            ← Back to Products
          </Link>
        </div>

        <div className="product-image-card" style={{ marginBottom: 24, borderRadius: 12, overflow: "hidden" }}>
          <img src={product.image} alt={product.title} style={{ width: "100%", height: 480, objectFit: "cover" }} />
        </div>

        <Text className="accent" style={{ letterSpacing: 3, fontSize: 12, marginBottom: 8, display: "block" }}>
          {product.categoryLabel.toUpperCase()}
        </Text>
        <Title level={2} style={{ marginBottom: 12, fontWeight: 700 }}>
          {product.title}
        </Title>

        {isNavalBridgeOperations ? (
          <NavalBridgeOperationsDetail />
        ) : (
          <Paragraph type="secondary" style={{ fontSize: 15, lineHeight: 1.8, maxWidth: 900, whiteSpace: "pre-line" }}>
            {product.description}
          </Paragraph>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
