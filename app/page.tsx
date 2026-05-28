import Link from "next/link";
import { Bot, ChevronDown, ShieldCheck, Sparkles } from "lucide-react";

const logos = ["Substack", "Klaviyo", "Retool", "NVIDIA", "Brex", "Scale", "PostHog", "Mintlify"];

export default function Landing() {
  return (
    <div className="min-h-screen text-[#464860] bg-[#efeff2] landing-grid overflow-hidden">
      <header className="h-20 border-b border-[#d9dbe1]/80 px-8 flex items-center justify-between">
        <nav className="hidden md:flex items-center gap-10 text-[13px] uppercase tracking-[0.13em]">
          <a>Examples</a><a>Pricing</a><a className="inline-flex items-center gap-1">Features <ChevronDown size={14} /></a>
          <a>Enterprise</a><a>Blog</a><a className="inline-flex items-center gap-1">Resources <ChevronDown size={14} /></a>
        </nav>
        <div className="mx-auto md:mx-0 w-10 h-10 rounded-xl bg-[#3ce2aa] grid place-items-center text-[#24304c]"><Bot size={18} /></div>
        <div className="flex items-center gap-3">
          <button className="hidden md:block px-7 py-3 bg-[#4b4e68] text-white skew-x-[-20deg]"><span className="inline-block skew-x-[20deg]">Contact sales</span></button>
          <Link href="/dashboard" className="px-8 py-3 bg-[#2ee7a8] text-[#24304c] font-medium skew-x-[-20deg]"><span className="inline-block skew-x-[20deg]">Launch CoAgent</span></Link>
        </div>
      </header>

      <main className="max-w-[1400px] mx-auto px-8 pt-20 pb-16 relative">
        <div className="max-w-[740px]">
          <h1 className="text-[clamp(54px,9vw,124px)] leading-[0.95] font-extrabold tracking-[-0.04em] text-[#4b4e68]">Hire Your AI Operating Team.</h1>
          <p className="text-[38px] mt-3 text-[#4b4e68] font-semibold">Delegate outcomes, not prompts.</p>
          <p className="mt-12 text-[44px] leading-tight max-w-xl text-[#4b4e68]/90">AI employees that plan, delegate, execute, and request human approval before risky actions.</p>
          <div className="mt-14 flex gap-3">
            <button className="px-9 py-4 bg-[#4b4e68] text-white skew-x-[-20deg]"><span className="inline-block skew-x-[20deg]">Contact Sales</span></button>
            <Link href="/dashboard" className="px-9 py-4 bg-[#2ee7a8] text-[#26304a] font-semibold skew-x-[-20deg]"><span className="inline-block skew-x-[20deg]">Start now</span></Link>
          </div>
        </div>

        <div className="absolute right-[-140px] bottom-[-200px] w-[760px] h-[760px] rounded-full border border-[#c8cbd4] bg-[radial-gradient(circle_at_40%_30%,#ffffff,transparent_60%)] opacity-70" />
        <div className="absolute right-[70px] top-[190px] w-[160px] h-[160px] rounded-full border border-[#d6d9e2]" />
      </main>

      <section className="border-t border-b border-[#d9dbe1] bg-white/30">
        <div className="max-w-[1500px] mx-auto py-6 px-8">
          <p className="text-center text-[13px] uppercase tracking-[0.28em] text-[#6e7085] mb-4">Trusted by Founder-Led Teams</p>
          <div className="grid grid-cols-2 md:grid-cols-8 gap-5 text-center text-[42px] tracking-tight text-[#727588]">{logos.map((l)=><div key={l} className="text-lg md:text-2xl font-medium opacity-80">{l}</div>)}</div>
        </div>
      </section>

      <footer className="bg-[#232531] text-white px-8 py-7 flex items-center justify-between">
        <div className="flex items-center gap-3"><div className="w-12 h-12 rounded-2xl bg-[#2ee7a8] grid place-items-center text-[#19263f]"><Sparkles size={18}/></div><div><p className="text-3xl font-semibold">CoAgent</p></div></div>
        <div className="hidden md:flex items-center gap-2 text-2xl text-white/90"><ShieldCheck/> <span>AI employee team platform</span></div>
      </footer>
    </div>
  );
}
