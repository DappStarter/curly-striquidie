require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom process only venture strong riot situate comfort install enroll bottom slide'; 
let testAccounts = [
"0xa2422f38c93c5ff6f0bb4082a42bfec870f7f3932a07e884461494652626c679",
"0x663d4edc8c3251277020cf079892e26c92e1ca73ce4f6110c118bf858bc6cc04",
"0x6669b95e98e07df00f30d6f2de99ff9c566c0cc4e3862aa30d48528ab851a2b6",
"0x6661d586e7e2ce5bd42c14a2fbf2045155027ef4fa9ee885e22a3bcd1c0cc44c",
"0xa315f246f7dfc21c5beedde80d51548c17fd2c4f2b301d11dd96433fb0d36966",
"0x01840a35facda3040004fa1b0dab47d68e8280f79b6400f476be703bfbb14d67",
"0x6ab02b948f10da0a66c2bdef2fffb1b21214fbc62ad83a807e23accde39fba3a",
"0x7869664294d4eb8c885cef8a3b3e7df0085371e8778ea672be0c8a334516a903",
"0x7c7af302b5ac53e024d777246873babec37aef4c4c5a25f26dafb9da2045b5c2",
"0x690e2258928c49922e957e0d0c93c02a95ca390195492fb3e4dd1b88676f957b"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
