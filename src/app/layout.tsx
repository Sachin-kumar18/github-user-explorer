import "./globals.css";
import ReduxProvider from "../providers/ReduxProvider";
import ThemeProvider from "../providers/ThemeProvider";
import { Toaster } from "sonner"
import Navbar from "../components/common/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning> 
    {/* supressHydrationWarning -> useful when theme or client-side values differ from server render */}
      <body className="min-h-screen bg-background">
        <ThemeProvider>
          <ReduxProvider>
            <Navbar />
            {children}
            <Toaster position="top-right"/>
          </ReduxProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}