import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  const { prompt } = await request.json();

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${import.meta.env.OPENAI_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: 'gpt-4o',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 300
    })
  });

  const data = await response.json();
  const result = data.choices?.[0]?.message?.content || 'Pas de réponse';

  return new Response(JSON.stringify({ result }), {
    headers: { 'Content-Type': 'application/json' }
  });
};
