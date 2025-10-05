import React from "react";

// A reusable card component to avoid repetition and keep the code clean.
// It receives all card data as props.
const FeatureCard = ({ icon, title, description }) => (
  // The outer div now creates the glowing border effect.
  // It uses a gradient background and 1px padding to simulate a border.
  <div className="relative w-full h-full rounded-[32px] p-px bg-[linear-gradient(135deg,rgba(255,255,255,0.2)_0%,rgba(255,255,255,0.05)_100%)]">
    {/* The inner div creates the glassmorphism effect. */}
    {/* It has a semi-transparent dark background and a backdrop-blur. */}
    <div className="relative h-full w-full bg-black/30 rounded-[31px] backdrop-blur-xl flex flex-col items-center justify-center gap-5 p-8 text-center">
      <img
        className="h-[102px] w-[102px] object-contain"
        alt={`${title} icon`}
        src={icon}
      />
      <div className="flex flex-col items-center gap-2">
        <h3 className="font-semibold text-white text-2xl font-['Outfit',_sans-serif] whitespace-nowrap">
          {title}
        </h3>
        <p className="font-normal text-[#DDE3F0] text-base leading-6 font-['Outfit',_sans-serif]">
          {description}
        </p>
      </div>
    </div>
  </div>
);

// Main section component
export const UtilityAndFeaturesSection = () => {
  const features = [
    {
      id: "step-mining",
      icon: "https://c.animaapp.com/mgam6d2qZ6LHol/img/frame.svg",
      title: "Step Mining",
      description:
        "Revolutionary step-to-token conversion system where every movement generates real cryptocurrency rewards through our proprietary mining algorithm.",
    },
    {
      id: "staking-rewards",
      icon: "https://c.animaapp.com/mgam6d2qZ6LHol/img/champion-winner-trophy-icon-1.svg",
      title: "Staking Rewards",
      description:
        "Earn passive income by staking WFE tokens, with competitive APY rates and flexible lock-up periods designed for sustainable ecosystem growth.",
    },
    {
      id: "premium-boosters",
      icon: "https://c.animaapp.com/mgam6d2qZ6LHol/img/rocket-launch-line-icon-1.svg",
      title: "Premium Boosters",
      description:
        "Unlock multipliers and enhanced earning rates through in-app purchases, creating additional utility and token burning mechanisms.",
    },
    {
      id: "community-growth",
      icon: "https://c.animaapp.com/mgam6d2qZ6LHol/img/teamwork-together-icon-1.svg",
      title: "Community Growth",
      description:
        "Drive viral adoption through referral rewards, group challenges, and community competitions that benefit both users and the broader ecosystem.",
    },
  ];

  return (
    <section className="relative w-full flex flex-col items-center justify-center gap-16 px-4 py-20 sm:px-8 md:px-16 lg:px-24 bg-[#0D0514] overflow-hidden">
      {/* Background Glow Effects to match Figma */}
      <div className="absolute left-0 top-1/4 h-[500px] w-[500px] rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(196,89,255,0.25)_0%,rgba(153,37,255,0)_100%)] blur-3xl" />
      <div className="absolute right-0 top-1/2 h-[500px] w-[500px] rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(196,89,255,0.25)_0%,rgba(153,37,255,0)_100%)] blur-3xl" />
      
      {/* Section Header */}
      <div className="relative z-10 text-center">
        <h2 className="font-normal text-white text-5xl md:text-6xl leading-tight tracking-wider font-['Jersey_10',_sans-serif]">
          Ecosystem Utility &amp; Features
        </h2>
      </div>

      {/* Features Grid - Simplified responsive behavior */}
      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Column 1: Vertically centered */}
        <div className="flex items-center justify-center">
          <FeatureCard {...features[0]} />
        </div>
        
        {/* Column 2: Two cards stacked */}
        <div className="flex flex-col gap-8">
          <FeatureCard {...features[1]} />
          <FeatureCard {...features[2]} />
        </div>
        
        {/* Column 3: Vertically centered */}
        <div className="flex items-center justify-center">
          <FeatureCard {...features[3]} />
        </div>
      </div>
    </section>
  );
};

// Default export for integration
export default UtilityAndFeaturesSection;

