
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const services = [
  {
    title: 'Γενικό Service',
    description: 'Πλήρης έλεγχος και συντήρηση του ποδηλάτου σας για άψογη λειτουργία και ασφάλεια.',
    icon: '🔧'
  },
  {
    title: 'Επισκευές',
    description: 'Επισκευή οποιασδήποτε βλάβης του ποδηλάτου σας από έμπειρους τεχνικούς.',
    icon: '🛠️'
  },
  {
    title: 'Αναβαθμίσεις',
    description: 'Αναβαθμίστε το ποδήλατό σας με σύγχρονα εξαρτήματα για καλύτερη απόδοση.',
    icon: '⚙️'
  },
  {
    title: 'Συμβουλές',
    description: 'Εξειδικευμένες συμβουλές για την καλύτερη επιλογή εξαρτημάτων και ποδηλάτων.',
    icon: '💡'
  }
];

const Services = () => {
  return (
    <section className="py-16 bg-greek-offWhite">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-title">Οι Υπηρεσίες Μας</h2>
          <p className="text-lg text-gray-600">
            Προσφέρουμε ολοκληρωμένες υπηρεσίες επισκευής και συντήρησης για όλους τους τύπους ποδηλάτων.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {services.map((service, index) => (
            <Card key={index} className="card-shadow">
              <CardHeader>
                <div className="text-4xl mb-4">{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="btn-primary" asChild>
            <Link to="/services">Όλες οι Υπηρεσίες</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
