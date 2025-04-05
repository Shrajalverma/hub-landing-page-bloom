
import { Button } from "@/components/ui/button";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Create Your Account",
      description: "Sign up for free in less than 2 minutes with just your email",
      color: "bg-smh-mint"
    },
    {
      number: "02",
      title: "Connect Your Accounts",
      description: "Securely link your bank accounts, credit cards, and other financial accounts",
      color: "bg-smh-blue"
    },
    {
      number: "03",
      title: "Set Your Goals",
      description: "Define your financial goals like saving for a vacation or paying off debt",
      color: "bg-smh-purple"
    },
    {
      number: "04",
      title: "Enjoy Financial Freedom",
      description: "Watch your money grow as we help you save, invest, and spend wisely",
      color: "bg-smh-pink"
    }
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-smh-dark">
            How{" "}
            <span className="relative">
              SmartMoneyHub
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 220 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5.5C44 2.5 165 2.5 219 5.5" stroke="#A8E6CF" strokeWidth="4" strokeLinecap="round"/>
              </svg>
            </span>
            {" "}Works
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Get started in minutes and take control of your finances
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-md relative card-hover">
              <div className={`absolute -top-4 -right-4 w-12 h-12 ${step.color} rounded-full flex items-center justify-center text-white font-bold`}>
                {step.number}
              </div>
              <h3 className="text-xl font-bold mb-2 text-smh-dark pt-4">{step.title}</h3>
              <p className="text-slate-600">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button className="btn-primary text-lg px-8 py-6">Get Started Now</Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
