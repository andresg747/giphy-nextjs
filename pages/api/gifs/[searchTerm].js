// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const giphy = require('giphy-api')('8gUn6oZ9W1SNqLJHTGJ0yz2C3jkTh85K');

export default async function handler(req, res) {
  const { searchTerm } = req.query;
  const { data } = await giphy.search({
    q: searchTerm,
    limit: 5,
  });

  const result = data.map(item => ({
    title: item.title,
    url: item.images.fixed_height.url
  }));


  res.send(result);
}
