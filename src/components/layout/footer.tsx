import Link from "next/link";
import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="w-full bg-brand-deep text-white/70 py-16 border-t border-white/5">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12 border-b border-white/10">
          {/* Logo & Description */}
          <div className="md:col-span-6 flex flex-col gap-4">
            <Link href="/" className="text-white hover:opacity-85 inline-block">
              <Logo className="text-white h-7" />
            </Link>
            <p className="text-xs md:text-sm leading-relaxed text-white/70 max-w-[320px]">
              Grow your digital forest while achieving peak focus. Plant trees,
              break habits, and beat phone addiction.
            </p>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <h4 className="text-xs md:text-sm font-semibold tracking-wider text-white uppercase">
              Product
            </h4>
            <nav className="flex flex-col gap-4">
              <Link
                href="#download"
                className="text-xs md:text-sm text-white/70 font-normal hover:text-white transition-colors"
              >
                Download
              </Link>
              <Link
                href="#guide"
                className="text-xs md:text-sm text-white/70 font-normal hover:text-white transition-colors"
              >
                Guide Plans
              </Link>
              <Link
                href="#pricing"
                className="text-xs md:text-sm text-white/70 font-normal hover:text-white transition-colors"
              >
                Pricing Plans
              </Link>
            </nav>
          </div>

          <div className="md:col-span-2 flex flex-col gap-4">
            <h4 className="text-xs md:text-sm font-semibold tracking-wider text-white uppercase">
              Company
            </h4>
            <nav className="flex flex-col gap-4">
              <Link
                href="#about"
                className="text-xs md:text-sm text-white/70 font-normal hover:text-white transition-colors"
              >
                About Us
              </Link>
              <Link
                href="#team"
                className="text-xs md:text-sm text-white/70 font-normal hover:text-white transition-colors"
              >
                Behind the Team
              </Link>
              <Link
                href="#contact"
                className="text-xs md:text-sm text-white/70 font-normal hover:text-white transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          <div className="md:col-span-2 flex flex-col gap-4">
            <h4 className="text-xs md:text-sm font-semibold tracking-wider text-white uppercase">
              Legal
            </h4>
            <nav className="flex flex-col gap-4">
              <Link
                href="#privacy"
                className="text-xs md:text-sm text-white/70 font-normal hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#terms"
                className="text-xs md:text-sm text-white/70 font-normal hover:text-white transition-colors"
              >
                Terms of Use
              </Link>
              <Link
                href="#hipaa"
                className="text-xs md:text-sm text-white/70 font-normal hover:text-white transition-colors"
              >
                HIPAA Safe
              </Link>
              <Link
                href="/delete-account"
                className="text-xs md:text-sm text-white/70 font-normal hover:text-white transition-colors"
              >
                Delete Account
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom Area */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 gap-4 text-xs md:text-sm text-white/50">
          <p>© {new Date().getFullYear()} Lorofy Inc. All rights reserved.</p>
          <div className="flex gap-6 text-white/70">
            <Link
              href="https://instagram.com"
              className="hover:text-white transition-colors"
            >
              <svg className="size-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051C.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </Link>
            <Link
              href="https://twitter.com"
              className="hover:text-white transition-colors"
            >
              <svg className="size-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </Link>
            <Link
              href="https://github.com"
              className="hover:text-white transition-colors"
            >
              <svg className="size-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
