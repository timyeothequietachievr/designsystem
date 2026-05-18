/** Company logos for book page logo cloud (c148). Files under /public/assets/company-logos/. */
export type BookCompanyLogo = {
  name: string;
  src: string;
  /** Wider lockup; use slightly shorter max-height in the grid. */
  wordmark?: boolean;
};

const logo = (file: string) => `/assets/company-logos/${file}`;

/** 5×4 grid — `logo-*` assets; Apple uses apple.svg. */
export const BOOK_COMPANY_LOGOS: BookCompanyLogo[] = [
  { name: "Apple", src: logo("apple.svg") },
  { name: "Stripe", src: logo("logo-stripe.svg"), wordmark: true },
  { name: "Wise", src: logo("logo-wise.svg"), wordmark: true },
  { name: "Vistaprint", src: logo("logo-vistaprint.svg"), wordmark: true },
  { name: "Atlassian", src: logo("logo-atlassian.svg"), wordmark: true },
  { name: "Google", src: logo("logo-google.svg"), wordmark: true },
  { name: "Deliveroo", src: logo("logo-deliveroo.svg"), wordmark: true },
  { name: "Just Eat Takeaway", src: logo("logo-justeattakeaway.svg"), wordmark: true },
  { name: "HubSpot", src: logo("logo-hubspot.svg"), wordmark: true },
  { name: "ResMed", src: logo("logo-resmed.svg"), wordmark: true },
  { name: "Canva", src: logo("logo-canva.svg"), wordmark: true },
  { name: "Adobe", src: logo("logo-adobe.svg"), wordmark: true },
  { name: "PayPal", src: logo("logo-paypal.svg"), wordmark: true },
  { name: "Shopify", src: logo("logo-shopify.svg"), wordmark: true },
  { name: "Assent", src: logo("logo-assent.svg"), wordmark: true },
  { name: "DBS Bank", src: logo("logo-dbs.svg"), wordmark: true },
  { name: "ClearScore", src: logo("logo-clearscore.svg"), wordmark: true },
  { name: "Domain", src: logo("logo-domain.svg"), wordmark: true },
  { name: "hipages", src: logo("logo-hipages.svg") },
  { name: "IBM", src: logo("logo-ibm.svg"), wordmark: true },
];
