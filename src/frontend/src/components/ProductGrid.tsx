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
  'Sleek Hoodie': 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&h=1000&fit=crop&q=80',
  'Elevate Hoodie': 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&h=1000&fit=crop&q=80',
  'Urban Shorts': 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=800&h=1000&fit=crop&q=80',
  'Active Shorts': 'https://images.unsplash.com/photo-1591195851547-33a0a5e6f6e7?w=800&h=1000&fit=crop&q=80',
  'Modern Sunglasses': 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&h=1000&fit=crop&q=80',
  'Retro Sunglasses': 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&h=1000&fit=crop&q=80',
  'Essential Cap': 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=800&h=1000&fit=crop&q=80',
  'Executive Backpack': 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=1000&fit=crop&q=80',
  'Wool Overcoat': 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&h=1000&fit=crop&q=80',
  'Knitted Scarf': 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=800&h=1000&fit=crop&q=80',
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
