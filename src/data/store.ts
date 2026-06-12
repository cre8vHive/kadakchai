import logo from "../files/Vahdam_logo0ffc.jpg";
// import storyBanner from "../files/Hibiscus&Celestail.png";
import heroTurmeric from "../files/Hibiscus&Celestail.png";
import heroSupplements from "../files/Kadak_chai1.png";
import heroGreenTeas from "../files/Rose&Blue.png";
import collectionAllBanner from "../files/All_collections.png";
import Bestsellers from "../files/KADAK&BLUE.png";
import oprah from "../files/Mano.png";
import ellen from "../files/Ellenc2a3.png";
import mariah from "../files/Mariah_Careyc2a3.png";
import discoveryKit from "../files/Rose gold.png";
import turmericCapsules from "../files/Kadak Chai 1.png";
import moringaPowder from "../files/Super dust 2.png";
import chamomileMint from "../files/Blue tea.png";
import honeyLemon from "../files/Hibiscus.png";
import moringaTulsi from "../files/celestial.png";
import instagramIcon from "../files/insta371e.svg";
import facebookIcon from "../files/facebook7d9f.svg";
import linkedinIcon from "../files/linkedin013a.svg";
import type {
  CelebrityTestimonial,
  Collection,
  CommunityReview,
  ContentPage,
  HeroSlide,
  Product,
  SearchResults,
  SiteLink,
} from "../types/store";

export const siteSettings = {
  brandName: "Mahalakshmi Tea Powder",
  logo,
  announcementItems: [
    "Limited stock available"
  ],
  primaryNav: [
    { label: "Teas", to: "/collections/supplements" },
    { label: "Green Teas", to: "/collections/green-teas" },
    { label: "Herbal Infusions", to: "/collections/herbal-tea" },
    { label: "Bestsellers", to: "/collections/best-sellers" },
    { label: "Our Story", to: "/pages/our-story" },
  ] satisfies SiteLink[],
  footerMenus: {
    learn: [
      { label: "Our Story", to: "/pages/our-story" }
    ] satisfies SiteLink[],
    shop: [
      { label: "Bestsellers", to: "/collections/best-sellers" },
      { label: "Teas", to: "/collections/supplements" },
      { label: "Herbal Infusions", to: "/collections/herbal-tea" },
      { label: "All Collections", to: "/collections/all" },
    ] satisfies SiteLink[],
    support: [
      { label: "Contact Us", to: "/pages/contact-us" },
      { label: "Privacy Policy", to: "/pages/privacy-policy" },
      { label: "Terms & Conditions", to: "/pages/terms-conditions" },
    ] satisfies SiteLink[],
  },
  socialLinks: [
    { href: "https://www.instagram.com/vahdam", icon: instagramIcon, label: "Instagram" },
    { href: "https://www.facebook.com/vahdamindia", icon: facebookIcon, label: "Facebook" },
    { href: "https://www.linkedin.com/company/vahdam-teas/", icon: linkedinIcon, label: "LinkedIn" },
  ],
  topSearches: ["Teas", "Herbal Tea", "Green Tea"],
  footerDisclaimer:
    "These Statements Have Not Been Evaluated by the Food and Drug Administration. This Product Is Not Intended to Diagnose, Treat, Cure, or Prevent Any Disease. This Product Is a Dietary Supplement. Not Intended as a Conventional Food, Coffee, or Meal Replacement. This Product Has Been Manufactured in a Third-Party Facility That Is Compliant With Current Good Manufacturing Practices (cGMP) for Dietary Supplement (21 CFR Part 111). Mahalakshmi® Teas Pvt. Ltd. Does Not Directly Manufacture This Product.",
} as const;

export const homeSlides: HeroSlide[] = [
  {
    id: "turmeric",
    image: heroTurmeric,
    eyebrow: "",
    title: "",
    body: "",
    to: "/collections/herbal-tea",
  },
  {
    id: "supplements",
    image: heroSupplements,
    eyebrow: "",
    title: "",
    body: "",
    to: "/collections/supplements",
  },
  {
    id: "green-teas",
    image: heroGreenTeas,
    eyebrow: "",
    title: "",
    body: "",
    to: "/collections/green-teas",
  },
];

