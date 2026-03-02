export default function FundamentalsPage() {
  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Accounting Fundamentals</h1>
        
        <div className="space-y-8">
          <section className="bg-white border rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Accounting Equation</h2>
            <p className="text-xl font-mono bg-gray-50 p-4 rounded-lg mb-4">
              Assets = Liabilities + Equity
            </p>
            <p className="text-gray-700">
              The foundation of double-entry accounting. Every transaction affects at least two accounts, 
              keeping the equation in balance.
            </p>
          </section>

          <section className="bg-white border rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Debits and Credits</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-2">Assets & Expenses</h3>
                <p>Increase with DEBIT</p>
                <p>Decrease with CREDIT</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">Liabilities, Equity & Revenue</h3>
                <p>Increase with CREDIT</p>
                <p>Decrease with DEBIT</p>
              </div>
            </div>
          </section>

          <section className="bg-white border rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Chart of Accounts</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><span className="font-medium">Assets</span> (1000-1999): Cash, AR, Inventory, Equipment</li>
              <li><span className="font-medium">Liabilities</span> (2000-2999): AP, Notes Payable, Accrued Expenses</li>
              <li><span className="font-medium">Equity</span> (3000-3999): Common Stock, Retained Earnings</li>
              <li><span className="font-medium">Revenue</span> (4000-4999): Service Revenue, Sales Revenue</li>
              <li><span className="font-medium">Expenses</span> (5000-5999): Rent, Salaries, Utilities, Depreciation</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
