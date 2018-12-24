// This does not support nested pages (level 2 and up)
// If you're working with deeply nested pages, remove this or rework it.

export default ({
  location,
  canonical,
  siteUrl,
  pageTitle,
  siteTitle,
  pageTitleFull,
  parents,
  services,
}) => {
  const isSubPage = pageTitle && !parents && location.pathname !== '/';

  let schema = [];

  // Website schema
  schema.push({
    '@context': 'http://schema.org',
    '@type': 'WebSite',
    url: canonical,
    name: pageTitle || siteTitle,
    alternateName: pageTitleFull,
  });
  // Breadcrumbs for 1st level subpage
  if (isSubPage) {
    schema.push({
      '@context': 'http://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          item: {
            '@id': siteUrl,
            name: siteTitle,
          },
        },
        {
          '@type': 'ListItem',
          position: 2,
          item: {
            '@id': canonical,
            name: pageTitle,
          },
        },
      ],
    });
  }

  // Breadcrumbs when parents are provided by Layout component
  if (parents) {
    let itemListElement = [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@id': siteUrl,
          name: siteTitle,
        },
      },
    ].concat(
      parents.map((parent, i) => ({
        '@type': 'ListItem',
        position: i + 2,
        item: { '@id': siteUrl + parent.slug, name: parent.name },
      }))
    );
    itemListElement.push({
      '@type': 'ListItem',
      position: itemListElement.length + 1,
      item: {
        '@id': canonical,
        name: pageTitle,
      },
    });

    schema.push({
      '@context': 'http://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: itemListElement,
    });
  }
  // Local business schema
  schema.push({
    '@context': 'http://schema.org/',
    '@type': 'LocalBusiness',
    openingHours: 'Mo-Fr 8:00-17:00',
    priceRange: '$$$',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'United States',
      addressLocality: 'Chicago',
      addressRegion: 'IL',
      postalCode: '60647',
      streetAddress: '2545 W Diversey Pkwy Suite 205',
      email: 'info@digitalsystemsav.com',
      telephone: '888-90-Digital',
    },
    alternateName: 'Digital Systems',
    image: [
      `${siteUrl}/logo.png`,
      {
        '@type': 'ImageObject',
        width: 3608,
        url: `${siteUrl}/logo.png`,
        height: 1458,
        '@id': `${siteUrl}/logo.png`,
      },
    ],
    description:
      'We design, install, and service audio-video and other technology systems for homes and businesses in the Chicagoland area.',
    name: 'Digital Systems & Integration',
  });

  /*
   Service schema.  To use the service schema, send a "services" prop, containing an array 
    of objects, to the Layout on any page with the following structure:
   {
     name,
     description,
     image: {
       url, 
       width, 
       height
     }
   }
   */

  if (services) {
    schema.push(
      ...services.map(service => ({
        '@context': 'http://schema.org',
        '@type': 'Service',
        areaServed: {
          '@type': 'City',
          name: 'Chicago',
          '@id': 'https://en.wikipedia.org/wiki/Chicago',
        },
        provider: {
          '@type': 'Organization',
          name: 'Digital Systems & Integration',
          '@id': siteUrl,
        },
        description: service.description,
        image:
          service.image && typeof service.image == 'object'
            ? [
                `${siteUrl}${service.image.url}`,
                {
                  '@type': 'ImageObject',
                  width: service.image.width,
                  url: `${siteUrl}${service.image.url}`,
                  height: service.image.height,
                  '@id': `${siteUrl}${service.image.url}`,
                },
              ]
            : undefined,
        name: service.name,
        url: canonical,
        '@id': canonical,
      }))
    );
  }

  return schema;
};

export const homePageSchema = () => {
  return {};
};
