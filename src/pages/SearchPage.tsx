import { useDeferredValue, useEffect, useState } from "react";
import type { FormEvent } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ProductCard } from "../components/StoreUi";
import { searchStore, siteSettings } from "../data/store";
import { useDocumentTitle } from "../lib/meta";

export default function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentQuery = searchParams.get("q") ?? "";
  const [query, setQuery] = useState(currentQuery);
  const deferredQuery = useDeferredValue(query);
  const results = searchStore(deferredQuery);

  useDocumentTitle("Search");

  useEffect(() => {
    setQuery(currentQuery);
  }, [currentQuery]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextSearchParams = new URLSearchParams(searchParams);
    const trimmedQuery = query.trim();

    if (trimmedQuery) {
      nextSearchParams.set("q", trimmedQuery);
    } else {
      nextSearchParams.delete("q");
    }

    setSearchParams(nextSearchParams, { replace: true });
  }

  const hasQuery = currentQuery.trim().length > 0;

  return (
    <div className="page-section search-page">
      <div className="v-stack gap-8">
        <div className="rich-copy">
          <div className="prose">
            <h1 className="h2">Search</h1>
          </div>

          <form className="main-search-form" role="search" onSubmit={handleSubmit}>
            <div className="v-stack gap-6">
              <div className="search-input">
                <input
                  type="search"
                  name="q"
                  value={query}
                  placeholder="Search for..."
                  autoComplete="off"
                  autoCorrect="off"
                  spellCheck={false}
                  aria-label="Search"
                  onChange={(event) => setQuery(event.target.value)}
                />
              </div>

              <div>
                <button type="submit" className="button button--xl">
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>

        {!hasQuery ? (
          <div className="v-stack gap-8">
            <section className="predictive-search__trending">
              <p className="search-drawer__heading">TRENDING SEARCHES</p>
              <ul className="v-stack gap-0" role="list">
                {siteSettings.topSearches.map((term) => (
                  <li key={term} className="search-trending-item">
                    <Link to={`/search?q=${encodeURIComponent(term)}`} className="search-trending-link">
                      <span>{term}</span>
                      <span className="search-arrow" aria-hidden="true">
                        ↗
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            <section className="search-page__aside">
              <p className="search-drawer__heading">TOP PRODUCTS</p>
              <div className="search-page__products">
                {searchStore("tea").products.slice(0, 3).map((product) => (
                  <ProductCard key={product.slug} product={product} />
                ))}
              </div>
            </section>
          </div>
        ) : (
          <div className="v-stack gap-10">
            <div className="collection-grid-meta">
              <p className="text-subdued">
                {results.products.length} products, {results.collections.length} collections, {results.pages.length} pages
              </p>
              <p className="text-subdued">Local search is powered by TypeScript data only</p>
            </div>

            {results.products.length > 0 ? (
              <section className="v-stack gap-6">
                <p className="search-drawer__heading">PRODUCTS</p>
                <div className="product-grid">
                  {results.products.map((product) => (
                    <ProductCard key={product.slug} product={product} />
                  ))}
                </div>
              </section>
            ) : null}

            {results.collections.length > 0 ? (
              <section className="search-page__aside">
                <p className="search-drawer__heading">COLLECTIONS</p>
                <div className="search-page__meta-list">
                  {results.collections.map((collection) => (
                    <Link
                      key={collection.slug}
                      to={`/collections/${collection.slug}`}
                      className="search-page__meta-link"
                    >
                      <strong>{collection.title}</strong>
                      <span className="muted-copy">{collection.description}</span>
                    </Link>
                  ))}
                </div>
              </section>
            ) : null}

            {results.pages.length > 0 ? (
              <section className="search-page__aside">
                <p className="search-drawer__heading">PAGES</p>
                <div className="search-page__meta-list">
                  {results.pages.map((page) => (
                    <Link key={page.slug} to={`/pages/${page.slug}`} className="search-page__meta-link">
                      <strong>{page.title}</strong>
                      <span className="muted-copy">{page.intro}</span>
                    </Link>
                  ))}
                </div>
              </section>
            ) : null}

            {results.products.length === 0 &&
            results.collections.length === 0 &&
            results.pages.length === 0 ? (
              <div className="empty-state-card">
                <p className="h5">No results found for “{currentQuery}”</p>
                <p className="muted-copy">
                  Try “supplements”, “green tea”, “moringa”, or “our story”.
                </p>
              </div>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
}
