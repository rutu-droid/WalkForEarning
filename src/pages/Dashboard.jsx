import React, { useEffect, useState, useRef } from "react";
import CustomConnectButton from "../components/button/CustomConnectButton";
import { useAccount } from 'wagmi';
import { erc20Abi, formatUnits, parseUnits, isAddress } from "viem";
import usePresale from "../hooks/usePresale";
import toast from "react-hot-toast";

export const Dashboard = () => {
  const usdtDecimal = 18;
  const { address, isConnected } = useAccount();
  const [usdtAmount, setUsdtAmount] = useState("");
  const [wfeAmount, setWfeAmount] = useState("");
  const { checkTokenBalance,
    checkAllowance,
    setApproval,
    getUSDTToWFE,
    buyToken,
    claimToken,
    getUserPurchases } = usePresale();
  const [loading, setLoading] = useState(false);
  const [transactionMessage, setTransactionMessage] = useState("Please wait...");


  useEffect(() => {
    const fetchConversion = async () => {
      try {
        if (usdtAmount && !isNaN(usdtAmount)) {
          const usdtwei = parseUnits(usdtAmount, usdtDecimal);
          const result = await getUSDTToWFE(Number(usdtwei)); // convert to number
          const wfe = Number(formatUnits(result, 18));
          setWfeAmount(wfe.toFixed(4)); // show 4 decimals (optional)
        } else {
          setWfeAmount("");
        }
      } catch (error) {
        console.error("Failed to convert USDT to WFE:", error);
        setWfeAmount("");
      }
    };

    fetchConversion();
  }, [usdtAmount]);

  const tableData = [
    { sr: 1, deposit: "200.00 USDT", withdraw: "200.00 USDT", released: "200.00 USDT", purchaseDate: "200.00 USDT", claim: "200.00 USDT" },
    { sr: 2, deposit: "200.00 USDT", withdraw: "200.00 USDT", released: "200.00 USDT", purchaseDate: "200.00 USDT", claim: "200.00 USDT" },
    { sr: 3, deposit: "200.00 USDT", withdraw: "200.00 USDT", released: "200.00 USDT", purchaseDate: "200.00 USDT", claim: "200.00 USDT" },
  ];

  return (
    <div className="flex flex-col items-center min-h-screen w-full 
                    bg-[#360A65] [background:radial-gradient(50%_50%_at_50%_50%,#3B21AD_0%,#360A65_100%)] 
                    text-white font-['Outfit',_Helvetica] leading-normal">

      <header className="flex justify-center w-full px-4 sm:px-8 lg:px-[100px] py-4">
        <nav className="flex items-center justify-between w-full max-w-[1280px]">
          <div className="flex items-center gap-2">
            <img
              src="https://c.animaapp.com/mgb1njboyDiP3N/img/whatsapp-image-2025-09-16-at-11-30-15-am-2.png"
              alt="WFE Logo"
              className="w-10 h-10 sm:w-[46px] sm:h-12"
            />
            <div className="flex flex-col text-xs sm:text-sm leading-tight">
              <span className="font-semibold">WFE</span>
              <span className="text-[rgba(255,255,255,0.7)]">Decentralized Trade</span>
            </div>
          </div>
          {/* <button className="h-[38px] sm:h-[42px] px-4 sm:px-6 rounded-full relative overflow-hidden border-none 
                             bg-gradient-to-b from-[#7936FF] to-[#5104E9] 
                             text-white text-sm sm:text-lg font-medium 
                             shadow-[inset_0px_1.08px_1.3px_-0.4px_#ffffff66] 
                             transition-opacity hover:opacity-90">
            Join Now
          </button> */}
          <CustomConnectButton />
        </nav>
      </header>

      <div className="w-full h-[1px] bg-[rgba(255,255,255,0.1)] opacity-50 mb-6 sm:mb-10"></div>

      <main className="w-full flex-grow px-4 sm:px-8 lg:px-[100px] max-w-[1280px] mb-12 sm:mb-20">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-8 sm:mb-10">
          <h1 className="text-2xl sm:text-[40px] font-bold tracking-[-0.02em]">Dashboard</h1>
          <p className="text-xs sm:text-[15px] text-[rgba(255,255,255,0.6)]">
            Home <span className="mx-1">&gt;</span> Dashboard
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div className="flex flex-col items-start gap-3 sm:gap-4 p-4 sm:p-6 rounded-[20px] 
                          bg-[linear-gradient(180deg,rgba(91,113,255,0.05)_0%,rgba(54,10,101,0.05)_100%)] 
                          border border-[rgba(255,255,255,0.1)] shadow-[0px_4px_20px_rgba(0,0,0,0.25)]">
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-[rgba(255,255,255,0.08)]">
              <svg width="20" height="20" className="sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none">
                <path d="M4 12H20C21.1 12 22 12.9 22 14V19C22 20.1 21.1 21 20 21H4C2.9 21 2 20.1 2 19V5C2 3.9 2.9 3 4 3H20C21.1 3 22 3.9 22 5V8H20C18.9 8 18 8.9 18 10V12H4V10C4 8.9 4.9 8 6 8H18V5H4V12Z" stroke="#8A48F3" strokeWidth="2" />
              </svg>
            </div>
            <p className="text-lg sm:text-xl font-medium">200.00 USDT</p>
            <p className="text-xs sm:text-sm text-[rgba(255,255,255,0.6)]">Latest Deposit</p>
          </div>

          <div className="flex flex-col items-start gap-3 sm:gap-4 p-4 sm:p-6 rounded-[20px] 
                          bg-[linear-gradient(180deg,rgba(91,113,255,0.05)_0%,rgba(54,10,101,0.05)_100%)] 
                          border border-[rgba(255,255,255,0.1)] shadow-[0px_4px_20px_rgba(0,0,0,0.25)]">
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-[rgba(255,255,255,0.08)]">
              <svg width="20" height="20" className="sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM16.2 16.2L12 10.7V6H14V10.3L17.8 15.2L16.2 16.2Z" fill="#8A48F3" />
              </svg>
            </div>
            <p className="text-lg sm:text-xl font-medium">169240</p>
            <p className="text-xs sm:text-sm text-[rgba(255,255,255,0.6)]">Live Shares</p>
          </div>

          <div className="flex flex-col items-start gap-3 sm:gap-4 p-4 sm:p-6 rounded-[20px] 
                          bg-[linear-gradient(180deg,rgba(91,113,255,0.05)_0%,rgba(54,10,101,0.05)_100%)] 
                          border border-[rgba(255,255,255,0.1)] shadow-[0px_4px_20px_rgba(0,0,0,0.25)]">
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-[rgba(255,255,255,0.08)]">
              <svg width="20" height="20" className="sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none">
                <path d="M4 12H20C21.1 12 22 12.9 22 14V19C22 20.1 21.1 21 20 21H4C2.9 21 2 20.1 2 19V5C2 3.9 2.9 3 4 3H20C21.1 3 22 3.9 22 5V8H20C18.9 8 18 8.9 18 10V12H4V10C4 8.9 4.9 8 6 8H18V5H4V12Z" stroke="#8A48F3" strokeWidth="2" />
              </svg>
            </div>
            <p className="text-lg sm:text-xl font-medium">0.00 USDT</p>
            <p className="text-xs sm:text-sm text-[rgba(255,255,255,0.6)]">My Deposit</p>
          </div>

          <div className="flex flex-col items-start gap-3 sm:gap-4 p-4 sm:p-6 rounded-[20px] 
                          bg-[linear-gradient(180deg,rgba(91,113,255,0.05)_0%,rgba(54,10,101,0.05)_100%)] 
                          border border-[rgba(255,255,255,0.1)] shadow-[0px_4px_20px_rgba(0,0,0,0.25)]">
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-[rgba(255,255,255,0.08)]">
              <svg width="20" height="20" className="sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none">
                <path d="M4 12H20C21.1 12 22 12.9 22 14V19C22 20.1 21.1 21 20 21H4C2.9 21 2 20.1 2 19V5C2 3.9 2.9 3 4 3H20C21.1 3 22 3.9 22 5V8H20C18.9 8 18 8.9 18 10V12H4V10C4 8.9 4.9 8 6 8H18V5H4V12ZM16 16H8V14H16V16Z" fill="#8A48F3" />
              </svg>
            </div>
            <p className="text-lg sm:text-xl font-medium">0.00 USDT</p>
            <p className="text-xs sm:text-sm text-[rgba(255,255,255,0.6)]">My Withdrawn</p>
          </div>
        </div>

        <div className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-[28px] font-semibold mb-4 sm:mb-6">Buying Model</h2>
          <div className="bg-[linear-gradient(180deg,rgba(91,113,255,0.05)_0%,rgba(54,10,101,0.05)_100%)] 
                          p-4 sm:p-6 rounded-[20px] border border-[rgba(255,255,255,0.1)] 
                          flex flex-col sm:flex-row items-center justify-between gap-4">
            <input
              type="text"
              placeholder="USDT Amount"
              onChange={(e) => setUsdtAmount(e.target.value)}
              className="flex-grow min-w-[140px] bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] 
                         rounded-lg py-2 sm:py-3 px-3 sm:px-4 text-sm sm:text-base text-white placeholder-[rgba(255,255,255,0.4)] 
                         focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <span className="hidden sm:block text-2xl sm:text-3xl text-[rgba(255,255,255,0.6)]">&rarr;</span>
            <div
              type="text"
              placeholder="WFE Amount"
              className="flex-grow min-w-[140px] bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] 
                         rounded-lg py-2 sm:py-3 px-3 sm:px-4 text-sm sm:text-base text-white placeholder-[rgba(255,255,255,0.4)] 
                         focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              {wfeAmount} WFE
            </div>
            <button
              disabled={loading}
              onClick={handleBuy}
              className="w-full sm:w-auto min-w-[100px] sm:min-w-[120px] h-[44px] sm:h-[50px] 
                         bg-[#663AF7] hover:bg-[#522FC0] text-white font-semibold 
                         py-2 sm:py-3 px-6 sm:px-8 rounded-lg 
                         text-sm sm:text-lg transition-colors shadow-[0px_4px_10px_rgba(0,0,0,0.3)]">
              {loading ? transactionMessage : "Buy"}
            </button>
          </div>
        </div>

        <div>
          <h2 className="text-xl sm:text-[28px] font-semibold mb-4 sm:mb-6">Buying Model</h2>
          <div className="overflow-x-auto bg-[linear-gradient(180deg,rgba(91,113,255,0.05)_0%,rgba(54,10,101,0.05)_100%)] 
                           rounded-[20px] border border-[rgba(255,255,255,0.1)] p-1 sm:p-2">
            <table className="min-w-full text-left text-xs sm:text-sm">
              <thead className="border-b border-[rgba(255,255,255,0.2)]">
                <tr>
                  <th className="p-2 sm:p-4">Sr. No</th>
                  <th className="p-2 sm:p-4">Deposit</th>
                  <th className="p-2 sm:p-4">Withdraw</th>
                  <th className="p-2 sm:p-4">Released</th>
                  <th className="p-2 sm:p-4">Purchase Date</th>
                  <th className="p-2 sm:p-4">Claim</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, index) => (
                  <tr key={index} className="border-b border-[rgba(255,255,255,0.1)] last:border-b-0 hover:bg-[rgba(255,255,255,0.05)] transition-colors">
                    <td className="p-2 sm:p-4">{row.sr}</td>
                    <td className="p-2 sm:p-4">{row.deposit}</td>
                    <td className="p-2 sm:p-4">{row.withdraw}</td>
                    <td className="p-2 sm:p-4">{row.released}</td>
                    <td className="p-2 sm:p-4">{row.purchaseDate}</td>
                    <td className="p-2 sm:p-4">{row.claim}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      <footer className="w-full flex flex-col items-center justify-center gap-3 sm:gap-4 py-6 sm:py-8">
        <img
          src="https://c.animaapp.com/mgb1njboyDiP3N/img/whatsapp-image-2025-09-16-at-11-30-15-am-2-1.png"
          alt="WFE Footer Logo"
          className="w-10 h-10 sm:w-[46px] sm:h-12"
        />
        <p className="text-xs sm:text-sm text-gray-400">
          Copyright © 2025. All Rights Reserved by Goldmine
        </p>
      </footer>
    </div>
  );
};
