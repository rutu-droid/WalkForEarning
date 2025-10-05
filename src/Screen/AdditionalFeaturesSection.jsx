import React from "react";
import { Card, CardContent } from '../components/ui/card';

const roadmapData = [
  {
    quarter: "Q1 2026 - Token Launch",
    description:
      "WFE token presale execution\nToken Generation Event with airdrop\nInitial DEX listings & liquidity setup",
    position: "top-0 left-px",
  },
  {
    quarter: "Q2 2026 - App Development",
    description:
      "Beta launch of Walk for Earning app\nStep-tracking rewards integration\nCommunity onboarding & marketing expansion",
    position: "top-[241px] left-[624px]",
  },
  {
    quarter: "Q3 2026 - Ecosystem Growth",
    description:
      "Major CEX listings\nNFT accessories & gamification\nStrategic fitness brand partnerships",
    position: "top-[426px] left-0.5",
  },
  {
    quarter: "Q4 2025 - Foundation",
    description:
      "Smart contract deployment & security audit\nTokenomics finalization & compliance\nCommunity platform launch",
    position: "top-[652px] left-[626px]",
  },
];

const connectorLines = [
  {
    src: "https://c.animaapp.com/mgam6d2qZ6LHol/img/vector-5.svg",
    className: "top-[115px] left-[377px] w-[420px] h-[127px]",
  },
  {
    src: "https://c.animaapp.com/mgam6d2qZ6LHol/img/vector-6.svg",
    className: "top-[466px] left-[378px] w-[420px] h-[90px]",
  },
  {
    src: "https://c.animaapp.com/mgam6d2qZ6LHol/img/vector-7.svg",
    className: "top-[652px] left-[166px] w-[458px] h-[120px]",
  },
];

const connectorNodes = [
  {
    className: "top-[531px] left-[774px]",
  },
  {
    className: "top-[740px] left-[150px]",
  },
  {
    className: "top-[110px] left-[770px]",
  },
];

export const AdditionalFeaturesSection = () => {
  return (
    <section className="flex w-full flex-col items-start justify-center gap-[54px] p-[100px]">
      <header className="flex w-full items-center gap-[68px]">
        {/* --- FIXED: Removed animation classes --- */}
        <h2 className="[font-family:'Jersey_10',Helvetica] font-normal text-white text-[54px] leading-[58px] tracking-[1.08px] whitespace-nowrap">
          Ecosystem Utility &amp; Features
        </h2>
      </header>

      <div className="flex w-full items-center justify-center gap-2.5">
        <div className="inline-flex flex-col items-center justify-center gap-2.5 [background:radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.01)_0%,rgba(32,34,39,0.03)_81%)]">
          <div className="relative h-[878px] w-[1004px]">
            {roadmapData.map((item, index) => (
              <Card
                key={index}
                // --- FIXED: Removed animation classes ---
                className={`absolute flex w-[378px] flex-col items-start justify-center gap-3 overflow-hidden rounded-3xl border-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.12)_0%,rgba(153,37,255,0.21)_100%)] p-9 shadow-[14px_52px_42px_#260748] ${item.position}`}
              >
                <CardContent className="flex w-full flex-col gap-3 p-0">
                  <h3 className="[font-family:'Outfit',Helvetica] font-semibold leading-[normal] tracking-[0] text-white text-2xl">
                    {item.quarter}
                  </h3>
                  <div className="flex w-full flex-col items-start gap-[7px]">
                    <p className="[font-family:'Outfit',Helvetica] font-medium leading-[normal] tracking-[0] text-[#e8e8e8] text-lg whitespace-pre-line">
                      {item.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}

            {connectorLines.map((line, index) => (
              <img
                key={index}
                className={`absolute ${line.className}`}
                alt="Vector"
                src={line.src}
              />
            ))}

            {connectorNodes.map((node, index) => (
              <div
                key={index}
                className={`absolute ${node.className} flex h-8 w-8 rounded-2xl bg-[#9096a02e]`}
              >
                <div className="ml-2 mt-2 h-4 w-4 rounded-lg bg-white" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
