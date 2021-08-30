const router = require('express').Router();
const apiRoutes = require('./api');

//use the route files in the ./api/ folder
router.use('/api', apiRoutes);

//give error if end user pings undefined routes
router.use((req, res) => {
    res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;