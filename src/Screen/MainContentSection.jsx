import React from "react";
import { Card, CardContent } from '../components/ui/card';

const distributionData = [
  {
    title: "On Buying",
    percentage: "25%",
  },
  {
    title: "1st Year",
    percentage: "25%",
  },
  {
    title: "2nd Year",
    percentage: "25%",
  },
  {
    title: "3rd Year",
    percentage: "25%",
  },
];

export const MainContentSection = () => {
  return (
    <section className="flex w-full items-center gap-8 p-[100px]">
      {distributionData.map((item, index) => (
        <Card
          key={index}
          // --- FIXED: Removed animation classes ---
          className="flex-1 rounded-3xl border-0 bg-[linear-gradient(158deg,rgba(81,4,233,1)_0%,rgba(24,5,108,1)_100%)] shadow-[14px_52px_42px_#21064096]"
        >
          <CardContent className="flex flex-col items-center justify-center gap-3 px-6 py-10">
            <h3 className="w-fit [font-family:'Outfit',Helvetica] font-semibold text-white text-2xl leading-[33.6px] tracking-[0] whitespace-nowrap">
              {item.title}
            </h3>
            <p className="self-stretch text-center [font-family:'Outfit',Helvetica] font-normal text-white text-lg leading-6 tracking-[0]">
              {item.percentage}
            </p>
          </CardContent>
        </Card>
      ))}
    </section>
  );
};
