import { BitGo } from "./sdk";

export const bitgo = new BitGo({
	accessToken: 'v2xfd849ee7521bb15130cbbe49e7a2d9a7aff2c4dc4e5b3161958f9ea1926f23cc',
	env: 'staging',
});

export const enterprises = {
	walletTeam: '63f5114dbd9c4a00075b1c7792966b77', // Wallets Team Staging Enterprise
	safePrimeNoNtilde: '643081c7b1c0ed00076d08a9d57ebf4e', // 'same prime no niltde', with useEnterpriseEcdsaTssChallenge feature flag
	safePrimeWithNtilde: '6430ba0de6c00a00062e857772a54fe5',
};

export const wallets = {
	pendingSafePrime: '6430a48ac535690007b32af9ae985862', // wallet in enterprise.safePrimeNoNtilde
	withSafePrime: '6430c071a08eb80007afeee4cda30374', // wallet in enterprise.safePrimeWithNtilde
};

// other enterprises
// '641233efc0a28400073f3949c9c24ecf'      'ta-book-tester-1'
// '641234486825ee0007f835443c692ad2'      'ta-book-tester-2'

