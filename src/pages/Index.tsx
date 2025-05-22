

import Layout from '@/components/Layout/Layout';
import Hero from '@/components/Home/Hero';
import Services from '@/components/Home/Services';
import GalleryPreview from '@/components/Home/GalleryPreview';
import FacebookSection from '@/components/Home/FacebookSection';
import Testimonials from '@/components/Home/Testimonials';
import Contact from '@/components/Home/Contact';
import StoreLocation from '@/components/Home/StoreLocation';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <GalleryPreview />
      <StoreLocation />
      <Testimonials />
      <FacebookSection />
      <Contact />
      <Services />
    </Layout>
  );
};

export default Index;
