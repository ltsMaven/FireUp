import { VideoHeroSection } from '../components/VideoHeroSection';
import { ProductSection } from '../components/ProductSection';
import { BenefitsSection } from '../components/BenefitsSection';
import { NutritionSection } from '../components/NutritionSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { CTASection } from '../components/CTASection';

interface HomePageProps {
  onAddToCart: (quantity: number) => void;
  scrollToProduct: () => void;
  onDiscoverMore: () => void;
}

export function HomePage({ onAddToCart, scrollToProduct, onDiscoverMore }: HomePageProps) {
  return (
    <>
      <VideoHeroSection onShopNow={scrollToProduct}  onDiscoverMore={onDiscoverMore}  />
      <CTASection onShopNow={scrollToProduct} />
      <BenefitsSection />
      <ProductSection onAddToCart={onAddToCart} />
      <NutritionSection />
      <TestimonialsSection />
    </>
  );
}
