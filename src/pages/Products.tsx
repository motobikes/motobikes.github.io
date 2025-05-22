
import { useState } from 'react';
import Layout from '@/components/Layout/Layout';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ShoppingCart } from 'lucide-react';

// Sample product data
const allProducts = [
  {
    id: 1,
    name: 'Ελαστικό Continental Grand Prix 5000',
    category: 'tyres',
    price: 45.99,
    imageUrl: 'https://images.unsplash.com/photo-1586509288058-da9e0b57dd90?auto=format&fit=crop&q=80&w=500&h=350',
    description: 'Υψηλής απόδοσης ελαστικό για δρόμο με χαμηλή αντίσταση κύλισης και εξαιρετική πρόσφυση.'
  },
  {
    id: 2,
    name: 'Κράνος Giro Syntax MIPS',
    category: 'accessories',
    price: 89.99,
    imageUrl: 'https://images.unsplash.com/photo-1557803596-246cb20acdea?auto=format&fit=crop&q=80&w=500&h=350',
    description: 'Ελαφρύ κράνος με τεχνολογία MIPS για επιπλέον προστασία από περιστροφικές κρούσεις.'
  },
  {
    id: 3,
    name: 'Τροχός Mavic Cosmic Elite',
    category: 'wheels',
    price: 249.99,
    imageUrl: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80&w=500&h=350',
    description: 'Αεροδυναμικός τροχός από αλουμίνιο για αγωνιστική χρήση και καθημερινή προπόνηση.'
  },
  {
    id: 4,
    name: 'Αλυσίδα Shimano HG-X11',
    category: 'components',
    price: 29.99,
    imageUrl: 'https://images.unsplash.com/photo-1517522518634-06eddfc473e1?auto=format&fit=crop&q=80&w=500&h=350',
    description: '11-ταχυτήτων αλυσίδα με επικάλυψη SIL-TEC για ομαλή λειτουργία και αντοχή.'
  },
  {
    id: 5,
    name: 'Παλουκόσελο Specialized Power',
    category: 'components',
    price: 119.99,
    imageUrl: 'https://images.unsplash.com/photo-1471506480208-91b3a4cc78be?auto=format&fit=crop&q=80&w=500&h=350',
    description: 'Ανατομικό σχεδιασμένο σελάκι για άνεση σε μεγάλες διαδρομές και σωστή θέση στο ποδήλατο.'
  },
  {
    id: 6,
    name: 'Φώτα ποδηλάτου Lezyne 1000XL',
    category: 'accessories',
    price: 69.99,
    imageUrl: 'https://images.unsplash.com/photo-1515965057997-4d5f93986adb?auto=format&fit=crop&q=80&w=500&h=350',
    description: 'Ισχυρό εμπρόσθιο φως 1000 lumen με πολλαπλές λειτουργίες και μεγάλη διάρκεια μπαταρίας.'
  },
  {
    id: 7,
    name: 'Δισκόφρενα Shimano XT',
    category: 'components',
    price: 159.99,
    imageUrl: 'https://images.unsplash.com/photo-1598983062496-d307ec6e55b7?auto=format&fit=crop&q=80&w=500&h=350',
    description: 'Υδραυλικά δισκόφρενα υψηλής απόδοσης για ασφαλές φρενάρισμα σε όλες τις συνθήκες.'
  },
  {
    id: 8,
    name: 'Τιμόνι Carbon Ritchey WCS',
    category: 'components',
    price: 189.99,
    imageUrl: 'https://images.unsplash.com/photo-1633909149204-761e925c1e4a?auto=format&fit=crop&q=80&w=500&h=350',
    description: 'Ελαφρύ τιμόνι από ανθρακόινα για μειωμένο βάρος και αυξημένη άνεση.'
  },
  {
    id: 9,
    name: 'Ελαστικό Maxxis Minion DHF',
    category: 'tyres',
    price: 54.99,
    imageUrl: 'https://images.unsplash.com/photo-1667318895126-7579c64a46dd?auto=format&fit=crop&q=80&w=500&h=350',
    description: 'Ελαστικό βουνού με εξαιρετική πρόσφυση σε όλες τις συνθήκες εδάφους.'
  },
  {
    id: 10,
    name: 'Κασέτα Shimano Ultegra',
    category: 'components',
    price: 79.99,
    imageUrl: 'https://images.unsplash.com/photo-1508855926276-6ec93bf91403?auto=format&fit=crop&q=80&w=500&h=350',
    description: '11-ταχυτήτων κασέτα υψηλής ποιότητας για ομαλή αλλαγή ταχυτήτων.'
  },
  {
    id: 11,
    name: 'Κλειδαριά Kryptonite New York',
    category: 'accessories',
    price: 99.99,
    imageUrl: 'https://images.unsplash.com/photo-1559348349-86d1b252cb29?auto=format&fit=crop&q=80&w=500&h=350',
    description: 'Ασφαλής κλειδαριά U-lock με υψηλή αντίσταση σε κοπή και παραβίαση.'
  },
  {
    id: 12,
    name: 'Τσάντα πλαισίου Ortlieb',
    category: 'accessories',
    price: 64.99,
    imageUrl: 'https://images.unsplash.com/photo-1567267927515-04c58ae5d9e0?auto=format&fit=crop&q=80&w=500&h=350',
    description: 'Αδιάβροχη τσάντα πλαισίου για μεταφορά αντικειμένων με ασφάλεια.'
  }
];

