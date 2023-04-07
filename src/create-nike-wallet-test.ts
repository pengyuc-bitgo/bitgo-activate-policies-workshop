import { BitGo, WalletWithKeychains } from "../../BitGoJS/modules/bitgo";
import * as testEnv from './env/envTest';
const coin = 'tpolygon';
const env = testEnv;

const bitgoCoin = env.bitgo.coin(coin);
const walletPassword = '123456';

async function createWallet(): Promise<string> {
	console.log("creating wallet, this might take a few seconds....");

	const wallet = await bitgoCoin
		.wallets()
		.generateWallet({
			label:  "tss polygon trust as krs",
			passphrase: walletPassword,
			multisigType: 'tss',
			backupProvider: 'BitGoTrustAsKrs',
			enterprise: env.nitroEnterpriseId,
			disableTransactionNotifications: "true",
			disableKRSEmail: true,
			walletVersion: 3,
			passcodeEncryptionCode: "my random string"
		});
	console.log('created wallet id: ' + wallet.wallet.id());
	return wallet.wallet.id();
}

async function createAddress(walletId: string): Promise<string> {
	const wallet = await bitgoCoin
		.wallets()
		.get({id : walletId});
	console.log("wallet id: " + wallet.id());
	const address = await wallet.createAddress();
	console.log('created address: ' + address.address);
	return address.address;
}

async function sendTx(fromWallet: string, toAddress: string) {
	await env.bitgo.unlock({ otp: "000000" });
	const wallet = await bitgoCoin
		.wallets()
		.get({id : fromWallet});

	const tx = await wallet.send({
		address: toAddress,
		amount: "1000000000000000",
		walletPassphrase: walletPassword,
		type: 'transfer'
	});
	console.log(tx);
}

async function main() {
	await env.bitgo.authenticateWithAccessToken({
		accessToken: env.accessToken
	});

	//const wallet = await createWallet();
	//const walletId = wallet.wallet.id();

	// const walletId = env.walletNitroKrsId;
	//
	//const newAddress = await createAddress(walletId);
	// // const newAddressStr = newAddress.address;
	// const newAddressStr = env.newAddress;
	// const fromWalletId = '64275654435d8e0007fe23d439c2ec72';
	// const toAddress = '0x0c06b4cc7e22bfef25e9f67c14ab21423b64ed19';
	const fromWalletId = '64011e0475430b000750de99bfd7086b';
	const toAddress = '0x012f4d4d2fd3c21683ceb33cd2318bab5d96c588';

	console.log(`wallet id: ${fromWalletId}  address: ${toAddress}`)
	await sendTx(fromWalletId, toAddress);

}
main().catch((e) => console.error(e));
