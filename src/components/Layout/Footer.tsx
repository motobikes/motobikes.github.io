
import { Link } from 'react-router-dom';
import { Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-greek-darkBlue text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ΠΑΝΟΣ ΠΑΠΑΡΗΣ</h3>
            <p className="mb-4">Επαγγελματικές υπηρεσίες επισκευής ποδηλάτων και ποιοτικά ανταλλακτικά.</p>
            <a 
              href="https://www.facebook.com/automoto00" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 hover:text-greek-gold transition-colors"
            >
              <Facebook size={20} />
              <span>Ακολουθήστε μας στο Facebook</span>
            </a>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Σύνδεσμοι</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-greek-gold transition-colors">Αρχική</Link></li>
              <li><Link to="/services" className="hover:text-greek-gold transition-colors">Υπηρεσίες</Link></li>
              <li><Link to="/products" className="hover:text-greek-gold transition-colors">Προϊόντα</Link></li>
              <li><Link to="/gallery" className="hover:text-greek-gold transition-colors">Γκαλερί</Link></li>
              <li><Link to="/contact" className="hover:text-greek-gold transition-colors">Επικοινωνία</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Επικοινωνία</h3>
            <address className="not-italic">
              <p>Παλαιά Ε.Ο. Κορίνθου Πατρών Στόμιο Κορινθίας 136χλμ Παλαιάς Εθνικής .Οδού Αθηνών - Πατρων</p>
              <p>TK.20009 - Στόμιο</p>
              <p>Τηλέφωνο: <a href="tel:+302743051762" className="hover:text-greek-gold transition-colors">+302743051762</a></p>
              <p>Email: <a href="mailto:panfanmanz@gmail.com" className="hover:text-greek-gold transition-colors">panfanmanz@gmail.com</a></p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p>&copy; {new Date().getFullYear()} ArchITechT. Με επιφύλαξη παντός δικαιώματος.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
