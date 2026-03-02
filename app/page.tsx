import Link from 'next/link';
import SearchBar from '@/components/SearchBar';
import { 
  BookOpenIcon, 
  CurrencyDollarIcon,
  DocumentTextIcon,
  ChartBarIcon,
  BriefcaseIcon,
  ArrowRightIcon 
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Journal Entries',
    description: 'Comprehensive library of journal entries with GAAP explanations',
    icon: CurrencyDollarIcon,
    href: '/journal-entries',
    color: 'bg-green-500'
  },
  {
    name: 'U.S. GAAP',
    description: 'ASC standards explained: Revenue, Leases, Inventory, and more',
    icon: DocumentTextIcon,
    href: '/gaap',
    color: 'bg-blue-500'
  },
  {
    name: 'Financial Ratios',
    description: 'Liquidity, profitability, and solvency ratios with benchmarks',
    icon: ChartBarIcon,
    href: '/ratios',
    color: 'bg-purple-500'
  },
  {
    name: 'GAAP vs IFRS',
    description: 'Key differences between U.S. GAAP and IFRS standards',
    icon: BookOpenIcon,
    href: '/gaap-vs-ifrs',
    color: 'bg-red-500'
  },
  {
    name: 'Interview Prep',
    description: 'Common questions and scenarios for U.S. accounting roles',
    icon: BriefcaseIcon,
    href: '/interview-prep',
    color: 'bg-orange-500'
  },
  {
    name: 'Templates',
    description: 'Downloadable Excel templates for accounting tasks',
    icon: DocumentTextIcon,
    href: '/templates',
    color: 'bg-indigo-500'
  }
];

export default function Home() {
  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            U.S. GAAP Financial Accounting Reference
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Your comprehensive guide to U.S. accounting standards, journal entries, and financial analysis
          </p>
          <div className="max-w-2xl mx-auto">
            <SearchBar />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {features.map((feature) => (
            <Link
              key={feature.name}
              href={feature.href}
              className="block group"
            >
              <div className="bg-white border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className={`${feature.color} p-3 rounded-lg`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {feature.name}
                      </h3>
                      <ArrowRightIcon className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
                    </div>
                    <p className="text-gray-600 mt-1 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Built for U.S. Accounting Success
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Whether you're studying for interviews, preparing for a U.S. accounting role, 
            or need a quick GAAP reference, ACCRef provides clear, accurate information.
          </p>
          <div className="flex justify-center space-x-4">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">ASC 606</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">ASC 842</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">FIFO/LIFO</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Allowance Method</span>
          </div>
        </div>
      </div>
    </div>
  );
}
