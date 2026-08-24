import { Bounded } from "@/components/shared/bounded";
import { Heading } from "@/components/shared/heading";
import { ScrollAnimatedContainer } from "@/components/animated";

export function CtaSection() {
  return (
    <Bounded className="bg-background border-t border-border/20 py-24" id="download">
      <ScrollAnimatedContainer type="zoom" delay={0.1} className="w-full flex flex-col items-center">
        <div className="flex flex-col items-center text-center gap-9">
          {/* Header Title */}
          <Heading variant="section" className="lg:text-5xl max-w-2xl leading-tight">
            Grow your focus today. Lorofy is free to plant.
          </Heading>

          {/* Buttons Group */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
            {/* App Store Button */}
            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-black text-white hover:bg-black/90 active:scale-95 transition-all px-6 py-3 rounded-full shadow-md w-52 sm:w-auto"
            >
              {/* Apple Logo SVG */}
              <svg className="size-6 fill-current" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.2.67-2.92 1.51-.62.73-1.16 1.87-1.01 2.98 1.11.09 2.27-.59 2.94-1.43z" />
              </svg>
              <div className="flex flex-col items-start leading-none text-left">
                <span className="text-[10px] text-zinc-400 font-sans uppercase tracking-wider">Download on the</span>
                <span className="text-lg font-semibold font-sans mt-0.5">App Store</span>
              </div>
            </a>

            {/* Google Play Button */}
            <a
              href="https://play.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-black text-white hover:bg-black/90 active:scale-95 transition-all px-6 py-3 rounded-full shadow-md w-52 sm:w-auto"
            >
              {/* Google Play Logo SVG */}
              <svg className="size-6 fill-current" viewBox="0 0 24 24">
                <path d="M5 3.05c-.32.32-.5.85-.5 1.55v14.8c0 .7.18 1.23.5 1.55l.07.07 8.35-8.35V11.5L5.07 2.98 5 3.05zm12.3 8.34L14 8.7 11.23 11.5 14 14.3l3.3-1.88c1-.56 1-.56 0-1.03zM10.5 12.2l3.14-3.14L5.68 4.22c-.67-.38-1-.1-.7.2l5.52 7.78zM4.98 19.58c-.3.3.03.58.7.2l7.96-4.54-3.14-3.14-5.52 7.48z" />
              </svg>
              <div className="flex flex-col items-start leading-none text-left">
                <span className="text-[10px] text-zinc-400 font-sans uppercase tracking-wider">GET IT ON</span>
                <span className="text-lg font-semibold font-sans mt-0.5">Google Play</span>
              </div>
            </a>
          </div>
        </div>
      </ScrollAnimatedContainer>
    </Bounded>
  );
}
