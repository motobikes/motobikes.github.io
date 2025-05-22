
import { useState } from 'react';
import Layout from '@/components/Layout/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const serviceCategories = [
  {
    id: 'regular',
    name: 'Τακτικές Υπηρεσίες',
    services: [
      {
        title: 'Βασικό Service',
        description: 'Έλεγχος και ρύθμιση φρένων, ταχυτήτων, λίπανση αλυσίδας και έλεγχος ασφάλειας.',
        price: '30€',
        duration: '60 λεπτά'
      },
      {
        title: 'Πλήρες Service',
        description: 'Αναλυτικός έλεγχος όλων των συστημάτων, πλύσιμο, λίπανση και ρύθμιση του ποδηλάτου.',
        price: '50€',
        duration: '120 λεπτά'
      },
      {
        title: 'Τοποθέτηση Ανταλλακτικών',
        description: 'Τοποθέτηση νέων εξαρτημάτων που έχει προμηθευτεί ο πελάτης ή από το κατάστημά μας.',
        price: 'Από 10€',
        duration: 'Ποικίλλει'
      }
    ]
  },
  {
    id: 'repairs',
    name: 'Επισκευές',
    services: [
      {
        title: 'Επισκευή Τροχού',
        description: 'Αλλαγή ακτίνων, κεντράρισμα τροχού, επισκευή ζάντας.',
        price: 'Από 15€',
        duration: '30-60 λεπτά'
      },
      {
        title: 'Επισκευή Φρένων',
        description: 'Αντικατάσταση τακακιών, ρύθμιση συστήματος, αλλαγή ντίζας.',
        price: 'Από 20€',
        duration: '30-45 λεπτά'
      },
      {
        title: 'Επισκευή Ταχυτήτων',
        description: 'Ρύθμιση εκτροχιαστών, αλλαγή ντίζας, επισκευή χειριστηρίων.',
        price: 'Από 25€',
        duration: '45-60 λεπτά'
      }
    ]
  },
  {
    id: 'upgrades',
    name: 'Αναβαθμίσεις',
    services: [
      {
        title: 'Αναβάθμιση Συστήματος Μετάδοσης',
        description: 'Αλλαγή σε καλύτερο σύστημα ταχυτήτων, αλυσίδα, κασέτα και δισκοβραχίονα.',
        price: 'Από 100€',
        duration: '120-180 λεπτά'
      },
      {
        title: 'Αναβάθμιση Τροχών',
        description: 'Τοποθέτηση νέων, ελαφρύτερων τροχών για καλύτερη απόδοση και λιγότερο βάρος.',
        price: 'Από 50€',
        duration: '60 λεπτά'
      },
      {
        title: 'Αναβάθμιση Φρένων',
        description: 'Μετατροπή σε υδραυλικά δισκόφρενα ή καλύτερο σύστημα φρένων.',
        price: 'Από 80€',
        duration: '90-120 λεπτά'
      }
    ]
  },
  {
    id: 'custom',
    name: 'Ειδικές Υπηρεσίες',
    services: [
      {
        title: 'Συναρμολόγηση Νέου Ποδηλάτου',
        description: 'Πλήρης συναρμολόγηση από μεμονωμένα εξαρτήματα και ρύθμιση για βέλτιστη απόδοση.',
        price: 'Από 120€',
        duration: '3-4 ώρες'
      },
      {
        title: 'Βιομετρική Μέτρηση',
        description: 'Επαγγελματική μέτρηση για εύρεση της ιδανικής θέσης στο ποδήλατο.',
        price: '80€',
        duration: '60-90 λεπτά'
      },
      {
        title: 'Ηλεκτρονική Διάγνωση E-Bike',
        description: 'Έλεγχος και διάγνωση προβλημάτων σε ηλεκτρικά ποδήλατα.',
        price: '40€',
        duration: '60 λεπτά'
      }
    ]
  }
];

const ServicesPage = () => {
  const [activeTab, setActiveTab] = useState('regular');
  
  return (
    <Layout>
      <section className="py-12 md:py-20 bg-gradient-to-b from-greek-blue to-greek-darkBlue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Οι Υπηρεσίες μας</h1>
            <p className="text-lg md:text-xl text-gray-200">
              Προσφέρουμε ένα πλήρες φάσμα υπηρεσιών επισκευής και συντήρησης ποδηλάτων από έμπειρους τεχνικούς.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="regular" onValueChange={setActiveTab} value={activeTab}>
            <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8">
              {serviceCategories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="data-[state=active]:bg-greek-blue data-[state=active]:text-white"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {serviceCategories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.services.map((service, index) => (
                    <Card key={index} className="card-shadow">
                      <CardHeader>
                        <CardTitle>{service.title}</CardTitle>
                        <div className="flex justify-between items-center mt-2">
                          <span className="font-bold text-greek-blue text-xl">{service.price}</span>
                          <span className="text-sm text-gray-500">{service.duration}</span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base">{service.description}</CardDescription>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
      
      <section className="py-12 bg-greek-offWhite">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title text-center mb-8">Συχνές Ερωτήσεις</h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg mb-2">Πόσο καιρό διαρκεί ένα τυπικό service;</h3>
                <p className="text-gray-700">Το βασικό service διαρκεί περίπου 60 λεπτά, ενώ το πλήρες service μπορεί να διαρκέσει έως και 2 ώρες, ανάλογα με την κατάσταση του ποδηλάτου.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg mb-2">Χρειάζεται να κλείσω ραντεβού;</h3>
                <p className="text-gray-700">Συνιστούμε να κλείσετε ραντεβού για να εξασφαλίσετε άμεση εξυπηρέτηση. Ωστόσο, δεχόμαστε και έκτακτα περιστατικά εφόσον υπάρχει διαθεσιμότητα.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg mb-2">Παρέχετε εγγύηση για τις επισκευές;</h3>
                <p className="text-gray-700">Ναι, όλες οι επισκευές και τα ανταλλακτικά καλύπτονται από εγγύηση. Η διάρκεια της εγγύησης εξαρτάται από το είδος της επισκευής και τα ανταλλακτικά που χρησιμοποιήθηκαν.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg mb-2">Μπορώ να περιμένω όσο επισκευάζετε το ποδήλατό μου;</h3>
                <p className="text-gray-700">Βεβαίως! Διαθέτουμε άνετο χώρο αναμονής με καφέ και WiFi. Για μικρότερες επισκευές μπορείτε να περιμένετε, ενώ για πιο χρονοβόρες εργασίες θα σας ενημερώσουμε για τον εκτιμώμενο χρόνο ολοκλήρωσης.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesPage;
