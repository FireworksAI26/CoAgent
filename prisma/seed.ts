import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();
async function main() {
  await db.$transaction([db.runLog.deleteMany(),db.approval.deleteMany(),db.run.deleteMany(),db.workflowStep.deleteMany(),db.workflow.deleteMany(),db.memory.deleteMany(),db.tool.deleteMany(),db.agent.deleteMany(),db.workspace.deleteMany()]);
  const ws = await db.workspace.create({ data: { name: "Kova Labs", slug: "kova-labs" } });
  const agents = await Promise.all([
    ["Atlas","Research Lead"],["Nova","Product Strategist"],["Forge","Engineering Agent"],["Echo","Marketing and Sales Agent"],["Ledger","Ops and Finance Agent"]
  ].map(([name,role])=>db.agent.create({data:{workspaceId:ws.id,name,role,description:`${name} drives ${role.toLowerCase()} outcomes for founders.`,instructions:`Operate as ${name}. Delegate outcomes, not prompts.`,communicationStyle:"Concise and strategic",status:"active",permissionLevel:"standard",avatar:name[0]}})));
  const sponsor = await db.workflow.create({data:{workspaceId:ws.id,name:"Sponsor Outreach Campaign",goal:"Create sponsor outreach assets with approvals",triggerType:"manual",status:"active"}});
  await Promise.all([
    ["Atlas researches sponsor categories",agents[0].id,false,"Web Search"],["Ledger recommends tiers",agents[4].id,false,"Notion"],["Echo drafts outreach",agents[3].id,false,"Gmail"],["Nova assembles campaign",agents[1].id,true,null]
  ].map((s,i)=>db.workflowStep.create({data:{workflowId:sponsor.id,order:i+1,title:s[0] as string,description:s[0] as string,assignedAgentId:s[1] as string,requiresApproval:s[2] as boolean,requiredTool:s[3] as string|null}})));
  for (const n of ["Competitor Scan","Landing Page Generator","GitHub Issue Analysis","Weekly KPI Report"]) await db.workflow.create({data:{workspaceId:ws.id,name:n,goal:`Execute ${n.toLowerCase()} workflow`,triggerType:"manual",status:"active"}});
  for (const t of ["GitHub","Notion","Slack","Gmail","Web Search","Code Sandbox","Calendar"]) await db.tool.create({data:{workspaceId:ws.id,name:t,description:`${t} connector for tool-connected execution.`,status:"enabled",riskLevel:t==="Gmail"?"high":"medium"}});
  const run = await db.run.create({data:{workspaceId:ws.id,workflowId:sponsor.id,title:"Sponsor campaign for Kova Labs",input:"Prepare sponsor outreach campaign",output:"Categories, tiers, drafts, and approval request prepared.",status:"needs_approval",riskLevel:"high",startedAt:new Date()}});
  const logs=["Received task","Parsed user outcome","Selected agent team","Atlas started research","Ledger recommended pricing tiers","Echo drafted outreach copy","Nova assembled final campaign","Approval requested before sending emails","Final artifact saved"];
  for (const m of logs) await db.runLog.create({data:{runId:run.id,message:m,level:"info"}});
  await db.run.createMany({data:[{workspaceId:ws.id,title:"Competitor scan: AI podcast sponsors",input:"Research competitors",output:"12 competitors summarized",status:"success",riskLevel:"low",completedAt:new Date()},{workspaceId:ws.id,title:"GitHub issue digest",input:"Review repository issues",output:"Backlog triaged",status:"running",riskLevel:"medium",startedAt:new Date()}]});
  await db.approval.createMany({data:[{workspaceId:ws.id,runId:run.id,agentId:agents[3].id,action:"Send 12 sponsor outreach emails",reason:"External communication requires human approval",riskLevel:"high",status:"pending"},{workspaceId:ws.id,action:"Deploy prototype branch",reason:"Production-impacting action",riskLevel:"high",status:"pending"},{workspaceId:ws.id,action:"Spend $50 on lead enrichment",reason:"Budget spend requires confirmation",riskLevel:"medium",status:"pending"}]});
  await db.memory.createMany({data:[{workspaceId:ws.id,type:"company",title:"Company context",content:"Kova Labs builds AI-native sponsor intelligence tools."},{workspaceId:ws.id,type:"brand",title:"Brand voice",content:"Confident, practical, founder-focused."},{workspaceId:ws.id,type:"product",title:"Product notes",content:"Prioritize sponsor campaign automation MVP."},{workspaceId:ws.id,type:"sponsor",title:"Sponsor notes",content:"Target B2B SaaS and creator economy brands first."}]});
}
main().finally(()=>db.$disconnect());
