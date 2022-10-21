const router = require('express').Router();
const {getMerkleProof} = require('../Controller/mapController');


router.route('/getMerkleProof').post(getMerkleProof);

module.exports = router;