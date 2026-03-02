import gaapVsIfrs from '@/data/gaapVsIfrs.json';

export default function GaapVsIfrsPage() {
  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">GAAP vs IFRS Comparison</h1>
        <p className="text-gray-600 mb-8">
          Key differences between U.S. GAAP and International Financial Reporting Standards (IFRS).
        </p>

        <div className="space-y-4">
          {gaapVsIfrs.map((item, index) => (
            <div key={index} id={item.id} className="bg-white border rounded-lg overflow-hidden">
              <div className="bg-gray-50 px-4 py-3 border-b">
                <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
              </div>
              <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x">
                <div className="p-4 bg-blue-50">
                  <span className="font-bold text-blue-800 block mb-2">U.S. GAAP</span>
                  <p className="text-blue-700">{item.gaap}</p>
                </div>
                <div className="p-4 bg-green-50">
                  <span className="font-bold text-green-800 block mb-2">IFRS</span>
                  <p className="text-green-700">{item.ifrs}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-purple-50 border border-purple-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-purple-800 mb-2">Why It Matters</h3>
          <p className="text-purple-700">
            For accountants moving from Ghana (IFRS) to the U.S. (GAAP), understanding these differences is crucial 
            for financial reporting and analysis.
          </p>
        </div>
      </div>
    </div>
  );
}
