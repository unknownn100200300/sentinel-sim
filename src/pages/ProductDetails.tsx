import { ChevronLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";

import NavalBridgeOperationsDetail from "@/components/NavalBridgeOperationsDetail";
import { getProductDetailByRoute } from "@/data/productDetailsCatalog";
import NotFound from "./NotFound";

const ProductDetails = () => {
  const { categoryKey, productSlug } = useParams();
  const product = getProductDetailByRoute(categoryKey, productSlug);

  if (!product) return <NotFound />;

  const isNavalBridgeOperations = product.title === "Naval Bridge Operations Simulator";

  return (
    <div className="section">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Link to="/products" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
          <ChevronLeft className="h-4 w-4" />
          Back to Products
        </Link>

        <div className="product-image-card mt-5 mb-7 rounded-xl overflow-hidden ring-1 ring-border/60">
          <img src={product.image} alt={product.title} className="h-[440px] w-full object-cover" />
        </div>

        <p className="accent text-xs tracking-[0.35em] mb-2">{product.categoryLabel.toUpperCase()}</p>
        <h1 className="heading-balance text-3xl md:text-4xl font-bold tracking-tight mb-5">{product.title}</h1>

        {isNavalBridgeOperations ? (
          <NavalBridgeOperationsDetail />
        ) : (
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-3xl whitespace-pre-line">
            {product.description}
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
