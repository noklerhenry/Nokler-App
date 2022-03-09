const { Router } = require("express");
const checkout = require('./checkout');
const filters = require('./fitlers');

const router = Router();

router.use('/filters', filters);
router.use('/checkout',checkout);

module.exports = router;
