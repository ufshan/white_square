import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import productsData from '../data/products.json';
import servicesData from '../data/services.json';
import certsData from '../data/certifications.json';
import windowTypes from '../data/window_types.json';
import advantages from '../data/advantages.json';
import siteInfo from '../data/site_info.json';
import { EnquiryModal } from '../components/EnquiryModal';

export const HomePage: React.FC = () => {
  // Slider State
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      titlePart1: 'Upvc Windows',
      titlePart2: ' and Doors',
      desc: 'Experience unparalleled durability and elegance with our uPVC doors and windows, offering exceptional quality and style for your home.',
      im1: '/assets/slide_01_02.png',
      im2: '/assets/slide_01_01.png',
    },
    {
      titlePart1: 'Color Variations',
      titlePart2: ' and Unique Sizes',
      desc: 'Explore our UPVC doors and windows with a wide range of color variants and unique sizing options, offering tailored solutions to complement any space.',
      im1: '/assets/slide_02_02.png',
      im2: '/assets/slide_02_01.png',
    },
    {
      titlePart1: 'Modern Window',
      titlePart2: ' Blinds and Doors',
      desc: 'Discover the epitome of modernity with our uPVC doors and windows, offering sleek design, superior functionality, and enduring quality.',
      im1: '/assets/slide_03_02.png',
      im2: '/assets/slide_03_01.png',
    },
  ];

  // Auto rotate slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  // Modal State
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<{ title: string; slug: string } | null>(null);

  // Appointment Form State
  const [appmtName, setAppmtName] = useState('');
  const [appmtPhone, setAppmtPhone] = useState('');
  const [appmtSuccess, setAppmtSuccess] = useState(false);

  // Contact Form State
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [contactSuccess, setContactSuccess] = useState(false);

  const handleOpenModal = (title?: string, slug?: string) => {
    if (title && slug) {
      setSelectedProduct({ title, slug });
    } else {
      setSelectedProduct(null);
    }
    setModalOpen(true);
  };

  const handleAppointmentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!appmtName || !appmtPhone) return;
    setAppmtSuccess(true);
    setTimeout(() => {
      setAppmtName('');
      setAppmtPhone('');
      setAppmtSuccess(false);
    }, 4000);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName || !contactEmail || !contactMessage) return;
    setContactSuccess(true);
    setTimeout(() => {
      setContactName('');
      setContactEmail('');
      setContactMessage('');
      setContactSuccess(false);
    }, 4000);
  };

  return (
    <div className="home-page-container">
      {/* 1. HERO SLIDER */}
      <section className="hero-slider">
        {slides.map((slide, idx) => (
          <div key={idx} className={`hero-slide ${idx === currentSlide ? 'active' : ''}`}>
            <div className="container" style={{ position: 'relative', zIndex: 4 }}>
              <div className="row" style={{ alignItems: 'center' }}>
                <div className="col-6">
                  <div className="hero-content">
                    <h1 className="hero-title">
                      {slide.titlePart1}
                      <span>{slide.titlePart2}</span>
                    </h1>
                    <p className="hero-description">{slide.desc}</p>
                    <div style={{ display: 'flex', gap: '15px' }}>
                      <button
                        type="button"
                        onClick={() => handleOpenModal()}
                        className="btn btn-black"
                      >
                        Make order
                      </button>
                      <Link to="/shop/" className="btn btn-second">
                        Read more
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-6">
                  <div className="hero-visual">
                    <img
                      src={slide.im1}
                      alt="Window Profile"
                      className="hero-layer hero-layer-1"
                    />
                    <img
                      src={slide.im2}
                      alt="Window Installation"
                      className="hero-layer hero-layer-2"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Slider Dots */}
        <div className="slider-pagination">
          {slides.map((_, idx) => (
            <div
              key={idx}
              className={`pagination-dot ${idx === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(idx)}
            />
          ))}
        </div>
      </section>

      {/* 2. ABOUT US SECTION */}
      <section style={{ backgroundColor: '#f6f3ee', padding: '90px 0' }}>
        <div className="container">
          <div className="section-header">
            <h1 style={{ fontSize: '42px', color: 'var(--black)', marginBottom: '40px' }}>
              About Us
            </h1>
          </div>

          <div className="row" style={{ alignItems: 'center', marginBottom: '60px' }}>
            <div className="col-6">
              <div
                style={{
                  position: 'relative',
                  backgroundColor: '#ffffff',
                  padding: '15px',
                  borderRadius: '12px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: '30px',
                    left: '-20px',
                    backgroundColor: 'var(--black)',
                    color: '#ffffff',
                    padding: '16px 28px',
                    borderRadius: '8px',
                    boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
                    zIndex: 2,
                  }}
                >
                  <h2 style={{ fontSize: '20px', color: '#ffffff', margin: 0 }}>White Square</h2>
                  <span style={{ color: 'var(--main)', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    upvc windoor
                  </span>
                </div>
                <img
                  src="/assets/about-window.webp"
                  alt="Modern UPVC Sliding Window"
                  style={{ width: '100%', borderRadius: '8px' }}
                />
              </div>
            </div>

            <div className="col-6">
              <div style={{ paddingLeft: '20px' }}>
                <h2 style={{ fontSize: '32px', marginBottom: '20px' }}>
                  Your Trusted Partner in Construction
                </h2>
                <p style={{ fontSize: '16px', lineHeight: '1.8' }}>
                  JB Group, founded in 2007, is a leading supplier of construction materials based in Tamil Nadu, Coimbatore. Specializing in South India, Kerala, and Karnataka, we prioritize sustainability and environmental harmony in our innovative building materials. Our mission is to deliver high-quality products tailored to customer preferences while continuously introducing innovations.
                </p>
                <p style={{ fontSize: '16px', lineHeight: '1.8' }}>
                  We use eco-friendly UPVC Technology in partnership with Prominance, ensuring our products are both customer-friendly and environmentally conscious. We believe in building a sustainable future for generations to come.
                </p>
                <Link to="/contacts/" className="btn btn-second" style={{ marginTop: '10px' }}>
                  Contact Us
                </Link>
              </div>
            </div>
          </div>

          {/* Vision & Partnership */}
          <div style={{ borderTop: '1px solid #e2ddd5', paddingTop: '50px', marginBottom: '50px' }}>
            <span className="section-subtitle">Our vision</span>
            <h2 style={{ fontSize: '30px', marginBottom: '15px' }}>
              We want to lead in innovation & creativity
            </h2>
            <div className="row">
              <div className="col-6">
                <p style={{ lineHeight: '1.8' }}>
                  Our commitment is to innovate in building materials, adapting to changing needs while prioritizing sustainability. We aim to earn trust by delivering high-quality products tailored to your preferences.
                </p>
              </div>
              <div className="col-6">
                <p style={{ lineHeight: '1.8' }}>
                  At J B White Squire, we strive to constantly innovate construction materials, catering to the needs of every new generation. We provide the facilities needed to satisfy each new generation's demands.
                </p>
              </div>
            </div>
          </div>

          {/* Technical Partner Card */}
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '12px',
              padding: '35px',
              border: '1px solid #e8e4dc',
            }}
          >
            <h2 style={{ fontSize: '26px', marginBottom: '24px' }}>Our Technical partner</h2>
            <div className="row" style={{ alignItems: 'center' }}>
              <div className="col-4">
                <img
                  src="/assets/prominance-partner.jpg"
                  alt="Prominance Window Systems"
                  style={{ borderRadius: '8px', maxWidth: '280px' }}
                />
              </div>
              <div className="col-8">
                <h3 style={{ fontSize: '22px', marginBottom: '12px', color: 'var(--black)' }}>
                  Prominance window systems
                </h3>
                <p style={{ margin: 0, lineHeight: '1.8' }}>
                  Prominance’s uPVC windows present an exquisite coming together of form and function. The profiles meet various requirements right from budget apartments to palatial villas and commercial establishments – through structural design that can withstand rough weather conditions and wear & tear, ensuring Quality consistency and durability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICES SECTION */}
      <section style={{ padding: '90px 0', backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="section-header text-center">
            <h1 className="section-title">Services</h1>
          </div>

          <div className="row">
            {servicesData.slice(0, 4).map((service) => (
              <div key={service.slug} className="col-3" style={{ marginBottom: '30px' }}>
                <div className="service-card">
                  <span className={`service-icon icon ${service.icon}`}></span>
                  <h4 className="service-title">
                    <Link to={`/services/${service.slug}/`}>{service.title}</Link>
                  </h4>
                  <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.7', marginBottom: '20px' }}>
                    {service.shortDesc}
                  </p>
                  <Link
                    to={`/services/${service.slug}/`}
                    style={{
                      fontFamily: 'var(--font-headers)',
                      fontWeight: 700,
                      fontSize: '14px',
                      color: 'var(--main)',
                    }}
                  >
                    Read more &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications Subsection */}
          <div style={{ marginTop: '60px', textAlign: 'center' }}>
            <h1 style={{ fontSize: '32px', color: 'var(--black)', marginBottom: '35px', textTransform: 'capitalize' }}>
              certification
            </h1>
            <div className="row" style={{ justifyContent: 'center' }}>
              {certsData.map((cert, idx) => (
                <div key={idx} className="col-4" style={{ marginBottom: '25px' }}>
                  <a
                    href={cert.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'block',
                      backgroundColor: '#f9f9f9',
                      border: '1px solid #ebebeb',
                      borderRadius: '10px',
                      padding: '25px 20px',
                      textAlign: 'center',
                      transition: 'all 0.3s ease',
                    }}
                    className="cert-card"
                  >
                    <img
                      src={cert.image}
                      alt={cert.title}
                      style={{
                        maxHeight: '120px',
                        margin: '0 auto 18px auto',
                        objectFit: 'contain',
                      }}
                    />
                    <h3 style={{ fontSize: '18px', color: 'var(--black)', margin: 0 }}>
                      {cert.title}
                    </h3>
                    <span style={{ fontSize: '12px', color: 'var(--main)', fontWeight: 700, marginTop: '8px', display: 'inline-block' }}>
                      <i className="fa-solid fa-file-pdf" style={{ marginRight: '6px' }}></i> View Certificate
                    </span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. NAVY CUSTOM WINDOW TYPES SECTION */}
      <section style={{ backgroundColor: 'var(--black)', color: '#ffffff', padding: '90px 0', textAlign: 'center' }}>
        <div className="container">
          <h4
            style={{
              color: '#ffffff',
              maxWidth: '940px',
              margin: '0 auto 50px auto',
              fontSize: '24px',
              lineHeight: '1.6',
              fontWeight: 400,
            }}
          >
            We produce modern plastic, wooden and aluminum windows according to{' '}
            <span style={{ color: 'var(--main)', fontWeight: 700 }}>individual wishes</span> and sizes, which satisfy any wishes of our clients
          </h4>

          <div className="row" style={{ justifyContent: 'center', marginBottom: '50px' }}>
            {windowTypes.map((type, idx) => (
              <div key={idx} className="col-2" style={{ marginBottom: '20px' }}>
                <div
                  style={{
                    padding: '20px 10px',
                    borderRadius: '8px',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <span
                    className={`icon ${type.icon}`}
                    style={{ fontSize: '42px', color: '#ffffff', marginBottom: '14px', display: 'block' }}
                  ></span>
                  <h6 style={{ color: '#ffffff', fontSize: '16px', margin: 0 }}>
                    {type.name}
                  </h6>
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
            <button
              type="button"
              onClick={() => handleOpenModal()}
              className="btn btn-gray"
            >
              Order now
            </button>
            <Link to="/services/" className="btn btn-black" style={{ border: '1px solid rgba(255,255,255,0.3)' }}>
              Read more
            </Link>
          </div>
        </div>
      </section>

      {/* 5. EXPLORE OUR SOLUTIONS - BROCHURE DOWNLOAD */}
      <section style={{ padding: '90px 0', backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="row" style={{ alignItems: 'center' }}>
            <div className="col-4">
              <span className="section-subtitle">Explore Our Solutions</span>
              <h2 style={{ fontSize: '32px', marginBottom: '18px' }}>
                Learn More About J B Group
              </h2>
              <p style={{ lineHeight: '1.8', color: '#666', marginBottom: '25px' }}>
                Get to know how we provide innovative, sustainable building materials for South India. Download Our Brochure to see our products and services.
              </p>

              <div style={{ marginBottom: '25px' }}>
                <a
                  href="/assets/White-Square-Brochure.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '12px',
                    fontFamily: 'var(--font-headers)',
                    fontWeight: 700,
                    fontSize: '17px',
                    color: 'var(--black)',
                  }}
                >
                  <span
                    className="icon icon-price_download_2"
                    style={{
                      fontSize: '28px',
                      color: 'var(--main)',
                      backgroundColor: 'rgba(15, 175, 233, 0.1)',
                      padding: '12px',
                      borderRadius: '50%',
                    }}
                  ></span>
                  Download Brochure
                </a>
              </div>

              <Link to="/services/" className="btn btn-second">
                Read more
              </Link>
            </div>

            <div className="col-8">
              <img
                src="/assets/magazin-1.jpg"
                alt="JB White Square Catalog Magazine"
                style={{ width: '100%', borderRadius: '10px', boxShadow: '0 15px 35px rgba(0,0,0,0.08)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. ADVANTAGES (6 BENEFITS GRID) */}
      <section style={{ padding: '70px 0', backgroundColor: '#f6f3ee', borderTop: '1px solid #ebebeb', borderBottom: '1px solid #ebebeb' }}>
        <div className="container">
          <div className="row">
            {advantages.map((adv, idx) => (
              <div key={idx} className="col-2" style={{ marginBottom: '20px' }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                  }}
                >
                  <span
                    className={`icon ${adv.icon}`}
                    style={{ fontSize: '38px', color: 'var(--main)', flexShrink: 0 }}
                  ></span>
                  <h6 style={{ margin: 0, fontSize: '15px', color: 'var(--black)', lineHeight: '1.4' }}>
                    {adv.name}
                  </h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. POPULAR PRODUCTS (WOOCOMMERCE RECREATION) */}
      <section style={{ padding: '90px 0', backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="section-subtitle">Our Windows</span>
            <h2 className="section-title">Popular Products</h2>
            <p className="section-desc">
              We provide a wide range of high-quality construction materials designed for durability, innovation, and sustainability. Our offerings include:
            </p>
          </div>

          <div className="row">
            {productsData.map((prod) => (
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
                    <div style={{ display: 'flex', gap: '10px' }}>
                      <button
                        type="button"
                        onClick={() => handleOpenModal(prod.name, prod.slug)}
                        className="enquire-wa-btn"
                        style={{ flex: 1, border: 'none', cursor: 'pointer' }}
                      >
                        <i className="fa-brands fa-whatsapp"></i>
                        <span>Enquire Now</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. MAKE AN APPOINTMENT (WOOD FORM BG & WORKER PHOTO) */}
      <section
        style={{
          backgroundImage: 'url(/assets/wood-form-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          padding: '100px 0 0 0',
          color: '#ffffff',
        }}
      >
        <div className="container">
          <div className="row" style={{ alignItems: 'flex-end' }}>
            {/* Form Column */}
            <div className="col-6" style={{ paddingBottom: '90px' }}>
              <div
                style={{
                  backgroundColor: 'var(--black)',
                  padding: '45px',
                  borderRadius: '10px',
                  boxShadow: '0 20px 45px rgba(0,0,0,0.3)',
                }}
              >
                <span style={{ color: 'var(--main)', fontFamily: 'var(--font-headers)', fontWeight: 700, fontSize: '15px' }}>
                  Make an Appointment
                </span>
                <h2 style={{ color: '#ffffff', fontSize: '32px', marginTop: '6px', marginBottom: '12px' }}>
                  Order Free Window Measuring
                </h2>
                <p style={{ color: 'rgba(255, 255, 255, 0.75)', marginBottom: '25px', fontSize: '15px' }}>
                  Just fill this form, our manager will contact you for details
                </p>

                {appmtSuccess ? (
                  <div
                    style={{
                      padding: '16px',
                      backgroundColor: 'rgba(37, 211, 102, 0.2)',
                      border: '1px solid #25d366',
                      borderRadius: '6px',
                      color: '#ffffff',
                      marginBottom: '20px',
                    }}
                  >
                    <i className="fa-solid fa-check-circle" style={{ marginRight: '8px' }}></i>
                    Appointment request sent successfully!
                  </div>
                ) : (
                  <form onSubmit={handleAppointmentSubmit}>
                    <div className="row">
                      <div className="col-6" style={{ marginBottom: '15px' }}>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Your name*"
                          required
                          value={appmtName}
                          onChange={(e) => setAppmtName(e.target.value)}
                        />
                      </div>
                      <div className="col-6" style={{ marginBottom: '15px' }}>
                        <input
                          type="tel"
                          className="form-control"
                          placeholder="Your phone*"
                          required
                          value={appmtPhone}
                          onChange={(e) => setAppmtPhone(e.target.value)}
                        />
                      </div>
                      <div className="col-12">
                        <button
                          type="submit"
                          className="btn btn-second"
                          style={{ width: '100%', padding: '14px' }}
                        >
                          Send request
                        </button>
                      </div>
                    </div>
                  </form>
                )}

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    marginTop: '30px',
                    borderTop: '1px solid rgba(255,255,255,0.1)',
                    paddingTop: '20px',
                  }}
                >
                  <span
                    className="icon icon-phone_top"
                    style={{
                      fontSize: '32px',
                      color: 'var(--main)',
                      backgroundColor: 'rgba(15,175,233,0.1)',
                      padding: '10px',
                      borderRadius: '50%',
                    }}
                  ></span>
                  <div>
                    <h6 style={{ color: '#ffffff', margin: 0, fontSize: '15px' }}>
                      Call for free consultation
                    </h6>
                    <span style={{ color: 'var(--main)', fontWeight: 700, fontSize: '16px' }}>
                      0-800-255-52-38 / {siteInfo.phone1}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Worker Column */}
            <div className="col-6" style={{ textAlign: 'center' }}>
              <img
                src="/assets/wood-form-worker.png"
                alt="Window Installation Expert"
                style={{
                  maxHeight: '620px',
                  margin: '0 auto',
                  filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.3))',
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 9. RECENT BLOG ARTICLES */}
      <section style={{ padding: '90px 0', backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="section-subtitle">Our blog</span>
            <h2 className="section-title">Recent Articles</h2>
          </div>

          <div className="row">
            <div className="col-6" style={{ marginBottom: '30px' }}>
              <article
                style={{
                  border: '1px solid #ebebeb',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  height: '100%',
                }}
              >
                <div style={{ height: '280px', overflow: 'hidden' }}>
                  <img
                    src="/assets/blog-upvc-tirur.webp"
                    alt="uPVC vs Aluminium vs Wooden Windows"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div style={{ padding: '30px' }}>
                  <h3 style={{ fontSize: '22px', marginBottom: '14px' }}>
                    <Link
                      to="/best-upvc-windows-for-home-comparison/"
                      style={{ color: 'var(--black)' }}
                    >
                      uPVC vs Aluminium vs Wooden Windows: Which is Right for Your Home?
                    </Link>
                  </h3>
                  <p style={{ color: '#666', lineHeight: '1.7', marginBottom: '20px' }}>
                    When building or renovating your home, choosing the right window material is crucial. Windows affect not just the look of your home, but its insulation and energy efficiency...
                  </p>
                  <Link
                    to="/best-upvc-windows-for-home-comparison/"
                    className="btn btn-second"
                    style={{ padding: '10px 22px', fontSize: '13px' }}
                  >
                    Read more
                  </Link>
                </div>
              </article>
            </div>

            <div className="col-6" style={{ marginBottom: '30px' }}>
              <article
                style={{
                  border: '1px solid #ebebeb',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  height: '100%',
                }}
              >
                <div style={{ height: '280px', overflow: 'hidden' }}>
                  <img
                    src="/assets/blog_02.jpg"
                    alt="Why Is Our Window So Famous?"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div style={{ padding: '30px' }}>
                  <h3 style={{ fontSize: '22px', marginBottom: '14px' }}>
                    <Link to="/why-is-our-window-so-famous/" style={{ color: 'var(--black)' }}>
                      Why Is Our Window So Famous?
                    </Link>
                  </h3>
                  <p style={{ color: '#666', lineHeight: '1.7', marginBottom: '20px' }}>
                    Discover how our precision engineered uPVC windows became the preferred choice across thousands of residential and commercial properties in South India...
                  </p>
                  <Link
                    to="/why-is-our-window-so-famous/"
                    className="btn btn-second"
                    style={{ padding: '10px 22px', fontSize: '13px' }}
                  >
                    Read more
                  </Link>
                </div>
              </article>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '30px' }}>
            <Link to="/blog/" className="btn btn-main">
              Read more
            </Link>
          </div>
        </div>
      </section>

      {/* 10. CENTRAL OFFICE & OPENING HOURS */}
      <section style={{ padding: '90px 0', backgroundColor: '#f6f3ee' }}>
        <div className="container">
          <div className="row" style={{ alignItems: 'center' }}>
            {/* Central Office info */}
            <div className="col-4">
              <h3 style={{ fontSize: '26px', marginBottom: '10px' }}>Central Office</h3>
              <h4 style={{ color: 'var(--main)', marginBottom: '24px' }}>
                WhiteSquare upvc windoor
              </h4>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 25px 0', lineHeight: '2.2' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <i className="fa-solid fa-phone" style={{ color: 'var(--main)' }}></i>
                  <span>+91 9072000006</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <i className="fa-solid fa-envelope" style={{ color: 'var(--main)' }}></i>
                  <span>Sales@jbwhitesquare.com</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <i className="fa-solid fa-location-dot" style={{ color: 'var(--main)' }}></i>
                  <span>Tirur , Malappuram , kerala</span>
                </li>
              </ul>

              <div style={{ display: 'flex', gap: '12px' }}>
                <a
                  href="https://www.facebook.com/profile.php?id=61559805834259&mibextid=ZbWKwL"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--black)',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a
                  href="https://www.instagram.com/whitesquareupvc?igsh=d3lidTc3dncyZWVr"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--black)',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="col-4">
              <h3 style={{ fontSize: '26px', marginBottom: '20px' }}>Opening Hours</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, lineHeight: '2.1' }}>
                {siteInfo.hours.map((h, idx) => (
                  <li key={idx} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #ebe6dd', padding: '4px 0' }}>
                    <strong>{h.day}:</strong>
                    <span>{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Office Photo */}
            <div className="col-4">
              <img
                src="/assets/office-photo.png"
                alt="White Square Central Office"
                style={{ width: '100%', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 11. SEND MESSAGE CONTACT FORM */}
      <section style={{ padding: '90px 0', backgroundColor: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '850px' }}>
          <div className="section-header text-center">
            <h3 style={{ fontSize: '32px', color: 'var(--black)' }}>Send message</h3>
          </div>

          {contactSuccess ? (
            <div
              style={{
                padding: '20px',
                backgroundColor: '#e6f9ee',
                color: '#1b7f43',
                borderRadius: '8px',
                textAlign: 'center',
                fontWeight: 600,
              }}
            >
              <i className="fa-solid fa-circle-check" style={{ fontSize: '28px', marginBottom: '10px' }}></i>
              <p style={{ margin: 0 }}>Your message has been sent successfully! We will contact you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleContactSubmit}>
              <div className="row">
                <div className="col-6 form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your name*"
                    required
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                  />
                </div>
                <div className="col-6 form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your email*"
                    required
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                  />
                </div>
                <div className="col-12 form-group">
                  <textarea
                    className="form-control"
                    rows={6}
                    placeholder="Message*"
                    required
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                  ></textarea>
                </div>
                <div className="col-12 text-center" style={{ marginTop: '10px' }}>
                  <button type="submit" className="btn btn-second" style={{ minWidth: '180px' }}>
                    Submit
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Enquiry Modal */}
      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        productTitle={selectedProduct?.title}
        productSlug={selectedProduct?.slug}
      />
    </div>
  );
};
