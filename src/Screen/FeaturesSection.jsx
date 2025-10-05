import React from "react";
import { Card, CardContent } from '../components/ui/card';

const features = [
  {
    icon: "https://c.animaapp.com/mgam6d2qZ6LHol/img/walk-walking-icon-1.svg",
    title: "Incentivize Movement",
    description:
      "Transform daily activity into meaningful rewards, creating lasting motivation for healthier lifestyles through blockchain-powered incentives.",
  },
  {
    icon: "https://c.animaapp.com/mgam6d2qZ6LHol/img/walk-walking-icon-1-2.svg",
    title: "Sustainable Ecosystem",
    description:
      "Build a comprehensive platform where health and wealth converge through staking, trading, and community engagement opportunities.",
  },
  {
    icon: "https://c.animaapp.com/mgam6d2qZ6LHol/img/walk-walking-icon-1-1.svg",
    title: "Global Adoption",
    description:
      "Drive worldwide blockchain adoption through lifestyle-focused applications that make cryptocurrency accessible to mainstream users.",
  },
];

export const FeaturesSection = () => {
  return (
    <section className="flex w-full flex-col items-start justify-center gap-[54px] p-[100px]">
      {/* --- FIXED: Removed animation classes --- */}
      <header className="flex w-full items-center justify-between">
        <h2 className="[font-family:'Jersey_10',Helvetica] font-normal text-white text-[54px] leading-[58px] tracking-[1.08px] whitespace-nowrap">
          Vision &amp; Purpose
        </h2>

        <p className="w-[699px] [font-family:'Outfit',Helvetica] font-normal leading-[normal] tracking-[0.32px] text-white text-base">
          Our vision is to build a decentralized health economy where millions
          of people across the globe are rewarded for improving their fitness
          through transparent, blockchain-powered incentives.
        </p>
      </header>

      <div className="flex w-full items-center gap-8">
        {features.map((feature, index) => (
          <Card
            key={index}
            // --- FIXED: Removed animation classes ---
            className="flex-1 rounded-[32px] border-[none] bg-[linear-gradient(197deg,rgba(255,217,87,0.01)_50%,rgba(255,217,87,0.03)_75%,rgba(255,217,87,0)_88%,rgba(255,217,87,0)_100%),linear-gradient(180deg,rgba(255,255,255,0.16)_0%,rgba(255,255,255,0)_100%),linear-gradient(180deg,rgba(121,54,255,1)_0%,rgba(81,4,233,1)_100%)] before:pointer-events-none before:absolute before:inset-0 before:z-[1] before:content-[''] before:[-webkit-mask-composite:xor] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[mask-composite:exclude] before:rounded-[32px] before:[background:linear-gradient(253deg,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0.02)_100%)] before:p-[5px]"
          >
            <CardContent className="flex flex-col items-center gap-5 p-6">
              <img
                className="w-10 flex-[0_0_auto]"
                alt={`${feature.title} icon`}
                src={feature.icon}
              />

              <div className="flex w-full flex-col items-center gap-2">
                <h3 className="[font-family:'Outfit',Helvetica] font-semibold leading-[33.6px] tracking-[0] text-white text-2xl whitespace-nowrap">
                  {feature.title}
                </h3>

                <p className="text-center [font-family:'Outfit',Helvetica] font-normal leading-6 tracking-[0] text-[#dde3f0] text-base">
                  {feature.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
