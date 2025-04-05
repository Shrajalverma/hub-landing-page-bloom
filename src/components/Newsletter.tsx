
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
      // In a real app, you would send this to your backend
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }
  };

  return (
    <section className="py-16 px-6 bg-smh-purple/10">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg text-center">
          <div className="w-16 h-16 bg-smh-purple/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-smh-purple" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 15.5L4 10L4 20L20 20L20 10L12 15.5Z" fill="currentColor"/>
              <path d="M20 4H4C3.44772 4 3 4.44772 3 5V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V5C21 4.44772 20.5523 4 20 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 15.5L4 10L20 10L12 15.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h2 className="text-3xl font-bold mb-4 text-smh-dark">Get Financial Tips & Updates</h2>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Join our newsletter for exclusive financial tips, new feature announcements, and special offers.
          </p>
          
          {isSubmitted ? (
            <div className="flex items-center justify-center text-green-600 mb-4">
              <Check className="mr-2" size={20} />
              <span>Thank you for subscribing!</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Your email address"
                className="rounded-full py-6 px-5 border-smh-purple/30 focus:border-smh-purple"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button type="submit" className="btn-primary whitespace-nowrap">
                Subscribe
              </Button>
            </form>
          )}
          
          <p className="text-xs text-slate-500 mt-4">
            We respect your privacy and will never share your email with third parties.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
