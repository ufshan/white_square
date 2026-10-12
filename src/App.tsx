import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { BackToTop } from './components/BackToTop';
import { ScrollToTop } from './components/ScrollToTop';
import { EnquiryModal } from './components/EnquiryModal';

import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { ProductCategoryPage } from './pages/ProductCategoryPage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { AboutUsPage } from './pages/AboutUsPage';
import { ContactUsPage } from './pages/ContactUsPage';
import { FaqPage } from './pages/FaqPage';
import { TeamPage } from './pages/TeamPage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { CartPage } from './pages/CartPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { MyAccountPage } from './pages/MyAccountPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { GalleryPage } from './pages/GalleryPage';
import { ElementsPage } from './pages/ElementsPage';
import { NotFoundPage } from './pages/NotFoundPage';

export default function App() {
  const [isHeaderEnquiryOpen, setIsHeaderEnquiryOpen] = useState(false);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header onOpenEnquiry={() => setIsHeaderEnquiryOpen(true)} />
      
      <main style={{ flex: 1 }}>
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ProductsPage />} />
          <Route path="/shop/" element={<ProductsPage />} />
          <Route path="/product/:slug" element={<ProductDetailPage />} />
          <Route path="/product/:slug/" element={<ProductDetailPage />} />
          <Route path="/product-category/:slug" element={<ProductCategoryPage />} />
          <Route path="/product-category/:slug/" element={<ProductCategoryPage />} />
          
          {/* Services */}
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/" element={<ServicesPage />} />
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
          <Route path="/services/:slug/" element={<ServiceDetailPage />} />
          
          {/* Company & Contact */}
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/about-us/" element={<AboutUsPage />} />
          <Route path="/contacts" element={<ContactUsPage />} />
          <Route path="/contacts/" element={<ContactUsPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/faq/" element={<FaqPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/team/" element={<TeamPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/testimonials/" element={<TestimonialsPage />} />
          
          {/* Blog & Archives */}
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/" element={<BlogPage />} />
          <Route path="/classic-blog-with-right-sidebar" element={<BlogPage />} />
          <Route path="/classic-blog-with-right-sidebar/" element={<BlogPage />} />
          <Route path="/blog-three-columns" element={<BlogPage />} />
          <Route path="/blog-three-columns/" element={<BlogPage />} />
          <Route path="/blog-two-columns-without-sidebar" element={<BlogPage />} />
          <Route path="/blog-two-columns-without-sidebar/" element={<BlogPage />} />
          <Route path="/classic-blog-without-sidebar" element={<BlogPage />} />
          <Route path="/classic-blog-without-sidebar/" element={<BlogPage />} />
          
          {/* Galleries */}
          <Route path="/gallery-2-columns" element={<GalleryPage columns={2} />} />
          <Route path="/gallery-2-columns/" element={<GalleryPage columns={2} />} />
          <Route path="/gallery-3-columns" element={<GalleryPage columns={3} />} />
          <Route path="/gallery-3-columns/" element={<GalleryPage columns={3} />} />
          <Route path="/gallery-4-columns" element={<GalleryPage columns={4} />} />
          <Route path="/gallery-4-columns/" element={<GalleryPage columns={4} />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/gallery/" element={<GalleryPage />} />
          <Route path="/gallery/:category" element={<GalleryPage />} />
          <Route path="/gallery/:category/" element={<GalleryPage />} />
          
          {/* Elements / UI showcase */}
          <Route path="/elements" element={<ElementsPage />} />
          <Route path="/elements/" element={<ElementsPage />} />
          <Route path="/elements/:slug" element={<ElementsPage />} />
          <Route path="/elements/:slug/" element={<ElementsPage />} />
          
          {/* WooCommerce / Store flow */}
          <Route path="/cart" element={<CartPage />} />
          <Route path="/cart/" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/checkout/" element={<CheckoutPage />} />
          <Route path="/my-account" element={<MyAccountPage />} />
          <Route path="/my-account/" element={<MyAccountPage />} />
          
          {/* Policies */}
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/privacy/" element={<PrivacyPolicyPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/privacy-policy/" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/terms/" element={<TermsPage />} />
          <Route path="/terms-and-conditions" element={<TermsPage />} />
          <Route path="/terms-and-conditions/" element={<TermsPage />} />
          
          {/* 404 Layout */}
          <Route path="/404-layout" element={<NotFoundPage />} />
          <Route path="/404-layout/" element={<NotFoundPage />} />
          
          {/* Single Blog Post by Slug */}
          <Route path="/:slug" element={<BlogPostPage />} />
          <Route path="/:slug/" element={<BlogPostPage />} />
          
          {/* Wildcard Fallback */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <Footer />
      <WhatsAppWidget />
      <BackToTop />
      
      {/* Global Header Enquiry Modal */}
      <EnquiryModal
        isOpen={isHeaderEnquiryOpen}
        onClose={() => setIsHeaderEnquiryOpen(false)}
        productName="General Enquiry"
      />
    </BrowserRouter>
  );
}
