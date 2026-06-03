import { Navigate, useParams } from "react-router-dom";
import { findCollection, getCollectionBundle, getCollectionProducts } from "../data/store";
import { useDocumentTitle } from "../lib/meta";
import { Breadcrumbs, CollectionBundleCard, ProductCard } from "../components/StoreUi";
import { useCart } from "../context/CartContext";

export default function CollectionPage() {
  const { slug = "" } = useParams();
  const collection = findCollection(slug.toLowerCase());
  const { addItem } = useCart();

  if (!collection) {
    return <Navigate to="/collections/all" replace />;
  }

  const products = getCollectionProducts(collection.slug);
  const bundle = getCollectionBundle(collection.slug);
  const canAddBundle = Boolean(bundle?.products.length && bundle.products.some((product) => product.variantOptions[0]));

  function handleAddBundleToCart() {
    if (!bundle) {
      return;
    }

    bundle.products.forEach((product) => {
      const primaryVariant = product.variantOptions[0];

      if (!primaryVariant) {
        return;
      }

      addItem(product, primaryVariant);
    });
  }

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
        </div>

        <div className="product-grid">
          {bundle && canAddBundle ? (
            <CollectionBundleCard
              title={`Kadakchai Complete ${collection.title} Bundle`}
              subtitle={`All available products from the ${collection.title} collection, added together in one easy purchase.`}
              image={bundle.collection.heroImage}
              productCount={bundle.products.length}
              totalPrice={bundle.totalPrice}
              totalCompareAtPrice={bundle.totalCompareAtPrice}
              onAddBundle={handleAddBundleToCart}
            />
          ) : null}

          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
