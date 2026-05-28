import { db } from "@/lib/db";
export async function getWorkspace() { return db.workspace.findFirst({ include: { agents: true, workflows: {include:{steps:true}}, runs: true, tools: true, approvals: true, memories: true } }); }
