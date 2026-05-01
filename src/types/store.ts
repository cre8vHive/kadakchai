export type SiteLink = {
  label: string;
  to: string;
};

export type HeroSlide = {
  id: string;
  image: string;
  title: string;
  eyebrow?: string;
  body?: string;
  to: string;
};

export type Collection = {
  slug: string;
  title: string;
  eyebrow?: string;
  description: string;
  heroImage: string;
  productSlugs: string[];
};

export type ProductVariant = {
  id: string;
  label: string;
  price: number;
  compareAtPrice?: number;
};

export type ProductReview = {
  author: string;
  rating: number;
  title?: string;
  body: string;
};

export type Product = {
  slug: string;
  title: string;
  shortTitle?: string;
  subtitle?: string;
  badge?: string;
  image: string;
  gallery: string[];
  price: number;
  compareAtPrice?: number;
  rating: number;
  reviewCount: number;
  description: string[];
  benefits: string[];
  ingredients: string[];
  heroNote?: string;
  collectionSlugs: string[];
  searchTerms: string[];
  variantOptions: ProductVariant[];
  reviews: ProductReview[];
};

export type StoryMilestone = {
  year: string;
  title: string;
  body: string;
};

export type ContentPage = {
  slug: string;
  title: string;
  eyebrow?: string;
  heroImage?: string;
  intro: string;
  body: string[];
  cta?: {
    label: string;
    to: string;
  };
  timeline?: StoryMilestone[];
};

export type CelebrityTestimonial = {
  image: string;
  quote: string;
  author: string;
};

export type CommunityReview = {
  image: string;
  title: string;
  handle: string;
  quote: string;
};

export type SearchResults = {
  products: Product[];
  collections: Collection[];
  pages: ContentPage[];
};
