import "./globals.css";
import { AppShell } from "@/components/layout/app-shell";
import { ShellGate } from "@/components/layout/shell-gate";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ShellGate>{children}</ShellGate>
      </body>
    </html>
  );
}
