const router = require('express').Router();
const getSearchResults = require('./searchController');

router.get('/', async (req, res) => {
  console.log(req.query.q);
  const searchResults = await getSearchResults(req.query.q);
  res.send(searchResults);
});

module.exports = router;
