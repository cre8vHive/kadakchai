import { useState } from "react";
import type { FormEvent } from "react";
import { Link } from "react-router-dom";
import { useDocumentTitle } from "../lib/meta";

type AccountPageProps = {
  mode: "login" | "register" | "orders";
};

export default function AccountPage({ mode }: AccountPageProps) {
  const [submitted, setSubmitted] = useState(false);

  useDocumentTitle(mode === "orders" ? "Orders" : mode === "register" ? "Create Account" : "Account");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (mode === "orders") {
    return (
      <div className="page-section">
        <div className="cart-page__panel auth-shell">
          <h1 className="h2">Orders</h1>
          <p>
            This account area is now a native local React route. Hook your auth and orders APIs into
            this template when you are ready.
          </p>
          <div className="auth-links">
            <Link to="/account/login" className="button button--xl">
              Go To Login
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-section">
      <div className="auth-shell">
        <div className="prose">
          <h1 className="h2">{mode === "register" ? "Create Account" : "Account"}</h1>
          <p>
            The layout is fully local and ready for API wiring. For now, form submission is UI-only.
          </p>
        </div>

        <form className="customer-form" onSubmit={handleSubmit}>
          {mode === "register" ? (
            <>
              <div className="field">
                <label className="field__label" htmlFor="register-first-name">
                  First name
                </label>
                <input id="register-first-name" className="field__input" type="text" required />
              </div>
              <div className="field">
                <label className="field__label" htmlFor="register-last-name">
                  Last name
                </label>
                <input id="register-last-name" className="field__input" type="text" required />
              </div>
            </>
          ) : null}

          <div className="field">
            <label className="field__label" htmlFor={`${mode}-email`}>
              E-mail
            </label>
            <input id={`${mode}-email`} className="field__input" type="email" required />
          </div>

          <div className="field">
            <label className="field__label" htmlFor={`${mode}-password`}>
              Password
            </label>
            <input id={`${mode}-password`} className="field__input" type="password" required />
          </div>

          {mode === "register" ? (
            <div className="field">
              <label className="field__label" htmlFor="register-phone">
                Phone
              </label>
              <input id="register-phone" className="field__input" type="tel" />
            </div>
          ) : null}

          <button type="submit" className="button button--xl">
            {mode === "register" ? "Create Account" : "Sign In"}
          </button>
        </form>

        {submitted ? (
          <p className="inline-note">UI captured. Connect your auth API to make this form live.</p>
        ) : null}

        <div className="auth-links">
          {mode === "register" ? (
            <p>
              Already have an account? <Link to="/account/login">Sign in</Link>
            </p>
          ) : (
            <>
              <p>
                New here? <Link to="/account/register">Create an account</Link>
              </p>
              <p>
                Forgot password? <button type="button" className="button button--outline button--sm">Reset Flow Later</button>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
