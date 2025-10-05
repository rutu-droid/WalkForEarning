import React from "react";
import { AdditionalFeaturesSection } from "../Screen/AdditionalFeaturesSection";
import { CallToActionSection } from "../Screen/CallToActionSection";
import { ConclusionSection } from "../Screen/ConclusionSection";
import { EcosystemBenefitsSection } from "../Screen/EcosystemBenefitsSection";
import { FeaturesSection } from "../Screen/FeaturesSection";
import { MainContentSection } from "../Screen/MainContentSection";
import { OverviewSection } from "../Screen/OverviewSection";
import { TeamStrategySection } from "../Screen/TeamStrategySection";
import { UtilityAndFeaturesSection } from "../Screen/UtilityAndFeaturesSection";
import { VisionAndPurposeSection } from "../Screen/VisionAndPurposeSection";

export const Wireframe = () => {
  return (
    <>
      <OverviewSection />

      <main className="flex w-full flex-col items-start bg-[#0D0514]">
        {/* Sections */}
        <MainContentSection />
        <VisionAndPurposeSection />
        <FeaturesSection />
        <CallToActionSection />
        <TeamStrategySection />
        <EcosystemBenefitsSection />
        <UtilityAndFeaturesSection />
        <AdditionalFeaturesSection />
        <ConclusionSection />

        {/* Footer */}
        <footer className="flex w-full flex-col items-center justify-center gap-6 px-6 sm:px-12 md:px-20 lg:px-[100px] py-10 sm:py-14 bg-[#0D0514] border-t border-white/10">
          {/* Logo */}
          <div className="relative h-12 w-24 cursor-pointer">
            <img
              className="h-full w-full object-contain"
              alt="Logo background"
              src="https://c.animaapp.com/mgam6d2qZ6LHol/img/whatsapp-image-2025-09-16-at-11-30-15-am-1-1.png"
            />
            <img
              className="absolute left-0 top-0 h-12 w-12 object-contain"
              alt="Whatsapp image"
              src="https://c.animaapp.com/mgam6d2qZ6LHol/img/whatsapp-image-2025-09-16-at-11-30-15-am-2-2.png"
            />
          </div>

          {/* Copyright */}
          <p className="font-normal text-white text-center text-sm sm:text-base leading-normal tracking-wide font-['Outfit',Helvetica]">
            Copyright © 2025. All Rights Reserved by Goldmine
          </p>
        </footer>
      </main>
    </>
  );
};

export default Wireframe;
