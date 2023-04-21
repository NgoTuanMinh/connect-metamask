import React from 'react';
import './App.css';
// import WalletCard from './components/WalletCard';
import WalletCardEthers from './components/WalletCardEthers';

function App() {
  return (
    <div className="App">
      {/* <WalletCard/> */}
      <WalletCardEthers/>
    </div>
  );
}

export default App;
