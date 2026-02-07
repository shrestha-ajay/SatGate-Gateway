# ⚡ SatGate - L402 AI Agent Gateway

SatGate is an interactive simulator for the **L402 protocol**, enabling autonomous AI agents to pay for API access using the **Bitcoin Lightning Network**.

## 🚀 How to Deploy to GitHub Pages

Because this project uses **TypeScript and React (.tsx)**, it must be "built" into browser-compatible JavaScript before it can work on GitHub Pages.

### 1. Setup on your computer
You need **Node.js** installed. Clone your repository and run:
```bash
npm install
```

### 2. Configure the Base Path
Open `vite.config.ts` and ensure the `base` property matches your repository name:
```ts
base: '/SatGate-Gateway/',
```

### 3. Deploy
Run the following command. It will build the project and push the "ready-to-run" code to a new branch called `gh-pages`:
```bash
npm run deploy
```

### 4. Enable the Site on GitHub
1. Go to your repository on **GitHub.com**.
2. Click on **Settings** > **Pages**.
3. Under **Build and deployment > Branch**, select **`gh-pages`** (it will appear after you run step 3) and the `/ (root)` folder.
4. Click **Save**.

Your site will be live at `https://shrestha-ajay.github.io/SatGate-Gateway/` shortly!

## 🛠 Features
- **Interactive Pitch Deck**: A built-in presentation mode.
- **L402 Simulation**: Full visual breakdown of the 402 handshake.
- **Gemini Intelligence**: AI reasoning for payment authorization.
- **Lightning Wallet**: Simulated wallet for tracking Sats.

---
*Built for the Agentic Web.*
