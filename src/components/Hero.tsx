
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-24 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-smh-dark">
              <span className="relative">
                Adorable
                <svg className="absolute -bottom-2 w-full left-0" viewBox="0 0 200 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 10C30 4 150 4 196 10" stroke="#FFAAA5" strokeWidth="8" strokeLinecap="round"/>
                </svg>
              </span>{" "}
              way to manage your finances
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-700 max-w-lg">
              Take control of your money with our fun and easy-to-use financial tools. Save smarter, spend wiser, and grow your wealth!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary text-lg py-6 px-8">
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-smh-purple text-smh-purple hover:bg-smh-purple/10 text-lg py-6 px-8">
                See How It Works
              </Button>
            </div>
            <div className="mt-8 flex items-center">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-smh-mint flex items-center justify-center font-medium">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <p className="ml-4 text-sm text-slate-700">
                <span className="font-bold">2,000+</span> happy users joined this month
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute -top-12 -left-12 w-40 h-40 bg-smh-mint rounded-full opacity-50 blur-3xl"></div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-smh-pink rounded-full opacity-50 blur-3xl"></div>
              <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden border-4 border-white p-2">
                <div className="w-full h-full rounded-2xl overflow-hidden animate-float">
                  <div className="w-[300px] md:w-[450px] aspect-square bg-gradient-to-br from-smh-mint via-smh-blue to-smh-purple rounded-2xl flex flex-col items-center justify-center p-8 text-white">
                    <svg viewBox="0 0 24 24" fill="none" className="w-20 h-20 mb-4" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1.5"/>
                      <path d="M12 6V12L16 14" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                    <h3 className="text-2xl font-bold mb-2">SmartMoneyHub</h3>
                    <p className="text-center">Your friendly finance companion</p>
                    <div className="mt-8 flex flex-col items-center">
                      <div className="bg-white/20 w-full py-2 px-4 rounded-lg mb-3">
                        <div className="flex justify-between">
                          <span className="text-white/80">Savings</span>
                          <span className="font-bold">$12,580</span>
                        </div>
                      </div>
                      <div className="flex w-full gap-2">
                        <div className="bg-white/20 flex-1 p-2 rounded-lg flex flex-col items-center">
                          <span className="text-xs text-white/80">Income</span>
                          <span className="font-bold">↑ 12%</span>
                        </div>
                        <div className="bg-white/20 flex-1 p-2 rounded-lg flex flex-col items-center">
                          <span className="text-xs text-white/80">Expenses</span>
                          <span className="font-bold">↓ 8%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
