const bitcoin = require("bitcoinjs-lib");
const { ECPairFactory } = require("ecpair");
const { BIP32Factory } = require("bip32");
const ecc = require('@bitcoinerlab/secp256k1');
const ECPair = ECPairFactory(ecc);
const bip32 = BIP32Factory(ecc);
bitcoin.initEccLib(ecc);

const network = bitcoin.networks.testnet;
let keyPair = ECPair.makeRandom({ 
  network: network
});
console.log(keyPair.toWIF());
const { address } = bitcoin.payments.p2pkh({ 
  pubkey: keyPair.publicKey,
  network: network
})
console.log(address);
