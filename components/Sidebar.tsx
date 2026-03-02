'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  HomeIcon, 
  BookOpenIcon, 
  CurrencyDollarIcon,
  DocumentTextIcon,
  ChartBarIcon,
  BriefcaseIcon 
} from '@heroicons/react/24/outline';

const navItems = [
  { name: 'Home', href: '/', icon: HomeIcon },
  { name: 'Fundamentals', href: '/fundamentals', icon: BookOpenIcon },
  { name: 'Accounting Cycle', href: '/accounting-cycle', icon: BookOpenIcon },
  { name: 'Journal Entries', href: '/journal-entries', icon: CurrencyDollarIcon },
  { name: 'Financial Statements', href: '/financial-statements', icon: DocumentTextIcon },
  { name: 'U.S. GAAP', href: '/gaap', icon: DocumentTextIcon },
  { name: 'GAAP vs IFRS', href: '/gaap-vs-ifrs', icon: DocumentTextIcon },
  { name: 'Ratios', href: '/ratios', icon: ChartBarIcon },
  { name: 'Templates', href: '/templates', icon: DocumentTextIcon },
  { name: 'Interview Prep', href: '/interview-prep', icon: BriefcaseIcon },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-gray-50 border-r h-screen sticky top-0 overflow-y-auto">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-blue-600 mb-6">ACCREf</h1>
        <p className="text-xs text-gray-500 mb-4">U.S. GAAP Reference</p>
        <nav className="space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href || pathname === `/accref${item.href}`;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center space-x-2 p-2 rounded-lg transition-colors ${
                  isActive 
                    ? 'bg-blue-100 text-blue-600' 
                    : 'hover:bg-gray-200 text-gray-700'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="text-sm">{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
