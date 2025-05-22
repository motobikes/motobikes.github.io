
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { GalleryHorizontal } from 'lucide-react';

const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1541795795328-f073b763494e?auto=format&fit=crop&q=80&w=600&h=400',
    alt: 'Εργαστήριο ποδηλάτων'
  },
  {
    url: 'https://images.unsplash.com/photo-1559348349-86d1b252cb29?auto=format&fit=crop&q=80&w=600&h=400',
    alt: 'Επισκευή ποδηλάτου'
  },
  {
    url: 'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&q=80&w=600&h=400',
    alt: 'Ρύθμιση ταχυτήτων'
  },
  {
    url: 'https://images.unsplash.com/photo-1603467172540-9156aa57aa82?auto=format&fit=crop&q=80&w=600&h=400',
    alt: 'Συναρμολόγηση ποδηλάτου'
  },
  {
    url: 'https://images.unsplash.com/photo-1494316519320-be5e644a2778?auto=format&fit=crop&q=80&w=600&h=400',
    alt: 'Ολοκληρωμένη επισκευή'
  },
  {
    url: 'https://images.unsplash.com/photo-1593764592116-bfb2a97c642a?auto=format&fit=crop&q=80&w=600&h=400',
    alt: 'Αναβάθμιση ποδηλάτου'
  }
];

const GalleryPreview = () => {
  return (
    <section className="py-16 bg-greek-skyBlue/20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-title">Γκαλερί</h2>
          <p className="text-lg text-gray-600">
            Μια ματιά στο εργαστήριό μας και στις επισκευές που πραγματοποιούμε.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            >
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
