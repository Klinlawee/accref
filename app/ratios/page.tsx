import ratios from '@/data/ratios.json';

export default function RatiosPage() {
  // Group ratios by category
  const groupedRatios = ratios.reduce((acc, ratio) => {
    const category = ratio.category || 'Other';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(ratio);
    return acc;
  }, {} as Record<string, typeof ratios>);

  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Financial Ratios</h1>
        <p className="text-gray-600 mb-8">
          Key metrics for analyzing company performance, liquidity, and financial health.
        </p>

        {Object.entries(groupedRatios).map(([category, ratios]) => (
          <div key={category} className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 pb-2 border-b">
              {category} Ratios
            </h2>
            <div className="grid gap-4">
              {ratios.map((ratio) => (
                <div key={ratio.id} id={ratio.id} className="bg-white border rounded-lg p-5">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{ratio.title}</h3>
                  <div className="bg-gray-50 p-3 rounded-lg font-mono text-sm mb-3">
                    {ratio.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
