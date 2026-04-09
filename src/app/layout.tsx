import "./globals.css";
import ReduxProvider from "../providers/ReduxProvider";
import ThemeProvider from "../providers/ThemeProvider";
import { Toaster } from "../components/ui/sonner";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <ReduxProvider>
            {children}
            <Toaster />
          </ReduxProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}