import React from "react";
import { Card, CardContent } from '../components/ui/card';

const features = [
  {
    icon: "https://c.animaapp.com/mgam6d2qZ6LHol/img/shield-checkmark-line-icon-1.svg",
    iconWidth: "w-[77px]",
    iconHeight: "h-[84px]",
    title: "Security First",
    description:
      "Comprehensive smart contract audits by leading blockchain security firms ensure user fund protection and system integrity.",
    descriptionWidth: "w-[272px]",
  },
  {
    icon: "https://c.animaapp.com/mgam6d2qZ6LHol/img/writing-pad-line-icon-1.svg",
    iconWidth: "w-[69px]",
    iconHeight: "h-[84px]",
    title: "Regulatory Compliance",
    description:
      "Full KYC/AML procedures and international regulatory alignment provide institutional-grade compliance framework.",
    descriptionWidth: "w-[272px]",
  },
  {
    icon: "https://c.animaapp.com/mgam6d2qZ6LHol/img/maps-line-icon-1.svg",
    iconWidth: "w-[81px]",
    iconHeight: "h-[84px]",
    title: "Transparent Operations",
    description:
      "On-chain tracking of all mining and distribution activities maintains complete ecosystem transparency and accountability.",
    descriptionWidth: "w-[264px]",
  },
];

export const ConclusionSection = () => {
  return (
    <section className="flex w-full flex-col items-start justify-center gap-[54px] p-[100px]">
      {/* --- FIXED: Removed animation classes --- */}
      <div className="flex w-full items-start gap-[68px]">
        <h2 className="mt-[-1.00px] [font-family:'Jersey_10',Helvetica] font-normal text-white text-[54px] leading-[58px] tracking-[1.08px] whitespace-nowrap">
          Ecosystem Utility &amp; Features
        </h2>

        <p className="mt-[-1.00px] flex-1 [font-family:'Outfit',Helvetica] font-normal leading-[normal] tracking-[0.32px] text-white text-base">
          Walk for Earning represents more than cryptocurrency—it&#39;s a
          lifestyle revolution. By bridging physical activity with blockchain
          incentives, we&#39;re building a sustainable ecosystem where health
          truly becomes wealth. Every step forward moves us closer to mass
          adoption of this transformative technology.
        </p>
      </div>

      <div className="flex w-full items-start gap-[54px]">
        <div className="flex flex-1 flex-col items-start justify-center gap-8">
          <div className="flex w-full items-center gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                // --- FIXED: Removed animation classes ---
                className="flex-1 self-stretch rounded-[32px] border-[none] bg-[linear-gradient(90deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.05)_100%)] before:pointer-events-none before:absolute before:inset-0 before:z-[1] before:content-[''] before:[-webkit-mask-composite:xor] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[mask-composite:exclude] before:rounded-[32px] before:[background:linear-gradient(253deg,rgba(255,255,255,0.4)_0%,rgba(220,188,255,0.4)_51%,rgba(183,197,255,0.26)_100%)] before:p-0.5"
              >
                <CardContent className="flex flex-col items-center justify-center gap-5 p-6">
                  <img
                    className={`${feature.iconWidth} ${feature.iconHeight}`}
                    alt={feature.title}
                    src={feature.icon}
                  />

                  <div className="flex w-full flex-col items-center gap-2">
                    <h3 className="mt-[-1.00px] [font-family:'Outfit',Helvetica] font-semibold leading-[33.6px] tracking-[0] text-white text-2xl whitespace-nowrap">
                      {feature.title}
                    </h3>

                    <p
                      className={`${feature.descriptionWidth} text-center [font-family:'Outfit',Helvetica] font-normal leading-6 tracking-[0] text-[#dde3f0] text-base`}
                    >
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
