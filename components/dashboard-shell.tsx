"use client";

import Link from "next/link";
import { BarChart3, ClipboardCheck, GitCompareArrows, Hexagon } from "lucide-react";
import type { ReactNode } from "react";

export function DashboardShell({ activePage, children }: { activePage: "assessment" | "decision"; children: ReactNode }) {
  return (
    <div className="app-shell">
      <header className="topbar">
        <Link href="/" className="brand" aria-label="MachineWise home">
          <span className="brand-mark"><Hexagon aria-hidden="true" /></span>
          <span><strong>MachineWise</strong><small>Decision support</small></span>
        </Link>
        <nav aria-label="Main navigation" className="topnav">
          <Link href="/" className={activePage === "assessment" ? "active" : ""}><ClipboardCheck aria-hidden="true" /><span>Machinery assessment</span><b>01</b></Link>
          <Link href="/decision" className={activePage === "decision" ? "active" : ""}><GitCompareArrows aria-hidden="true" /><span>Decision matrix</span><b>02</b></Link>
        </nav>
        <div className="prototype-badge"><BarChart3 aria-hidden="true" /> Research prototype</div>
      </header>
      <main className="main-content">{children}</main>
      <footer><span>Independent Research Prototype</span><p>Synthetic machinery and assessment data. No Stora Enso operational data used.</p></footer>
    </div>
  );
}
