
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { GalleryHorizontal } from 'lucide-react';

const galleryImages = [
  {
    url: '/lovable-uploads/11af5376-c262-4bf2-957e-41f2466bc536.png',
    alt: 'Ποδήλατο βουνού Energy'
  },
  {
    url: '/lovable-uploads/0ef2b605-f556-442a-b27f-700f6dcbb688.png',
    alt: 'Ποδήλατο πόλης με καλάθι'
  },
  {
    url: '/lovable-uploads/22515604-3361-442a-bcc2-3e69d223d30b.png',
    alt: 'Ποδήλατο δρόμου'
  },
  {
    url: '/lovable-uploads/d8841dc3-64f7-47c4-ba18-9ec32495b3aa.png',
    alt: 'Ποδήλατο βουνού Rockfire'
  },
  {
    url: '/lovable-uploads/8df1b2f8-8d14-4324-bd0e-1986163afc9a.png',
    alt: 'Εργαστήριο ποδηλάτων - κατασκευή'
  },
  {
    url: '/lovable-uploads/76c6cb03-7110-4a77-9f56-bfa7d7d3bd8f.png',
    alt: 'Εσωτερικό καταστήματος με ποδήλατα'
  }
];

const GalleryPreview = () => {
  return (
    <section className="py-16 bg-greek-skyBlue/20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-title">Το συνεργείο μας στην διαθεσή σου</h2>
          <p className="text-lg text-gray-600">Μια ματιά στο συνεργίο μας και στις επισκευές που πραγματοποιούμε.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
              <Link to="/gallery">
                <img 
                  src={image.url} 
                  alt={image.alt} 
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105" 
                />
              </Link>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="btn-primary" asChild>
            <Link to="/gallery">
              <GalleryHorizontal className="mr-2 h-4 w-4" />
              Περισσότερες Φωτογραφίες
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;
