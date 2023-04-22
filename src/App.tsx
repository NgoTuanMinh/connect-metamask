import React from 'react';
import './App.css';
import ChooseCurrency from './components/ChooseCurrency';
import ConnectWallet from './components/ConnectWallet';
import EmptyListNFT from './components/EmptyListNFT';
import NftList from './components/NftList';
import WalletCard from './components/WalletCard';
// import WalletCard from './components/WalletCard';
import WalletCardEthers from './components/WalletCardEthers';

function App() {
  return (
    <div className="App">
      <NftList/>
      {/* <WalletCardEthers/> */}
    </div>
  );
}

export default App;
