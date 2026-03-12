import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ConfigProvider, theme } from "antd";
import AppLayout from "./components/AppLayout";
import Index from "./pages/Index";
import Products from "./pages/Products";
import Industries from "./pages/Industries";
import Technology from "./pages/Technology";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const App = () => (
  <ConfigProvider
    theme={{
      algorithm: theme.darkAlgorithm,
      token: {
        colorPrimary: '#00b4d8',
        colorBgContainer: '#131b2e',
        colorBgElevated: '#1a2340',
        colorBorder: '#1f2937',
        colorText: '#e5e7eb',
        colorTextSecondary: '#9ca3af',
        borderRadius: 8,
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      },
    }}
  >
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products" element={<Products />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  </ConfigProvider>
);

export default App;
