import type { Product } from '../backend';

interface ProductCardProps {
  product: Product;
  imageUrl: string;
  onAddToCart: (productId: bigint) => void;
  isLoading: boolean;
}

export function ProductCard({ product, imageUrl, onAddToCart, isLoading }: ProductCardProps) {
  return (
    <div className="group block text-left">
      <div className="mb-5 flex aspect-[3/4] w-full items-center justify-center overflow-hidden bg-[#f4f4f4] transition-all duration-500 group-hover:bg-[#ececec]">
        {imageUrl ? (
          <img src={imageUrl} alt={product.name} className="h-full w-full object-cover" />
        ) : (
          <span className="text-[#999]">Product Shot</span>
        )}
      </div>
      <h3 className="mb-1 text-[0.95rem] font-normal">{product.name}</h3>
      <p className="mb-3 text-[0.9rem] text-[#777]">${Number(product.price)}.00</p>
      <button
        onClick={() => onAddToCart(product.id)}
        disabled={isLoading}
        className="bg-[#1a1a1a] px-6 py-3 text-[0.7rem] uppercase tracking-[2px] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#333] disabled:opacity-50"
      >
        {isLoading ? 'Adding...' : 'Add to Bag'}
      </button>
    </div>
  );
}
