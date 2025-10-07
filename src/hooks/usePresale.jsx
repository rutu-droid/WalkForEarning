import { useAccount, useWriteContract } from "wagmi";
import { readContract } from "@wagmi/core";
import { useEffect, useState } from "react";
import { blockConfig } from "../config/BlockChainConfig";
import { configRead } from "../utils/RainbowKitConfig";

const CHAIN_ID = Number(import.meta.env.VITE_CHAIN_ID);

function usePresale() {
    const { address, chainId } = useAccount();
    const { writeContractAsync } = useWriteContract();

    const checkTokenBalance = async () => {
        try {
            const tokenBalance = await readContract(configRead, {
                abi: erc20Abi,
                address: blockConfig[chainId || CHAIN_ID].USDT_TOKEN_ADDRESS,
                functionName: "balanceOf",
                args: [address],
            });

            return tokenBalance;
        } catch (error) {
        }
    };

    const checkAllowance = async () => {
        try {
            const allowance = await readContract(configRead, {
                abi: erc20Abi,
                address: blockConfig[chainId || CHAIN_ID].USDT_TOKEN_ADDRESS,
                functionName: "allowance",
                args: [address, blockConfig[chainId || CHAIN_ID].PRESALE_ADDRESS],
            });
            return allowance;
        } catch (error) {
            return 0;
        }
    };

    const setApproval = async (amount) => {
        try {
            const approval = await writeContractAsync({
                abi: erc20Abi,
                address: blockConfig[chainId || CHAIN_ID].USDT_TOKEN_ADDRESS,
                functionName: "approve",
                args: [blockConfig[chainId || CHAIN_ID].PRESALE_ADDRESS, amount],
            });
            await waitForTransaction(approval, 100);
            return approval;
        } catch (error) {
            throw error;
        }
    };

    // ✅ Get WFE amount for USDT
    const getUSDTToWFE = async (usdtAmount) => {
        try {
            const wfeAmount = await readContract(configRead, {
                abi: blockConfig[chainId || CHAIN_ID].PRESALE_ABI,
                address: blockConfig[chainId || CHAIN_ID].PRESALE_ADDRESS,
                functionName: "getUSDTToWFE",
                args: [usdtAmount], // make sure it's BigInt
            });

            console.log("✅ WFE Amount Returned:", wfeAmount);
            return wfeAmount;
        } catch (error) {
            console.error("🔥 getUSDTToWFE Error:", error);
            return 0n;
        }

    }


    // ✅ Buy tokens
    const buyToken = async (usdtAmount) => {
        try {
            const hash = await writeContractAsync({
                abi: blockConfig[chainId || CHAIN_ID].PRESALE_ABI,
                address: blockConfig[chainId || CHAIN_ID].PRESALE_ADDRESS,
                functionName: "buyToken",
                args: [usdtAmount],
            });

            
            return hash;
        } catch (error) {
            console.error("Buy token failed:", error);
            throw error;
        }
    };

    // ✅ Claim purchased tokens
    const claimToken = async () => {
        try {
            const hash = await writeContractAsync({
                abi: blockConfig[chainId || CHAIN_ID].PRESALE_ABI,
                address: blockConfig[chainId || CHAIN_ID].PRESALE_ADDRESS,
                functionName: "claimToken",
                args: [],
            });

            await waitForTransactionReceipt(configRead, { hash });
            return hash;
        } catch (error) {
            console.error("Claim token failed:", error);
            throw error;
        }
    };

    // ✅ Get user purchase info
    const getUserPurchases = async () => {
        try {
            const purchases = await readContract(configRead, {
                abi: blockConfig[chainId || CHAIN_ID].PRESALE_ABI,
                address: blockConfig[chainId || CHAIN_ID].PRESALE_ADDRESS,
                functionName: "getUserPurchases",
                args: [address],
            });
            return purchases;
        } catch (error) {
            console.error("Error fetching user purchases:", error);
            return null;
        }
    };

    return {
        checkTokenBalance,
        checkAllowance,
        setApproval,
        getUSDTToWFE,
        buyToken,
        claimToken,
        getUserPurchases
    };
}

export default usePresale;