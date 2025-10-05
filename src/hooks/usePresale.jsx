import { useAccount, useWriteContract } from "wagmi";
import { readContract } from "@wagmi/core";
import { useEffect, useState } from "react";
import { blockConfig } from "../config/BlockChainConfig";
import { configRead } from "../utils/RainbowKitConfig";

// const CHAIN_ID = Number(import.meta.env.VITE_CHAIN_ID);

function usePresale() {
    const { address, chainId } = useAccount();
    const { writeContractAsync } = useWriteContract();

    const checkTokenBalance = async () => {
        try {
            const tokenBalance = await readContract(configRead, {
                abi: erc20Abi,
                address: blockConfig[chainId].USDT_TOKEN_ADDRESS,
                functionName: "balanceOf",
                args: [address],
            });
            // console.log(balance);

            setbalance(tokenBalance);
        } catch (error) {
            return 0;
        }
    };

    const checkAllowance = async () => {
        try {
            const allowance = await readContract(configRead, {
                abi: erc20Abi,
                address: blockConfig[chainId].USDT_TOKEN_ADDRESS,
                functionName: "allowance",
                args: [address, blockConfig[chainId].PRESALE_ADDRESS],
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
                address: blockConfig[chainId].USDT_TOKEN_ADDRESS,
                functionName: "approve",
                args: [blockConfig[chainId].PRESALE_ADDRESS, amount],
            });
            await waitForTransaction(approval, 100);
            return approval;
        } catch (error) {
            throw error;
        }
    };

    

    return {
        checkTokenBalance,
        checkAllowance,
        setApproval
    };
}

export default usePresale();