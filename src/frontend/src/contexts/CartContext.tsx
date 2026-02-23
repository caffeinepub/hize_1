import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { useActor } from '../hooks/useActor';
import type { CartItem, Product } from '../backend';

interface CartContextType {
  cartItems: CartItem[];
  cartCount: number;
  isCartOpen: boolean;
  addToCart: (productId: bigint, quantity: bigint) => Promise<void>;
  removeFromCart: (productId: bigint) => void;
  openCart: () => void;
  closeCart: () => void;
  refreshCart: () => Promise<void>;
  products: Product[];
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const { actor } = useActor();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const refreshCart = async () => {
    if (!actor) return;
    try {
      const items = await actor.getCart();
      setCartItems(items);
    } catch (error) {
      console.error('Failed to fetch cart:', error);
    }
  };

  const fetchProducts = async () => {
    if (!actor) return;
    try {
      const prods = await actor.getProducts();
      setProducts(prods);
    } catch (error) {
      console.error('Failed to fetch products:', error);
    }
  };

  useEffect(() => {
    if (actor) {
      refreshCart();
      fetchProducts();
    }
  }, [actor]);

  const addToCart = async (productId: bigint, quantity: bigint) => {
    if (!actor) return;
    try {
      await actor.addToCart(productId, quantity);
      await refreshCart();
    } catch (error) {
      console.error('Failed to add to cart:', error);
    }
  };

  const removeFromCart = (productId: bigint) => {
    setCartItems(cartItems.filter(item => item.productId !== productId));
  };

  const cartCount = cartItems.reduce((sum, item) => sum + Number(item.quantity), 0);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartCount,
        isCartOpen,
        addToCart,
        removeFromCart,
        openCart,
        closeCart,
        refreshCart,
        products,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
}
