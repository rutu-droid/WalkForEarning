import React from "react";
import { Card, CardContent } from '../components/ui/card';

const presaleCards = [
  {
    title: "Early Access Price",
    highlight: "0.01 USDT per WFE Token",
    description: "Get tokens at base price before public launch",
  },
  {
    title: "Accepted Currencies",
    highlight: "USDT Only",
    description: "Flexible payment options for global participation",
  },
];

export const TeamStrategySection = () => {
  return (
    <section className="flex w-full flex-col items-start justify-center gap-[54px] p-[100px]">
      {/* --- FIXED: Removed animation classes --- */}
      <div className="flex w-full items-center gap-[68px]">
        <h2 className="w-fit [font-family:'Jersey_10',Helvetica] font-normal text-white text-[54px] leading-[58px] tracking-[1.08px] whitespace-nowrap">
          Presale Opportunity
        </h2>

        <p className="flex-1 [font-family:'Outfit',Helvetica] font-normal leading-[normal] tracking-[0.32px] text-white text-base">
          The presale provides essential funding for development, marketing, and
          application deployment while offering early supporters exclusive
          access to WFE tokens at the foundational price point.
        </p>
      </div>

      <div className="flex w-full items-start gap-[54px]">
        {/* --- FIXED: Removed animation classes --- */}
        <img
          className="h-[424px] w-[284px]"
          alt="Chatgpt image sep"
          src="https://c.animaapp.com/mgam6d2qZ6LHol/img/chatgpt-image-sep-25--2025--06-53-09-pm-1-1.png"
        />

        <div className="flex flex-1 flex-col items-start justify-center gap-8">
          <div className="flex w-full items-center gap-8">
            {presaleCards.map((card, index) => (
              <Card
                key={index}
                // --- FIXED: Removed animation classes ---
                className="flex-1 rounded-[32px] border-[none] bg-[#ffffff0a] before:pointer-events-none before:absolute before:inset-0 before:z-[1] before:content-[''] before:[-webkit-mask-composite:xor] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[mask-composite:exclude] before:rounded-[32px] before:[background:linear-gradient(253deg,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0.16)_51%,rgba(255,255,255,0.26)_100%)] before:p-0.5"
              >
                <CardContent className="flex flex-col items-center gap-5 p-6">
                  <div className="flex w-full flex-col items-center gap-2">
                    <h3 className="w-fit [font-family:'Outfit',Helvetica] font-semibold text-white text-2xl leading-[33.6px] tracking-[0] whitespace-nowrap">
                      {card.title}
                    </h3>

                    <p className="w-fit [font-family:'Outfit',Helvetica] font-semibold text-transparent text-2xl leading-[33.6px] tracking-[0] whitespace-nowrap [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [text-fill-color:transparent] bg-[linear-gradient(90deg,rgba(255,0,140,1)_0%,rgba(183,59,255,1)_50%,rgba(170,72,255,1)_100%)] bg-clip-text">
                      {card.highlight}
                    </p>

                    <p className="text-center [font-family:'Outfit',Helvetica] font-normal text-[#dde3f0] text-base leading-6 tracking-[0]">
                      {card.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* --- FIXED: Removed animation classes --- */}
          <Card className="w-full rounded-[32px] border-[none] bg-[#ffffff0a] before:pointer-events-none before:absolute before:inset-0 before:z-[1] before:content-[''] before:[-webkit-mask-composite:xor] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[mask-composite:exclude] before:rounded-[32px] before:[background:linear-gradient(253deg,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0.16)_51%,rgba(255,255,255,0.26)_100%)] before:p-0.5">
            <CardContent className="flex flex-col items-center gap-5 p-6">
              <div className="flex w-full flex-col items-center gap-2">
                <h3 className="w-fit [font-family:'Outfit',Helvetica] font-semibold text-white text-2xl leading-[33.6px] tracking-[0] whitespace-nowrap">
                  Fair Distribution
                </h3>

                <p className="w-fit [font-family:'Outfit',Helvetica] font-semibold text-transparent text-2xl leading-[33.6px] tracking-[0] whitespace-nowrap [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [text-fill-color:transparent] bg-[linear-gradient(90deg,rgba(255,0,140,1)_0%,rgba(183,59,255,1)_50%,rgba(170,72,255,1)_100%)] bg-clip-text">
                  Min/Max Limits
                </p>

                <p className="text-center [font-family:'Outfit',Helvetica] font-normal text-[#dde3f0] text-base leading-6 tracking-[0]">
                  Configured caps ensure equitable access for all investors
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
