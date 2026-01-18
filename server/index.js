const express = require("express");
const cors = require("cors");
const bitcoin = require("bitcoinjs-lib");
const bip39 = require("bip39");
const BIP32Factory = require("bip32").default;
const ecc = require("tiny-secp256k1");

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
  console.log("🚀 Server rodando em http://localhost:3000");
});

