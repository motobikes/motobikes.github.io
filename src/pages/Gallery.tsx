import { useState } from 'react';
import Layout from '@/components/Layout/Layout';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';

// Gallery images data
const galleryImages = [
  {
    id: 1,
    url: '/lovable-uploads/11af5376-c262-4bf2-957e-41f2466bc536.png',
    thumbnail: '/lovable-uploads/11af5376-c262-4bf2-957e-41f2466bc536.png',
    title: 'Ποδήλατο βουνού Energy',
    category: 'bikes',
    description: 'Ένα υψηλής ποιότητας ποδήλατο βουνού Energy που επισκευάστηκε στο εργαστήριό μας.'
  },
  {
    id: 2,
    url: '/lovable-uploads/0ef2b605-f556-442a-b27f-700f6dcbb688.png',
    thumbnail: '/lovable-uploads/0ef2b605-f556-442a-b27f-700f6dcbb688.png',
    title: 'Ποδήλατο πόλης με καλάθι',
    category: 'bikes',
    description: 'Ένα κλασικό ποδήλατο πόλης με καλάθι, ιδανικό για καθημερινές μετακινήσεις.'
  },
  {
    id: 3,
    url: '/lovable-uploads/22515604-3361-442a-bcc2-3e69d223d30b.png',
    thumbnail: '/lovable-uploads/22515604-3361-442a-bcc2-3e69d223d30b.png',
    title: 'Ποδήλατο δρόμου',
    category: 'bikes',
    description: 'Ένα αθλητικό ποδήλατο δρόμου έτοιμο για περιπέτειες μετά από πλήρες service.'
  },
  {
    id: 4,
    url: '/lovable-uploads/d8841dc3-64f7-47c4-ba18-9ec32495b3aa.png',
    thumbnail: '/lovable-uploads/d8841dc3-64f7-47c4-ba18-9ec32495b3aa.png',
    title: 'Ποδήλατο βουνού Rockfire',
    category: 'bikes',
    description: 'Ένα δυναμικό ποδήλατο βουνού Rockfire σε πράσινο χρώμα.'
  },
  {
    id: 5,
    url: '/lovable-uploads/7c9791b8-ead5-48c1-8b80-0bc1503eb0ba.png',
    thumbnail: '/lovable-uploads/7c9791b8-ead5-48c1-8b80-0bc1503eb0ba.png',
    title: 'Ηλεκτρικό ποδήλατο Cube',
    category: 'bikes',
    description: 'Ένα σύγχρονο ηλεκτρικό ποδήλατο Cube με προηγμένες δυνατότητες.'
  },
  {
    id: 6,
    url: '/lovable-uploads/7de83cd3-0bb5-49eb-94a8-1c265a1ad97b.png',
    thumbnail: '/lovable-uploads/7de83cd3-0bb5-49eb-94a8-1c265a1ad97b.png',
    title: 'Επισκευή κινητήρα',
    category: 'repairs',
    description: 'Λεπτομερής επισκευή κινητήρα μοτοσικλέτας στο εργαστήριό μας.'
  },
  {
    id: 7,
    url: '/lovable-uploads/8df1b2f8-8d14-4324-bd0e-1986163afc9a.png',
    thumbnail: '/lovable-uploads/8df1b2f8-8d14-4324-bd0e-1986163afc9a.png',
    title: 'Εργαστήριο ποδηλάτων',
    category: 'workshop',
    description: 'Το κεντρικό εργαστήριο μας με όλο τον απαραίτητο εξοπλισμό για επισκευές υψηλής ποιότητας.'
  },
  {
    id: 8,
    url: '/lovable-uploads/09b621b7-08bd-43d5-ab4d-a50b55f6dc31.png',
    thumbnail: '/lovable-uploads/09b621b7-08bd-43d5-ab4d-a50b55f6dc31.png',
    title: 'Επισκευή ηλεκτρικού συστήματος',
    category: 'repairs',
    description: 'Εξειδικευμένη επισκευή ηλεκτρικού συστήματος και κινητήρα.'
  },
  {
    id: 9,
    url: '/lovable-uploads/76c6cb03-7110-4a77-9f56-bfa7d7d3bd8f.png',
    thumbnail: '/lovable-uploads/76c6cb03-7110-4a77-9f56-bfa7d7d3bd8f.png',
    title: 'Εσωτερικό καταστήματος',
    category: 'store',
    description: 'Ο χώρος πώλησης με μια μεγάλη ποικιλία ποδηλάτων και εξαρτημάτων.'
  },
  {
    id: 10,
    url: '/lovable-uploads/89de450b-94af-47b1-9f4a-c197e14f3659.png',
    thumbnail: '/lovable-uploads/89de450b-94af-47b1-9f4a-c197e14f3659.png',
    title: 'Χώρος επισκευών',
    category: 'workshop',
    description: 'Ο εξειδικευμένος χώρος επισκευών με ανταλλακτικά και εργαλεία.'
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
