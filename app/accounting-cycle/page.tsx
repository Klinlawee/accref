export default function AccountingCyclePage() {
  const steps = [
    {
      number: 1,
      title: "Analyze Transactions",
      description: "Review source documents (invoices, receipts, contracts) to determine impact on accounts"
    },
    {
      number: 2,
      title: "Journalize",
      description: "Record transactions in the general journal using debits and credits"
    },
    {
      number: 3,
      title: "Post to Ledger",
      description: "Transfer journal entries to individual accounts in the general ledger"
    },
    {
      number: 4,
      title: "Prepare Trial Balance",
      description: "List all accounts with their balances to verify debits = credits"
    },
    {
      number: 5,
      title: "Adjusting Entries",
      description: "Record accruals, deferrals, depreciation, and other adjustments"
    },
    {
      number: 6,
      title: "Adjusted Trial Balance",
      description: "Verify equality after adjusting entries"
    },
    {
      number: 7,
      title: "Financial Statements",
      description: "Prepare Income Statement, Statement of Equity, Balance Sheet, and Cash Flows"
    },
    {
      number: 8,
      title: "Closing Entries",
      description: "Close temporary accounts (revenue, expenses, dividends) to Retained Earnings"
    },
    {
      number: 9,
      title: "Post-Closing Trial Balance",
      description: "Verify only permanent accounts remain with equal debits and credits"
    }
  ];

  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">The Accounting Cycle</h1>
        <p className="text-gray-600 mb-8">
          The complete sequence of accounting procedures completed during each accounting period.
        </p>

        <div className="space-y-4">
          {steps.map((step) => (
            <div key={step.number} className="flex items-start gap-4 bg-white border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                {step.number}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-green-800 mb-2">Key Point</h3>
          <p className="text-green-700">
            The accounting cycle starts with transaction analysis and ends with the post-closing trial balance, 
            preparing the books for the next period.
          </p>
        </div>
      </div>
    </div>
  );
}
