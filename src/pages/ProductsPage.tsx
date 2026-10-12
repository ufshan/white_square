import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import productsData from '../data/products.json';
import { PageHeader } from '../components/PageHeader';
import { EnquiryModal } from '../components/EnquiryModal';

export const ProductsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get('category') || 'all';
  const searchTerm = searchParams.get('search') || '';
  const [sortBy, setSortBy] = useState('default');

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<{ title: string; slug: string } | null>(null);

  const categories = [
    { name: 'All Products', slug: 'all', count: productsData.length },
    { name: 'Installing', slug: 'Installing', count: 6 },
    { name: 'Windows', slug: 'Windows', count: 3 },
    { name: 'Construction', slug: 'Construction', count: 3 },
    { name: 'Interior', slug: 'Interior', count: 2 },
  ];

  const filteredProducts = useMemo(() => {
    return productsData
      .filter((p) => {
        const matchesCategory =
          activeCategory === 'all' ||
          p.categories.some((c: string) => c.toLowerCase() === activeCategory.toLowerCase());
        const matchesSearch =
          !searchTerm ||
          p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'name-asc') return a.name.localeCompare(b.name);
        if (sortBy === 'name-desc') return b.name.localeCompare(a.name);
        return 0;
      });
  }, [activeCategory, searchTerm, sortBy]);

  const handleOpenModal = (title: string, slug: string) => {
    setSelectedProduct({ title, slug });
    setModalOpen(true);
  };

  return (
    <div>
      <PageHeader title="Shop" breadcrumbs={[{ name: 'Shop' }]} />

      <div className="container" style={{ padding: '70px 15px' }}>
        <div className="row">
          {/* Main Content (Products Grid) */}
          <div className="col-8" style={{ order: 2 }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '30px',
                flexWrap: 'wrap',
                gap: '15px',
              }}
            >
              <p style={{ margin: 0, color: '#777', fontSize: '15px' }}>
                Showing all {filteredProducts.length} results
                {searchTerm && ` for "${searchTerm}"`}
                {activeCategory !== 'all' && ` in ${activeCategory}`}
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  style={{
                    padding: '8px 14px',
                    borderRadius: '4px',
                    border: '1px solid #d1d5db',
                    fontFamily: 'var(--font-ui)',
                    fontSize: '14px',
                  }}
                >
                  <option value="default">Default sorting</option>
                  <option value="name-asc">Sort by name: A to Z</option>
                  <option value="name-desc">Sort by name: Z to A</option>
                </select>
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <div
                style={{
                  padding: '50px 20px',
                  textAlign: 'center',
                  backgroundColor: '#f9f9f9',
                  borderRadius: '8px',
                }}
              >
                <h3>No products found</h3>
                <p style={{ color: '#777' }}>Try adjusting your search or category filters.</p>
                <button
                  onClick={() => setSearchParams({})}
                  className="btn btn-second"
                  style={{ marginTop: '15px' }}
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="row">
                {filteredProducts.map((prod) => (
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
            )}
          </div>

          {/* Left Sidebar */}
          <div className="col-4" style={{ order: 1 }}>
            <div style={{ paddingRight: '20px' }}>
              {/* Search Widget */}
              <div style={{ marginBottom: '40px' }}>
                <h4 style={{ fontSize: '20px', marginBottom: '16px', color: 'var(--black)' }}>
                  Search Products
                </h4>
                <div style={{ display: 'flex' }}>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search products..."
                    defaultValue={searchTerm}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        const val = (e.target as HTMLInputElement).value;
                        setSearchParams(val ? { search: val } : {});
                      }
                    }}
                    style={{ borderRadius: '4px 0 0 4px' }}
                  />
                  <button
                    type="button"
                    className="btn btn-second"
                    style={{ borderRadius: '0 4px 4px 0', padding: '10px 18px' }}
                    onClick={(e) => {
                      const input = (e.currentTarget.previousSibling as HTMLInputElement).value;
                      setSearchParams(input ? { search: input } : {});
                    }}
                  >
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </button>
                </div>
              </div>

              {/* Product Categories Widget */}
              <div style={{ marginBottom: '40px' }}>
                <h4 style={{ fontSize: '20px', marginBottom: '16px', color: 'var(--black)' }}>
                  Product Categories
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, lineHeight: '2.4' }}>
                  {categories.map((cat) => {
                    const isSelected = activeCategory === cat.slug;
                    return (
                      <li
                        key={cat.slug}
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          borderBottom: '1px solid #f0f0f0',
                          padding: '4px 0',
                        }}
                      >
                        <button
                          type="button"
                          onClick={() => {
                            if (cat.slug === 'all') {
                              setSearchParams({});
                            } else {
                              setSearchParams({ category: cat.slug });
                            }
                          }}
                          style={{
                            background: 'none',
                            border: 'none',
                            padding: 0,
                            fontFamily: 'var(--font-headers)',
                            fontWeight: isSelected ? 700 : 500,
                            color: isSelected ? 'var(--main)' : 'var(--black)',
                            fontSize: '15px',
                            cursor: 'pointer',
                            textAlign: 'left',
                          }}
                        >
                          {cat.name}
                        </button>
                        <span style={{ color: '#888', fontSize: '13px' }}>({cat.count})</span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Assistance Box */}
              <div
                style={{
                  backgroundColor: '#f6f3ee',
                  padding: '25px',
                  borderRadius: '8px',
                  border: '1px solid #e9e5dc',
                }}
              >
                <h4 style={{ fontSize: '18px', marginBottom: '10px' }}>Need Custom Dimensions?</h4>
                <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.6', marginBottom: '18px' }}>
                  We provide free on-site measuring and custom fabrication for all uPVC window and door profiles.
                </p>
                <button
                  type="button"
                  onClick={() => handleOpenModal('Custom Sized Windows', 'custom')}
                  className="btn btn-second"
                  style={{ width: '100%', fontSize: '13px', padding: '10px' }}
                >
                  Request Measurement
                </button>
              </div>
            </div>
          </div>
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
