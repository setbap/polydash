/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "PolyDash",
  titleTemplate: "%s | Business Intelligence Dashboard for Polygon",
  defaultTitle:
    "PolyDash | Business Intelligence Dashboard for Polygon ",
  description:
    "Best Business Intelligence Dashboard for Polygon by Flipside Crypto and Setbap ",
  canonical: "https://PolyDash.vercel.app/",
  openGraph: {
    url: "https://PolyDash.vercel.app/",
    title: "PolyDash",
    description:
      "Best Business Intelligence Dashboard for Polygon by Flipside Crypto and Setbap ",
    images: [
      {
        url: "https://og-image.sznm.dev/**PolyDash**.vercel.app.png?theme=dark&md=1&fontSize=125px",
        alt: "PolyDash by Flipside Crypto and Setbap",
      },
    ],
    site_name: "PolyDash",
  },
  twitter: {
    handle: "@flipsidecrypto",
    cardType: "summary_large_image",
  },
};

export default defaultSEOConfig;
