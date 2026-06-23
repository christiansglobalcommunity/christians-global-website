import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, Router } from "wouter";
// wouter/use-hash-location handles the GitHub Pages 404 issue automatically
import { useHashLocation } from "wouter/use-hash-location";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Resources from "./pages/Resources";
import About from "./pages/About";
import PrayerCommunity from "./pages/PrayerCommunity";
import Fellowship from "./pages/Fellowship";
import AdminPrayers from "./pages/AdminPrayers";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function RouterComponent() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/about"} component={About} />
      <Route path={"/prayer-community"} component={PrayerCommunity} />
      <Route path={"/fellowship"} component={Fellowship} />
      <Route path={"/resources"} component={Resources} />
      <Route path={"/contact"} component={Contact} />
      <Route path={"/admin/prayers"} component={AdminPrayers} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router hook={useHashLocation}>
            <RouterComponent />
          </Router>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
