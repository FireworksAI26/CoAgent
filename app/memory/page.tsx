// @ts-nocheck
export const dynamic = "force-dynamic";
import { db } from "@/lib/db";
export default async function(){const mem=await db.memory.findMany();return <div><h1 className="text-3xl mb-4">Company Memory</h1><div className="space-y-2">{mem.map(m=><div key={m.id} className="surface p-3"><p>{m.title}</p><p className="text-sm text-slate-400">{m.content}</p></div>)}</div></div>}
