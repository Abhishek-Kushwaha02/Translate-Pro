import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Home from "./pages/Home";
import Translator from "./pages/Translator";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import API from "./pages/API";
import Contact from "./pages/Contact";
import Workflow from "./pages/Workflow";
import Business from "./pages/Business";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Layout } from "./components/layout/Layout";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={true}
      disableTransitionOnChange={false}
    >
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="translator" element={<Translator />} />
              <Route path="features" element={<Features />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="about" element={<About />} />
              <Route path="api" element={<API />} />
              <Route path="contact" element={<Contact />} />
              <Route path="workflow" element={<Workflow />} />
              <Route path="business" element={<Business />} />
              <Route path="auth/login" element={<Login />} />
              <Route path="auth/register" element={<Register />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
