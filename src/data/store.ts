import logo from "../files/Vahdam_logo0ffc.webp";
// import storyBanner from "../files/Hibiscus&Celestail.webp";
import heroTurmeric from "../files/Hibiscus&Celestail.webp";
import heroSupplements from "../files/Kadak_chai1.webp";
import heroGreenTeas from "../files/Rose&Blue.webp";
import collectionAllBanner from "../files/All_collections.webp";
import Bestsellers from "../files/KADAK&BLUE.webp";
import oprah from "../files/Manohar.webp";
import ellen from "../files/Anikitha Kapoor.webp";
import mariah from "../files/Arjun reddy.webp";
import discoveryKit from "../files/Rose gold.webp";
import turmericCapsules from "../files/Kadak Chai 1.webp";
import moringaPowder from "../files/Super dust 2.webp";
import chamomileMint from "../files/Blue tea.webp";
import honeyLemon from "../files/Hibiscus.webp";
import moringaTulsi from "../files/celestial.webp";
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
      { label: "Terms & Conditions", to: "/terms-and-conditions" },
    ] satisfies SiteLink[],
  },
  socialLinks: [
    { href: "https://www.instagram.com/mahalakshmiiteaofficial/ ", icon: instagramIcon, label: "Instagram" },
    { href: "https://www.facebook.com/mahalakshmitea ", icon: facebookIcon, label: "Facebook" },
    { href: "https://www.linkedin.com/in/arjun-biradar-5285401a1?utm_source=share_via&utm_content=profile&utm_medium=member_ios", icon: linkedinIcon, label: "LinkedIn" },
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
    title: "Rose Gold Tea – Orthodox Long Leaf",
    shortTitle: "Rose Gold Tea – Orthodox Long Leaf",
    subtitle: "Elegant rose-infused orthodox long leaf tea",
    badge: "Bestseller",
    image: discoveryKit,
    dimensions: { width: 400, height: 500 },
    price: 399,
    rating: 4.9,
    reviewCount: 98,
    description: [
      "A luxurious blend where elegance meets refreshment.",
      "Crafted from premium orthodox long leaf tea and infused with delicate rose notes.",
      "This exquisite blend offers a smooth floral taste and a soothing tea experience in every sip.",
    ],
    benefits: [
      "Premium orthodox long leaf tea",
      "Natural rose-infused aroma",
      "Smooth floral finish",
      "Handcrafted luxury blend",
      "Ideal for mornings, afternoon breaks, and evening relaxation",
    ],
    ingredients: ["Orthodox Long Leaf Tea", "Rose Petal Essence"],
    collectionSlugs: ["green-teas", "all"],
    searchTerms: ["rose gold", "orthodox tea", "rose tea", "floral tea", "premium tea"],
    variantOptions: [
      { id: "rose-gold-50g", label: "50 Grams", cartLabel: "50 Grams", price: 399 },
    ],
    reviews: [
      { author: "Neha Joshi", rating: 5, title: "Elegant and refined", body: "The rose aroma is delicate and beautifully balanced with the tea leaves." },
      { author: "Karan Shah", rating: 5, body: "Smooth, floral, and wonderfully premium." },
      { author: "Vikas Bansal", rating: 5, title: "Beautiful cup", body: "A lovely evening tea with a soft bouquet of rose." },
      { author: "Karan Desai", rating: 5, title: "Impressively smooth", body: "A luxurious sip with graceful rose notes." },
      { author: "Isha Jain", rating: 5, title: "Highly recommend", body: "Perfect for a calming afternoon break." },
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
    shortTitle: "Chamomile – Rich Herbal Infusion",
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
      "At Mahalakshmi Tea Powders, we believe that every cup of tea tells a story. Our journey began with a simple mission to bring authentic, premium-quality tea experiences to households across India.",
    body: [
      "We carefully source and select quality tea leaves and herbal ingredients to create blends that combine tradition, taste, and consistency. From strong Kadak Chai to wellness-focused herbal infusions, every product is crafted to deliver freshness, aroma, and satisfaction.",
      "Over the years, Mahalakshmi Tea Powders has earned the trust of thousands of tea lovers who value quality and authenticity. Our commitment remains unchanged: providing exceptional tea products that bring families and communities together.",
    ],
    cta: {
      label: "Read Our Founders Letter",
      to: "/collections/best-sellers",
    },
  },
  {
    slug: "contact-us",
    title: "Contact Us",
    eyebrow: "We’d Love To Hear From You",
    intro: "Mobile number : +91 88851 39397",
    body: [],
  },
  {
    slug: "privacy-policy",
    title: "Privacy Policy",
    eyebrow: "Support",
    lastUpdated: "Last Updated: June 13, 2026",
    metaDescription:
      "Read the Privacy Policy of Mahalakshmi Tea Powders to understand how we collect, use, store, and protect your personal information.",
    intro:
      "This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.",
    body: [],
    bodyHtml: `
      <p>We use Your Personal Data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy. This Privacy Policy has been created with the help of the <a href="https://www.termsfeed.com/privacy-policy-generator/" target="_blank" rel="noreferrer">Privacy Policy Generator</a>.</p>

      <h2>Interpretation and Definitions</h2>

      <h3>Interpretation</h3>
      <p>The words whose initial letters are capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>

      <h3>Definitions</h3>
      <p>For the purposes of this Privacy Policy:</p>
      <ul>
        <li><strong>Account</strong> means a unique account created for You to access our Service or parts of our Service.</li>
        <li><strong>Affiliate</strong> means an entity that controls, is controlled by, or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</li>
        <li><strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Privacy Policy) refers to Mahalakshmi tea powders.</li>
        <li><strong>Cookies</strong> are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.</li>
        <li><strong>Country</strong> refers to: Telangana, India</li>
        <li><strong>Device</strong> means any device that can access the Service such as a computer, a cell phone or a digital tablet.</li>
        <li><strong>Personal Data</strong> (or "Personal Information") is any information that relates to an identified or identifiable individual.
          <p>We use "Personal Data" and "Personal Information" interchangeably unless a law uses a specific term.</p>
        </li>
        <li><strong>Service</strong> refers to the Website.</li>
        <li><strong>Service Provider</strong> means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.</li>
        <li><strong>Usage Data</strong> refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).</li>
        <li><strong>Website</strong> refers to Mahalakshmi tea powders, accessible from <a href="https://mahalakshmitea.com" target="_blank" rel="noreferrer">mahalakshmitea.com</a>.</li>
        <li><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
      </ul>

      <h2>Collecting and Using Your Personal Data</h2>

      <h3>Types of Data Collected</h3>

      <h4>Personal Data</h4>
      <p>While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:</p>
      <ul>
        <li>Email address</li>
        <li>First name and last name</li>
        <li>Phone number</li>
        <li>Address, State, Province, ZIP/Postal code, City</li>
      </ul>

      <h4>Usage Data</h4>
      <p>Usage Data is collected automatically when using the Service.</p>
      <p>Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>
      <p>When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device's unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.</p>
      <p>We may also collect information that Your browser sends whenever You visit Our Service or when You access the Service by or through a mobile device.</p>

      <h3>Tracking Technologies and Cookies</h3>
      <p>We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. Tracking technologies We use include beacons, tags, and scripts to collect and track information and to improve and analyze Our Service. The technologies We use may include:</p>
      <ul>
        <li><strong>Cookies or Browser Cookies.</strong> A cookie is a small file placed on Your Device. You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if You do not accept Cookies, You may not be able to use some parts of our Service.</li>
        <li><strong>Web Beacons.</strong> Certain sections of our Service and our emails may contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the Company, for example, to count users who have visited those pages or opened an email and for other related website statistics (for example, recording the popularity of a certain section and verifying system and server integrity).</li>
      </ul>
      <p>Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies remain on Your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close Your web browser.</p>
      <p>Where required by law, we use non-essential cookies (such as analytics, advertising, and remarketing cookies) only with Your consent. You can withdraw or change Your consent at any time using Our cookie preferences tool (if available) or through Your browser/device settings. Withdrawing consent does not affect the lawfulness of processing based on consent before its withdrawal.</p>
      <p>We use both Session and Persistent Cookies for the purposes set out below:</p>
      <ul>
        <li><strong>Necessary / Essential Cookies</strong>
          <ul>
            <li><strong>Type:</strong> Session Cookies</li>
            <li><strong>Administered by:</strong> Us</li>
            <li><strong>Purpose:</strong> These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts. Without these Cookies, the services that You have asked for cannot be provided, and We only use these Cookies to provide You with those services.</li>
          </ul>
        </li>
        <li><strong>Cookies Policy / Notice Acceptance Cookies</strong>
          <ul>
            <li><strong>Type:</strong> Persistent Cookies</li>
            <li><strong>Administered by:</strong> Us</li>
            <li><strong>Purpose:</strong> These Cookies identify if users have accepted the use of cookies on the Website.</li>
          </ul>
        </li>
        <li><strong>Functionality Cookies</strong>
          <ul>
            <li><strong>Type:</strong> Persistent Cookies</li>
            <li><strong>Administered by:</strong> Us</li>
            <li><strong>Purpose:</strong> These Cookies allow Us to remember choices You make when You use the Website, such as remembering your login details or language preference. The purpose of these Cookies is to provide You with a more personal experience and to avoid You having to re-enter your preferences every time You use the Website.</li>
          </ul>
        </li>
      </ul>
      <p>For more information about the cookies we use and your choices regarding cookies, please visit our Cookies Policy or the Cookies section of Our Privacy Policy.</p>

      <h2>Use of Your Personal Data</h2>
      <p>The Company may use Personal Data for the following purposes:</p>
      <ul>
        <li>To provide and maintain our Service , including to monitor the usage of our Service.</li>
        <li>To manage Your Account: to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.</li>
        <li>For the performance of a contract: the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.</li>
        <li>To contact You: To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application's push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation.</li>
        <li>To provide You with news, special offers, and general information about other goods, services and events which We offer that are similar to those that you have already purchased or inquired about unless You have opted not to receive such information.</li>
        <li>To manage Your requests: To attend and manage Your requests to Us.</li>
        <li>For business transfers: We may use Your Personal Data to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which Personal Data held by Us about our Service users is among the assets transferred.</li>
        <li>For other purposes : We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Service, products, services, marketing and your experience.</li>
      </ul>
      <p>We may share Your Personal Data in the following situations:</p>
      <ul>
        <li>With Service Providers: We may share Your Personal Data with Service Providers to monitor and analyze the use of our Service, to contact You.</li>
        <li>For business transfers: We may share or transfer Your Personal Data in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of Our business to another company.</li>
        <li>With Affiliates: We may share Your Personal Data with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners or other companies that We control or that are under common control with Us.</li>
        <li>With business partners: We may share Your Personal Data with Our business partners to offer You certain products, services or promotions.</li>
        <li>With other users: If Our Service offers public areas, when You share Personal Data or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside.</li>
        <li>With Your consent : We may disclose Your Personal Data for any other purpose with Your consent.</li>
      </ul>

      <h2>Retention of Your Personal Data</h2>
      <p>The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if We are required to retain Your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.</p>
      <p>Where possible, We apply shorter retention periods and/or reduce identifiability by deleting, aggregating, or anonymizing data. Unless otherwise stated, the retention periods below are maximum periods ("up to") and We may delete or anonymize data sooner when it is no longer needed for the relevant purpose. We apply different retention periods to different categories of Personal Data based on the purpose of processing and legal obligations:</p>
      <ul>
        <li><strong>Account Information</strong>
          <ul>
            <li><strong>User Accounts:</strong> retained for the duration of your account relationship plus up to 24 months after account closure to handle any post-termination issues or resolve disputes.</li>
          </ul>
        </li>
        <li><strong>Customer Support Data</strong>
          <ul>
            <li><strong>Support tickets and correspondence:</strong> up to 24 months from the date of ticket closure to resolve follow-up inquiries, track service quality, and defend against potential legal claims</li>
            <li><strong>Chat transcripts:</strong> up to 24 months for quality assurance and staff training purposes.</li>
          </ul>
        </li>
        <li><strong>Usage Data</strong>
          <ul>
            <li><strong>Website analytics data (cookies, IP addresses, device identifiers):</strong> up to 24 months from the date of collection, which allows us to analyze trends while respecting privacy principles.</li>
            <li><strong>Server logs (IP addresses, access times):</strong> up to 24 months for security monitoring and troubleshooting purposes.</li>
          </ul>
        </li>
      </ul>
      <p>Usage Data is retained in accordance with the retention periods described above, and may be retained longer only where necessary for security, fraud prevention, or legal compliance.</p>
      <p>We may retain Personal Data beyond the periods stated above for different reasons:</p>
      <ul>
        <li>Legal obligation: We are required by law to retain specific data (e.g., financial records for tax authorities).</li>
        <li>Legal claims: Data is necessary to establish, exercise, or defend legal claims.</li>
        <li>Your explicit request: You ask Us to retain specific information.</li>
        <li>Technical limitations: Data exists in backup systems that are scheduled for routine deletion.</li>
      </ul>
      <p>You may request information about how long We will retain Your Personal Data by contacting Us.</p>
      <p>When retention periods expire, We securely delete or anonymize Personal Data according to the following procedures:</p>
      <ul>
        <li>Deletion: Personal Data is removed from Our systems and no longer actively processed.</li>
        <li>Backup retention: Residual copies may remain in encrypted backups for a limited period consistent with our backup retention schedule and are not restored except where necessary for security, disaster recovery, or legal compliance.</li>
        <li>Anonymization: In some cases, We convert Personal Data into anonymous statistical data that cannot be linked back to You. This anonymized data may be retained indefinitely for research and analytics.</li>
      </ul>

      <h2>Transfer of Your Personal Data</h2>
      <p>Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ from those from Your jurisdiction.</p>
      <p>Where required by applicable law, We will ensure that international transfers of Your Personal Data are subject to appropriate safeguards and supplementary measures where appropriate. The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information.</p>

      <h2>Delete Your Personal Data</h2>
      <p>You have the right to delete or request that We assist in deleting the Personal Data that We have collected about You.</p>
      <p>Our Service may give You the ability to delete certain information about You from within the Service.</p>
      <p>You may update, amend, or delete Your information at any time by signing in to Your Account, if you have one, and visiting the account settings section that allows you to manage Your personal information. You may also contact Us to request access to, correct, or delete any Personal Data that You have provided to Us.</p>
      <p>Please note, however, that We may need to retain certain information when we have a legal obligation or lawful basis to do so.</p>

      <h2>Disclosure of Your Personal Data</h2>
      <h3>Business Transactions</h3>
      <p>If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.</p>

      <h3>Law enforcement</h3>
      <p>Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).</p>

      <h3>Other legal requirements</h3>
      <p>The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:</p>
      <ul>
        <li>Comply with a legal obligation</li>
        <li>Protect and defend the rights or property of the Company</li>
        <li>Prevent or investigate possible wrongdoing in connection with the Service</li>
        <li>Protect the personal safety of Users of the Service or the public</li>
        <li>Protect against legal liability</li>
      </ul>

      <h2>Security of Your Personal Data</h2>
      <p>The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially reasonable means to protect Your Personal Data, We cannot guarantee its absolute security.</p>

      <h2>Children's Privacy</h2>
      <p>Our Service does not address anyone under the age of 16. We do not knowingly collect personally identifiable information from anyone under the age of 16. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us. If We become aware that We have collected Personal Data from anyone under the age of 16 without verification of parental consent, We take steps to remove that information from Our servers.</p>
      <p>If We need to rely on consent as a legal basis for processing Your information and Your country requires consent from a parent, We may require Your parent's consent before We collect and use that information.</p>

      <h2>Links to Other Websites</h2>
      <p>Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site You visit.</p>
      <p>We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</p>

      <h2>Changes to this Privacy Policy</h2>
      <p>We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.</p>
      <p>We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the "Last updated" date at the top of this Privacy Policy.</p>
      <p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>

      <h2>Contact Us</h2>
      <p>If you have any questions about this Privacy Policy, You can contact us:</p>
      <ul>
        <li>By email: <a href="mailto:mahalakshmitea888@gmail.com">mahalakshmitea888@gmail.com</a></li>
        <li>By mobile: <a href="tel:+918885139397">8885139397</a></li>
      </ul>
    `,
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
    quote: "I have been obsessed with Mahalakshmi Teas since I discovered them. The quality is unmatched, and the flavors are divine. It feels like a refreshing escape in every cup.",
    author: "Manohar Thaneeru",
  },
  {
    image: ellen,
    quote: "The Kadak Chai instantly reminded me of the strong homemade tea I grew up with. Rich aroma, bold taste, and consistently satisfying every single day.",
    author: "Ankitha Kapoor",
  },
  {
    image: mariah,
    quote: "I gifted Mahalakshmi Tea products to my family and everyone loved them. Premium packaging, authentic flavor, and exceptional quality make it stand out.",
    author: "Ravi Muvvala",
  },
];

export const communityReviews: CommunityReview[] = [
  {
    image: discoveryKit,
    title: "Finally, a Tea That Works for Me!",
    handle: "Payal N",
    quote: "Ever since I switched to Mahalakshmi Tea Powders, my mornings feel more refreshing and energetic. The taste is authentic, rich, and incredibly satisfying.",
  },
  {
    image: turmericCapsules,
    title: "The Perfect Strong Chai Experience",
    handle: "Rohan S",
    quote: "Kadak Chai has become a part of my daily routine. The strong flavor, deep color, and refreshing aroma make every cup enjoyable.",
  },
  {
    image: moringaPowder,
    title: "Premium Quality You Can Taste",
    handle: "Ayesha T",
    quote: "From packaging to flavor, everything feels premium. The tea stays fresh for a long time and delivers a consistent taste in every brew.",
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
