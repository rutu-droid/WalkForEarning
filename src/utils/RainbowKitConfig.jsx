import "@rainbow-me/rainbowkit/styles.css";
import {
  connectorsForWallets,
} from "@rainbow-me/rainbowkit";
import { createConfig,custom, http } from "wagmi";
import { QueryClient } from "@tanstack/react-query";
import {
  walletConnectWallet,
  metaMaskWallet,
  trustWallet,
  tokenPocketWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { polygon, polygonAmoy } from "viem/chains";


// 1. Get projectId at https://cloud.walletconnect.com
const projectId = "b9a499d2b6cb7c88f73e7cdd3572f4fa";  

const testNetworks = [polygonAmoy];
const mainNetworks = [polygon];

const transportstest = {
  [polygonAmoy.id]:window.ethereum  ? custom(window.ethereum) : http(),
};
const transportMain = {
  [polygon.id]: window.ethereum ?  custom(window.ethereum) : http("https://rpc-amoy.polygon.technology"),
};

export const chains = import.meta.env.VITE_ENV === "dev" ? testNetworks : mainNetworks;
const transports = import.meta.env.VITE_ENV === "dev" ? transportstest : transportMain

const connectors = connectorsForWallets(
  [
    {
      groupName: "Recommended",
      wallets: [metaMaskWallet, trustWallet, tokenPocketWallet, walletConnectWallet],
    },
  ],
  {
    appName: "My RainbowKit App",
    projectId: projectId,
  }
);

export const configRead = createConfig({
  connectors,
  chains: chains,
  transports: transports,
});


export const queryClient = new QueryClient();
