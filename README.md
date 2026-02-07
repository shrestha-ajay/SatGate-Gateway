# ⚡ SatGate - L402 AI Agent Gateway

SatGate is an interactive simulator for the **L402 protocol**, enabling autonomous AI agents to pay for API access using the **Bitcoin Lightning Network**.

## 🚀 How to Deploy to GitHub Pages

Since this project uses modern ES Modules and a flat file structure, it is perfectly suited for GitHub Pages.

### 1. Push to GitHub
If you haven't already, create a new repository on GitHub and run these commands in your project folder:

```bash
git init
git add .
git commit -m "Initial commit: SatGate L402 Simulator"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

### 2. Enable GitHub Pages
1. Go to your repository on **GitHub.com**.
2. Click on the **Settings** tab.
3. In the left sidebar, click on **Pages**.
4. Under **Build and deployment > Branch**, select `main` and the `/ (root)` folder.
5. Click **Save**.

Your site will be live at `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/` within a few minutes!

## 🛠 Features
- **Interactive Pitch Deck**: A built-in presentation mode to explain L402 to stakeholders.
- **L402 Simulation**: Full visual breakdown of the 402 Payment Required handshake.
- **Gemini Intelligence**: AI-powered reasoning for payment authorization and data analysis.
- **Lightning Wallet**: A simulated wallet to track "Sats" balances and invoice payments.

## 🔑 Note on API Keys
This application uses the **Gemini API**. In this specific environment (AI Studio), the API key is handled automatically. If you are running this elsewhere or on a public GitHub Pages link, you will need to ensure the `process.env.API_KEY` is accessible or modify `services/geminiService.ts` to handle your key securely.

---
*Built for the Agentic Web.*
