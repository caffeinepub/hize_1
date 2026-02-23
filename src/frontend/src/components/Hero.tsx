export function Hero() {
  const scrollToShop = () => {
    const element = document.getElementById('shop');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="flex h-[90vh] flex-col items-center justify-center bg-[#e5e5e5] bg-cover bg-center px-[10%] text-center"
      style={{ backgroundImage: 'url(/assets/generated/hero-bg.dim_1920x1080.png)' }}
    >
      <h1 className="mb-6 text-[clamp(2.5rem,6vw,4rem)] font-light tracking-[-1px]">
        Summer Uniform '26
      </h1>
      <p className="mb-10 max-w-[600px] text-[1.1rem] text-[#444]">
        Premium basics designed for the modern minimalist. Focused on form, function, and the finest
        materials.
      </p>
      <button
        onClick={scrollToShop}
        className="bg-[#1a1a1a] px-12 py-5 text-[0.75rem] uppercase tracking-[3px] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#333]"
      >
        Shop Collection
      </button>
    </section>
  );
}
