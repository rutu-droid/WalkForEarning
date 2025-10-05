// import { JsonRpcApiProvider, ethers } from "ethers";

// export const waitForTranscation = async (hash) => {
// 	try {
// 		// const provider = new JsonRpcApiProvider(process.env.NEXT_PUBLIC_NETWORK_RPC);
// 		const provider = new ethers.BrowserProvider(window.ethereum)

// 		const receipt = await provider.waitForTransaction(hash);

// 		console.log(receipt);
// 		return receipt;
//     } catch (error) {
//               throw error;
//     }
// };

// import { ethers } from 'ethers';

// let provider;

// export const waitForTranscation = async (transactionHash) => {
// 	if (window.ethereum) {
// 		provider = new ethers.BrowserProvider(window.ethereum);
// 	} else {
// 	   window.alert('Please install MetaMask');
// 	}

//     try {
//         const receipt = await provider.waitForTransaction(transactionHash);
//         return receipt;
//     } catch (error) {
//         throw error;
//     }
// }

// src/utils/transactionUtils.js
import { ethers } from 'ethers';

let provider;

export const waitForTransaction = async (transactionHash) => {
    if (typeof window !== 'undefined' && window.ethereum) {
        if (!provider) {
            provider = new ethers.providers.Web3Provider(window.ethereum);;
        }
    } else {
        window.alert("Please install MetaMask");
        return;
    }

    try {

        const receipt = await provider.waitForTransaction(transactionHash);
        return receipt;
    } catch (error) {
        throw error;
    }
};