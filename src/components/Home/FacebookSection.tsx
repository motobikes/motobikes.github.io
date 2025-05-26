
import { Facebook } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

const FacebookSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section className="bg-white px-0 my-0 py-16 mx-0">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-title">Συνδεθείτε μαζί μας</h2>
          <p className="text-lg text-gray-600">
            Γίνετε μέλος της κοινότητάς μας στο Facebook για να ενημερώνεστε για προσφορές, 
            καινούρια προϊόντα και να μοιραστείτε την αγάπη σας για τα ποδήλατα.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-start justify-center gap-8 my-0 mx-0 rounded-md py-0 px-0">
          <Card className="w-full lg:w-1/2 card-shadow">
            <CardHeader>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-[#1877F2] p-2 rounded-full text-white">
                  <Facebook />
                </div>
                <CardTitle>Μεταχειρισμένα ανταλλακτικά αυτοκινήτων και μηχανών </CardTitle>
              </div>
              <CardDescription className="text-base">
                Η ομάδα μας στο Facebook αποτελείται από λάτρεις των τροχών που μοιράζονται τις 
                εμπειρίες τους, κάνουν ερωτήσεις και βρίσκουν λύσεις.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-gray-100 p-4 rounded-lg">
                  <p className="font-semibold text-gray-800">Σπύρος Δίγκας</p>
                  <p className="text-gray-600 mt-1">
                    "Βρίσκω πάντα ότι ανταλλακτικό ψάχνω και σε καλές τιμές"
                  </p>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <p className="font-semibold text-gray-800">Δάρος Νεοχμώσις</p>
                  <p className="text-gray-600 mt-1">
                    "Είμαι ενεργός ποδυλάτης τα τελευταία 20 χρόνια, αν ψάχνετε επαγγελματία στο χώρο είναι ο καλύτερος μπρατε"
                  </p>
                </div>
              </div>
              
              <div className="mt-6">
                <Button className="w-full bg-[#1877F2] hover:bg-[#166FE5] text-white" asChild>
                  <a href="https://www.facebook.com/automoto00" target="_blank" rel="noopener noreferrer">
                    <Facebook className="mr-2 h-4 w-4" />
                    Ακολουθήστε μας στο Facebook
                  </a>
                </Button>
              </div>   
            </CardContent>
          </Card>
                          <div className="w-full lg:w-1/2">
            <Card>
              <CardHeader>
                <CardTitle>Επικοινωνήστε μαζί μας</CardTitle>
                <CardDescription>
                  Έχετε ερωτήσεις; Χρειάζεστε βοήθεια με το ποδήλατό σας; Επικοινωνήστε μαζί μας σήμερα!
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-lg text-center">
                    <h3 className="text-xl font-bold mb-2">Ευχαριστούμε!</h3>
                    <p>Το μήνυμά σας έχει σταλεί επιτυχώς. Θα επικοινωνήσουμε μαζί σας σύντομα.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">Ονοματεπώνυμο</label>
                        <Input 
                          id="name" 
                          name="name" 
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Το όνομά σας" 
                          required 
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">Email</label>
                        <Input 
                          id="email" 
                          name="email" 
                          type="email" 
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Το email σας" 
                          required 
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">Θέμα</label>
                      <Input 
                        id="subject" 
                        name="subject" 
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Το θέμα του μηνύματός σας" 
                        required 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">Μήνυμα</label>
                      <Textarea 
                        id="message" 
                        name="message" 
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Το μήνυμά σας" 
                        required 
                        rows={4}
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-greek-blue hover:bg-greek-darkBlue"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Αποστολή...' : 'Αποστολή Μηνύματος'}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacebookSection;
