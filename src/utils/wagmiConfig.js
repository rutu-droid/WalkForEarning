import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { bscTestnet } from 'viem/chains';

export const config = getDefaultConfig({
  appName: 'My RainbowKit App',
  projectId: "b9a499d2b6cb7c88f73e7cdd3572f4fa",
  chains: [bscTestnet],
  ssr: true, // If your dApp uses server side rendering (SSR)
});
