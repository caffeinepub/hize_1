import { useCart } from '../contexts/CartContext';
import { X } from 'lucide-react';

export function Cart() {
  const { cartItems, isCartOpen, closeCart, removeFromCart, products } = useCart();

  if (!isCartOpen) return null;

  const getProductById = (id: bigint) => {
    return products.find((p) => p.id === id);
  };

  const total = cartItems.reduce((sum, item) => {
    const product = getProductById(item.productId);
    return sum + (product ? Number(product.price) * Number(item.quantity) : 0);
  }, 0);

  return (
    <>
      <div
        className="fixed inset-0 z-50 bg-black/50"
        onClick={closeCart}
      />
      <div className="fixed right-0 top-0 z-50 h-full w-full max-w-md bg-white shadow-2xl">
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-[#eee] p-6">
            <h2 className="text-[1rem] uppercase tracking-[4px]">Your Bag</h2>
            <button
              onClick={closeCart}
              className="transition-opacity hover:opacity-50"
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6">
            {cartItems.length === 0 ? (
              <p className="text-center text-[#777]">Your bag is empty</p>
            ) : (
              <div className="space-y-6">
                {cartItems.map((item) => {
                  const product = getProductById(item.productId);
                  if (!product) return null;

                  return (
                    <div key={item.productId.toString()} className="flex gap-4">
                      <div className="h-24 w-24 flex-shrink-0 bg-[#f4f4f4]" />
                      <div className="flex-1">
                        <h3 className="mb-1 text-[0.95rem] font-normal">{product.name}</h3>
                        <p className="mb-2 text-[0.9rem] text-[#777]">
                          ${Number(product.price)}.00
                        </p>
                        <p className="text-[0.85rem] text-[#777]">
                          Quantity: {Number(item.quantity)}
                        </p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.productId)}
                        className="text-[#777] transition-opacity hover:opacity-50"
                      >
                        <X size={20} />
                      </button>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {cartItems.length > 0 && (
            <div className="border-t border-[#eee] p-6">
              <div className="mb-6 flex justify-between text-[1rem] font-medium">
                <span>Total</span>
                <span>${total}.00</span>
              </div>
              <button className="w-full bg-[#1a1a1a] px-12 py-5 text-[0.75rem] uppercase tracking-[3px] text-white transition-all duration-300 hover:bg-[#333]">
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
