
import React from 'react';
import { PiggyBank, TrendingUp, CreditCard, Bell, ShieldCheck, Gift } from 'lucide-react';

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md card-hover">
      <div className="w-12 h-12 bg-smh-mint/30 rounded-full flex items-center justify-center mb-4 text-smh-dark">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-smh-dark">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: <PiggyBank size={24} />,
      title: "Smart Savings",
      description: "Automatically save money with our intelligent algorithm that adapts to your spending habits."
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Investing Made Easy",
      description: "Start investing with as little as $1 and grow your wealth with curated investment portfolios."
    },
    {
      icon: <CreditCard size={24} />,
      title: "Expense Tracking",
      description: "Keep track of your expenses with automatic categorization and insightful spending reports."
    },
    {
      icon: <Bell size={24} />,
      title: "Smart Alerts",
      description: "Get personalized notifications about unusual expenses, bill payments, and saving opportunities."
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Bank-Level Security",
      description: "Your financial data is protected with the highest level of encryption and security measures."
    },
    {
      icon: <Gift size={24} />,
      title: "Rewards & Cashback",
      description: "Earn rewards and cashback on your everyday purchases with our partner merchants."
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24 px-6 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-smh-dark">
            Features You'll{" "}
            <span className="relative">
              Love
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5.5C20 2.5 75 2.5 99 5.5" stroke="#9896F1" strokeWidth="4" strokeLinecap="round"/>
              </svg>
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Designed to make financial management delightful and stress-free
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
