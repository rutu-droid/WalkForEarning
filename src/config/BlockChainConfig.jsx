import PRESALE_ABI from "../assets/abi/Presale.json";
import USDT_TOKEN_ABI from "../assets/abi/usdt.json";
// This is the configuration for the Blockchain network.
const config = {
    prod: {
        137: {
            PRESALE_ADDRESS: "0xD88860436B0a41Bf6E46aAC1263b5E6fcB71FCCd",
            PRESALE_ABI: PRESALE_ABI,
            USDT_TOKEN_ADDRESS: "0x5BaA0c8200FF8421CCfd140A0265830493977961",
            USDT_TOKEN_ABI: USDT_TOKEN_ABI,
            ADMIN_ADDRESS: "0xd5D5dDc96C7204a589f6C8b59fF2dd4b8eb07061",
        },
    },
    dev: {
        97: {
            PRESALE_ADDRESS: "0x141064302F13B6E24b1331f5150B97BBc482F777",
            PRESALE_ABI: PRESALE_ABI,
            USDT_TOKEN_ADDRESS: "0x01708de24ef06Ba9dA90af31DbB1eA65Df69505B",
            USDT_TOKEN_ABI: USDT_TOKEN_ABI,
            ADMIN_ADDRESS: "0xA8655F82b083407D1567dc848D6f28C48E3D77FB",
        },
    },
};

export const blockConfig = config[import.meta.env.VITE_ENV];