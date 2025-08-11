import type { APIRoute } from 'astro';

const quotes = [
  "La vie est un mystère qu’il faut vivre, et non un problème à résoudre.",
  "Le succès n’est pas final, l’échec n’est pas fatal : c’est le courage de continuer qui compte.",
  "Fais de ta vie un rêve, et d’un rêve une réalité.",
  "L’imagination est plus importante que le savoir."
];

export const GET: APIRoute = async () => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  return new Response(JSON.stringify({ quote: randomQuote }), {
    headers: { 'Content-Type': 'application/json' }
  });
};
