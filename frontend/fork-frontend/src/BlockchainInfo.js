import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';

const BlockchainInfo = () => {
  const [account, setAccount] = useState('');
  const [usdcBalance, setUsdcBalance] = useState('');

  useEffect(() => {
    const connectWallet = async () => {
      if (window.ethereum) {
        try {
          // Request account access
          const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
          setAccount(accounts[0]);
        } catch (error) {
          console.error("Error connecting to MetaMask:", error);
        }
      } else {
        console.log('MetaMask is not installed!');
      }
    };

    connectWallet();
  }, []);

  useEffect(() => {
    const fetchUsdcBalance = async () => {
      if (!account) return;

      // Connect to the local blockchain
      const provider = new ethers.providers.Web3Provider(window.ethereum);

      // USDC Contract Address (Replace with your actual USDC contract address)
      const usdcAddress = '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48';
      const usdcAbi = ["function balanceOf(address owner) view returns (uint256)"];
      
      // Create an instance of the USDC contract
      const usdcContract = new ethers.Contract(usdcAddress, usdcAbi, provider);

      // Fetch the USDC balance
      const balance = await usdcContract.balanceOf(account);
      const balanceInUsdc = ethers.utils.formatUnits(balance, 6); // USDC has 6 decimal places

      setUsdcBalance(balanceInUsdc);
    };

    fetchUsdcBalance();
  }, [account]);

  return (
    <div>
      <h3>USDC Balance</h3>
      {account ? (
        <>
          <p>Account: {account}</p>
          <p>USDC Balance: {usdcBalance}</p>
        </>
      ) : (
        <p>Please connect your MetaMask wallet.</p>
      )}
    </div>
  );
};

export default BlockchainInfo;
