
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-8 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <a href="/" className="text-2xl font-nunito font-extrabold text-smh-dark inline-block mb-4">
              <span className="text-smh-purple">Smart</span>
              <span className="text-smh-blue">Money</span>
              <span className="text-smh-mint">Hub</span>
            </a>
            <p className="text-slate-600 mb-4">
              Making financial management adorable and accessible for everyone.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-10 h-10 rounded-full bg-smh-purple/10 flex items-center justify-center text-smh-purple hover:bg-smh-purple hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-smh-purple/10 flex items-center justify-center text-smh-purple hover:bg-smh-purple hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-smh-purple/10 flex items-center justify-center text-smh-purple hover:bg-smh-purple hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-smh-purple/10 flex items-center justify-center text-smh-purple hover:bg-smh-purple hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-smh-dark">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-600 hover:text-smh-purple transition-colors">About Us</a></li>
              <li><a href="#" className="text-slate-600 hover:text-smh-purple transition-colors">Careers</a></li>
              <li><a href="#" className="text-slate-600 hover:text-smh-purple transition-colors">Press</a></li>
              <li><a href="#" className="text-slate-600 hover:text-smh-purple transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-smh-dark">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-600 hover:text-smh-purple transition-colors">Help Center</a></li>
              <li><a href="#" className="text-slate-600 hover:text-smh-purple transition-colors">Financial Guides</a></li>
              <li><a href="#" className="text-slate-600 hover:text-smh-purple transition-colors">Budgeting Tips</a></li>
              <li><a href="#" className="text-slate-600 hover:text-smh-purple transition-colors">Investment 101</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-smh-dark">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-600 hover:text-smh-purple transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-slate-600 hover:text-smh-purple transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-600 hover:text-smh-purple transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-slate-600 hover:text-smh-purple transition-colors">Security</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} SmartMoneyHub. All rights reserved.
          </p>
          <div className="flex items-center gap-x-4">
            <a href="#" className="text-slate-500 hover:text-smh-purple text-sm">
              Privacy
            </a>
            <span className="text-slate-300">|</span>
            <a href="#" className="text-slate-500 hover:text-smh-purple text-sm">
              Terms
            </a>
            <span className="text-slate-300">|</span>
            <a href="#" className="text-slate-500 hover:text-smh-purple text-sm">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
