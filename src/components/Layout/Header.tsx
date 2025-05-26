
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Facebook, Menu, X } from 'lucide-react';
import ViewModeToggle from './ViewModeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <>
      {/* New div row above the header */}
      <div className="bg-greek-lightBlue py-1 text-white text-center text-sm">
        <div className="container mx-auto px-4">
          <p className="text-base"> Διεύθυνση: Παλαιά Ε.Ο. Κορίνθου Πατρών Στόμιο Κορινθίας 136χλμ Παλαιάς Εθνικής .Οδού Αθηνών - Πατρων, Στόμιο 200 09   - 
  Τηλ. Επικοινωνίας: +302743051762</p>
        </div>
      </div>
      
      <header className="bg-white sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center">
              <img alt="ΠοδήλατοΤεχνικός" src="/lovable-uploads/74c492f1-4d36-42f7-a3e6-35de074185d7.png" className="h-20 w-auto rounded-md object-contain" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              <Link to="/" className="nav-link">Αρχική</Link>
              <Link to="/services" className="nav-link">Υπηρεσίες</Link>
              <Link to="/gallery" className="nav-link">Γκαλερί</Link>
              <Link to="/contact" className="nav-link">Επικοινωνία</Link>
              <a href="https://www.facebook.com/groups/bikerepairshop" target="_blank" rel="noopener noreferrer" className="ml-2 p-2 rounded-full bg-[#1877F2] text-white hover:bg-[#166FE5] transition-colors">
                <Facebook size={20} />
              </a>
              <ViewModeToggle />
            </nav>

            {/* Mobile Menu Button and View Toggle */}
            <div className="md:hidden flex items-center space-x-2">
              <ViewModeToggle />
              <button className="p-2 rounded-md text-gray-800 hover:bg-gray-100" onClick={toggleMenu} aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="container mx-auto px-4 py-3">
              <nav className="flex flex-col space-y-3">
                <Link to="/" className="nav-link" onClick={toggleMenu}>Αρχική</Link>
                <Link to="/services" className="nav-link" onClick={toggleMenu}>Υπηρεσίες</Link>
                <Link to="/gallery" className="nav-link" onClick={toggleMenu}>Γκαλερί</Link>
                <Link to="/contact" className="nav-link" onClick={toggleMenu}>Επικοινωνία</Link>
                <a href="https://www.facebook.com/groups/bikerepairshop" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 nav-link">
                  <Facebook size={18} />
                  <span>Facebook</span>
                </a>
              </nav>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
