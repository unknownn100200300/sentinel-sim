import { ChevronLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";

import { getProductDetailByRoute, navalBridgeSections } from "@/data/productDetailsCatalog";
import NotFound from "./NotFound";

const backRouteByCategory: Record<string, string> = {
  naval: "/defence",
  marine: "/maritime",
};

const ProductDetails = () => {
  const { categoryKey, productSlug } = useParams();
  const product = getProductDetailByRoute(categoryKey, productSlug);

  if (!product) return <NotFound />;

  const isNavalBridgeOperations = product.title === "Naval Bridge Operations Simulator";
  const backRoute = backRouteByCategory[product.categoryKey] ?? "/products";

  return (
    <div className="section">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Link to={backRoute} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
          <ChevronLeft className="h-4 w-4" />
          Back to Products
        </Link>

        <div className="product-image-card mt-5 mb-7 rounded-xl overflow-hidden ring-1 ring-border/60">
          <img src={product.image} alt={product.title} className="h-[440px] w-full object-cover" />
        </div>

        <p className="accent text-xs tracking-[0.35em] mb-2">{product.categoryLabel.toUpperCase()}</p>
        <h1 className="heading-balance text-3xl md:text-4xl font-bold tracking-tight mb-5">{product.title}</h1>

        {isNavalBridgeOperations ? (
          <div className="space-y-14">
            {navalBridgeSections.map((section, index) => (
              <section
                key={section.id}
                className={`grid gap-10 md:grid-cols-2 md:items-center ${section.reverse ? "md:flex-row-reverse" : ""}`}
              >
                <div className={section.textClass}>
                  {section.title && <h3 className="heading-balance text-xl font-bold tracking-tight">{section.title}</h3>}
                  {section.bullets.map((text, i) => (
                    <p key={`${section.id}-p-${i}`}>{text}</p>
                  ))}
                </div>

                <div className="overflow-hidden rounded-xl border border-border/60 bg-card/60">
                  <img src={section.image} alt={section.imageAlt} className={section.imageClass} />
                </div>
              </section>
            ))}
          </div>
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
