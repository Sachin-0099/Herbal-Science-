import { Helmet } from 'react-helmet-async';

const SEOHelmet = ({ title, description }) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={window.location.href} />
    
    {/* 👇 Structured data for your organization */}
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Herbal Science",
        "url": "https://herbalscience.in",
        "logo": "https://herbalscience.in/Logo.png",
        "description": "Herbal Science provides pure, organic herbal products for wellness and skincare.",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-9599896554",
          "contactType": "Customer Service"
        }
      })}
    </script>
  </Helmet>
);

export default SEOHelmet;
