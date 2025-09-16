import "./styles.css";
import {
  MessageSquare,
  FileText,
  UserCheck,
  Headphones,
  Star,
  Bed,
  Bath,
  Car,
  Home,
} from "lucide-react";

export default function RealEstateLanding() {
  return (
    <div className="bg-dark-navy text-white" style={{ minHeight: "100vh" }}>
      {/* Navigation */}
      <nav className="nav">
        <div className="flex-between">
          <div className="nav-logo">
            <div className="nav-logo-icon">
              <Home
                style={{ width: "16px", height: "16px", color: "#1e233e" }}
              />
            </div>
            <span className="font-semibold" style={{ color: "#1e233e" }}>
              LOGO
            </span>
          </div>
          <div className="nav-links">
            <a href="#">Accueil</a>
            <a href="#">Propriétés</a>
            <a href="#">Agents</a>
            <a href="#">Services</a>
          </div>
          <button className="btn btn-outline">+33 XXXXXXXXX</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-image-container">
            <img
              src="/modern-luxury-villa-architecture-with-glass-walls-.jpg"
              alt="Modern luxury villa"
              className="hero-image"
            />
            <div className="hero-overlay">
              <div className="hero-content">
                <h1 className="hero-title">
                  Des logements pensés
                  <br />
                  pour votre style de vie
                </h1>
                <button className="btn btn-primary px-8">BOOK NOW</button>
                <p className="hero-description">
                  Découvrez nos propriétés exclusives et trouvez votre maison de
                  rêve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="container">
          <h2 className="services-title">EVERYTHING SHOULD BE THIS EASY.</h2>
          <div className="grid grid-cols-1 grid-md-4 gap-8">
            <div className="service-item">
              <div className="service-icon">
                <MessageSquare
                  style={{ width: "32px", height: "32px", color: "#cdb876" }}
                />
              </div>
              <span className="text-sm">Answer questions</span>
            </div>
            <div className="service-item">
              <div className="service-icon">
                <FileText
                  style={{ width: "32px", height: "32px", color: "#cdb876" }}
                />
              </div>
              <span className="text-sm">Select a quote</span>
            </div>
            <div className="service-item">
              <div className="service-icon">
                <UserCheck
                  style={{ width: "32px", height: "32px", color: "#cdb876" }}
                />
              </div>
              <span className="text-sm">Get registered</span>
            </div>
            <div className="service-item">
              <div className="service-icon">
                <Headphones
                  style={{ width: "32px", height: "32px", color: "#cdb876" }}
                />
              </div>
              <span className="text-sm">Service d'assistance</span>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="projects">
        <div className="container">
          <div className="projects-header">
            <h2 className="projects-title">OUR RECENT PROJECTS</h2>
            <div className="pagination-dots">
              <div className="dot dot-active"></div>
              <div className="dot dot-inactive"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 grid-md-3 gap-6">
            <div className="project-card relative">
              <img
                src="/luxury-villa-interior-with-modern-kitchen.jpg"
                alt="Villa Elegance à Agadir"
                className="project-image"
              />
              <div className="project-overlay">
                <h3 className="project-title">Villa Elegance à Agadir</h3>
                <p className="project-description">
                  Une villa moderne avec vue sur l'océan, offrant luxe et
                  confort dans un cadre exceptionnel.
                </p>
                <div className="rating">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="star" />
                  ))}
                  <span className="text-white-80 text-sm ml-2">4.8</span>
                </div>
              </div>
            </div>
            <div className="project-card relative">
              <img
                src="/modern-apartment-exterior.png"
                alt="Villa Harmonie à Tanger"
                className="project-image"
              />
              <div className="project-overlay">
                <h3 className="project-title">Villa Harmonie à Tanger</h3>
                <p className="project-description">
                  Architecture contemporaine alliant tradition et modernité dans
                  un environnement paisible.
                </p>
                <div className="rating">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="star" />
                  ))}
                  <span className="text-white-80 text-sm ml-2">4.9</span>
                </div>
              </div>
            </div>
            <div className="project-card relative">
              <img
                src="/luxury-penthouse-city-view.png"
                alt="Villa à Dar Dour CASABLANCA"
                className="project-image"
              />
              <div className="project-overlay">
                <h3 className="project-title">Villa à Dar Dour CASABLANCA</h3>
                <p className="project-description">
                  Résidence de prestige au cœur de Casablanca, parfaite pour une
                  vie urbaine raffinée.
                </p>
                <div className="rating">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="star" />
                  ))}
                  <span className="text-white-80 text-sm ml-2">4.7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Villa */}
      <section className="featured-villa">
        <div className="container">
          <div className="villa-grid">
            <div className="relative">
              <img
                src="/luxury-villa-with-pool-and-modern-architecture-in-.jpg"
                alt="Villa Oasis à Marrakech"
                className="villa-image"
              />
            </div>
            <div>
              <h2 className="villa-title">VILLA OASIS À MARRAKECH</h2>
              <p className="villa-description">
                Plongez dans un havre de paix au cœur de la nature. Villa Oasis
                vous offre une expérience unique alliant luxe et sérénité,
                conçue pour répondre à vos besoins les plus exigeants. Chaque
                espace a été pensé pour créer une ambiance apaisante et
                luxueuse.
              </p>
              <p className="villa-description">
                Des terrasses ouvertes baignées de lumière et de verdure,
                jusqu'aux espaces intérieurs raffinés, cette villa incarne l'art
                de vivre marocain moderne. Un lieu où règne une ambiance
                apaisante et luxueuse.
              </p>
              <div className="villa-features">
                <div className="feature-item">
                  <div className="feature-icon-container">
                    <Bed className="feature-icon" />
                    <span className="feature-number">2</span>
                  </div>
                  <span className="feature-label">Chambres</span>
                </div>
                <div className="feature-item">
                  <div className="feature-icon-container">
                    <Bath className="feature-icon" />
                    <span className="feature-number">2</span>
                  </div>
                  <span className="feature-label">Salles de bain</span>
                </div>
                <div className="feature-item">
                  <div className="feature-icon-container">
                    <Home className="feature-icon" />
                    <span className="feature-number">1</span>
                  </div>
                  <span className="feature-label">Salon</span>
                </div>
                <div className="feature-item">
                  <div className="feature-icon-container">
                    <Car className="feature-icon" />
                    <span className="feature-number">2</span>
                  </div>
                  <span className="feature-label">Parking</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Divider */}
      <div className="py-8">
        <div className="container">
          <div className="decorative-divider"></div>
        </div>
      </div>

      {/* Company Section */}
      <section className="company">
        <div className="container">
          <div className="company-header">
            <h2 className="company-title">WE ARE A GLOBAL, BOUTIQUE</h2>
            <h2 className="company-subtitle">REAL ESTATE BROKERAGE</h2>
          </div>
          <div className="company-grid">
            <div>
              <h3 className="company-section-title">
                THE TRANSFER OF REAL ESTATE
              </h3>
              <p className="company-description">
                Notre équipe d'experts immobiliers s'engage à vous offrir un
                service personnalisé et professionnel. Nous comprenons que
                l'achat ou la vente d'une propriété est l'une des décisions les
                plus importantes de votre vie. C'est pourquoi nous mettons tout
                en œuvre pour vous accompagner à chaque étape.
              </p>
              <div className="company-buttons">
                <button className="btn btn-outline">Read More</button>
                <button className="btn btn-primary">Our Services</button>
              </div>
              <div className="stats">
                <div className="stat-item">
                  <div className="stat-number">32+</div>
                  <div className="stat-label">Projets</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">10+</div>
                  <div className="stat-label">Années</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">50+</div>
                  <div className="stat-label">Clients</div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="/professional-real-estate-team-working-with-documen.jpg"
                alt="Real estate professionals"
                className="company-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <div className="container">
          <h2 className="contact-title">CONTACT US</h2>
          <div className="contact-card">
            <div className="contact-grid p-0">
              <div className="px-8 py-8">
                <img
                  src="/modern-villa-exterior-with-contemporary-architectu.jpg"
                  alt="Contact villa"
                  className="contact-image"
                />
              </div>
              <div className="px-8 py-8">
                <h3 className="contact-form-title">Book appartement</h3>
                <p className="contact-form-description">
                  Un nouveau style d'appartement avec vue sur la mer. Réservez
                  maintenant pour découvrir le luxe.
                </p>
                <form className="form">
                  <div className="form-row">
                    <input placeholder="Nom" className="input" />
                    <input placeholder="Prénom" className="input" />
                  </div>
                  <input placeholder="Email" type="email" className="input" />
                  <input placeholder="Téléphone" className="input" />
                  <button className="btn btn-primary w-full">
                    Send message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Divider */}
      <div className="py-8">
        <div className="container">
          <div className="decorative-divider"></div>
        </div>
      </div>

      {/* Location Section */}
      <section className="location">
        <div className="container">
          <h2 className="location-title">OUR LOCALISATION</h2>
          <div className="map-container">
            <img
              src="/map-of-morocco-showing-major-cities-like-casablanc.jpg"
              alt="Morocco map"
              className="map-image"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <div className="footer-brand">
                <div className="footer-logo-icon">
                  <Home
                    style={{ width: "16px", height: "16px", color: "#1e233e" }}
                  />
                </div>
                <span className="font-semibold">LOGO</span>
              </div>
              <p className="footer-description">
                Votre partenaire de confiance pour tous vos projets immobiliers
                au Maroc.
              </p>
              <div className="social-links">
                <div className="social-link">f</div>
                <div className="social-link">t</div>
                <div className="social-link">in</div>
                <div className="social-link">ig</div>
              </div>
            </div>
            <div>
              <h4 className="footer-section-title">SERVICES</h4>
              <ul className="footer-links">
                <li>
                  <a href="#">Vente de propriétés</a>
                </li>
                <li>
                  <a href="#">Location</a>
                </li>
                <li>
                  <a href="#">Gestion immobilière</a>
                </li>
                <li>
                  <a href="#">Conseil en investissement</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="footer-section-title">LIENS UTILES</h4>
              <ul className="footer-links">
                <li>
                  <a href="#">À propos</a>
                </li>
                <li>
                  <a href="#">Nos projets</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Carrières</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="footer-section-title">CONTACT INFO</h4>
              <ul className="footer-links">
                <li>+212 XXX XXX XXX</li>
                <li>contact@example.com</li>
                <li>Casablanca, Maroc</li>
              </ul>
              <div className="mt-4">
                <input placeholder="Votre email" className="input mb-2" />
                <button className="btn btn-primary w-full text-sm">
                  S'abonner
                </button>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Real Estate Company. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
