
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section className="bg-gradient-to-b from-white to-greek-offWhite py-16 my-0 mx-0 px-0">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-title">Στοιχεία Επικοινωνίας</h2>
          <p className="text-lg text-gray-600">
            Επισκεφθείτε το κατάστημά μας ή επικοινωνήστε μαζί μας για περισσότερες πληροφορίες.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="text-center">
              <div className="bg-greek-blue p-3 rounded-full text-white w-12 h-12 flex items-center justify-center mx-auto mb-2">
                <MapPin className="h-6 w-6" />
              </div>
              <CardTitle className="text-lg">Διεύθυνση</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-gray-600">
                Παλαιά Ε.Ο. Κορίνθου Πατρών<br />
                Στόμιο Κορινθίας 136χλμ<br />
                TK.20009 - Στόμιο
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <div className="bg-greek-blue p-3 rounded-full text-white w-12 h-12 flex items-center justify-center mx-auto mb-2">
                <Phone className="h-6 w-6" />
              </div>
              <CardTitle className="text-lg">Τηλέφωνο</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <a href="tel:+302743051762" className="text-greek-blue hover:underline font-medium">
                +30 2743 051762
              </a>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <div className="bg-greek-blue p-3 rounded-full text-white w-12 h-12 flex items-center justify-center mx-auto mb-2">
                <Mail className="h-6 w-6" />
              </div>
              <CardTitle className="text-lg">Email</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <a href="mailto:panfanmanz@gmail.com" className="text-greek-blue hover:underline font-medium">
                panfanmanz@gmail.com
              </a>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <div className="bg-greek-blue p-3 rounded-full text-white w-12 h-12 flex items-center justify-center mx-auto mb-2">
                <Clock className="h-6 w-6" />
              </div>
              <CardTitle className="text-lg">Ωράριο</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-sm text-gray-600">
              <p>Δευτέρα - Παρασκευή:<br />9:00 - 18:00</p>
              <p>Σάββατο: 9:00 - 15:00</p>
              <p>Κυριακή: Κλειστά</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
