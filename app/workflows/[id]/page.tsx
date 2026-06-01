// @ts-nocheck
export const dynamic = "force-dynamic";
import { db } from "@/lib/db";
export default async function({params}:{params:{id:string}}){const w=await db.workflow.findUnique({where:{id:params.id},include:{steps:{include:{assignedAgent:true}},runs:true}});if(!w) return <div>Not found</div>;return <div className="space-y-4"><h1 className="text-3xl">{w.name}</h1><div className="surface p-4">{w.steps.map(s=><p key={s.id}>{s.order}. {s.title} — {s.assignedAgent?.name}</p>)}</div><form action={`/api/workflows/${w.id}`} method="post" className="surface p-4 grid md:grid-cols-2 gap-2"><input name="goal" defaultValue={w.goal} className="bg-muted p-2 rounded"/><button className="bg-accent p-2 rounded">Edit workflow</button></form></div>}
