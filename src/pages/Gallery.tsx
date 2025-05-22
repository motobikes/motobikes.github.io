
import { useState } from 'react';
import Layout from '@/components/Layout/Layout';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';

// Gallery images data
const galleryImages = [
  {
    id: 1,
    url: 'https://github.com/motobikes/motobikes.github.io/blob/main/public/lovable-uploads/482979963_670984705591947_2176069155320366585_n.jpg?raw=true',
    thumbnail: 'https://github.com/motobikes/motobikes.github.io/blob/main/public/lovable-uploads/482979963_670984705591947_2176069155320366585_n.jpg?raw=true',
    title: 'Εργαστήριο ποδηλάτων',
    category: 'workshop',
    description: 'Το κεντρικό εργαστήριο μας με όλο τον απαραίτητο εξοπλισμό για επισκευές υψηλής ποιότητας.'
  },
  {
    id: 2,
    url: 'https://github.com/motobikes/motobikes.github.io/blob/main/public/lovable-uploads/481954020_668586545831763_5242133708775912980_n.jpg?raw=true',
    thumbnail: 'https://github.com/motobikes/motobikes.github.io/blob/main/public/lovable-uploads/481954020_668586545831763_5242133708775912980_n.jpg?raw=true',
    title: 'Επισκευή ποδηλάτου',
    category: 'repairs',
    description: 'Ο έμπειρος τεχνικός μας εκτελεί μια λεπτομερή επισκευή σε ποδήλατο δρόμου.'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&q=80&w=1200',
    thumbnail: 'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&q=80&w=600&h=400',
    title: 'Ρύθμιση ταχυτήτων',
    category: 'repairs',
    description: 'Ακριβής ρύθμιση του συστήματος μετάδοσης για ομαλές αλλαγές ταχυτήτων.'
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1603467172540-9156aa57aa82?auto=format&fit=crop&q=80&w=1200',
    thumbnail: 'https://images.unsplash.com/photo-1603467172540-9156aa57aa82?auto=format&fit=crop&q=80&w=600&h=400',
    title: 'Συναρμολόγηση ποδηλάτου',
    category: 'builds',
    description: 'Συναρμολόγηση ενός νέου ποδηλάτου βουνού με προσοχή στην κάθε λεπτομέρεια.'
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1494316519320-be5e644a2778?auto=format&fit=crop&q=80&w=1200',
    thumbnail: 'https://images.unsplash.com/photo-1494316519320-be5e644a2778?auto=format&fit=crop&q=80&w=600&h=400',
    title: 'Ολοκληρωμένη επισκευή',
    category: 'repairs',
    description: 'Ένα πλήρως ανακαινισμένο ποδήλατο δρόμου έτοιμο να παραδοθεί στον ιδιοκτήτη του.'
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1593764592116-bfb2a97c642a?auto=format&fit=crop&q=80&w=1200',
    thumbnail: 'https://images.unsplash.com/photo-1593764592116-bfb2a97c642a?auto=format&fit=crop&q=80&w=600&h=400',
    title: 'Αναβάθμιση ποδηλάτου',
    category: 'upgrades',
    description: 'Εγκατάσταση νέου συστήματος μετάδοσης για βελτιωμένη απόδοση.'
  },
  {
    id: 7,
    url: 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&q=80&w=1200',
    thumbnail: 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&q=80&w=600&h=400',
    title: 'Κατάστημα ποδηλάτων',
    category: 'store',
    description: 'Η εξωτερική όψη του καταστήματός μας στο κέντρο της Αθήνας.'
  },
  {
    id: 8,
    url: 'https://images.unsplash.com/photo-1502221387580-4d8e48e96d95?auto=format&fit=crop&q=80&w=1200',
    thumbnail: 'https://images.unsplash.com/photo-1502221387580-4d8e48e96d95?auto=format&fit=crop&q=80&w=600&h=400',
    title: 'Εσωτερικό καταστήματος',
    category: 'store',
    description: 'Ο χώρος πώλησης με μια μεγάλη ποικιλία προϊόντων και εξαρτημάτων.'
  },
  {
    id: 9,
    url: 'https://images.unsplash.com/photo-1582560475093-ba66accbc53a?auto=format&fit=crop&q=80&w=1200',
    thumbnail: 'https://images.unsplash.com/photo-1582560475093-ba66accbc53a?auto=format&fit=crop&q=80&w=600&h=400',
    title: 'Εργαλεία συνεργείου',
    category: 'workshop',
    description: 'Ο εξειδικευμένος εξοπλισμός που χρησιμοποιούμε για τις επισκευές.'
  },
  {
    id: 10,
    url: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80&w=1200',
    thumbnail: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80&w=600&h=400',
    title: 'Ποδήλατο δρόμου',
    category: 'bikes',
    description: 'Ένα υψηλής ποιότητας ποδήλατο δρόμου που επισκευάστηκε στο εργαστήριό μας.'
  },
  {
    id: 11,
    url: 'https://images.unsplash.com/photo-1529422643029-d4585747aaf2?auto=format&fit=crop&q=80&w=1200',
    thumbnail: 'https://images.unsplash.com/photo-1529422643029-d4585747aaf2?auto=format&fit=crop&q=80&w=600&h=400',
    title: 'Ποδήλατο MTB',
    category: 'bikes',
    description: 'Ένα ποδήλατο βουνού έτοιμο για περιπέτειες μετά από πλήρες service.'
  },
  {
    id: 12,
    url: 'https://images.unsplash.com/photo-1511994713045-bd873f437a7a?auto=format&fit=crop&q=80&w=1200',
    thumbnail: 'https://images.unsplash.com/photo-1511994713045-bd873f437a7a?auto=format&fit=crop&q=80&w=600&h=400',
    title: 'Εκδήλωση ποδηλασίας',
    category: 'events',
    description: 'Η ομάδα μας συμμετείχε σε τοπική εκδήλωση ποδηλασίας.'
  }
];

