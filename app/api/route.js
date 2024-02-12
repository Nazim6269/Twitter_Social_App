import { NextResponse } from "next/server";

export async function GET() {
    return new NextResponse(JSON.stringify({ welcome: 'Coders vaira amar!Server kam kortache ,r test korte hoibona,code kortejaow!' }), {
      status: 401
    })
}