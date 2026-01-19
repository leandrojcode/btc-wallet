import express from "express";
import cors from "cors";
import * as bitcoin from "bitcoinjs-lib";
import * as bip39 from "bip39";
import BIP32Factory from "bip32";
import * as ecc from "tiny-secp256k1";

const app = express();
app.use(cors());
app.use(express.json());

const bip32 = BIP32Factory(ecc);
const network = bitcoin.networks.testnet;

app.get("/api/wallet", async (req, res) => {
  try {
    const mnemonic = bip39.generateMnemonic();
    const seed = await bip39.mnemonicToSeed(mnemonic);
    const root = bip32.fromSeed(seed, network);
    const child = root.derivePath("m/44'/1'/0'/0/0");

    const { address } = bitcoin.payments.p2pkh({
      pubkey: child.publicKey,
      network,
    });

    res.json({
      mnemonic,
      address,
      privateKey: child.toWIF(),
    });
  } catch (error) {
    console.error("Erro ao gerar wallet:", error);
    res.status(500).json({ error: "Erro ao gerar carteira" });
  }
});

app.listen(3000, () => {
  console.log("🚀 Server rodando na porta 3000");
});
