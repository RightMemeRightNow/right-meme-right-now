import { Meta } from "@/constants";

const DefaultHead = () => {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport"
        content="width=device-width, initial-scale=1.0"
      />

      <title>{Meta.title}</title>
      <meta name="description"
        content={Meta.description}
      />
      <meta property="og:url"
        content={Meta.url}
      />
      <meta property="og:type"
        content="website"
      />
      <meta property="og:title"
        content={Meta.title}
      />
      <meta property="og:description"
        content={Meta.description}
      />
      <meta property="og:image"
        content={Meta.ogi}
      />
      <meta name="twitter:card"
        content="summary_large_image"
      />
      <meta property="twitter:url"
        content={Meta.url}
      />
      <meta name="twitter:title"
        content={Meta.title}
      />
      <meta name="twitter:description"
        content={Meta.description}
      />
      <meta name="twitter:image"
        content={Meta.ogi}
      />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
    </>
  );
}

export default DefaultHead;
