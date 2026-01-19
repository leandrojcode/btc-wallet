# BTC Wallet Generator (Testnet)

A full-stack Bitcoin HD Wallet Generator built with React, Node.js and modern cryptographic standards (BIP39, BIP32, BIP44).  
This project generates a deterministic Bitcoin Testnet wallet including mnemonic phrase, address and private key, for educational and development purposes.

### Live Demo:  
Frontend: https://leandrojcode.github.io/btc-wallet  
Backend API: https://btc-wallet-y251.onrender.com/api/wallet

ACCESS HERE: https://leandrojcode.github.io/btc-wallet/

---

## Features

- Generate Bitcoin HD wallets (Testnet)
- BIP39 mnemonic generation
- BIP44 derivation path: `m/44'/1'/0'/0/0`
- Secure key derivation using `tiny-secp256k1`
- React + Vite frontend
- Node.js + Express backend
- Deployed on GitHub Pages (frontend) and Render (backend)

---

## Tech Stack

### Frontend
- React
- Vite
- JavaScript (ESM)
- GitHub Pages

### Backend
- Node.js
- Express
- bitcoinjs-lib
- bip39
- bip32
- tiny-secp256k1
- Render Cloud

---

## API Endpoint

### GET /api/wallet


Response example:

```json
{
  "mnemonic": "mango love amateur beyond paddle become shrug speed inspire know wool confirm",
  "address": "n43Tp1u2zE1gjUFTQNVDK6GjDFCHajTT8h",
  "privateKey": "cNR3Usdv53XcABeqK9CRGCvyYYnUmmJf1ChLNtntDKnVVuDJnhNU"
}
```
---

## Security Disclaimer

This application is for educational and development purposes only.
Do NOT use the generated private keys in production environments or to store real funds.

---

Author

Leandro Jesus <br>
Fullstack Developer & Web3 Developer

GitHub: https://github.com/leandrojcode <br>
LinkedIn: https://www.linkedin.com/in/leandrofjesus/

---
License

MIT License
