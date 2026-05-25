import { Route, Routes } from "react-router-dom";
import { Loader } from "./components/Loader";
import { ScrollProgress } from "./components/ScrollProgress";
import { ThemeProvider } from "./hooks/useTheme";
import { NotFound } from "./pages/NotFound";
import { PortfolioPage } from "./pages/PortfolioPage";

export default function App() {
  return (
    <ThemeProvider>
      <Loader />
      <ScrollProgress />
      <Routes>
        <Route path="/" element={<PortfolioPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ThemeProvider>
  );
}
