import { Fragment } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Breadcrumbs } from "../components/StoreUi";
import { findPage } from "../data/store";
import { useDocumentTitle } from "../lib/meta";
import NotFoundPage from "./NotFoundPage";

export default function ContentPage() {
  const { slug = "" } = useParams();
  const page = findPage(slug);
  useDocumentTitle(page?.title ?? "Page Not Found");

  useEffect(() => {
    if (!page?.metaDescription) {
      return;
    }

    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;

    if (meta) {
      meta.setAttribute("content", page.metaDescription);
    } else {
      meta = document.createElement("meta") as HTMLMetaElement;
      meta.name = "description";
      meta.content = page.metaDescription;
      document.head.appendChild(meta);
    }
  }, [page?.metaDescription]);

  if (!page) {
    return <NotFoundPage />;
  }

  return (
    <div className="page-section">
      <div className="v-stack gap-8">
        <Breadcrumbs
          links={[
            { label: "Home", to: "/" },
            { label: "Pages", to: "/pages/our-story" },
            { label: page.title, to: `/pages/${page.slug}` },
          ]}
        />

        {page.heroImage ? (
          <div className="page-hero">
            <div className="content-over-media content-over-media--auto">
              <img src={page.heroImage} alt={page.title} />
            </div>
          </div>
        ) : null}

        <section className="rich-copy">
          <div className="prose">
            {page.eyebrow ? <p className="subheading">{page.eyebrow}</p> : null}
            <h1 className="h1">{page.title}</h1>
            {page.lastUpdated ? (
              <p className="text-sm text-subdued">{page.lastUpdated}</p>
            ) : null}
            <p>{page.intro}</p>
          </div>

          {page.bodyHtml ? (
            <div className="prose" dangerouslySetInnerHTML={{ __html: page.bodyHtml }} />
          ) : (
            page.body.map((paragraph, index) => (
              <Fragment key={`paragraph-${index}`}>
                <p>{paragraph}</p>
                {page.slug === "our-story" && index === 1 ? (
                  <section className="story-retail-section">
                    <h2 className="section-heading">Available Across Leading Retail Stores</h2>
                    <p>
                      You can find Mahalakshmi Tea Powders at trusted retail partners including:
                    </p>
                    <ul>
                      <li>Rathnadeep</li>
                      <li>Q-Mart</li>
                      <li>Selected supermarkets and retail outlets across Telangana and Andhra Pradesh</li>
                    </ul>
                    <p className="story-retail-note">
                      Every pack is created with care, ensuring that the authentic taste of premium tea reaches your home.
                    </p>
                  </section>
                ) : null}
              </Fragment>
            ))
          )}

          {page.cta ? (
            <div>
              <Link to={page.cta.to} className="button button--xl">
                {page.cta.label}
              </Link>
            </div>
          ) : null}
        </section>

        {page.timeline ? (
          <section
            className="section section-full"
            style={{ backgroundColor: "#fbf5ea", borderRadius: "24px" }}
          >
            <div className="section-stack page-section">
              <div className="div justify-center justify-items-center text-center">
                <div className="prose">
                  <p className="subheading">A STORY OF HERITAGE, PASSION & COMMITMENT</p>
                  <h2 className="h2">90 Years of Legacy</h2>
                </div>
              </div>

              <div className="story-timeline">
                {page.timeline.map((milestone) => (
                  <article key={milestone.year} className="story-timeline__item">
                    <p className="year">{milestone.year}</p>
                    <h3 className="h4">{milestone.title}</h3>
                    <p>{milestone.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        ) : null}
      </div>
    </div>
  );
}
