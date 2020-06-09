const gatsby = jest.requireActual("gatsby")

module.exports = {
  ...gatsby,
  graphql: jest.fn(),
  StaticQuery: jest.fn(({ render }) =>
    render({
      site: {
        siteMetadata: {
          title: `title`,
          description: 'description',
          author: 'author'
        },
      },
    })
  ),
  useStaticQuery: jest.fn(() => ({
    site: {
      siteMetadata: {
        title: `title`,
        description: 'description',
        author: 'author'
      },
    }
  })),
}