import { createPublicClient, custom, http } from "viem";
import { useAccount } from "wagmi";
import { polygon, polygonAmoy } from "viem/chains";
import { chains } from "../utils/RainbowKitConfig";

const networkList = {
    80002: polygonAmoy,
    137 : polygon,
};

function useWaitForTransaction() {
    const { chainId, isConnected } = useAccount();

    if (isConnected && chainId === chains[0].id) {
        var publicClient = createPublicClient({
            chain: networkList[chainId],
            transport: window.ethereum ?  custom(window.ethereum) : import.meta.env.VITE_ENV==="dev" ?  http() : http("https://rpc-amoy.polygon.technology"),
        });
    }

    const waitForTransaction = async (hash, delayMs = 7000) => {
        const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
        try {
            const result = await publicClient.waitForTransactionReceipt({
                hash: hash,
            });
            await delay(delayMs);
            return result;
        } catch (error) {
            throw error;
        }
    };

    return {
        waitForTransaction,
        publicClient,
    };
}

export default useWaitForTransaction;
