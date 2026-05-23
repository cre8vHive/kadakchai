import { siteSettings } from "../data/store";

const RAZORPAY_CHECKOUT_SCRIPT = "https://checkout.razorpay.com/v1/checkout.js";

export type RazorpayCheckoutLine = {
  name: string;
  quantity: number;
  variant: string;
};

export type RazorpayCheckoutInput = {
  amount: number;
  description: string;
  items: RazorpayCheckoutLine[];
  onDismiss?: () => void;
  onError: (message: string) => void;
  onSuccess: (paymentId: string) => void;
};

type RazorpayResponse = {
  razorpay_payment_id: string;
};

type RazorpayFailureResponse = {
  error?: {
    description?: string;
  };
};

type RazorpayOptions = {
  amount: number;
  currency: "INR";
  description: string;
  handler: (response: RazorpayResponse) => void;
  image?: string;
  key: string;
  modal: {
    ondismiss?: () => void;
  };
  name: string;
  notes: Record<string, string>;
  theme: {
    color: string;
  };
};

type RazorpayInstance = {
  on: (event: "payment.failed", handler: (response: RazorpayFailureResponse) => void) => void;
  open: () => void;
};

declare global {
  interface Window {
    Razorpay?: new (options: RazorpayOptions) => RazorpayInstance;
  }
}

let checkoutScriptPromise: Promise<void> | null = null;

function loadRazorpayCheckout() {
  if (window.Razorpay) {
    return Promise.resolve();
  }

  if (!checkoutScriptPromise) {
    checkoutScriptPromise = new Promise((resolve, reject) => {
      const existingScript = document.querySelector<HTMLScriptElement>(
        `script[src="${RAZORPAY_CHECKOUT_SCRIPT}"]`,
      );

      if (existingScript) {
        existingScript.addEventListener("load", () => resolve(), { once: true });
        existingScript.addEventListener("error", () => reject(new Error("Razorpay failed to load.")), {
          once: true,
        });
        return;
      }

      const script = document.createElement("script");
      script.src = RAZORPAY_CHECKOUT_SCRIPT;
      script.async = true;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error("Razorpay failed to load."));
      document.body.appendChild(script);
    });
  }

  return checkoutScriptPromise;
}

export function getRazorpayKeyId() {
  return import.meta.env.VITE_RAZORPAY_KEY_ID as string | undefined;
}

export async function openRazorpayCheckout({
  amount,
  description,
  items,
  onDismiss,
  onError,
  onSuccess,
}: RazorpayCheckoutInput) {
  const key = getRazorpayKeyId();

  if (!key) {
    throw new Error("Missing VITE_RAZORPAY_KEY_ID. Add your Razorpay Key ID to the environment.");
  }

  await loadRazorpayCheckout();

  if (!window.Razorpay) {
    throw new Error("Razorpay checkout is unavailable right now.");
  }

  const checkout = new window.Razorpay({
    amount: Math.round(amount * 100),
    currency: "INR",
    description,
    handler: (response) => onSuccess(response.razorpay_payment_id),
    image: siteSettings.logo,
    key,
    modal: {
      ondismiss: onDismiss,
    },
    name: siteSettings.brandName,
    notes: {
      cart: items
        .map((item) => `${item.name} (${item.variant}) x ${item.quantity}`)
        .join("; ")
        .slice(0, 256),
      source: "kadakchai-client-only-checkout",
    },
    theme: {
      color: "#004a2b",
    },
  });

  checkout.on("payment.failed", (response) =>
    onError(response.error?.description ?? "Payment failed. Please try again."),
  );

  checkout.open();
}
