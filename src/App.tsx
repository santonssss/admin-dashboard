import Index from "@pages/Index";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Analytics from "@pages/Analytics";
import Calendar from "@pages/Calendar";
import Chat from "@pages/Chat";
import Documents from "@pages/Documents";
import Users from "@pages/Users";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
function App() {
  const queryClient = new QueryClient();
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/messages" element={<Chat />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
