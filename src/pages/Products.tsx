import { Link, useLocation } from "react-router-dom";

import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { productPath } from "@/data/products";
import { productCategories } from "@/data/productCatalog";

const routeCategoryMap: Record<string, string> = {
  "/defence": "naval",
  "/maritime": "marine",
};

const routePageContent: Record<
  string,
  {
    eyebrow: string;
    title: string;
    description: string;
  }
> = {
  "/defence": {
    eyebrow: "PRODUCTS",
    title: "DEFENSE SIMULATORS",
    description:
      "The simulators are designed and built to deliver a high degree of integration and interoperability, enabling the practice of missions involving multiple force elements performing in their own individual roles towards a common objective.",
  },
  "/maritime": {
    eyebrow: "PRODUCTS",
    title: "MARINE",
    description:
      "Complete marine simulation solutions built for bridge operations, engine room training, cargo handling, communication, and mission-critical logistics across modern maritime environments.",
  },
};

const Products = () => {
  const location = useLocation();
  const activeRouteCategory = routeCategoryMap[location.pathname];
  const routePageHeader = routePageContent[location.pathname];
  const visibleCategories = activeRouteCategory
    ? productCategories.filter(
        (category) => category.key === activeRouteCategory,
      )
    : productCategories;

  return (
    <div className="section">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {activeRouteCategory ? (
          visibleCategories.map((cat) => (
            <div key={cat.key} className="mt-7">
              <div className="product-image-card relative mb-6 overflow-hidden rounded-xl ring-1 ring-border/60 ">
                <img
                  src={cat.image}
                  alt={cat.label}
                  className="h-full w-full object-cover"
                />
                {routePageHeader ? (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/20" />
                    <div className="absolute inset-0 flex items-end">
                      <div className="max-w-4xl p-6 text-white md:p-10">
                        <div className="animate-fade-up-delay-1">
                          <p className="mb-3 text-xs tracking-[0.35em] text-white/80">
                            {routePageHeader.eyebrow}
                          </p>
                        </div>
                        <div className="animate-fade-up-delay-2">
                          <h1 className="heading-balance text-2xl font-bold tracking-tight md:text-4xl">
                            {routePageHeader.title}
                          </h1>
                        </div>
                        <div className="animate-fade-up-delay-3">
                          <p className="mt-4 max-w-3xl text-xs leading-relaxed text-white/85 md:text-base">
                            {routePageHeader.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </>
                ) : null}
              </div>

              {!routePageHeader ? (
                <p className="mb-10 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
                  {cat.intro}
                </p>
              ) : null}

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                {cat.products.map((product) => (
                  <Link
                    key={product.title}
                    to={productPath(cat.key, product.title)}
                    className="block"
                  >
                    <Card className="h-full border-border/60 bg-card/60 transition-all hover:-translate-y-1 hover:shadow-lg">
                      <CardContent className="p-7">
                        <h3 className="mb-2 text-base font-semibold tracking-tight">
                          {product.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {product.desc}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          ))
        ) : (
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
                <div className="product-image-card mb-6 overflow-hidden rounded-xl ring-1 ring-border/60">
                  <img
                    src={cat.image}
                    alt={cat.label}
                    className="h-[420px] w-full object-cover"
                  />
                </div>

                <p className="mb-10 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
                  {cat.intro}
                </p>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                  {cat.products.map((product) => (
                    <Link
                      key={product.title}
                      to={productPath(cat.key, product.title)}
                      className="block"
                    >
                      <Card className="h-full border-border/60 bg-card/60 transition-all hover:-translate-y-1 hover:shadow-lg">
                        <CardContent className="p-7">
                          <h3 className="mb-2 text-base font-semibold tracking-tight">
                            {product.title}
                          </h3>
                          <p className="text-sm leading-relaxed text-muted-foreground">
                            {product.desc}
                          </p>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        )}
      </div>
    </div>
  );
};

export default Products;
