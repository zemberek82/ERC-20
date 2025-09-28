# MyToken – ERC20 Token on Ethereum Base Network

This project demonstrates a simple ERC20 token deployed on the Base network (an Ethereum Layer 2 chain).

## Features

- ERC20-compliant token using OpenZeppelin contracts
- Deployment scripts using Hardhat

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Configure your `.env` file with your wallet's private key:
   ```
   PRIVATE_KEY=your_private_key_here
   ```

3. Deploy to Base network (adjust network config in `hardhat.config.js` if needed):
   ```bash
   npm run deploy
   ```

## License

MIT
