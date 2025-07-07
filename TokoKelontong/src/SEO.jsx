import { useEffect } from "react";

const SEO = ({
  title = "Toko Kelontong Natz",
  description = "Selamat datang di Toko Kelontong Natz.",
  keywords = "kelontong, sembako, toko natz, hemat",
  canonical,
  ogImage,
  ogUrl,
  twitterHandle = "@tokonatz",
}) => {
  useEffect(() => {
    document.title = title;

    const updateMeta = (name, content, attr = "name") => {
      let element = document.querySelector(`meta[${attr}="${name}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attr, name);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    updateMeta("description", description);
    updateMeta("keywords", keywords);
    if (canonical) {
      let link = document.querySelector(`link[rel="canonical"]`);
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }
      link.setAttribute("href", canonical);
    }

    // Open Graph Tags
    if (ogUrl) updateMeta("og:url", ogUrl, "property");
    updateMeta("og:title", title, "property");
    updateMeta("og:description", description, "property");
    if (ogImage) updateMeta("og:image", ogImage, "property");
    updateMeta("og:type", "website", "property");

    // Twitter Tags
    updateMeta("twitter:card", "summary_large_image");
    updateMeta("twitter:title", title);
    updateMeta("twitter:description", description);
    if (ogImage) updateMeta("twitter:image", ogImage);
    if (twitterHandle) updateMeta("twitter:creator", twitterHandle);
  }, [title, description, keywords, canonical, ogImage, ogUrl, twitterHandle]);

  return null; // Tidak perlu render apa-apa
};

export default SEO;