export const products: Product[] = [
  {
    slug: "Rose Gold Tea",
    title: "Rose Gold Tea - Orthodox Long Leaf",
    shortTitle: "Rose Gold Tea - Orthodox Long Leaf ",
    subtitle: "Premium Green Tea Blend | Floral Aroma",
    badge: "Bestseller",
    image: discoveryKit,
    dimensions: { width: 400, height: 500 },
    price: 399,
    rating: 4.69,
    reviewCount: 26,
    description: [
      "A calming trio of Green Teas with Ashwagandha in Moringa Tulsi, Chamomile Mint, and Honey Lemon.",
      "Crafted for stress-free weight management, they help keep cravings - especially during the 4 PM slump - in check while supporting balance and calm.",
      "Moringa Tulsi supports immunity, Chamomile Mint helps you relax, and Honey Lemon keeps you refreshed and rejuvenated with every sip.",
    ],
    benefits: [
      "Stress-free daily green tea ritual",
      "Supports calm, balance, and light refreshment",
      "Great starter format for gifting or sampling",
    ],
    ingredients: [
      "Ashwagandha",
      "Moringa Tulsi Green Tea",
      "Chamomile Mint Green Tea",
      "Honey Lemon Green Tea",
    ],
    heroNote: "UI-only purchase flow for now. You can wire the backend APIs later without replacing the page structure.",
    collectionSlugs: ["best-sellers", "green-teas", "all"],
    searchTerms: ["starter kit", "green tea", "gift", "sampler", "ashwagandha"],
    variantOptions: [
      {
        id: "wsk-pack-3",
        label: "Pack of 3",
        cartLabel: "50 Grams",
        price: 399,
        compareAtPrice: 1239,
      },
    ],
    reviews: [
      { author: "Neha Joshi", rating: 5, title: "Pretty good", body: "Noticed gradual improvement over time. (9-welln)" },
      { author: "Karan Shah", rating: 4, body: "Light, refreshing and easy to drink. (10-welln)" },
      { author: "Vikas Bansal", rating: 5, title: "Pretty good", body: "Good quality but takes time to show effects. (3-welln)" },
      { author: "Karan Desai", rating: 5, title: "Pretty good", body: "Really enjoyed the flavour and felt a positive difference. (12-welln)" },
      { author: "Isha Jain", rating: 4, title: "Worth trying", body: "Really enjoyed the flavour and felt a positive difference. (5-welln)" },
    ],
  },
  {
    slug: "Kadak Chai",
    title: "Kadak Chai - The Strong Classic",
    shortTitle: "Kadak Chai – The Strong Classic",
    badge: "18% OFF",
    image: turmericCapsules,
    dimensions: { width: 400, height: 500 },
    price: 250,
    rating: 4.9,
    reviewCount: 312,
    description: [
      "Awaken your senses with the robust and invigorating flavor of our Kadak Chai. Specially crafted for those who prefer a bold, strong cup, this blend captures theauthentic spirit of traditional Indian tea culture.",
      "Made for a consistent wellness routine with clean ingredient storytelling and the same visual identity as the original storefront.",
    ],
    benefits: [
      "High-curcumin turmeric support",
      "Daily mobility and recovery ritual",
      "Clean premium supplement presentation",
    ],
    ingredients: ["Lakadong Turmeric", "Curcumin", "Black Pepper Extract"],
    collectionSlugs: ["supplements", "best-sellers", "all"],
    searchTerms: ["turmeric", "curcumin", "inflammation", "supplement", "capsule"],
    requiresVariantSelection: true,
    variantOptions: [
      { id: "kadak-100g", label: "100 Grams", price: 50 },
      { id: "kadak-250g", label: "250 Grams", price: 140 },
      { id: "kadak-500g", label: "500 Grams", price: 250, compareAtPrice: 1999 },
      { id: "kadak-1kg", label: "1 KG", price: 520, compareAtPrice: 3299 },
    ],
    reviews: [
      { author: "Sonia K.", rating: 5, title: "Daily staple", body: "Easy to add to my routine and the packaging feels very premium." },
      { author: "Ritesh M.", rating: 5, body: "Exactly the kind of supplement UI and story I was expecting from the original site." },
      { author: "Aparna D.", rating: 4, body: "Clean formula and the best product card layout of the bunch." },
    ],
  },
  {
    slug: "Superr Dust",
    title: "Superr Dust – Special Blended Dust Tea",
    shortTitle: "Superr Dust – Special Blended Dust Tea",
    image: moringaPowder,
    dimensions: { width: 400, height: 500 },
    price: 250,
    rating: 4.8,
    reviewCount: 148,
    description: [
      "Indulge in a premium tea experience with our Superr Dust. This special blend is meticulously curated to offer quick infusion and maximum strength, making it the perfect choice for a fast-paced lifestyle.",
      "Rebuilt locally so the UI works end-to-end without any mirror-backed HTML at runtime.",
    ],
    benefits: [
      "Easy everyday superfood format",
      "Supports green nutrition rituals",
      "Simple mix-in for smoothies and lattes",
    ],
    ingredients: ["Pure Moringa Leaf Powder"],
    collectionSlugs: ["supplements", "best-sellers", "all"],
    searchTerms: ["moringa", "powder", "immunity", "superfood"],
    requiresVariantSelection: true,
    variantOptions: [
      { id: "superdust-100g", label: "100 Grams", price: 50 },
      { id: "superdust-250g", label: "250 Grams", price: 140 },
      { id: "superdust-500g", label: "500 Grams", price: 250 },
      { id: "superdust-1kg", label: "1 KG", price: 520 },
    ],
    reviews: [
      { author: "Vidhi", rating: 5, body: "Blends well and fits right into a clean morning routine." },
      { author: "Shiv", rating: 4, body: "Great value and the product page feels very close to the original theme." },
    ],
  },
  {
    slug: "Blue Pea",
    title: "Blue Pea – Rich Herbal Infusion",
    shortTitle: "Blue Pea(ButterFly Pea) – Rich Herbal Infusion",
    image: chamomileMint,
    dimensions: { width: 400, height: 500 },
    price: 399,
    rating: 4.8,
    reviewCount: 204,
    description: [
      "Experience a visual and sensory masterpiece with our Blue Pea herbal infusion. Sourced from 100% pure Blue Pea flowers, this tea is celebrated for its stunning transformation and delicate profile.",
      "Perfect for the search, collection, and product UI patterns carried across the rebuild.",
    ],
    benefits: [
      "Cooling mint finish",
      "Calm evening-friendly green tea",
      "Supports lightweight wellness browsing flows",
    ],
    ingredients: ["Green Tea", "Ashwagandha", "Chamomile", "Mint"],
    collectionSlugs: ["green-teas", "herbal-tea", "all"],
    searchTerms: ["chamomile", "mint", "green tea", "ashwagandha", "tea bags"],
    variantOptions: [{ id: "chamomile-18", label: "18 Tea Bags", cartLabel: "50 Grams", price: 399 }],
    reviews: [
      { author: "Payal", rating: 5, body: "Really soothing and the page layout feels polished." },
      { author: "Nitin", rating: 4, body: "Fresh flavour and great card styling on mobile." },
    ],
  },
  {
    slug: "Hibiscus",
    title: "Hibiscus – Flower Tea",
    shortTitle: "Hibiscus – Flower Tea",
    image: honeyLemon,
    dimensions: { width: 400, height: 500 },
    price: 399,
    rating: 4.75,
    reviewCount: 188,
    description: [
      "Brighten your day with the bold and tangy notes of our 100% Hibiscus flower tea. This infusion is as striking in flavor as it is in color, offering a refreshing tartness reminiscent of cranberries.",
    ],
    benefits: [
      "Bright honey lemon taste",
      "Good mid-day tea ritual",
      "Fast-loading local product detail UI",
    ],
    ingredients: ["Green Tea", "Ashwagandha", "Honey", "Lemon"],
    collectionSlugs: ["green-teas", "herbal-tea", "all"],
    searchTerms: ["honey lemon", "green tea", "tea bags", "ashwagandha"],
    variantOptions: [{ id: "honey-18", label: "18 Tea Bags", cartLabel: "50 Grams", price: 399 }],
    reviews: [
      { author: "Kiran", rating: 5, body: "Refreshing and visually consistent with the live site." },
      { author: "Arushi", rating: 4, body: "Crisp flavour and the local cart flow works nicely." },
    ],
  },
  {
    slug: "Celestail",
    title: "Celestial Chamomile – Rich Herbal Infusion",
    shortTitle: "Celestial Chamomile – Rich Herbal Infusion",
    image: moringaTulsi,
    dimensions: { width: 400, height: 500 },
    price: 399,
    rating: 4.8,
    reviewCount: 214,
    description: [
      "Find your moment of zen with the Celestial Chamomile blend. This calming infusion combines delicate chamomile flowers with refreshing mint and green tea for a well-rounded, soothing experience.",
    ],
    benefits: [
      "Balanced herbal profile",
      "Everyday immunity-focused tea ritual",
      "Supports search and collection UI parity",
    ],
    ingredients: ["Green Tea", "Ashwagandha", "Moringa", "Tulsi"],
    collectionSlugs: ["green-teas", "all"],
    searchTerms: ["moringa tulsi", "green tea", "ashwagandha", "tea bags"],
    variantOptions: [{ id: "moringa-tulsi-18", label: "18 Tea Bags", cartLabel: "50 Grams", price: 399 }],
    reviews: [
      { author: "Sakshi", rating: 5, body: "A favorite for mornings and the new local product route feels seamless." },
      { author: "Dev", rating: 4, body: "Clean ingredient story and great supporting sections." },
    ],
  },
];

