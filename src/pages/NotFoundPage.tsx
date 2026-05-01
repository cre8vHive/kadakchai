import { Link } from "react-router-dom";
import { useDocumentTitle } from "../lib/meta";

export default function NotFoundPage() {
  useDocumentTitle("Page Not Found");

  return (
    <div className="page-section">
      <div className="empty-state-card rich-copy">
        <div className="prose">
          <h1 className="h2">Page unavailable</h1>
          <p>
            This route has not been mapped into the local React storefront yet, or the slug does not
            exist in the current local data set.
          </p>
        </div>

        <div>
          <Link to="/" className="button button--xl">
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
