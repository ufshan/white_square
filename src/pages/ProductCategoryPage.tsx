import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import productsData from '../data/products.json';
import { PageHeader } from '../components/PageHeader';
import { EnquiryModal } from '../components/EnquiryModal';

export const ProductCategoryPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const categoryName = (slug || 'windows').replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<{ title: string; slug: string } | null>(null);

  const filteredProducts = productsData.filter((p) =>
    p.categories.some((c: string) => c.toLowerCase() === (slug || '').toLowerCase())
  );

  const displayProducts = filteredProducts.length > 0 ? filteredProducts : productsData;

  const handleOpenModal = (title: string, pSlug: string) => {
    setSelectedProduct({ title, slug: pSlug });
    setModalOpen(true);
  };

  return (
    <div>
      <PageHeader
        title={categoryName}
        breadcrumbs={[
          { name: 'Products', path: '/shop/' },
          { name: categoryName },
        ]}
      />

      <div className="container" style={{ padding: '70px 15px' }}>
        <div style={{ marginBottom: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <p style={{ margin: 0, color: '#666' }}>
            Showing results in category <strong>{categoryName}</strong> ({displayProducts.length} items)
          </p>
          <Link to="/shop/" style={{ fontWeight: 700, color: 'var(--main)' }}>
            &larr; View All Products
          </Link>
        </div>

        <div className="row">
          {displayProducts.map((prod) => (
            <div key={prod.id} className="col-4" style={{ marginBottom: '35px' }}>
              <div className="product-card">
                <div className="product-img-wrap">
                  <Link to={`/product/${prod.slug}/`}>
                    <img src={prod.image} alt={prod.name} />
                  </Link>
                </div>
                <div className="product-info">
                  <h3 className="product-title">
                    <Link to={`/product/${prod.slug}/`}>{prod.name}</Link>
                  </h3>
                  <p className="product-excerpt">{prod.excerpt}</p>
                  <button
                    type="button"
                    onClick={() => handleOpenModal(prod.name, prod.slug)}
                    className="enquire-wa-btn"
                    style={{ border: 'none', cursor: 'pointer', width: '100%' }}
                  >
                    <i className="fa-brands fa-whatsapp"></i>
                    <span>Enquire Now</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        productTitle={selectedProduct?.title}
        productSlug={selectedProduct?.slug}
      />
    </div>
  );
};