export const collections: Collection[] = [
  {
    slug: "supplements",
    title: "Tea's",
    eyebrow: "Something for Everyone",
    description: "",
    heroImage: heroSupplements,
    productSlugs: [
      "Kadak Chai",
      "Superr Dust",
    ],
  },
  {
    slug: "green-teas",
    title: "Green Teas",
    eyebrow: "Fresh From India",
    description: "",
    heroImage: heroGreenTeas,
    productSlugs: [
      "Rose Gold Tea",
      "Blue Pea",
    ],
  },
  {
    slug: "herbal-tea",
    title: "Herbal Infusions",
    eyebrow: "Calm & Balance",
    description: "",
    heroImage: heroTurmeric,
    productSlugs: [
      "Hibiscus",
      "Celestail",
    ],
  },
  {
    slug: "best-sellers",
    title: "Best Sellers",
    eyebrow: "Trusted by Millions",
    description: "",
    heroImage: Bestsellers,
    productSlugs: [
      "Kadak Chai",
      "Blue Pea",
    ],
  },
  {
    slug: "all",
    title: "All Collections",
    eyebrow: "Shop Everything",
    description: "",
    heroImage: collectionAllBanner,
    productSlugs: products.map((product) => product.slug),
  },
];

export const contentPages: ContentPage[] = [
  {
    slug: "our-story",
    title: "Our Story",
    eyebrow: "ABOUT US",
    // heroImage: storyBanner,
    intro:
      "A legacy of over 90 years in the Indian tea industry and a eureka moment is what led to the creation of VAHDAM® India.",
    body: [
      "The traditional supply-chain was disrupted, technology was put to good use, and the glory of handpicked Indian teas, spices and superfoods was put on the map, courtesy of a homegrown brand with a world bound take.",
      "No unnecessary middlemen. Straight from India’s divine gardens to your cups. And it all started with a young man’s pursuit to make his country’s native wellness wisdom accessible to the entire world, through an honest and ethical route.",
    ],
    cta: {
      label: "Read Our Founders Letter",
      to: "/collections/best-sellers",
    },
    timeline: [
      {
        year: "1931",
        title: "The family tea trade begins",
        body: "Nathmull Sarda starts a local store in Darjeeling, building the roots of the family tea business.",
      },
      {
        year: "2012",
        title: "The fourth generation steps in",
        body: "Bala Sarda joins the family business and identifies the need to cut out unnecessary middlemen.",
      },
      {
        year: "2015",
        title: "VAHDAM® India launches",
        body: "At 23, Bala launches an ethical, home-grown brand to take India’s finest teas and wellness products global.",
      },
      {
        year: "2019",
        title: "Global spotlight",
        body: "Oprah’s Favorite Things, Ellen, and major retail partnerships bring the brand wider recognition.",
      },
      {
        year: "2024",
        title: "A new scale of impact",
        body: "The brand continues growing its global footprint while staying committed to purposeful, origin-first storytelling.",
      },
    ],
  },
  {
    slug: "contact-us",
    title: "Contact Us",
    eyebrow: "We’d Love To Hear From You",
    intro: "Questions about tea, gifting, wellness, or bulk orders can flow through this local UI now and be wired to your preferred backend later.",
    body: [
      "Use this page as the stable React shell for customer support, contact forms, or WhatsApp/chat integrations when you are ready to connect APIs.",
      "The current pass keeps the design system and layout ready without making network calls.",
    ],
  },
  {
    slug: "privacy-policy",
    title: "Privacy Policy",
    eyebrow: "Support",
    intro: "Your customer-facing legal and trust pages can now live inside the same React route system as the storefront itself.",
    body: [
      "This local build preserves the branded page template while removing dependency on mirrored HTML files.",
      "You can replace this static copy with your final legal content whenever you are ready.",
    ],
  },
  {
    slug: "terms-conditions",
    title: "Terms & Conditions",
    eyebrow: "Support",
    intro: "A fully local storefront also needs fully local utility routes, not only product and collection templates.",
    body: [
      "This page is wired as native React + TypeScript, making it straightforward to extend or source from your own CMS later.",
      "The current experience stays UI-only and local, exactly as requested.",
    ],
  },
];

