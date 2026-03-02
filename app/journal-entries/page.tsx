import journalEntries from '@/data/journalEntries.json';

export default function JournalEntriesPage() {
  // Group entries by category
  const groupedEntries = journalEntries.reduce((acc, entry) => {
    const category = entry.category || 'Other';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(entry);
    return acc;
  }, {} as Record<string, typeof journalEntries>);

  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Journal Entry Library</h1>
        <p className="text-gray-600 mb-8">
          Comprehensive collection of journal entries with GAAP explanations and examples.
        </p>

        {Object.entries(groupedEntries).map(([category, entries]) => (
          <div key={category} className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 pb-2 border-b">
              {category}
            </h2>
            <div className="space-y-6">
              {entries.map((entry) => (
                <div 
                  key={entry.id} 
                  id={entry.id}
                  className="bg-white border rounded-lg p-6 hover:shadow-md transition-shadow"
                >
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {entry.title}
                  </h3>
                  
                  <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm mb-4">
                    <pre className="whitespace-pre-wrap">{entry.content}</pre>
                  </div>
                  
                  <div className="space-y-3">
                    {entry.explanation && (
                      <div>
                        <span className="font-medium text-gray-700">Explanation: </span>
                        <span className="text-gray-600">{entry.explanation}</span>
                      </div>
                    )}
                    
                    {entry.gaap_note && (
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <span className="font-medium text-blue-800">GAAP Note: </span>
                        <span className="text-blue-700">{entry.gaap_note}</span>
                      </div>
                    )}
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
