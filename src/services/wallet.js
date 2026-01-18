import * as ecc from 'tiny-secp256k1'
import BIP32Factory from 'bip32'
import * as bitcoin from 'bitcoinjs-lib'
import bip39 from 'bip39'

bitcoin.initEccLib(ecc)
const bip32 = BIP32Factory(ecc)

export async function generateWallet() {
    const mnemonic = bip39.generateMnemonic()
    const seed = await bip39.mnemonicToSeed(mnemonic)

    const root = bip32.fromSeed(seed, bitcoin.networks.testnet)
    const child = root.derivePath("m/44'/1'/0'/0/0")

    const { address } = bitcoin.payments.p2wpkh({
        pubkey: child.publicKey,
        network: bitcoin.networks.testnet
    })


    return {
        mnemonic,
        privateKey: child.toWIF(),
        publicKey: child.publicKey.toString('hex'),
        address
    }
}
