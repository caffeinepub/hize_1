import { useCart } from '../contexts/CartContext';
import { Cart } from './Cart';

export function Navigation() {
  const { cartCount, openCart } = useCart();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-[#eee] bg-white px-[5%] py-6">
        <a
          href="#"
          className="text-[1.6rem] font-extrabold uppercase tracking-[6px] text-[#1a1a1a] no-underline"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          HIZE
        </a>

        <ul className="hidden list-none gap-10 md:flex">
          <li>
            <button
              onClick={() => scrollToSection('shop')}
              className="text-[0.85rem] font-medium uppercase tracking-[1.5px] text-[#1a1a1a] transition-opacity duration-300 hover:opacity-50"
            >
              Shop
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('about')}
              className="text-[0.85rem] font-medium uppercase tracking-[1.5px] text-[#1a1a1a] transition-opacity duration-300 hover:opacity-50"
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('journal')}
              className="text-[0.85rem] font-medium uppercase tracking-[1.5px] text-[#1a1a1a] transition-opacity duration-300 hover:opacity-50"
            >
              Journal
            </button>
          </li>
        </ul>

        <button
          onClick={openCart}
          className="text-[0.85rem] font-medium uppercase tracking-[1.5px] text-[#1a1a1a] transition-opacity duration-300 hover:opacity-50"
        >
          BAG ({cartCount})
        </button>
      </nav>
      <Cart />
    </>
  );
}
