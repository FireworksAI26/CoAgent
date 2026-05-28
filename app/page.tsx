import Link from "next/link";
const features=["Role-based AI employees","Multi-agent task delegation","Workflow library","Human approval queue","Tool-connected execution","Visible run logs","Shared company memory","Founder command center"];
export default function Landing(){return <div className="max-w-6xl mx-auto space-y-14">
<section className="surface p-10 text-center"><p className="text-accent">CoAgent — AI employee team for founders</p><h1 className="text-5xl font-semibold mt-3">Hire an AI operating team in minutes.</h1><p className="mt-4 text-slate-300 max-w-3xl mx-auto">CoAgent gives founders a team of AI employees with roles, memory, tools, workflows, logs, and human approvals — so you can delegate outcomes, not prompts.</p><div className="mt-8 flex justify-center gap-3"><Link href="/dashboard" className="bg-accent px-5 py-3 rounded-xl">Launch CoAgent</Link><Link href="/workflows" className="surface px-5 py-3 rounded-xl">View demo workflow</Link></div></section>
<section className="grid md:grid-cols-4 gap-4">{features.map(f=><div key={f} className="surface p-4 text-sm">{f}</div>)}</section>
</div>}
