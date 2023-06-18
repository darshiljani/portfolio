import type { ReactNode } from "react";
import { IBM_Plex_Mono } from "next/font/google";
import Dock from "./Dock";
import ThemeChanger from "./ThemeChanger";

const monospace = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className={`min-h-screen w-full ${monospace.className}`}>
      <ThemeChanger />
      <main className="min-h-screen w-full">{children}</main>
      <Dock />
    </div>
  );
}

export default Layout;
