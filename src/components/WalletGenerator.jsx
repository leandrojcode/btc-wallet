import { useState } from "react";

export default function WalletGenerator() {
  const [wallet, setWallet] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const generateWallet = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch("http://localhost:3000/api/wallet");
      const data = await response.json();

      setWallet(data);
    } catch (err) {
      setError("Erro ao gerar carteira.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <h1 className="title">HD Bitcoin Wallet Generator (Testnet)</h1>

      <button className="generate-btn" onClick={generateWallet} disabled={loading}>
        {loading ? "Generating..." : "Generate Wallet"}
      </button>

      {error && <p className="alert">{error}</p>}

      {wallet && (
        <div className="cards">
          <div className="card">
            <h2>Address</h2>
            <p className="mono">{wallet.address}</p>
          </div>

          <div className="card">
            <h2>Mnemonic</h2>
            <p className="mono">{wallet.mnemonic}</p>
          </div>

          <div className="card warning">
            <h2>Private Key (WIF)</h2>
            <p className="mono">{wallet.privateKey}</p>
            <span className="alert">⚠ Never share your private key in production.</span>
          </div>
        </div>
      )}

      <footer className="footer">
        <p>
          Bitcoin Testnet Wallet Generator · BIP39 · BIP44 (m/44'/1'/0') · For educational purposes only
        </p>
      </footer>
    </div>
  );
}
