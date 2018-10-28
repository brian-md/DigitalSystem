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
}) => {
  const isSubPage = pageTitle && !parents && location.pathname !== '/';

  let schema = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url: canonical,
      name: pageTitle || siteTitle,
      alternateName: pageTitleFull,
    },
  ];

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
        item: { '@id': siteUrl + parent.slug },
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

  return schema;
};
