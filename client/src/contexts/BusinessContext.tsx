import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export interface BusinessData {
  slug: string;
  business: {
    name: string;
    phone: string;
    email: string;
    website: string;
    address: string;
    city: string;
    state: string;
    rating: number;
    reviews: number;
    tagline?: string;
    about?: string;
    hours?: string;
  };
  colors: {
    primary: string;
    secondary: string;
  };
  services: string[];
  stats: { value: string; label: string }[];
  faqs: { q: string; a: string }[];
  testimonials: { name: string; text: string; rating: number }[];
  maps_query: string;
}

interface BusinessContextValue {
  data: BusinessData | null;
  loading: boolean;
  error: string | null;
}

const BusinessContext = createContext<BusinessContextValue>({
  data: null,
  loading: false,
  error: null,
});

export function useBusiness() {
  return useContext(BusinessContext);
}

const PREVIEW_API = import.meta.env.VITE_PREVIEW_DATA_URL || "https://pub-f10a51263b444a4099652a6f3205e1e7.r2.dev/previews";

export function BusinessProvider({ slug, children }: { slug: string; children: ReactNode }) {
  const [data, setData] = useState<BusinessData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) {
      setLoading(false);
      setError("No business slug provided.");
      return;
    }

    // R2 public URLs serve files with .json extension.
    // LeadGrid API serves without it. We detect by whether the URL looks like a storage CDN.
    const isStorage = PREVIEW_API && /r2\.dev|cloudflare|s3|cdn/i.test(PREVIEW_API);
    const url = PREVIEW_API
      ? `${PREVIEW_API.replace(/\/$/, "")}/${slug}${isStorage ? ".json" : ""}`
      : `/api/v1/previews/${slug}`;

    fetch(url)
      .then((r) => {
        if (!r.ok) throw new Error(`Not found (${r.status})`);
        return r.json();
      })
      .then((json) => {
        setData(json);
        // Apply brand colors to CSS variables
        if (json.colors?.primary) {
          document.documentElement.style.setProperty("--color-primary", json.colors.primary);
        }
        if (json.colors?.secondary) {
          document.documentElement.style.setProperty("--color-secondary", json.colors.secondary);
        }
      })
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, [slug]);

  return (
    <BusinessContext.Provider value={{ data, loading, error }}>
      {children}
    </BusinessContext.Provider>
  );
}
