# ⚡ SatGate - L402 AI Agent Gateway

SatGate is an interactive simulator for the **L402 protocol**, enabling autonomous AI agents to pay for API access using the **Bitcoin Lightning Network**.

## 🚀 How to Deploy to GitHub Pages

### 📂 Why use the "Root" (/) folder?
GitHub Pages requires an `index.html` to serve as the entry point for your site. In this project, `index.html` is located in the **project root**. 

**Important:** You do **NOT** need to point GitHub to the `/components` folder. The browser resolves all imports (like components and services) relative to the location of `index.html`. As long as you select `/(root)` in settings, the browser will find all sub-folders correctly.

### 1. Push to GitHub
Create a new repository on GitHub and run these commands in your project folder:

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
4. Under **Build and deployment > Branch**:
   - Select `main` as the branch.
   - Select `/(root)` as the folder.
5. Click **Save**.

### 💡 Technical Note
This project uses **Native ES Modules**. While the simulator works directly in modern browsers via the `importmap` in `index.html`, professional deployments often use a build tool like **Vite** to optimize the code for production. For a hackathon, the current structure is perfect for a quick, live "No-Build" demo.

## 🛠 Features
- **Interactive Pitch Deck**: A built-in presentation mode to explain L402 to stakeholders.
- **L402 Simulation**: Full visual breakdown of the 402 Payment Required handshake.
- **Gemini Intelligence**: AI-powered reasoning for payment authorization and data analysis.
- **Lightning Wallet**: A simulated wallet to track "Sats" balances and invoice payments.

---
*Built for the Agentic Web.*
