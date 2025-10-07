import React from "react";
import { Routes, Route } from "react-router-dom";
import { Wireframe } from "./pages/Wireframe";
import { Dashboard } from "./pages/Dashboard";
import { WagmiProvider } from "wagmi";
import { RainbowKitProvider, midnightTheme } from "@rainbow-me/rainbowkit";
import { QueryClientProvider } from "@tanstack/react-query";
import { configRead, queryClient } from "./utils/RainbowKitConfig";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <WagmiProvider config={configRead}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider modalSize="compact" theme={midnightTheme()}>
          <Routes>
            {/* Wireframe home */}
            <Route path="/" element={<Wireframe />} />

            {/* Dashboard */}
            <Route path="/page/dashboard" element={<Dashboard />} />
          </Routes>

          {/* ✅ Toaster must be inside the main render tree */}
          <Toaster
            position="top-right"
            reverseOrder={false}
            toastOptions={{
              style: {   
                padding: "8px 16px",
                backgroundColor: "white",
                color: "#7a01dcff",
              },
            }}
          />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;
