import { getDefaultConfig } from "connectkit";
import { createConfig, http } from "wagmi";
import { sepolia } from "wagmi/chains"; // Assuming Sepolia is available in wagmi (Base Sepolia is based on Sepolia)

const isDev = process.env.NODE_ENV === "development";

export const config = createConfig(
  getDefaultConfig({
    appName: "capypolls",
    walletConnectProjectId:
      process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || "",
    chains: [sepolia], // Use Sepolia (Base Sepolia Testnet) here
    multiInjectedProviderDiscovery: true,
    transports: {
      [sepolia.id]: http(
        "https://base-sepolia.g.alchemy.com/v2/DAfFtjudU6WUxNJuJ5RnM3gdKcx5hEHY" // Alchemy RPC URL for Base Sepolia
      ),
    },
  })
);
