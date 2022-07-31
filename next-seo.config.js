/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "PolygonDash",
  titleTemplate: "%s | Business Intelligence Dashboard for Polygon",
  defaultTitle:
    "PolygonDash | Business Intelligence Dashboard for Polygon ",
  description:
    "Best Business Intelligence Dashboard for Polygon by Flipside Crypto and Setbap ",
  canonical: "https://PolygonDash.vercel.app/",
  openGraph: {
    url: "https://PolygonDash.vercel.app/",
    title: "PolygonDash",
    description:
      "Best Business Intelligence Dashboard for Polygon by Flipside Crypto and Setbap ",
    images: [
      {
        url: "https://og-image.sznm.dev/**PolygonDash**.vercel.app.png?theme=dark&md=1&fontSize=125px",
        alt: "PolygonDash by Flipside Crypto and Setbap",
      },
    ],
    site_name: "PolygonDash",
  },
  twitter: {
    handle: "@flipsidecrypto",
    cardType: "summary_large_image",
  },
};

export default defaultSEOConfig;
