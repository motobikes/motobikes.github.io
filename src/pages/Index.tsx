
import Layout from '@/components/Layout/Layout';
import Hero from '@/components/Home/Hero';
import GalleryPreview from '@/components/Home/GalleryPreview';
import FacebookSection from '@/components/Home/FacebookSection';
import Testimonials from '@/components/Home/Testimonials';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <GalleryPreview />
      <Testimonials />
      <FacebookSection />
    </Layout>
  );
};

export default Index;
