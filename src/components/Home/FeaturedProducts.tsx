
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Ελαστικό Continental Grand Prix 5000',
    price: 45.99,
    imageUrl: 'https://images.unsplash.com/photo-1586509288058-da9e0b57dd90?auto=format&fit=crop&q=80&w=500&h=350'
  },
  {
    id: 2,
    name: 'Κράνος Giro Syntax MIPS',
    price: 89.99,
    imageUrl: 'https://images.unsplash.com/photo-1557803596-246cb20acdea?auto=format&fit=crop&q=80&w=500&h=350'
  },
  {
    id: 3,
    name: 'Τροχός Mavic Cosmic Elite',
    price: 249.99,
    imageUrl: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80&w=500&h=350'
  },
  {
    id: 4,
    name: 'Αλυσίδα Shimano HG-X11',
    price: 29.99,
    imageUrl: 'https://images.unsplash.com/photo-1517522518634-06eddfc473e1?auto=format&fit=crop&q=80&w=500&h=350'
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-title">Προτεινόμενα Προϊόντα</h2>
          <p className="text-lg text-gray-600">
            Ανακαλύψτε την επιλεγμένη συλλογή μας με ποιοτικά εξαρτήματα και αξεσουάρ ποδηλάτων.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden card-shadow">
              <div className="aspect-[3/2] overflow-hidden">
                <img 
                  src={product.imageUrl} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg">{product.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-bold text-xl text-greek-blue">{product.price.toFixed(2)} €</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-greek-blue hover:bg-greek-darkBlue">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Προσθήκη
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="btn-primary" asChild>
            <Link to="/products">Όλα τα Προϊόντα</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
