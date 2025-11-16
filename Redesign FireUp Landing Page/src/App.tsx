import { useState, useEffect } from 'react';
import { AnnouncementBanner } from './components/AnnouncementBanner';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { Toaster } from './components/ui/sonner';
import { toast } from 'sonner@2.0.3';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'contact'>('home');

  const handleAddToCart = (quantity: number) => {
    const productId = 'fireup-355ml';
    const existingItem = cartItems.find(item => item.id === productId);

    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === productId
          ? { ...item, quantity: item.quantity + quantity }
          : item
      ));
      toast.success(`Added ${quantity} more can${quantity > 1 ? 's' : ''} to cart!`);
    } else {
      const newItem: CartItem = {
        id: productId,
        name: 'Fire Up Energy Drink (355ml)',
        price: 3.99,
        quantity: quantity,
        image: 'https://images.unsplash.com/photo-1741519735476-cfc8bf0b2ae4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmVyZ3klMjBkcmluayUyMGNhbnxlbnwxfHx8fHwxNzYwMjcwNzQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
      };
      setCartItems([...cartItems, newItem]);
      toast.success(`Added ${quantity} can${quantity > 1 ? 's' : ''} to cart!`);
    }
    
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    if (quantity === 0) {
      handleRemoveItem(id);
      return;
    }
    
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity } : item
    ));
  };

  const handleRemoveItem = (id: string) => {
    setCartItems(cartItems.filter(item => item.id !== id));
    toast.info('Item removed from cart');
  };

  const scrollToProduct = () => {
    document.getElementById('product')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNavigate = (page: 'home' | 'about' | 'contact') => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    // Scroll to top when page changes
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentPage]);

  const totalCartItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-black">
      <Header 
        cartCount={totalCartItems}
        onCartClick={() => setIsCartOpen(true)}
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />
      <AnnouncementBanner />
      
      {currentPage === 'home' ? (
        <HomePage 
          onAddToCart={handleAddToCart}
          scrollToProduct={scrollToProduct}
        />
      ) : currentPage === 'about' ? (
        <AboutPage />
      ) : (
        <ContactPage />
      )}
      
      <Footer onNavigate={handleNavigate} />
      
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />
      
      <Toaster position="bottom-right" />
    </div>
  );
}
