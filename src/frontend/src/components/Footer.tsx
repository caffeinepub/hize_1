import { SiInstagram } from 'react-icons/si';

export function Footer() {
  const appIdentifier = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'hize-store'
  );

  return (
    <footer className="bg-[#1a1a1a] px-[5%] py-20 text-center text-white">
      <span className="mb-8 block text-[2rem] tracking-[10px]">HIZE</span>
      <div className="mb-8">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-4 text-[0.8rem] uppercase text-[#888] no-underline hover:text-white"
        >
          Instagram
        </a>
        <a
          href="#"
          className="mx-4 text-[0.8rem] uppercase text-[#888] no-underline hover:text-white"
        >
          Privacy
        </a>
        <a
          href="#"
          className="mx-4 text-[0.8rem] uppercase text-[#888] no-underline hover:text-white"
        >
          Contact
        </a>
      </div>
      <p className="mb-4 text-[0.7rem] tracking-[1px] text-[#555]">
        © {new Date().getFullYear()} HIZE STUDIO. ALL RIGHTS RESERVED.
      </p>
      <p className="text-[0.7rem] text-[#555]">
        Built with <span className="text-red-500">♥</span> using{' '}
        <a
          href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#888] hover:text-white"
        >
          caffeine.ai
        </a>
      </p>
    </footer>
  );
}
