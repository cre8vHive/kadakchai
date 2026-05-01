import { useParams } from "react-router-dom";
import { findCollection, getCollectionProducts } from "../data/store";
import { useDocumentTitle } from "../lib/meta";
import NotFoundPage from "./NotFoundPage";
import { Breadcrumbs, ProductCard } from "../components/StoreUi";

export default function CollectionPage() {
  const { slug = "" } = useParams();
  const collection = findCollection(slug);

  if (!collection) {
    return <NotFoundPage />;
  }

  const products = getCollectionProducts(collection.slug);
  useDocumentTitle(collection.title);

  return (
    <div className="page-section">
      <div className="v-stack gap-8">
        <Breadcrumbs
          links={[
            { label: "Home", to: "/" },
            { label: "Collections", to: "/collections/all" },
            { label: collection.title, to: `/collections/${collection.slug}` },
          ]}
        />

        <section className="collection-hero v-stack gap-6">
          <div className="page-hero">
            <div className="content-over-media content-over-media--auto">
              <img src={collection.heroImage} alt={collection.title} />
            </div>
          </div>

          <div className="collection-hero__copy prose">
            <p className="subheading">{collection.eyebrow ?? "Collection"}</p>
            <h1 className="h1">{collection.title}</h1>
            <p>{collection.description}</p>
          </div>
        </section>

        <div className="collection-grid-meta">
          <p className="text-subdued">{products.length} products</p>
          <p className="text-subdued">UI-only collection template with local data</p>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