export const celebrityTestimonials: CelebrityTestimonial[] = [
  {
    image: oprah,
    quote: "I have been obsessed with Mahalakshmi teas since I discovered them. The quality is unmatched, and the flavors are divine. It’s like a spa day in a cup!",
    author: "Manohar Thaneeru",
  },
  {
    image: ellen,
    quote: "Repeat after me: BEST. TEA. EVER. They provide the best tea in the business. Can’t beat that.",
    author: "Ellen DeGeneres",
  },
  {
    image: mariah,
    quote: "A premium gifting and tea experience that feels celebratory from the first glance.",
    author: "Mariah Carey",
  },
];

export const communityReviews: CommunityReview[] = [
  {
    image: discoveryKit,
    title: "Finally, a Tea That Works for Me!",
    handle: "Payal N",
    quote: "Switching to Mahalakshmi rose gold tea balanced my routine and gave me a calmer afternoon rhythm.",
  },
  {
    image: turmericCapsules,
    title: "A Chai for My Daily Wellness Ritual",
    handle: "Rohan S",
    quote: "The Kadak Chai capsules are a game-changer for my joint health. I love the clean ingredient story and the premium feel of the product.",
  },
  {
    image: moringaPowder,
    title: "Simple, fresh, and easy to shop",
    handle: "Ayesha T",
    quote: "I can browse collections, search, and cart interactions without the app depending on mirrored HTML anymore.",
  },
];

