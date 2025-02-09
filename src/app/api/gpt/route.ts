// src/app/api/agp/route.ts
export async function POST(request: Request) {
    try {
      const body = await request.json();
  
 
      const response = await fetch('https://api.openai.com/v1/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer YOUR_OPENAI_API_KEY`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: body.prompt,
          max_tokens: 100,
        }),
      });
  
      const data = await response.json();
      return new Response(JSON.stringify(data), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } catch (error) {
      return new Response('Failed to interact with OpenAI', { status: 500 });
    }
  }
  