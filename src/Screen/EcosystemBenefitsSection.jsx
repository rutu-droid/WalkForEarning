import React from "react";

const legendItems = [
  { color: "bg-[#130bff]", label: "Public Sale" },
  { color: "bg-[#01bd50]", label: "Private Sale" },
  { color: "bg-[#9c0115]", label: "Liquidity" },
  { color: "bg-[#4e19ba]", label: "Marketing" },
  { color: "bg-[#c04100]", label: "Team" },
  { color: "bg-[#13af7e]", label: "Rewards" },
];

const pieSegments = [
  {
    image: "https://c.animaapp.com/mgam6d2qZ6LHol/img/ellipse-2.svg",
    className: "top-9 left-10 w-[146px] h-[148px]",
  },
  {
    image: "https://c.animaapp.com/mgam6d2qZ6LHol/img/ellipse-6.svg",
    className: "top-[26px] left-[130px] w-[111px] h-[141px]",
  },
  {
    image: "https://c.animaapp.com/mgam6d2qZ6LHol/img/ellipse-4.svg",
    className: "top-[231px] left-[85px] w-[140px] h-[171px]",
  },
  {
    image: "https://c.animaapp.com/mgam6d2qZ6LHol/img/ellipse-5.svg",
    className: "top-[121px] left-[26px] w-[142px] h-[109px]",
  },
  {
    image: "https://c.animaapp.com/mgam6d2qZ6LHol/img/ellipse-7.svg",
    className: "top-[207px] left-[22px] w-[158px] h-[141px]",
  },
  {
    image: "https://c.animaapp.com/mgam6d2qZ6LHol/img/ellipse-3.svg",
    className: "top-[25px] left-[206px] w-[177px] h-[356px]",
  },
];

const percentageLabels = [
  { value: "40", className: "top-[189px] left-[296px]" },
  { value: "15", className: "top-[300px] left-[164px]" },
  { value: "15", className: "top-[245px] left-[91px]" },
  { value: "10", className: "top-[168px] left-[69px]" },
  { value: "10", className: "top-[95px] left-[104px]" },
  { value: "10", className: "top-16 left-[184px]" },
];

export const EcosystemBenefitsSection = () => {
  return (
    <section className="flex w-full flex-col items-start justify-center gap-[54px] p-[100px]">
      {/* --- FIXED: Removed animation classes --- */}
      <header className="flex w-full items-center gap-[68px]">
        <h2 className="mt-[-1.00px] [font-family:'Jersey_10',Helvetica] font-normal text-white text-[54px] leading-[58px] tracking-[1.08px] whitespace-nowrap">
          Token Distribution Strategy
        </h2>
      </header>

      {/* --- FIXED: Removed animation classes --- */}
      <div className="flex w-full flex-col items-start gap-3">
        <div className="inline-flex items-center justify-center gap-2">
          <img
            className="h-11 w-[41px]"
            alt="Whatsapp image"
            src="https://c.animaapp.com/mgam6d2qZ6LHol/img/whatsapp-image-2025-09-16-at-11-30-15-am-2-1.png"
          />

          <h3 className="[font-family:'Jersey_10',Helvetica] font-normal text-white text-2xl leading-6 tracking-[0] whitespace-nowrap">
            The Future of Fitness is Here
          </h3>
        </div>

        <p className="[font-family:'Outfit',Helvetica] font-normal text-white text-base leading-6 tracking-[0]">
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
      <div className="relative h-[402px] w-full">
        <div className="absolute left-[205px] top-0 h-[402px] w-[414px]">
          <div className="absolute left-0 top-0 h-[402px] w-[402px]">
            {pieSegments.map((segment, index) => (
              <img
                key={`segment-${index}`}
                className={`absolute ${segment.className}`}
                alt="Pie chart segment"
                src={segment.image}
              />
            ))}
          </div>

          {percentageLabels.map((label, index) => (
            <div
              key={`label-${index}`}
              className={`absolute [font-family:'Outfit',Helvetica] font-semibold text-white text-xl leading-6 tracking-[0] whitespace-nowrap ${label.className}`}
            >
              {label.value}
            </div>
          ))}
        </div>

        <div className="absolute left-[745px] top-[124px] inline-flex items-start gap-9">
          <div className="inline-flex flex-col items-start gap-8">
            {legendItems.slice(0, 3).map((item, index) => (
              <div
                key={`legend-left-${index}`}
                className="flex w-full items-center gap-2.5"
              >
                <div className={`h-6 w-6 rounded-xl ${item.color}`} />
                <span className="mt-[-1.00px] [font-family:'Outfit',Helvetica] font-semibold text-white text-xl leading-6 tracking-[0] whitespace-nowrap">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          <div className="inline-flex flex-col items-start gap-8">
            {legendItems.slice(3, 6).map((item, index) => (
              <div
                key={`legend-right-${index}`}
                className="flex w-full items-center gap-2.5"
              >
                <div className={`h-6 w-6 rounded-xl ${item.color}`} />
                <span className="mt-[-1.00px] [font-family:'Outfit',Helvetica] font-semibold text-white text-xl leading-6 tracking-[0] whitespace-nowrap">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
