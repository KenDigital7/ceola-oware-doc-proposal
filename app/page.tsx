import { Hero } from "@/components/landing/Hero";
import { About } from "@/components/landing/About";
import { Package } from "@/components/landing/Package";
import { Process } from "@/components/landing/Process";
import { VimeoGrid } from "@/components/VimeoGrid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Preserve the Stories That Matter — Kenctures Inc",
  description:
    "Professional family legacy documentary filmmaking. One camera. One day. Forever. Ken Williams Jr · Kenctures Inc · Chicago.",
};

export default function Page() {
  return (
    <main id="main">
      <Hero />
      <About />
      <div id="work">
        <VimeoGrid />
      </div>
      <Package />
      <Process />
    </main>
  );
}
