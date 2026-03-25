import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Index from "./pages/Index";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Contact from "./pages/Contact";
import ComingSoon from "./pages/ComingSoon";
import NotFound from "./pages/NotFound";

const App = () => (
  <BrowserRouter>
    <AppLayout>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:categoryKey/:productSlug" element={<ProductDetails />} />
        <Route path="/defence" element={<Products />} />
        <Route path="/maritime" element={<Products />} />
        <Route path="/training" element={<ComingSoon />} />
        <Route path="/clients" element={<ComingSoon />} />
        <Route path="/press" element={<ComingSoon />} />
        <Route path="/about" element={<ComingSoon />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AppLayout>
  </BrowserRouter>
);

export default App;
