import logo from "../files/Vahdam_logo0ffc.jpg";
import storyBanner from "../files/VahdamOct2476copy8ac0.jpg";
import heroTurmeric from "../files/RoseGoldtea.png";
import heroSupplements from "../files/Hisbiscus.png";
import heroGreenTeas from "../files/Bluetea_main.png";
import collectionAllBanner from "../files/Collection-Page-banner_All-tea_desktop_1ff48.jpg";
// import categorySupplements from "../files/Supplement_Category_Card0e99.png";
// import categoryGreenTea from "../files/Green_Teas_Category_Cardff82.png";
// import categoryHerbal from "../files/Herbal_Tea_Category_Card5c62.png";
import oprah from "../files/Oprah_be55db67-f1f0-4816-9415-f65101a2db7dc2a3.png";
import ellen from "../files/Ellenc2a3.png";
import mariah from "../files/Mariah_Careyc2a3.png";
import discoveryKit from "../files/Discovery_option_1b8ef.jpg";
import discoveryGalleryOne from "../files/05_51d7d3f6-dcfd-4824-8396-7802238a963869dd.jpg";
import discoveryGalleryTwo from "../files/06_512e5941-95f6-434a-9b72-878f49ca5c3069dd.jpg";
import discoveryGalleryThree from "../files/07_807d2447-b82b-491d-9ef3-1ef0b47819b669dd.jpg";
import discoveryGalleryFour from "../files/08_93af056c-ef4d-4465-adb4-46c396605b2c69dd.jpg";
import discoveryGalleryFive from "../files/09_a774622b-74a8-4120-9f8e-80cb77adc6d169dd.jpg";
import discoveryGallerySix from "../files/10_8aecbc69-75c0-4ed3-82b0-cec8663a32d169dd.jpg";
import discoveryGallerySeven from "../files/11_cc7a8fd2-92d2-4b59-a31c-5a04f8b23b2969dd.jpg";
import turmericCapsules from "../files/TurmericCapsbef5.png";
import turmericIngredients from "../files/Turmeric_Ingredient_1464x585_jpg65e0.jpg";
import turmericLifestyle from "../files/Turmeric_9e0bfe27-1d59-439c-9103-ab48f82d1688111e.jpg";
import moringaPowder from "../files/MoringaPack2_18196.jpg";
import moringaPowderLifestyle from "../files/Moringa_Powder_1464x585_26f37ee1-1a07-4910-8980-b0ecfdea7c7a6a70.jpg";
import moringaPowderIngredients from "../files/Moringa_Powder_Ingredient_1464x585_aca8ed4e-7255-4abf-9044-9302e2a94290bc39.jpg";
import ashwagandhaCapsules from "../files/AshwagandhaCaps791a.png";
import ashwagandhaLifestyle from "../files/Ashwagandha_1464x585_10e114a5-7651-4e8d-a3bc-efb0a4ffaa9f7c64.jpg";
import ashwagandhaIngredients from "../files/Ashwagandha_Ingredient_1464x585_bba57822-4535-4897-9774-4aa337912be0f4da.jpg";
import chamomileMint from "../files/Chamomile-mint-citrus05ca.png";
import greenTeaLifestyle from "../files/Green_teas_f29b8f18-02e3-4f53-901f-bad9fd33bdbe342a.png";
import honeyLemon from "../files/Honey_Lemon_Pack_28731.jpg";
import moringaTulsi from "../files/Moringa_Tulsi_Pack_282b0.jpg";
import moringaTulsiLifestyle from "../files/MoringaTulsiGreenTea_38c41579-638e-42a5-a0c9-d6c8210f633d51a5.jpg";
import teamBanner from "../files/Team-Page-banner_Dd2a5.jpg";
import impactBanner from "../files/Impact-report-banner64d0.jpg";
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
    { label: "Supplements", to: "/collections/supplements" },
    { label: "Green Teas", to: "/collections/green-teas" },
    { label: "Herbal Infusions", to: "/collections/herbal-tea" },
    { label: "Bestsellers", to: "/collections/best-sellers" },
    { label: "Our Story", to: "/pages/our-story" },
  ] satisfies SiteLink[],
  footerMenus: {
    learn: [
      { label: "Our Story", to: "/pages/our-story" },
      { label: "Our Team", to: "/pages/team" },
      { label: "Social Impact", to: "/pages/annual-impact-report" },
    ] satisfies SiteLink[],
    shop: [
      { label: "Supplements", to: "/collections/supplements" },
      { label: "Herbal Infusions", to: "/collections/herbal-tea" },
      { label: "Teas", to: "/collections/all" },
      { label: "Sampler", to: "/products/wellness-starter-kit" },
    ] satisfies SiteLink[],
    support: [
      { label: "Shipping", to: "/pages/shipping-delivery" },
      { label: "Contact Us", to: "/pages/contact-us" },
      { label: "Privacy Policy", to: "/pages/privacy-policy" },
      { label: "Terms & Conditions", to: "/pages/terms-conditions" },
    ] satisfies SiteLink[],
    account: [
      { label: "Account", to: "/account/login" },
      { label: "Orders", to: "/account/orders" },
    ] satisfies SiteLink[],
  },
  socialLinks: [
    { href: "https://www.instagram.com/vahdam", icon: instagramIcon, label: "Instagram" },
    { href: "https://www.facebook.com/vahdamindia", icon: facebookIcon, label: "Facebook" },
    { href: "https://www.linkedin.com/company/vahdam-teas/", icon: linkedinIcon, label: "LinkedIn" },
  ],
  topSearches: ["Supplements", "Herbal Tea", "Green Tea", "Gifts", "Matcha"],
  footerDisclaimer:
    "These Statements Have Not Been Evaluated by the Food and Drug Administration. This Product Is Not Intended to Diagnose, Treat, Cure, or Prevent Any Disease. This Product Is a Dietary Supplement. Not Intended as a Conventional Food, Coffee, or Meal Replacement. This Product Has Been Manufactured in a Third-Party Facility That Is Compliant With Current Good Manufacturing Practices (cGMP) for Dietary Supplement (21 CFR Part 111). Vahdam® Teas Pvt. Ltd. Does Not Directly Manufacture This Product.",
} as const;

