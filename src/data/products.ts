export type Product = {
  title: string;
  desc: string;
};

export type ProductCategory = {
  key: string;
  label: string;
  image: string;
  intro: string;
  products: Product[];
};

export const slugify = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const productPath = (categoryKey: string, productTitle: string) =>
  `/products/${encodeURIComponent(categoryKey)}/${encodeURIComponent(slugify(productTitle))}`;

export const getProductByRoute = (
  categories: ProductCategory[],
  categoryKey: string | undefined,
  productSlug: string | undefined
) => {
  if (!categoryKey || !productSlug) return null;

  const category = categories.find((c) => c.key === categoryKey);
  if (!category) return null;

  const product = category.products.find((p) => slugify(p.title) === productSlug);
  if (!product) return null;

  return { category, product };
};

