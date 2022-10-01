const router = require('express').Router();
const {getMerkleProof} = require('../Controller/mapController');


router.route('/getMerkleProof').get(getMerkleProof);

module.exports = router;