export function findProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

function normalizeCollectionSlug(slug: string) {
  return slug
    .trim()
    .toLowerCase()
    .replace(/[’']/g, "-")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-+|-+$)/g, "")
    .replace(/-+/g, "-");
}

export function findCollection(slug: string) {
  const normalizedSlug = normalizeCollectionSlug(slug);

  return collections.find((collection) => {
    return (
      normalizeCollectionSlug(collection.slug) === normalizedSlug ||
      normalizeCollectionSlug(collection.title) === normalizedSlug
    );
  });
}

export function findPage(slug: string) {
  return contentPages.find((page) => page.slug === slug);
}

export function getCollectionProducts(slug: string) {
  const collection = findCollection(slug);

  if (!collection) {
    return [];
  }

  return collection.productSlugs
    .map((productSlug) => findProduct(productSlug))
    .filter((product): product is Product => Boolean(product));
}

export function getRelatedProducts(product: Product) {
  const fallbackCollection = product.collectionSlugs[0];
  const related = getCollectionProducts(fallbackCollection).filter(
    (candidate) => candidate.slug !== product.slug,
  );

  return related.slice(0, 4);
}

export function searchStore(rawQuery: string): SearchResults {
  const query = rawQuery.trim().toLowerCase();

  if (!query) {
    return {
      products: [],
      collections: [],
      pages: [],
    };
  }

  const productMatches = products.filter((product) => {
    const haystack = [
      product.title,
      product.shortTitle ?? "",
      product.subtitle ?? "",
      product.searchTerms.join(" "),
      product.collectionSlugs.join(" "),
      product.description.join(" "),
      product.ingredients.join(" "),
      product.benefits.join(" "),
    ]
      .join(" ")
      .toLowerCase();

    return haystack.includes(query);
  });

  const collectionMatches = collections.filter((collection) => {
    const haystack = [collection.title, collection.description, collection.eyebrow ?? ""]
      .join(" ")
      .toLowerCase();

    return haystack.includes(query);
  });

  const pageMatches = contentPages.filter((page) => {
    const haystack = [page.title, page.intro, page.body.join(" "), page.eyebrow ?? ""]
      .join(" ")
      .toLowerCase();

    return haystack.includes(query);
  });

  return {
    products: productMatches,
    collections: collectionMatches,
    pages: pageMatches,
  };
}

export type CollectionBundle = {
  collection: Collection;
  products: Product[];
  totalPrice: number;
  totalCompareAtPrice: number;
};

export function getCollectionBundle(slug: string): CollectionBundle | null {
  const collection = findCollection(slug);

  if (!collection) {
    return null;
  }

  const bundleProducts = getCollectionProducts(slug);

  if (bundleProducts.length === 0) {
    return null;
  }

  const totalPrice = bundleProducts.reduce((total, product) => total + product.price, 0);
  const totalCompareAtPrice = bundleProducts.reduce(
    (total, product) => total + (product.compareAtPrice ?? product.price),
    0,
  );

  return {
    collection,
    products: bundleProducts,
    totalPrice,
    totalCompareAtPrice,
  };
}
