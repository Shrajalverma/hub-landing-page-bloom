
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Freelance Designer",
      quote: "SmartMoneyHub helped me organize my freelance income and expenses. I've saved $5,000 in just 3 months!",
      avatar: "https://i.pravatar.cc/150?img=32",
      stars: 5
    },
    {
      name: "Michael Chen",
      role: "Small Business Owner",
      quote: "The budgeting tools are amazing. My business finances have never been more organized. Highly recommend!",
      avatar: "https://i.pravatar.cc/150?img=11",
      stars: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Manager",
      quote: "I love how cute the app is! Makes managing my money actually fun instead of stressful.",
      avatar: "https://i.pravatar.cc/150?img=5",
      stars: 4
    },
    {
      name: "David Kim",
      role: "Software Engineer",
      quote: "The investment options are perfect for beginners. I've learned so much about finance while growing my savings.",
      avatar: "https://i.pravatar.cc/150?img=8",
      stars: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-16 md:py-24 px-6 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-smh-dark">
            What Our{" "}
            <span className="relative">
              Users
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 80 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5.5C16 2.5 60 2.5 79 5.5" stroke="#FFD3B6" strokeWidth="4" strokeLinecap="round"/>
              </svg>
            </span>
            {" "}Say
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Join thousands of happy users who've transformed their financial lives
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 relative">
            <div className="absolute top-6 right-6 flex">
              {[...Array(testimonials[currentIndex].stars)].map((_, i) => (
                <Star key={i} size={20} fill="#FFD700" color="#FFD700" />
              ))}
            </div>
            
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/4">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-smh-peach">
                  <img 
                    src={testimonials[currentIndex].avatar} 
                    alt={testimonials[currentIndex].name} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="md:w-3/4">
                <blockquote className="text-xl md:text-2xl text-slate-700 italic mb-6">
                  "{testimonials[currentIndex].quote}"
                </blockquote>
                <div>
                  <h4 className="text-lg font-bold text-smh-dark">{testimonials[currentIndex].name}</h4>
                  <p className="text-slate-600">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-8 gap-4">
              <button 
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full bg-smh-mint flex items-center justify-center text-smh-dark hover:bg-smh-mint/80 transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-smh-mint flex items-center justify-center text-smh-dark hover:bg-smh-mint/80 transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
          
          <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full bg-smh-peach/30 rounded-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
