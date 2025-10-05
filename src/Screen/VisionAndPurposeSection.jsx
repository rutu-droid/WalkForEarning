import React from "react";

export const VisionAndPurposeSection = () => {
  return (
    <section className="flex w-full flex-col items-center gap-8 px-6 py-12 md:px-16 md:py-[54px] lg:flex-row lg:px-[100px]">
      {/* --- FIXED: Removed animation classes --- */}
      <div className="flex flex-1 flex-col items-start gap-8">
        <h2 className="w-full [font-family:'Jersey_10',Helvetica] font-normal leading-tight tracking-[1.08px] text-white text-4xl md:text-5xl md:leading-[58px] lg:text-[54px]">
          The Future of Fitness is Here
        </h2>

        <p className="w-full [font-family:'Outfit',Helvetica] font-normal leading-6 tracking-[0] text-white text-base">
          Traditional fitness apps track your steps but offer no real incentives
          beyond virtual badges. Walk for Earning changes everything by
          introducing a revolutionary move-to-earn model where physical activity
          generates actual financial rewards. Unlike conventional approaches,
          WFE creates a sustainable ecosystem where health and wealth converge.
          Every step you take contributes to token mining, building a tangible
          connection between your fitness journey and financial growth. This
          isn&#39;t just about tracking—it&#39;s about transforming movement
          into meaningful value.
        </p>
      </div>

      {/* --- FIXED: Removed animation classes --- */}
      <div className="relative flex w-full items-center justify-center lg:w-[446px]">
        <div className="absolute bottom-4 left-1/2 h-16 w-[373px] -translate-x-1/2 rounded-[186.5px/32px] bg-[#1c094091] blur-[17px]" />

        <img
          className="relative h-64 w-64 object-cover md:h-80 md:w-80"
          alt="Pngtree modern blue"
          src="https://c.animaapp.com/mgam6d2qZ6LHol/img/pngtree-modern-blue-smartwatch-3d-illustration-on-clear-backgrou.png"
        />
      </div>
    </section>
  );
};
