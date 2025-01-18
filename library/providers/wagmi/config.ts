import { getDefaultConfig } from "connectkit";
import { createConfig, http } from "wagmi";

// Correcting to use the Sepolia Testnet (Base Testnet on Sepolia)
const sepoliaBaseTestnet = {
  id: 11155111, // Sepolia Testnet ID (commonly used for Ethereum-based testnets)
  name: "Base Sepolia Testnet",
  network: "sepolia",
  rpcUrls: {
    default: "https://base-sepolia.g.alchemy.com/v2/DAfFtjudU6WUxNJuJ5RnM3gdKcx5hEHY", // Alchemy RPC URL for Base Sepolia
  },
};

const isDev = process.env.NODE_ENV === "development";

export const config = createConfig(
  getDefaultConfig({
    appName: "capypolls",
    walletConnectProjectId:
      process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || "",
    chains: [sepoliaBaseTestnet], // Using Base Sepolia Testnet
    multiInjectedProviderDiscovery: true,
    transports: {
      [sepoliaBaseTestnet.id]: http(sepoliaBaseTestnet.rpcUrls.default), // Use the RPC URL for Base Sepolia
    },
  })
);
