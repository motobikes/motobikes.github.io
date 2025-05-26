
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { Construction } from 'lucide-react';
import { useRef } from 'react';

const Hero = () => {
  const images = ['/lovable-uploads/3703a125-bdb6-4d09-aa0c-a942a5c7294c.png', '/lovable-uploads/a7d4eaad-ad51-4b1f-be5d-36cad54ab79e.png', '/lovable-uploads/817d0461-62ea-4c9f-a17b-bc14c152465f.png'];
  
  // Create a ref for the autoplay plugin
  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return <div className="bg-gradient-to-r from-greek-blue to-greek-lightBlue py-8 md:py-12">
      <div className="container mx-auto px-4">
        {/* Image Slider */}
        <div className="relative mb-8 md:mb-12">
          <Carousel 
            className="w-full max-w-5xl mx-auto"
            plugins={[plugin.current]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {images.map((image, index) => <CarouselItem key={index}>
                  <div className="p-1 h-[300px] md:h-[400px]">
                    <img src={image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover rounded-lg shadow-lg" />
                  </div>
                </CarouselItem>)}
            </CarouselContent>
            <CarouselPrevious className="absolute left-2 md:left-4" />
            <CarouselNext className="absolute right-2 md:right-4" />
          </Carousel>
        </div>

        {/* Under Construction Banner */}
        <div className="border-l-4 border-yellow-500 p-4 mb-8 rounded-md max-w-3xl mx-auto bg-slate-50">
          <div className="flex items-center">
            <Construction className="h-8 w-8 text-yellow-500 mr-4" />
            <div>
              
              <p className="text-yellow-800">
                Η ιστοσελίδα μας βρίσκεται υπό κατασκευή. Σύντομα θα έχουμε περισσότερες πληροφορίες διαθέσιμες!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Hero;
