import { BitGo } from "./sdk";

export const bitgo = new BitGo({
	accessToken: 'v2xea8e662c195a1e935392937945395f4542e6d623771c176236523fb3380c59bf',
	env: 'test',
});

export const nitroEnterpriseId= '63dabf5a1cd73e00073f2a7c50971485'; // Nitro Test
export const enterpriseId= '61ba62d1033dc50008ac9c00dbb34c50'; // Blockchain OS
export const nitroKrsPolygonWallet= '64011e0475430b000750de99bfd7086b';
export const nitroKrsPolygonNewAddress= '0x00c74561cd37422086ef211c0a163fa817d46694';

export const enterprises = {
	walletTeam: '61ba62d1033dc50008ac9c00dbb34c50', // Blockchain OS
	nitro: '63dabf5a1cd73e00073f2a7c50971485', // NitroTest
	safePrimeNoNtilde: '643045d59413710007b7ea91ca17e259', // tss ecdsa missing ntilde
	safePrimeWithNtilde: '6430b900671cf5000606c93695e21af2', // safe prime with ntilde
};

export const wallets = {
	pendingSafePrime: '6430b5a3a319150007bd376adab3203f', // wallet in enterprise.safePrimeNoNtilde
	withSafePrime: '6430bd70ec3a1200077fd0bccc63f6f8', // walet in enterprise.safePrimeWithNtilde
};


// other enterprises
// 61e0a3e9208dc900087d72c2395dac60      Staking Enterprise E2E Test
// 63dabf5a1cd73e00073f2a7c50971485      Nitro Test
// 5ef51a6c7c74daa7004d4e23c62022b2      Dionysus Trust
// 60a7ef98424f540006099ac4da5b30fb      DrewTestEnterprise
// 641483ae71b8210007f3e4166142f5d2      Peng Trading
