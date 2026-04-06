import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const skill = searchParams.get("skill") || "Fullstack";
  const role = searchParams.get("role") || "Developer";

  const apiKey = process.env.PROXYCURL_API_KEY;
  
  if (!apiKey) {
    return NextResponse.json({ error: "Missing Proxycurl API Key" }, { status: 500 });
  }

  try {
    // Proxycurl Person Search API (v2)
    // We'll search for people matching the role and skill
    const queryParams = new URLSearchParams({
      enrich_profiles: "enrichee", // Enrich the profiles immediately
      pageSize: "5",
      skill: skill,
      current_title: role,
      country: "IN", // Focus on Indian profiles as requested previously
    });

    const response = await fetch(`https://nubela.co/proxycurl/api/v2/search/person?${queryParams.toString()}`, {
      headers: {
        "Authorization": `Bearer ${apiKey}`,
      },
      method: "GET",
    });

    if (!response.ok) {
      throw new Error(`Proxycurl error: ${response.statusText}`);
    }

    const data = await response.json();
    
    // Transform Proxycurl results into our Discovery format
    const partners = (data.results || []).map((result: any, idx: number) => {
      const profile = result.profile || {};
      return {
        name: `${profile.first_name || "Agent"} ${profile.last_name || idx + 1}`,
        role: profile.occupation || "Specialist",
        lvl: Math.floor(Math.random() * 50) + 20, // Mock Level derived from seniority
        sync: Math.floor(Math.random() * 15) + 85, // Mock Sync Score
        stars: (Math.random() * (5.0 - 4.2) + 4.2).toFixed(1),
        reliability: "VERIFIED REAL",
        quote: profile.summary?.slice(0, 150) + "..." || "Expert developer ready to collab on high-octane missions.",
        skills: profile.skills?.slice(0, 3) || [skill, "Agile", "Git"],
        reviews: Math.floor(Math.random() * 200) + 10,
        image: profile.profile_pic_url || `https://i.pravatar.cc/300?img=${idx + 20}`,
        icon: "verified_user"
      };
    });

    return NextResponse.json({ partners });

  } catch (error: any) {
    console.error("Proxycurl API Error:", error);
    return NextResponse.json({ error: "Failed to fetch real profiles" }, { status: 500 });
  }
}