const categories = [
  { id: 'all', name: 'Όλες οι φωτογραφίες' },
  { id: 'workshop', name: 'Εργαστήριο' },
  { id: 'repairs', name: 'Επισκευές' },
  { id: 'builds', name: 'Συναρμολογήσεις' },
  { id: 'upgrades', name: 'Αναβαθμίσεις' },
  { id: 'store', name: 'Κατάστημα' },
  { id: 'bikes', name: 'Ποδήλατα' },
  { id: 'events', name: 'Εκδηλώσεις' }
];

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === selectedCategory);
  
  const openImage = (id: number) => {
    setSelectedImage(id);
  };
  
  const closeImage = () => {
    setSelectedImage(null);
  };
  
  const currentImage = galleryImages.find(img => img.id === selectedImage);
  
  return (
    <Layout>
      <section className="py-12 md:py-20 bg-gradient-to-b from-greek-blue to-greek-darkBlue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Γκαλερί</h1>
            <p className="text-lg md:text-xl text-gray-200">
              Δείτε φωτογραφίες από το συνεργείο, τις επισκευές και τις αναβαθμίσεις ποδηλάτων που έχουμε πραγματοποιήσει.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 overflow-x-auto">
            <div className="flex space-x-2 pb-2 min-w-max">
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`px-4 py-2 rounded-md transition-colors ${
                    selectedCategory === category.id 
                    ? 'bg-greek-blue text-white' 
                    : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map(image => (
              <div
                key={image.id}
                className="cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
                onClick={() => openImage(image.id)}
              >
                <img 
                  src={image.thumbnail} 
                  alt={image.title} 
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
          
          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Δεν βρέθηκαν φωτογραφίες σε αυτή την κατηγορία.</p>
            </div>
          )}
        </div>
      </section>
      
      <Dialog open={selectedImage !== null} onOpenChange={closeImage}>
        <DialogContent className="sm:max-w-3xl">
          <DialogHeader>
            <DialogTitle>{currentImage?.title}</DialogTitle>
            <DialogDescription>{currentImage?.description}</DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <img 
              src={currentImage?.url} 
              alt={currentImage?.title} 
              className="w-full h-auto object-contain rounded-md"
            />
          </div>
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default GalleryPage;
