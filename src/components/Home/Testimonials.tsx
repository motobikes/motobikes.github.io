import { Card, CardContent } from '@/components/ui/card';
const testimonials = [{
  name: 'Σπύρος Δίγκας',
  role: 'Ποδυλατης πισινας',
  quote: 'Έχω πάρει ενα υδροποδυλατο για τα αρθιτικά μου, η καλύτερη αγορα που εχω κανει με φουλ υποστηριξη!',
  imageUrl: 'https://i.ibb.co/RTJ7XHmW/354783608-10222435107562975-4453383763845653345-n.jpg'
}, {
  name: 'Helga Bachmann',
  role: 'Ερασιτέχνης ποδηλάτης',
  quote: 'Πήρα ένα απίστευτο ποδύλατο χωρίς σέλα! ουουουουου.',
  imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTcVJIGwEj_RLDzETXqGe1HXZaSp2pxY--2g&s'
}, {
  name: 'Νίκος Μαρκόπουλος',
  role: 'Αθλητής MTB',
  quote: 'Με βοήθησαν να επιλέξω τα κατάλληλα ανταλλακτικά για το βουνίσιο ποδήλατό μου. Πραγματικά ειδικοί!',
  imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100'
}];
const Testimonials = () => {
  return <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-title">Λίγα λόγια απο τους πελάτες μας</h2>
          <p className="text-lg text-gray-600">
            Διαβάστε τις εμπειρίες των πελατών μας με το συνεργείο μας και τις υπηρεσίες μας.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => <Card key={index} className="card-shadow">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="relative">
                    <div className="absolute -top-1 -left-1 w-20 h-20 bg-greek-blue rounded-full opacity-20"></div>
                    <img src={testimonial.imageUrl} alt={testimonial.name} className="w-16 h-16 rounded-full object-cover relative z-10 border-2 border-white" />
                  </div>
                  <div className="mt-4">
                    <h3 className="font-bold text-lg">{testimonial.name}</h3>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                  <blockquote className="mt-4">
                    <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                  </blockquote>
                </div>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default Testimonials;
