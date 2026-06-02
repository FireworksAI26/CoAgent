import { db } from "@/lib/db";import { NextResponse } from "next/server";
export async function POST(req:Request,{params}:{params:{id:string}}){const f=await req.formData();await db.workflow.update({where:{id:params.id},data:{goal:String(f.get('goal'))}});return NextResponse.redirect(new URL(`/workflows/${params.id}`,req.url));}
