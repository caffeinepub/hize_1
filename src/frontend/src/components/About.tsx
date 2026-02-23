export function About() {
  return (
    <section id="about" className="bg-[#f9f9f9] px-[5%] py-40">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-40 flex flex-col items-center gap-[8%] md:flex-row">
          <div className="flex h-[650px] flex-[1.2] items-center justify-center bg-[#e2e2e2]">
            <img
              src="/assets/generated/campaign-01.dim_800x1000.png"
              alt="Campaign"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex-1 pt-12 text-center md:pt-0 md:text-left">
            <h2 className="mb-8 text-[2.8rem] font-light leading-[1.1]">The HIZE Philosophy</h2>
            <p className="mb-7 text-[1.1rem] text-[#444]">
              Born in 2026, HIZE was created for those who believe that style shouldn't be loud to
              be heard. We focus on the architecture of the garment—the weight of the cotton, the
              drape of the linen, and the precision of the stitch.
            </p>
            <p className="text-[1.1rem] text-[#444]">
              We don't do "seasons." We do essentials that last a decade, not a trend cycle.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-16 border-t border-[#ddd] pt-20 md:grid-cols-3">
          <div className="text-center md:text-left">
            <h3 className="mb-6 text-[0.8rem] uppercase tracking-[3px]">Sourcing</h3>
            <p className="text-[1rem] leading-[1.8] text-[#666]">
              100% organic textiles sourced from family-owned mills in Northern Italy and Japan.
            </p>
          </div>
          <div className="text-center md:text-left">
            <h3 className="mb-6 text-[0.8rem] uppercase tracking-[3px]">Ethics</h3>
            <p className="text-[1rem] leading-[1.8] text-[#666]">
              Fair wages and safe environments for every hand that touches a HIZE garment.
            </p>
          </div>
          <div className="text-center md:text-left">
            <h3 className="mb-6 text-[0.8rem] uppercase tracking-[3px]">Intent</h3>
            <p className="text-[1rem] leading-[1.8] text-[#666]">
              Every piece is designed to be versatile, moving seamlessly from dawn to dusk.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
