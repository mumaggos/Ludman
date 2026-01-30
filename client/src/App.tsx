import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import { lazy, Suspense, useMemo } from "react";

import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import SocialFloatingButtons from "./components/SocialFloatingButtons";
import NotFound from "@/pages/NotFound";

// ✅ Lazy-load pages to reduce initial bundle
const Home = lazy(() => import("./pages/Home"));
const Admin = lazy(() => import("./pages/Admin"));
const Roadmap = lazy(() => import("./pages/Roadmap"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Whitepaper = lazy(() => import("./pages/Whitepaper"));
const Tokenomics = lazy(() => import("./pages/Tokenomics"));

// ✅ Web3 pages as a separate chunk
const Presale = lazy(() => import("./pages/Presale"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Dividends = lazy(() => import("./pages/Dividends"));

/**
 * ✅ Web3 Provider wrapper (only mounted on Web3 routes)
 * This prevents wagmi + config + RPC work from affecting Home/LCP.
 */
function Web3Providers({ children }: { children: React.ReactNode }) {
  // Lazy import wagmi config only when we actually need web3
  const { WagmiProvider } = require("wagmi") as typeof import("wagmi");
  const { config } = require("./lib/wagmi") as typeof import("./lib/wagmi");

  return <WagmiProvider config={config}>{children}</WagmiProvider>;
}

function Router() {
  return (
    <>
      <Suspense fallback={null}>
        <Switch>
          {/* Non-web3 routes */}
          <Route path="/" component={Home} />
          <Route path="/roadmap" component={Roadmap} />
          <Route path="/faq" component={FAQ} />
          <Route path="/whitepaper" component={Whitepaper} />
          <Route path="/tokenomics" component={Tokenomics} />
          <Route path="/admin" component={Admin} />

          {/* ✅ Web3 routes only */}
          <Route path="/presale">
            <Web3Providers>
              <Presale />
            </Web3Providers>
          </Route>

          <Route path="/dashboard">
            <Web3Providers>
              <Dashboard />
            </Web3Providers>
          </Route>

          <Route path="/dividends">
            <Web3Providers>
              <Dividends />
            </Web3Providers>
          </Route>

          {/* fallback */}
          <Route path="/404" component={NotFound} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>

      <SocialFloatingButtons />
    </>
  );
}

function App() {
  // ✅ create queryClient once (safe and avoids global mutable)
  const queryClient = useMemo(() => new QueryClient(), []);

  return (
    <ErrorBoundary>
      <LanguageProvider>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider defaultTheme="dark" storageKey="lubdan-theme">
            <TooltipProvider>
              <Toaster />
              <Router />
            </TooltipProvider>
          </ThemeProvider>
        </QueryClientProvider>
      </LanguageProvider>
    </ErrorBoundary>
  );
}

export default App;
