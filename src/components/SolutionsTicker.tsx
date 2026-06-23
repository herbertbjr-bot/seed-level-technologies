import React from 'react';
import {
  MessageSquare,
  FileSearch,
  CalendarClock,
  BarChart3,
  Headphones,
  Mail,
  ClipboardList,
  Receipt,
  Boxes,
  UserCheck,
  Languages,
  ShieldCheck,
  Users,
  Database,
  KanbanSquare,
  CreditCard,
  Calculator,
  Briefcase,
  ShoppingBag,
  CalendarCheck,
  LayoutDashboard,
  Megaphone,
  LifeBuoy,
  PieChart,
} from 'lucide-react';

type TickerItem = { label: string; icon: React.ReactNode };

const aiSolutions: TickerItem[] = [
  { label: 'AI Customer Support Chatbots', icon: <MessageSquare size={18} /> },
  { label: 'Smart Document Processing', icon: <FileSearch size={18} /> },
  { label: 'Automated Scheduling & Booking', icon: <CalendarClock size={18} /> },
  { label: 'Sales & Demand Forecasting', icon: <BarChart3 size={18} /> },
  { label: 'AI Call Answering & Routing', icon: <Headphones size={18} /> },
  { label: 'Personalized Email Campaigns', icon: <Mail size={18} /> },
  { label: 'Automated Inventory Tracking', icon: <ClipboardList size={18} /> },
  { label: 'Invoice & Expense Automation', icon: <Receipt size={18} /> },
  { label: 'Smart Supply Chain Insights', icon: <Boxes size={18} /> },
  { label: 'AI-Powered Lead Qualification', icon: <UserCheck size={18} /> },
  { label: 'Real-Time Translation Tools', icon: <Languages size={18} /> },
  { label: 'Fraud & Anomaly Detection', icon: <ShieldCheck size={18} /> },
];

const softwareSolutions: TickerItem[] = [
  { label: 'Custom CRM Systems', icon: <Users size={18} /> },
  { label: 'ERP Platforms', icon: <Database size={18} /> },
  { label: 'Project Management Tools', icon: <KanbanSquare size={18} /> },
  { label: 'Point-of-Sale Systems', icon: <CreditCard size={18} /> },
  { label: 'Accounting & Bookkeeping Software', icon: <Calculator size={18} /> },
  { label: 'HR & Payroll Platforms', icon: <Briefcase size={18} /> },
  { label: 'E-Commerce Platforms', icon: <ShoppingBag size={18} /> },
  { label: 'Booking & Reservation Systems', icon: <CalendarCheck size={18} /> },
  { label: 'Custom Internal Dashboards', icon: <LayoutDashboard size={18} /> },
  { label: 'Marketing Automation Tools', icon: <Megaphone size={18} /> },
  { label: 'Help Desk & Ticketing Software', icon: <LifeBuoy size={18} /> },
  { label: 'Data Visualization Tools', icon: <PieChart size={18} /> },
];

const TickerRow: React.FC<{ items: TickerItem[]; reverse?: boolean }> = ({ items, reverse }) => (
  <div className="ticker-viewport">
    <ul className={`ticker-track${reverse ? ' ticker-track-reverse' : ''}`}>
      {[...items, ...items].map((item, index) => (
        <li key={`${item.label}-${index}`} className="ticker-pill">
          <span className="ticker-icon">{item.icon}</span>
          {item.label}
        </li>
      ))}
    </ul>
  </div>
);

const SolutionsTicker: React.FC = () => {
  return (
    <section style={{ padding: '3.5rem 0', background: 'var(--bg-alt)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="container" style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <span className="eyebrow">What can we do for you</span>
        <h2 style={{ fontSize: '1.6rem', margin: '0.5rem 0 0' }}>Possibilities Worth Exploring</h2>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <TickerRow items={aiSolutions} />
        <TickerRow items={softwareSolutions} reverse />
      </div>
    </section>
  );
};

export default SolutionsTicker;
