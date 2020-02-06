const router = require('express').Router();
const searchRoutes = require('./searchRoutes');

router.use('/users', searchRoutes);

module.exports = router;
