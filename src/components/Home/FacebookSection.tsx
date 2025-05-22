
import { Facebook } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const FacebookSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-title">Συνδεθείτε μαζί μας</h2>
          <p className="text-lg text-gray-600">
            Γίνετε μέλος της κοινότητάς μας στο Facebook για να ενημερώνεστε για προσφορές, 
            καινούρια προϊόντα και να μοιραστείτε την αγάπη σας για τα ποδήλατα.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <Card className="w-full md:w-1/2 card-shadow">
            <CardHeader>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-[#1877F2] p-2 rounded-full text-white">
                  <Facebook />
                </div>
                <CardTitle>Facebook Community</CardTitle>
              </div>
              <CardDescription className="text-base">
                Η ομάδα μας στο Facebook αποτελείται από λάτρεις του ποδηλάτου που μοιράζονται τις 
                εμπειρίες τους, κάνουν ερωτήσεις και βρίσκουν λύσεις.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-gray-100 p-4 rounded-lg">
                  <p className="font-semibold text-gray-800">Γιώργος Παπαδόπουλος</p>
                  <p className="text-gray-600 mt-1">
                    "Εξαιρετικό συνεργείο! Επισκεύασαν το ποδήλατό μου σε χρόνο ρεκόρ και με λογική τιμή. 
                    Το συνιστώ ανεπιφύλακτα!"
                  </p>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <p className="font-semibold text-gray-800">Μαρία Καραγιάννη</p>
                  <p className="text-gray-600 mt-1">
                    "Αγόρασα ανταλλακτικά για το ποδήλατό μου και έμεινα πολύ ικανοποιημένη. 
                    Άριστη εξυπηρέτηση και γνώσεις!"
                  </p>
                </div>
              </div>
              
              <div className="mt-6">
                <Button className="w-full bg-[#1877F2] hover:bg-[#166FE5] text-white" asChild>
                  <a 
                    href="https://www.facebook.com/groups/bikerepairshop" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Facebook className="mr-2 h-4 w-4" />
                    Ακολουθήστε μας στο Facebook
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <div className="w-full md:w-1/2 rounded-lg overflow-hidden shadow-md">
            <img 
              src="https://images.unsplash.com/photo-1504567961542-e24d9439a724?auto=format&fit=crop&q=80&w=600&h=400" 
              alt="Bike community" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacebookSection;
