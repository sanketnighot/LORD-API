const _ = require('lodash') 
const axios = require('axios');
require('dotenv').config();
const Address = require('../Address.json');
const { MerkleTree } = require("merkletreejs");
const keccak256 = require("keccak256");

module.exports.getMerkleProof = async (req, res) => {
    checkAddress = req.query.address
    let leaves = Address.map(addr => keccak256(addr))
    let merkleTree = new MerkleTree(leaves, keccak256, {sortPairs: true})
    const rootHash = merkleTree.getHexRoot()
    let prove = checkAddress // The input
    let hashedAddress = keccak256(prove)
    let proof = merkleTree.getHexProof(hashedAddress)
    if (Address.includes(checkAddress)) {
        res.send(proof);
    } else {
        res.send("Invalid Address")
    }
    
}