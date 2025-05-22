
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

const Contact = () => {
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
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <section className="py-16 bg-gradient-to-b from-white to-greek-offWhite">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-title">Επικοινωνήστε μαζί μας</h2>
          <p className="text-lg text-gray-600">
            Έχετε ερωτήσεις; Χρειάζεστε βοήθεια με το ποδήλατό σας; Επικοινωνήστε μαζί μας σήμερα!
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {isSubmitted ? (
            <div className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold mb-2">Ευχαριστούμε!</h3>
              <p>Το μήνυμά σας έχει σταλεί επιτυχώς. Θα επικοινωνήσουμε μαζί σας σύντομα.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
      </div>
    </section>
  );
};

export default Contact;
