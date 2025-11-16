import { VideoHeroSection } from '../components/VideoHeroSection';
import { ProductSection } from '../components/ProductSection';
import { BenefitsSection } from '../components/BenefitsSection';
import { NutritionSection } from '../components/NutritionSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { CTASection } from '../components/CTASection';

interface HomePageProps {
  onAddToCart: (quantity: number) => void;
  scrollToProduct: () => void;
}

export function HomePage({ onAddToCart, scrollToProduct }: HomePageProps) {
  return (
    <>
      <VideoHeroSection onShopNow={scrollToProduct} />
      <CTASection onShopNow={scrollToProduct} />
      <BenefitsSection />
      <ProductSection onAddToCart={onAddToCart} />
      <NutritionSection />
      <TestimonialsSection />
    </>
  );
}
