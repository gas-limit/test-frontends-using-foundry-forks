import React from 'react';
import './App.css';
import BlockchainInfo from './BlockchainInfo';

function App() {
  // Replace 'yourAccountAddress' with an actual account address from your local blockchain
  const account = 'yourAccountAddress';

  return (
    <div className="App">
      <header className="App-header">
        <BlockchainInfo account={account} />
      </header>
    </div>
  );
}

export default App;
