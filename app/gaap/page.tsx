import gaap from '@/data/gaap.json';

export default function GaapPage() {
  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">U.S. GAAP Standards</h1>
        <p className="text-gray-600 mb-8">
          Generally Accepted Accounting Principles (GAAP) as codified in the ASC (Accounting Standards Codification).
        </p>

        <div className="space-y-6">
          {gaap.map((item) => (
            <div key={item.id} id={item.id} className="bg-white border rounded-lg p-6 hover:shadow-md transition-shadow">
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">{item.title}</h2>
              <div className="bg-gray-50 p-4 rounded-lg whitespace-pre-line mb-4">
                {item.content}
              </div>
              {item.category && (
                <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                  {item.category}
                </span>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-yellow-800 mb-2">Note</h3>
          <p className="text-yellow-700">
            GAAP is principles-based but includes detailed rules. The FASB ASC is the single source of authoritative 
            U.S. accounting and reporting standards.
          </p>
        </div>
      </div>
    </div>
  );
}
