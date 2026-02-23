import { useEffect, useState } from 'react';
import { ProductCard } from './ProductCard';
import { useCart } from '../contexts/CartContext';
import type { Product } from '../backend';

const productImages: Record<string, string> = {
  'Heavyweight Tee': '/assets/generated/product-tee.dim_600x800.png',
  'Linen Trousers': '/assets/generated/product-trousers.dim_600x800.png',
  'Canvas Tote': '/assets/generated/product-tote.dim_600x800.png',
  'Studio Cap': '/assets/generated/product-cap.dim_600x800.png',
  'Cashmere Sweater': '/assets/generated/sweatshirt.dim_800x1000.png',
  'Minimalist Blazer': '/assets/generated/chinos.dim_800x1000.png',
  'Leather Chelsea Boots': '/assets/generated/oxford-shirt.dim_800x1000.png',
  'Silk Blend Scarf': '/assets/generated/wool-scarf.dim_800x1000.png',
};

export function ProductGrid() {
  const { products, addToCart } = useCart();
  const [isLoading, setIsLoading] = useState<Record<string, boolean>>({});

  const handleAddToCart = async (productId: bigint) => {
    setIsLoading((prev) => ({ ...prev, [productId.toString()]: true }));
    try {
      await addToCart(productId, BigInt(1));
    } finally {
      setIsLoading((prev) => ({ ...prev, [productId.toString()]: false }));
    }
  };

  return (
    <section id="shop" className="bg-white px-[5%] py-32">
      <div className="mb-16 flex items-end justify-between border-b border-[#eee] pb-4">
        <h2 className="text-[1rem] uppercase tracking-[4px]">New Arrivals</h2>
        <a
          href="#"
          className="text-[0.8rem] uppercase text-[#777] no-underline hover:opacity-50"
        >
          View All
        </a>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id.toString()}
            product={product}
            imageUrl={productImages[product.name] || ''}
            onAddToCart={handleAddToCart}
            isLoading={isLoading[product.id.toString()] || false}
          />
        ))}
      </div>
    </section>
  );
}
