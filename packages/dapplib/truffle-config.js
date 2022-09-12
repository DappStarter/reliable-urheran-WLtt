require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include clock bottom security chat crater remind purity half clog obscure talk'; 
let testAccounts = [
"0xbdcf752fd029b519825151f4dc132ece86ad8785188b0d6a723800729a2500b6",
"0x61221602942b4f8ff2cc93e3917c9e400b405b98eec0e5c66f97be544464196f",
"0x51ae88b8e26c1171f8d68f9066c02af28cf1d2891240c87cab3b6a3636fca5fb",
"0x7c8891f2d4af7e15171f4dcd0063be2e2da8bc2aebccdc61aa3aae2d7edb3433",
"0xf1636a0a819ac5398b7b296f4d9cd0b19c2aa44337e754e47b7098bd1915aaee",
"0x6190e2d2e1b66bff8c6861acf855a0d33a0f6ec204ef36d4e7b8af693d885db5",
"0xa1c7b3eba5a121078d2ba1f4f8483150072fe3865a53c9ec2d065476c207b58d",
"0xff18b5150c579a9b7eac38ad044ddb4a2b11cc1314e94f2e4da3328587e10c39",
"0x2625365d797a6dca5039e8ae7700e0fab0508c59ae38583423127f9c3249ea1a",
"0x28511cd250d2f0cfd5d85ebd24a5c4b843f8fb30f614b8e6d4798e9b0f373bd7"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


