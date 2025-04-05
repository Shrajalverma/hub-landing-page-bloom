
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white/80 backdrop-blur-md py-4 px-6 md:px-10 fixed w-full top-0 z-50 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-nunito font-extrabold text-smh-dark">
            <span className="text-smh-purple">Smart</span>
            <span className="text-smh-blue">Money</span>
            <span className="text-smh-mint">Hub</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-smh-dark hover:text-smh-purple transition-colors font-medium">Features</a>
          <a href="#how-it-works" className="text-smh-dark hover:text-smh-purple transition-colors font-medium">How It Works</a>
          <a href="#testimonials" className="text-smh-dark hover:text-smh-purple transition-colors font-medium">Testimonials</a>
          <a href="#pricing" className="text-smh-dark hover:text-smh-purple transition-colors font-medium">Pricing</a>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" className="text-smh-dark font-medium" asChild>
            <Link to="/login">Log In</Link>
          </Button>
          <Button className="btn-primary" asChild>
            <Link to="/signup">Sign Up Free</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-smh-dark p-2">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md py-4 px-6 flex flex-col space-y-4">
          <a href="#features" className="text-smh-dark hover:text-smh-purple py-2 transition-colors font-medium" onClick={toggleMenu}>Features</a>
          <a href="#how-it-works" className="text-smh-dark hover:text-smh-purple py-2 transition-colors font-medium" onClick={toggleMenu}>How It Works</a>
          <a href="#testimonials" className="text-smh-dark hover:text-smh-purple py-2 transition-colors font-medium" onClick={toggleMenu}>Testimonials</a>
          <a href="#pricing" className="text-smh-dark hover:text-smh-purple py-2 transition-colors font-medium" onClick={toggleMenu}>Pricing</a>
          <div className="flex flex-col space-y-2 pt-2">
            <Button variant="ghost" className="text-smh-dark w-full font-medium" asChild>
              <Link to="/login">Log In</Link>
            </Button>
            <Button className="btn-primary w-full" asChild>
              <Link to="/signup">Sign Up Free</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
