
import { useState } from 'react';
import Layout from '@/components/Layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Facebook } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <Layout>
      <section className="py-12 md:py-20 bg-gradient-to-b from-greek-blue to-greek-darkBlue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Επικοινωνία</h1>
            <p className="text-lg md:text-xl text-gray-200">
              Είμαστε εδώ για να σας βοηθήσουμε με οποιαδήποτε ερώτηση ή απορία έχετε.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="section-title">Στείλτε μας μήνυμα</h2>
              
              {isSubmitted ? (
                <Card className="bg-green-50 border-green-200">
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-green-700 mb-2">Ευχαριστούμε!</h3>
                      <p className="text-green-600">Το μήνυμά σας έχει σταλεί επιτυχώς. Θα επικοινωνήσουμε μαζί σας σύντομα.</p>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">Ονοματεπώνυμο *</label>
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
                      <label htmlFor="email" className="text-sm font-medium">Email *</label>
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
                    <label htmlFor="phone" className="text-sm font-medium">Τηλέφωνο</label>
                    <Input 
                      id="phone" 
                      name="phone" 
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Το τηλέφωνό σας" 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">Θέμα *</label>
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
                    <label htmlFor="message" className="text-sm font-medium">Μήνυμα *</label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Το μήνυμά σας" 
                      required 
                      rows={5}
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
            </div>
            
            <div>
              <h2 className="section-title">Στοιχεία Επικοινωνίας</h2>
              
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Διεύθυνση</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <address className="not-italic">
                      <p>Λεωφόρος Ποδηλάτων 123</p>
                      <p>Αθήνα, 12345</p>
                      <p>Ελλάδα</p>
                    </address>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Επικοινωνία</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p><strong>Τηλέφωνο:</strong> <a href="tel:+302101234567" className="text-greek-blue hover:underline">210 123 4567</a></p>
                    <p><strong>Email:</strong> <a href="mailto:info@podilatotexnikos.gr" className="text-greek-blue hover:underline">info@podilatotexnikos.gr</a></p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Ωράριο Λειτουργίας</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1">
                      <li><strong>Δευτέρα - Παρασκευή:</strong> 09:00 - 20:00</li>
                      <li><strong>Σάββατο:</strong> 09:00 - 16:00</li>
                      <li><strong>Κυριακή:</strong> Κλειστά</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Κοινωνικά Δίκτυα</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <a 
                      href="https://www.facebook.com/groups/bikerepairshop" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-[#1877F2] hover:underline"
                    >
                      <Facebook size={20} />
                      <span>Ακολουθήστε μας στο Facebook</span>
                    </a>
                  </CardContent>
                </Card>
              </div>
              
              <div className="mt-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50314.89399137736!2d23.7142!3d37.9795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bd1f067043f1%3A0x2736354576668ddd!2sAthens%2C%20Greece!5e0!3m2!1sen!2sus!4v1621456789012!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  className="rounded-lg shadow-md"
                  title="Χάρτης τοποθεσίας"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
