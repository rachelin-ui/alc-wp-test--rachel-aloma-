import { useEffect, useState } from 'react';

export default function QuoteWidget() {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    fetch('/api/quote.json')
      .then(res => res.json())
      .then(data => setQuote(data.quote));
  }, []);

  return (
    <div className="mt-8 text-center">
      <h2 className="text-xl font-semibold">Citation du jour</h2>
      <p className="mt-2 italic text-gray-700">{quote}</p>
    </div>
  );
}
