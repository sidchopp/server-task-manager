const notFound = (req, res) => {
  res.status(404).send(`
  <h1>404</h1>
  <h3> You have landed in NO MAN's Land!!</h3>
  <p> The page you are looking for does not exist.</p>
  `)
};

module.exports = notFound;