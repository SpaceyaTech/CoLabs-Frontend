import { useEffect } from "react";

interface HelmetProps {
  title?: string;
  description?: string;
  keywords?: string;
}

const Helmet: React.FC<HelmetProps> = ({ title, description, keywords }) => {
  useEffect(() => {
    // Set document title if provided
    if (title) {
      document.title = title;
    }

    // Set meta description if provided
    if (description) {
      let metaDescription = document.querySelector('meta[name="description"]');

      if (!metaDescription) {
        metaDescription = document.createElement("meta");

        (metaDescription as HTMLMetaElement).name = "description";

        document.head.appendChild(metaDescription);
      }
      (metaDescription as HTMLMetaElement).content = description;
    }

    // Set meta keywords if provided
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');

      if (!metaKeywords) {
        metaKeywords = document.createElement("meta");

        (metaKeywords as HTMLMetaElement).name = "keywords";

        document.head.appendChild(metaKeywords);
      }
      (metaKeywords as HTMLMetaElement).content = keywords;
    }
  }, [title, description, keywords]);

  return null; // This component does not render any visible UI
};

export { Helmet };