const categories = [
  { value: 'all', label: 'Όλα τα προϊόντα' },
  { value: 'components', label: 'Εξαρτήματα' },
  { value: 'accessories', label: 'Αξεσουάρ' },
  { value: 'tyres', label: 'Ελαστικά' },
  { value: 'wheels', label: 'Τροχοί' },
];

const sortOptions = [
  { value: 'priceAsc', label: 'Τιμή (Αύξουσα)' },
  { value: 'priceDesc', label: 'Τιμή (Φθίνουσα)' },
  { value: 'nameAsc', label: 'Όνομα (Α-Ω)' },
  { value: 'nameDesc', label: 'Όνομα (Ω-Α)' },
];

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('nameAsc');
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filter products based on category and search term
  const filteredProducts = allProducts.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  
  // Sort products based on selected sort option
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch(sortBy) {
      case 'priceAsc':
        return a.price - b.price;
      case 'priceDesc':
        return b.price - a.price;
      case 'nameAsc':
        return a.name.localeCompare(b.name);
      case 'nameDesc':
        return b.name.localeCompare(a.name);
      default:
        return 0;
    }
  });
  
  return (
    <Layout>
      <section className="py-12 md:py-20 bg-gradient-to-b from-greek-blue to-greek-darkBlue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Τα Προϊόντα μας</h1>
            <p className="text-lg md:text-xl text-gray-200">
              Ανακαλύψτε την ποιοτική συλλογή μας με εξαρτήματα και αξεσουάρ ποδηλάτων.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <div className="w-full md:w-64">
              <div className="bg-white p-6 rounded-lg shadow-sm sticky top-24">
                <h2 className="font-bold text-xl mb-6">Φίλτρα</h2>
                
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="category">Κατηγορία</Label>
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger id="category">
                        <SelectValue placeholder="Επιλέξτε κατηγορία" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map(category => (
                          <SelectItem key={category.value} value={category.value}>
                            {category.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="sort">Ταξινόμηση</Label>
                    <Select value={sortBy} onValueChange={setSortBy}>
                      <SelectTrigger id="sort">
                        <SelectValue placeholder="Επιλέξτε ταξινόμηση" />
                      </SelectTrigger>
                      <SelectContent>
                        {sortOptions.map(option => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="search">Αναζήτηση</Label>
                    <Input 
                      id="search" 
                      placeholder="Αναζήτηση προϊόντων" 
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex-1">
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">
                  {selectedCategory === 'all' ? 'Όλα τα προϊόντα' : categories.find(c => c.value === selectedCategory)?.label}
                </h2>
                <p className="text-gray-600">Εμφάνιση {sortedProducts.length} προϊόντων</p>
              </div>
              
              {sortedProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sortedProducts.map(product => (
                    <Card key={product.id} className="overflow-hidden card-shadow">
                      <div className="aspect-[3/2] overflow-hidden">
                        <img 
                          src={product.imageUrl} 
                          alt={product.name} 
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle className="text-lg line-clamp-2">{product.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 mb-4 line-clamp-3">{product.description}</p>
                        <p className="font-bold text-xl text-greek-blue">{product.price.toFixed(2)} €</p>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full bg-greek-blue hover:bg-greek-darkBlue">
                          <ShoppingCart className="mr-2 h-4 w-4" />
                          Προσθήκη στο καλάθι
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-gray-50 rounded-lg">
                  <p className="text-gray-600 text-lg">Δεν βρέθηκαν προϊόντα που να ταιριάζουν με τα κριτήρια αναζήτησής σας.</p>
                  <Button 
                    variant="outline" 
                    className="mt-4"
                    onClick={() => {
                      setSelectedCategory('all');
                      setSearchTerm('');
                    }}
                  >
                    Επαναφορά φίλτρων
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductsPage;