export const homeSlides: HeroSlide[] = [
  {
    id: "turmeric",
    image: heroTurmeric,
    eyebrow: "",
    title: "",
    body: "",
    to: "/products/turmeric-curcumin-supplement-inflammation",
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
    slug: "wellness-starter-kit",
    title: "Wellness Starter Kit - 3 Green Teas + 1 Cup & Saucer",
    shortTitle: "Wellness Starter Kit",
    subtitle: "3 Green Teas + 1 Cup & Saucer",
    badge: "Bestseller",
    image: discoveryKit,
    gallery: [
      discoveryKit,
      discoveryGalleryOne,
      discoveryGalleryTwo,
      discoveryGalleryThree,
      discoveryGalleryFour,
      discoveryGalleryFive,
      discoveryGallerySix,
      discoveryGallerySeven,
    ],
    price: 899,
    compareAtPrice: 1239,
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
        price: 899,
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
    slug: "turmeric-curcumin-supplement-inflammation",
    title: "Lakadong Turmeric Curcumin Supplement - Anti Inflammatory Support",
    shortTitle: "Lakadong Turmeric Curcumin",
    badge: "18% OFF",
    image: turmericCapsules,
    gallery: [turmericCapsules, turmericIngredients, turmericLifestyle, heroTurmeric],
    price: 1649,
    compareAtPrice: 1999,
    rating: 4.9,
    reviewCount: 312,
    description: [
      "A high-curcumin Lakadong turmeric capsule blend designed for daily inflammation support and joint comfort.",
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
    variantOptions: [
      { id: "turmeric-60", label: "60 Capsules", price: 1649, compareAtPrice: 1999 },
      { id: "turmeric-120", label: "120 Capsules", price: 2899, compareAtPrice: 3299 },
    ],
    reviews: [
      { author: "Sonia K.", rating: 5, title: "Daily staple", body: "Easy to add to my routine and the packaging feels very premium." },
      { author: "Ritesh M.", rating: 5, body: "Exactly the kind of supplement UI and story I was expecting from the original site." },
      { author: "Aparna D.", rating: 4, body: "Clean formula and the best product card layout of the bunch." },
    ],
  },
  {
    slug: "moringa-powder",
    title: "Moringa Powder 200g - For Improved Immunity",
    shortTitle: "Moringa Powder 200g",
    image: moringaPowder,
    gallery: [moringaPowder, moringaPowderLifestyle, moringaPowderIngredients],
    price: 399,
    rating: 4.8,
    reviewCount: 148,
    description: [
      "A pantry-friendly moringa powder format for smoothies, warm drinks, or clean morning wellness routines.",
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
    variantOptions: [{ id: "moringa-200", label: "200g Pack", price: 399 }],
    reviews: [
      { author: "Vidhi", rating: 5, body: "Blends well and fits right into a clean morning routine." },
      { author: "Shiv", rating: 4, body: "Great value and the product page feels very close to the original theme." },
    ],
  },
  {
    slug: "ashwagandha-capsules-1000mg",
    title: "Ashwagandha Capsules 1000mg - Stress Support",
    shortTitle: "Ashwagandha Capsules 1000mg",
    badge: "New",
    image: ashwagandhaCapsules,
    gallery: [ashwagandhaCapsules, ashwagandhaLifestyle, ashwagandhaIngredients],
    price: 649,
    compareAtPrice: 799,
    rating: 4.7,
    reviewCount: 96,
    description: [
      "A concentrated Ashwagandha capsule format built around calm, recovery, and a grounded daily routine.",
      "This local TypeScript build keeps the original palette, spacing, and typography while removing the mirror dependency.",
    ],
    benefits: [
      "Stress and balance support",
      "Clean daily supplement routine",
      "Strong product storytelling section support",
    ],
    ingredients: ["Ashwagandha Extract", "Plant Capsule"],
    collectionSlugs: ["supplements", "best-sellers", "all"],
    searchTerms: ["ashwagandha", "stress", "capsules", "1000mg"],
    variantOptions: [
      { id: "ashwa-60", label: "60 Capsules", price: 649, compareAtPrice: 799 },
      { id: "ashwa-120", label: "120 Capsules", price: 1199, compareAtPrice: 1399 },
    ],
    reviews: [
      { author: "Rahul", rating: 5, body: "Solid product page and clear benefit sections." },
      { author: "Megha", rating: 4, body: "Love how the color system matches the original site." },
    ],
  },
  {
    slug: "ashwagandha-chamomile-mint-green-tea-18-tb",
    title: "Ashwagandha Chamomile Mint Green Tea - 18 Tea Bags",
    shortTitle: "Chamomile Mint Green Tea",
    image: chamomileMint,
    gallery: [chamomileMint, greenTeaLifestyle],
    price: 299,
    rating: 4.8,
    reviewCount: 204,
    description: [
      "A light, calming green tea built around Ashwagandha, mint freshness, and a soft chamomile finish.",
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
    variantOptions: [{ id: "chamomile-18", label: "18 Tea Bags", price: 299 }],
    reviews: [
      { author: "Payal", rating: 5, body: "Really soothing and the page layout feels polished." },
      { author: "Nitin", rating: 4, body: "Fresh flavour and great card styling on mobile." },
    ],
  },
  {
    slug: "ashwagandha-honey-lemon-green-tea-18-tb",
    title: "Ashwagandha Honey Lemon Green Tea - 18 Tea Bags",
    shortTitle: "Honey Lemon Green Tea",
    image: honeyLemon,
    gallery: [honeyLemon, greenTeaLifestyle],
    price: 299,
    rating: 4.75,
    reviewCount: 188,
    description: [
      "Zesty honey lemon uplift with Ashwagandha in a daily green tea format that mirrors the original VAHDAM merchandising style.",
    ],
    benefits: [
      "Bright honey lemon taste",
      "Good mid-day tea ritual",
      "Fast-loading local product detail UI",
    ],
    ingredients: ["Green Tea", "Ashwagandha", "Honey", "Lemon"],
    collectionSlugs: ["green-teas", "herbal-tea", "all"],
    searchTerms: ["honey lemon", "green tea", "tea bags", "ashwagandha"],
    variantOptions: [{ id: "honey-18", label: "18 Tea Bags", price: 299 }],
    reviews: [
      { author: "Kiran", rating: 5, body: "Refreshing and visually consistent with the live site." },
      { author: "Arushi", rating: 4, body: "Crisp flavour and the local cart flow works nicely." },
    ],
  },
  {
    slug: "ashwagandha-moringa-tulsi-green-tea-18-tb",
    title: "Ashwagandha Moringa Tulsi Green Tea - 18 Tea Bags",
    shortTitle: "Moringa Tulsi Green Tea",
    image: moringaTulsi,
    gallery: [moringaTulsi, moringaTulsiLifestyle, greenTeaLifestyle],
    price: 299,
    rating: 4.8,
    reviewCount: 214,
    description: [
      "An earthy, herb-forward green tea pairing Moringa and Tulsi with Ashwagandha for a calm, grounded cup.",
    ],
    benefits: [
      "Balanced herbal profile",
      "Everyday immunity-focused tea ritual",
      "Supports search and collection UI parity",
    ],
    ingredients: ["Green Tea", "Ashwagandha", "Moringa", "Tulsi"],
    collectionSlugs: ["green-teas", "herbal-tea", "all"],
    searchTerms: ["moringa tulsi", "green tea", "ashwagandha", "tea bags"],
    variantOptions: [{ id: "moringa-tulsi-18", label: "18 Tea Bags", price: 299 }],
    reviews: [
      { author: "Sakshi", rating: 5, body: "A favorite for mornings and the new local product route feels seamless." },
      { author: "Dev", rating: 4, body: "Clean ingredient story and great supporting sections." },
    ],
  },
];

export const collections: Collection[] = [
  {
    slug: "supplements",
    title: "Supplements",
    eyebrow: "Something for Everyone",
    description: "High-curcumin turmeric, Ashwagandha, Moringa, and wellness bundles presented with the same VAHDAM visual language in a fully local React app.",
    heroImage: heroSupplements,
    productSlugs: [
      "turmeric-curcumin-supplement-inflammation",
      "moringa-powder",
      "ashwagandha-capsules-1000mg",
      "wellness-starter-kit",
    ],
  },
  {
    slug: "green-teas",
    title: "Green Teas",
    eyebrow: "Fresh From India",
    description: "Ashwagandha-infused green teas, honey lemon blends, and calm-focused everyday rituals.",
    heroImage: heroGreenTeas,
    productSlugs: [
      "wellness-starter-kit",
      "ashwagandha-chamomile-mint-green-tea-18-tb",
      "ashwagandha-honey-lemon-green-tea-18-tb",
      "ashwagandha-moringa-tulsi-green-tea-18-tb",
    ],
  },
  {
    slug: "herbal-tea",
    title: "Herbal Infusions",
    eyebrow: "Calm & Balance",
    description: "Relaxing herbal-forward teas that still keep the original site’s premium cream, gold, and green merchandising direction.",
    heroImage: heroTurmeric,
    productSlugs: [
      "ashwagandha-chamomile-mint-green-tea-18-tb",
      "ashwagandha-honey-lemon-green-tea-18-tb",
      "ashwagandha-moringa-tulsi-green-tea-18-tb",
    ],
  },
  {
    slug: "best-sellers",
    title: "Best Sellers",
    eyebrow: "Trusted by Millions",
    description: "The highest-visibility product set across the storefront, surfaced with local data and UI-only cart flows.",
    heroImage: collectionAllBanner,
    productSlugs: [
      "wellness-starter-kit",
      "turmeric-curcumin-supplement-inflammation",
      "moringa-powder",
      "ashwagandha-capsules-1000mg",
    ],
  },
  {
    slug: "all",
    title: "All Collections",
    eyebrow: "Shop Everything",
    description: "A single local React collection template covering the major storefront categories without runtime mirror HTML.",
    heroImage: collectionAllBanner,
    productSlugs: products.map((product) => product.slug),
  },
];

export const contentPages: ContentPage[] = [
  {
    slug: "our-story",
    title: "Our Story",
    eyebrow: "ABOUT US",
    heroImage: storyBanner,
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
    slug: "team",
    title: "Our Team",
    eyebrow: "Meet The People Behind The Brand",
    heroImage: teamBanner,
    intro: "A cross-functional team carrying Indian wellness, tea, and gifting stories to customers around the world.",
    body: [
      "The VAHDAM® team blends sourcing expertise, product storytelling, design, and operations into a modern wellness brand that still feels warm and personal.",
      "This React rebuild keeps that same feeling by localizing the visual system, structure, and merchandising patterns instead of rendering mirrored HTML at runtime.",
    ],
  },
  {
    slug: "annual-impact-report",
    title: "Social Impact",
    eyebrow: "Purpose Beyond The Product",
    heroImage: impactBanner,
    intro: "VAHDAM® ties brand growth to education, climate-conscious operations, and long-term community support.",
    body: [
      "From TEACH MeTM to farmer-family education support, impact has always been presented as part of the brand’s identity and not as a side note.",
      "This local UI version preserves that editorial rhythm with the same warm tones, type direction, and section spacing from the downloaded theme.",
    ],
  },
  {
    slug: "shipping-delivery",
    title: "Shipping & Delivery",
    eyebrow: "Support",
    intro: "Orders over ₹599 qualify for free shipping, with additional offers and gifting thresholds surfaced throughout the storefront UI.",
    body: [
      "This rebuilt frontend keeps all the important utility pages local, so you can attach the real logistics and order APIs later without replacing the page templates.",
      "For now, shipping thresholds, offer banners, and the cart messaging are presented as UI-only interactions.",
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
    quote: "I’m in love, I’m in love, I’m in love with a wonderful chai! Shipped directly from India.",
    author: "Oprah Winfrey",
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
    quote: "Switching to VAHDAM® green tea with Ashwagandha balanced my routine and gave me a calmer afternoon rhythm.",
  },
  {
    image: turmericCapsules,
    title: "A supplement page that feels premium",
    handle: "Rohan S",
    quote: "The turmeric flow is clean, informative, and easy to trust, even before backend integrations are added.",
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

export function findCollection(slug: string) {
  return collections.find((collection) => collection.slug === slug);
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
