import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const CustomConnectButton = () => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        mounted,
      }) => {
        const ready = mounted;
        const connected = ready && account && chain;

        return (
          <div
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
            className="walletconnectbutton"
          >
            {(() => {
              if (!connected) {
                return (
                  <button
                    onClick={openConnectModal}
                    className="h-auto rounded-full bg-[#7936ff] px-6 py-2 text-lg font-medium text-white shadow-lg transition-transform hover:scale-105 hover:bg-[#6b2de5]"
                  >
                    Connect Wallet
                  </button>
                );
              }

              if (chain.unsupported) {
                return (
                  <button
                    onClick={openChainModal}
                    className="px-6 py-2 rounded-full bg-red-500 text-white font-medium hover:scale-105 transition-transform"
                  >
                    Wrong Network
                  </button>
                );
              }

              return (
                <div className="flex gap-3">
                  <button
                    onClick={openAccountModal}
                    className="px-6 py-2 rounded-full bg-[#7936ff] text-white font-medium shadow-lg hover:scale-105 hover:bg-[#6b2de5] transition-transform"
                  >
                    {account.displayName}
                    {account.displayBalance
                      ? ` (${account.displayBalance})`
                      : ""}
                  </button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};

export default CustomConnectButton;
