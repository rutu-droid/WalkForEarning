import React from "react";
import { Card, CardContent } from '../components/ui/card';

export const CallToActionSection = () => {
  const tokenDetails = [
    {
      label: "Name",
      value: "Walk for Earning",
    },
    {
      label: "Symbol",
      value: "WFE",
    },
    {
      label: "Blockchain",
      value: "Polygon (ERC-20)",
    },
    {
      label: "Total Supply",
      value: "1 Billion WFE",
    },
    {
      label: "Initial Price",
      value: "1 WFE = 0.01 USDT",
    },
  ];

  return (
    <section className="relative flex w-full flex-col items-start justify-center gap-[54px] p-[100px]">
      <img
        className="absolute left-0 top-0 h-full w-full object-cover"
        alt="Background"
        src="https://c.animaapp.com/mgam6d2qZ6LHol/img/image-101.png"
      />

      {/* --- FIXED: Removed animation classes --- */}
      <div className="relative flex w-full items-center justify-between">
        <h2 className="[font-family:'Jersey_10',Helvetica] font-normal text-white text-[54px] leading-[58px] tracking-[1.08px] whitespace-nowrap">
          WFE Token Specifications
        </h2>

        <p className="w-[699px] [font-family:'Outfit',Helvetica] font-normal leading-[normal] tracking-[0.32px] text-white text-base">
          Built on Polygon for fast, low-cost transactions, ensuring seamless
          user experience while maintaining robust security and scalability for
          global adoption.
        </p>
      </div>

      {/* --- FIXED: Removed animation classes --- */}
      <Card className="relative flex w-full flex-col items-center gap-5 rounded-[32px] border-[none] bg-transparent p-6 before:pointer-events-none before:absolute before:inset-0 before:z-[1] before:content-[''] before:[-webkit-mask-composite:xor] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[mask-composite:exclude] before:rounded-[32px] before:[background:linear-gradient(252deg,rgba(255,217,87,0.01)_50%,rgba(255,217,87,0.03)_75%,rgba(255,217,87,0)_88%,rgba(255,217,87,0)_100%)] before:p-[5px]">
        <CardContent className="flex w-full flex-col items-center gap-4 p-0">
          <h3 className="[font-family:'Outfit',Helvetica] font-semibold leading-[33.6px] tracking-[0] text-white text-2xl whitespace-nowrap">
            Token Details
          </h3>

          <div className="flex w-full items-center justify-center gap-8">
            {tokenDetails.map((detail, index) => (
              <div
                key={index}
                className="flex flex-1 items-center justify-center gap-2.5 rounded-xl bg-[#ffffff14] p-3 backdrop-blur-[15.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15.5px)_brightness(100%)]"
              >
                <div className="w-fit text-center text-base leading-6 tracking-[0] text-[#dde3f0] [font-family:'Outfit',Helvetica] font-normal">
                  <span className="[font-family:'Outfit',Helvetica] font-normal text-base leading-6 tracking-[0] text-[#dde3f0]">
                    {detail.label}{" "}
                  </span>
                  <span className="font-semibold text-xl">{detail.value}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
