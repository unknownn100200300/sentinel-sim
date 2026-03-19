import { Link } from "react-router-dom";

import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { productPath } from "@/data/products";
import { productCategories } from "@/data/productCatalog";

const Products = () => (
  <div className="section">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <p className="accent text-xs tracking-[0.35em] mb-2">PRODUCTS</p>
      <h1 className="heading-balance text-3xl md:text-4xl font-bold tracking-tight mb-2">Simulation Systems</h1>
      <p className="text-muted-foreground mb-10 max-w-2xl text-sm md:text-base leading-relaxed">
        ARI offers sophisticated simulator products for armed forces, maritime academies, offshore operators, and port
        authorities — covering training, tactical proving, mission rehearsal, and assessment.
      </p>

      <Tabs defaultValue="naval" className="w-full">
        <TabsList className="h-auto flex flex-wrap justify-start gap-2 bg-transparent p-0">
          {productCategories.map((cat) => (
            <TabsTrigger
              key={cat.key}
              value={cat.key}
              className="data-[state=active]:bg-accent/20 data-[state=active]:text-accent"
            >
              {cat.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {productCategories.map((cat) => (
          <TabsContent key={cat.key} value={cat.key} className="mt-7">
            <div className="product-image-card mb-6 rounded-xl overflow-hidden ring-1 ring-border/60">
              <img src={cat.image} alt={cat.label} className="h-[420px] w-full object-cover" />
            </div>

            <p className="text-muted-foreground mb-10 max-w-3xl text-sm md:text-base leading-relaxed">{cat.intro}</p>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
              {cat.products.map((product) => (
                <Link key={product.title} to={productPath(cat.key, product.title)} className="block">
                  <Card className="h-full border-border/60 bg-card/60 transition-all hover:-translate-y-1 hover:shadow-lg">
                    <CardContent className="p-7">
                      <h3 className="text-base font-semibold tracking-tight mb-2">{product.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{product.desc}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  </div>
);

export default Products;
