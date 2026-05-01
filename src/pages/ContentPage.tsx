import { Link, useParams } from "react-router-dom";
import { Breadcrumbs } from "../components/StoreUi";
import { findPage } from "../data/store";
import { useDocumentTitle } from "../lib/meta";
import NotFoundPage from "./NotFoundPage";

export default function ContentPage() {
  const { slug = "" } = useParams();
  const page = findPage(slug);

  if (!page) {
    return <NotFoundPage />;
  }

  useDocumentTitle(page.title);

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
            <p>{page.intro}</p>
          </div>

          {page.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}

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
              <section-header className="section-header justify-center justify-items-center text-center">
                <div className="prose">
                  <p className="subheading">A STORY OF HERITAGE, PASSION & COMMITMENT</p>
                  <h2 className="h2">90 Years of Legacy</h2>
                </div>
              </section-header>

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
