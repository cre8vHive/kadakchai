import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  celebrityTestimonials,
  collections,
  communityReviews,
  getCollectionProducts,
  homeSlides,
} from "../data/store";
import { useDocumentTitle } from "../lib/meta";
import { CollectionCard, ProductCard } from "../components/StoreUi";

export default function HomePage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const featuredProducts = getCollectionProducts("best-sellers");
  const categoryCollections = collections.filter((collection) =>
    ["supplements", "green-teas", "herbal-tea"].includes(collection.slug),
  );

  useDocumentTitle("Home");

  useEffect(() => {
    const timerId = window.setInterval(() => {
      setActiveSlide((currentSlide) => (currentSlide + 1) % homeSlides.length);
    }, 5000);

    return () => {
      window.clearInterval(timerId);
    };
  }, []);

  const currentSlide = homeSlides[activeSlide];

  return (
    <>
      <section className="shopify-section shopify-section--slideshow">
        <div className="home-slideshow">
          <Link to={currentSlide.to} className="home-slide-link">
            <div className="content-over-media content-over-media--auto">
              <img src={currentSlide.image} alt={currentSlide.title} />
              <div className="story-band__content" style={{ padding: "7vw", color: "#fff" }}>
                <div className="prose">
                  {currentSlide.eyebrow ? <p className="subheading">{currentSlide.eyebrow}</p> : null}
                  <h2 className="h1">{currentSlide.title}</h2>
                  {currentSlide.body ? <p>{currentSlide.body}</p> : null}
                  <span className="button button--xl">Shop Now</span>
                </div>
              </div>
            </div>
          </Link>

          <div className="home-dots">
            {homeSlides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                className={`numbered-dots__item ${index === activeSlide ? "is-active" : ""}`}
                onClick={() => setActiveSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="shopify-section shopify-section--collection-list">
        <div
          className="section section-full page-section"
          style={{ backgroundColor: "#fbf5ea", color: "#161616" }}
        >
          <div className="section-stack">
            <section-header className="section-header">
              <div className="prose">
                <p className="subheading">Something for Everyone</p>
                <h2 className="h2">
                  <span className="text-custom" style={{ color: "#ab8744" }}>
                    Shop by Category
                  </span>
                </h2>
              </div>
            </section-header>

            <div className="collection-list">
              {categoryCollections.map((collection) => (
                <CollectionCard key={collection.slug} collection={collection} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="shopify-section shopify-section--collection-tabs">
        <div className="section section-blends section-full page-section">
          <div className="section-stack">
            <section-header className="section-header">
              <div className="prose">
                <p className="subheading">Best Sellers</p>
                <h2 className="h2">Shop the Most Loved Picks</h2>
              </div>
            </section-header>

            <div className="product-grid">
              {featuredProducts.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="shopify-section shopify-section--testimonial">
        <div
          className="section section-full page-section"
          style={{ backgroundColor: "#fbf5ea", color: "#161616" }}
        >
          <div className="section-stack">
            <section-header className="section-header">
              <div className="prose">
                <p className="subheading">Loved by Celebrities</p>
                <h2 className="h2">
                  <span className="text-custom" style={{ color: "#ab8744" }}>
                    Trusted by Millions
                  </span>
                </h2>
              </div>
            </section-header>

            <div className="celebrity-grid">
              {celebrityTestimonials.map((testimonial) => (
                <article
                  key={testimonial.author}
                  className="testimonial bg-custom"
                  style={{ backgroundColor: "#fbf5ea" }}
                >
                  <img src={testimonial.image} alt={testimonial.author} className="zoom-image rounded" />
                  <div className="v-stack testimonial-body" style={{ marginTop: "16px" }}>
                    <p>“{testimonial.quote}”</p>
                    <p className="bold">{testimonial.author}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="shopify-section shopify-section--ugc">
        <div className="section section-blends section-full page-section">
          <div className="section-stack">
            <section-header className="section-header">
              <div className="prose">
                <p className="subheading">Loved by Everyone</p>
                <h2 className="h2">250,000+ Reviews (4.9/5 Stars)</h2>
              </div>
            </section-header>

            <div className="review-grid">
              {communityReviews.map((review) => (
                <article key={review.handle} className="review-tile">
                  <img src={review.image} alt={review.title} />
                  <div className="review-tile__body">
                    <h3 className="h4">{review.title}</h3>
                    <p className="handle">{review.handle}</p>
                    <p>{review.quote}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="shopify-section shopify-section--story-band">
        <div className="section section-full page-section">
          <div className="story-band rounded">
            <div className="content-over-media content-over-media--auto">
              <img src={currentSlide.image} alt="" />
              <div className="story-band__content" style={{ padding: "7vw", color: "#fffced" }}>
                <div className="prose">
                  <p className="subheading">A Legacy of 90+ Years</p>
                  <h2 className="h2">The same brand feel, now fully local.</h2>
                  <p>
                    The storefront runtime is now native React + TypeScript, while the original
                    styling direction stays intact through the downloaded theme assets.
                  </p>
                  <Link to="/pages/our-story" className="button button--xl">
                    Explore Our Story
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
