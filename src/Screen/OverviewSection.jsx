import React from "react";
import { useNavigate } from "react-router-dom";

export const OverviewSection = () => {
  const navigate = useNavigate(); // Router ka hook

  return (
    <section className="relative flex w-full flex-col items-center justify-center overflow-hidden min-h-screen py-24 bg-[#0D0514]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img
          className="h-full w-full object-cover"
          alt="Hi-tech digital background"
          src="https://c.animaapp.com/mgb2ra9okTcFlp/img/hi-tech-digital-circuit-board-futuristic-ai-pad-and-electrical-l.png"
        />
      </div>

      {/* Header */}
      <header className="absolute top-0 flex w-full max-w-7xl items-center justify-between px-8 py-4 z-10">
        <div
          className="relative h-12 w-24 cursor-pointer"
          onClick={() => navigate("/")} // ✅ Logo click → back to Wireframe
        >
          <img
            className="h-full w-full object-contain"
            alt="Logo background"
            src="https://c.animaapp.com/mgb2ra9okTcFlp/img/whatsapp-image-2025-09-16-at-11-30-15-am-1.png"
          />
          <img
            className="absolute left-0 top-0 h-12 w-12 object-contain"
            alt="Logo main"
            src="https://c.animaapp.com/mgb2ra9okTcFlp/img/whatsapp-image-2025-09-16-at-11-30-15-am-2.png"
          />
        </div>

        <div>
          <button
            onClick={() => navigate("/page/dashboard")} // ✅ Join Now → Dashboard
            className="h-auto rounded-full bg-[#7936ff] px-6 py-2 text-lg font-medium text-white shadow-lg transition-transform hover:scale-105 hover:bg-[#6b2de5]"
          >
            Join Now
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-col items-center gap-8 text-center px-4 z-10">
        <div className="flex flex-col items-center gap-4">
          <p className="text-2xl font-medium text-white">Every Step Counts</p>
          <h1 className="text-white text-center text-6xl font-normal font-['Jersey_10',Helvetica] md:text-8xl">
            Walk for Earning (WFE)
          </h1>
        </div>

        <p className="max-w-3xl text-base text-white/80">
          A revolutionary ecosystem that transforms every step into tangible
          value. Walk for Earning merges fitness, blockchain technology, and
          gamification to create the world's first comprehensive move-to-earn
          platform where your daily activity directly translates into
          cryptocurrency rewards.
        </p>

        <div className="flex flex-col items-center gap-6 mt-4">
          <div className="relative w-[596px] max-w-full">
            <img
              className="h-auto w-full"
              alt="Character frame"
              src="https://c.animaapp.com/mgb2ra9okTcFlp/img/image-96.png"
            />
            <img
              className="absolute left-1/2 top-1/2 h-[71%] w-[22%] -translate-x-1/2 -translate-y-1/2 object-contain"
              alt="Character"
              src="https://c.animaapp.com/mgb2ra9okTcFlp/img/chatgpt-image-sep-25--2025--06-53-09-pm-1.png"
            />
          </div>

          <div className="relative">
            <button
              onClick={() => navigate("/page/dashboard")} // ✅ Buy Now → Dashboard
              className="h-auto rounded-full bg-[#7936ff] px-8 py-3 text-xl font-medium text-white shadow-lg transition-transform hover:scale-105 hover:bg-[#6b2de5]"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
