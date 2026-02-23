import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { ProductGrid } from './components/ProductGrid';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { CartProvider } from './contexts/CartContext';

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen">
        <Navigation />
        <Hero />
        <ProductGrid />
        <About />
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
